import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';
import { FilterBar } from '../components/FilterBar';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Loader2, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { supabase, Course, isValidValue } from '../lib/supabase';
import { CATEGORY_HIERARCHY, DEGREE_MAPPING } from '../constants/categories';

const ITEMS_PER_PAGE = 48;

export const CourseArchive = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [courses, setCourses] = useState<Course[]>([]);
  const [institutePictures, setInstitutePictures] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter States
  const [selectedMainCategory, setSelectedMainCategory] = useState(searchParams.get('mainCategory') || 'Alle');
  const [selectedSubCategory, setSelectedSubCategory] = useState(searchParams.get('subCategory') || 'Alle');
  const [selectedDegree, setSelectedDegree] = useState(searchParams.get('degree') || 'Alle');
  const [selectedStudyForm, setSelectedStudyForm] = useState(searchParams.get('studyForm') || 'Alle');
  const [selectedLocation, setSelectedLocation] = useState(searchParams.get('location') || 'Alle');
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  
  // Random Sort Seed
  const [randomSeed] = useState(() => Math.random());

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
          throw new Error('Supabase ist nicht konfiguriert. Bitte hinterlegen Sie VITE_SUPABASE_URL und VITE_SUPABASE_ANON_KEY in den Einstellungen.');
        }

        // Fetch Courses
        const { data: coursesData, error: coursesError } = await supabase
          .from('Studiengänge')
          .select('*');
        
        if (coursesError) throw coursesError;
        
        // Fetch Institutes for pictures
        const { data: instData, error: instError } = await supabase
          .from('Institute')
          .select('name, picture_url');
        
        if (instError) throw instError;

        const picMap: Record<string, string> = {};
        instData?.forEach(inst => {
          if (isValidValue(inst.picture_url)) {
            picMap[inst.name] = inst.picture_url;
          }
        });
        setInstitutePictures(picMap);
        
        if (coursesData && coursesData.length > 0) {
          setCourses(coursesData);
        } else {
          console.warn('Keine Daten in Tabelle "Studiengänge" gefunden.');
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Dynamic Filter Options
  const studyForms = useMemo(() => {
    const forms = new Set<string>();
    courses.forEach(c => {
      if (isValidValue(c.studienform)) {
        c.studienform.split(',').forEach(f => forms.add(f.trim()));
      }
    });
    return Array.from(forms).sort();
  }, [courses]);

  const structuredLocations = useMemo(() => {
    const hasOnline = courses.some(c => 
      isValidValue(c.standort) && c.standort.toLowerCase().includes('online')
    );
    return hasOnline ? ['Online'] : [];
  }, [courses]);

  // Filtering Logic
  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      // Search Term
      const matchesSearch =
        searchTerm === '' ||
        (isValidValue(course.titel) && course.titel.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (isValidValue(course.beschreibung_generiert) && course.beschreibung_generiert.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (isValidValue(course.kategorie) && course.kategorie.toLowerCase().includes(searchTerm.toLowerCase()));

      // Main Category & Sub Category
      let matchesCategory = true;
      if (selectedMainCategory !== 'Alle') {
        const subCats = CATEGORY_HIERARCHY[selectedMainCategory] || [];
        if (selectedSubCategory !== 'Alle') {
          matchesCategory = isValidValue(course.kategorie) && course.kategorie === selectedSubCategory;
        } else {
          // If only main category selected, match any subcategory within it
          matchesCategory = isValidValue(course.kategorie) && (subCats.includes(course.kategorie) || course.kategorie === selectedMainCategory);
        }
      }

      // Degree Filter
      let matchesDegree = true;
      if (selectedDegree !== 'Alle') {
        const keywords = DEGREE_MAPPING[selectedDegree] || [];
        const abschlussLower = (isValidValue(course.abschluss) ? course.abschluss : '').toLowerCase();
        
        matchesDegree = keywords.some(kw => {
          if (selectedDegree === 'Zertifikat' || selectedDegree === 'Akademie') {
            return abschlussLower.includes(kw.toLowerCase());
          }
          return abschlussLower.includes(kw.toLowerCase());
        });
      }

      // Study Form Filter (Comma separated)
      let matchesStudyForm = true;
      if (selectedStudyForm !== 'Alle') {
        const forms = (isValidValue(course.studienform) ? course.studienform : '').split(',').map(f => f.trim());
        matchesStudyForm = forms.includes(selectedStudyForm);
      }

      // Location Filter
      let matchesLocation = true;
      if (selectedLocation !== 'Alle') {
        if (selectedLocation === 'Online') {
          matchesLocation = isValidValue(course.standort) && course.standort.toLowerCase().includes('online');
        } else {
          const locs = (isValidValue(course.standort) ? course.standort : '').split(',').map(l => l.trim());
          matchesLocation = locs.includes(selectedLocation);
        }
      }

      return matchesSearch && matchesCategory && matchesDegree && matchesStudyForm && matchesLocation;
    });

    // Random Sort
    // We use the fixed randomSeed to keep the sort stable during pagination
    return result.sort((a, b) => {
      const urlA = a.url || '';
      const urlB = b.url || '';
      const hashA = Math.sin(urlA.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + randomSeed);
      const hashB = Math.sin(urlB.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) + randomSeed);
      return hashA - hashB;
    });
  }, [courses, searchTerm, selectedMainCategory, selectedSubCategory, selectedDegree, selectedStudyForm, selectedLocation, randomSeed]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedMainCategory, selectedSubCategory, selectedDegree, selectedStudyForm, selectedLocation]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const showMax = 3; // Number of pages to show around current page

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push('...');
      
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Entdecke deine Zukunft</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Studien & <span className="text-primary">Kurse</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Wählen Sie aus einer Vielzahl von erstklassigen Bildungsangeboten in ganz Österreich.
          </motion.p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedMainCategory={selectedMainCategory}
          setSelectedMainCategory={setSelectedMainCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedDegree={selectedDegree}
          setSelectedDegree={setSelectedDegree}
          selectedStudyForm={selectedStudyForm}
          setSelectedStudyForm={setSelectedStudyForm}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          studyForms={studyForms}
          locations={structuredLocations}
        />

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100 max-w-2xl mx-auto px-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">Verbindungsfehler</h3>
            <p className="text-red-700 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
            >
              Erneut versuchen
            </button>
          </div>
        ) : paginatedCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <AnimatePresence mode="popLayout">
                {paginatedCourses.map((course, index) => (
                  <motion.div
                    key={course.url}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CourseCard 
                      course={course} 
                      institutePicture={institutePictures[course.institut]}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-50 transition-all font-bold text-sm"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Vorherige
                  </button>
                  
                  <div className="hidden md:flex items-center space-x-1">
                    {getPageNumbers().map((page, i) => (
                      page === '...' ? (
                        <span key={`dots-${i}`} className="w-10 text-center text-gray-400">...</span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => handlePageChange(Number(page))}
                          className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                            currentPage === page
                              ? 'bg-primary text-white shadow-lg shadow-primary/20'
                              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}
                  </div>

                  {/* Mobile Page Indicator */}
                  <div className="md:hidden flex items-center px-4 font-bold text-sm text-gray-600">
                    Seite {currentPage} von {totalPages}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 disabled:opacity-50 hover:bg-gray-50 transition-all font-bold text-sm"
                  >
                    Nächste
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">Keine Kurse gefunden, die Ihren Kriterien entsprechen.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedMainCategory('Alle');
                setSelectedSubCategory('Alle');
                setSelectedDegree('Alle');
                setSelectedStudyForm('Alle');
                setSelectedLocation('Alle');
                setSearchParams({});
              }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Alle Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
