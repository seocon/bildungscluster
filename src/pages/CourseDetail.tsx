import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Building2, Bookmark, Info, ArrowLeft, ArrowRight, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase, Course, Institute, isValidValue, getSlug, createCourseSlug } from '../lib/supabase';
import { CourseCard } from '../components/CourseCard';
import { CATEGORY_HIERARCHY } from '../constants/categories';

export const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [similarCourses, setSimilarCourses] = useState<Course[]>([]);
  const [similarInstPics, setSimilarInstPics] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
          throw new Error('Supabase ist nicht konfiguriert.');
        }

        // 1. Try exact match on URL first (legacy/direct)
        let { data: courseData, error: courseError } = await supabase
          .from('Studiengänge')
          .select('*')
          .eq('url', slug)
          .maybeSingle();
        
        // 2. If not found, search in database then match with createCourseSlug
        if (!courseData && slug) {
          // Optimization: Search for courses where titel is part of the slug
          // We split by dash and take the first few parts as a hint
          const slugParts = slug.split('-');
          const titleHint = slugParts.slice(0, 2).join('%');
          
          const { data: searchData, error: searchError } = await supabase
            .from('Studiengänge')
            .select('*')
            .ilike('titel', `%${titleHint}%`);
          
          if (searchError) throw searchError;
          
          if (searchData && searchData.length > 0) {
            courseData = searchData.find(d => createCourseSlug(d) === slug) || null;
          }

          // 3. Fallback: Check last part of URL (old logic)
          if (!courseData) {
            const { data: fallbackData } = await supabase
              .from('Studiengänge')
              .select('*')
              .ilike('url', `%${slug}%`);
            
            if (fallbackData && fallbackData.length > 0) {
              courseData = fallbackData.find(d => {
                const urlParts = d.url.split('/').filter(Boolean);
                const lastPart = urlParts[urlParts.length - 1];
                return lastPart && lastPart.toLowerCase() === slug.toLowerCase();
              }) || fallbackData[0];
            }
          }
        }
        
        if (courseError) throw courseError;
        
        if (courseData) {
          setCourse(courseData);
          
          // Fetch Institute by name
          const { data: instData } = await supabase
            .from('Institute')
            .select('*')
            .eq('name', courseData.institut)
            .maybeSingle();
          if (instData) setInstitute(instData);

          // Fetch similar courses
          const { data: similarData } = await supabase
            .from('Studiengänge')
            .select('*')
            .eq('kategorie', courseData.kategorie)
            .neq('url', courseData.url)
            .limit(2);
          
          if (similarData) {
            setSimilarCourses(similarData);
            
            // Fetch pictures for similar courses' institutes
            const instNames = Array.from(new Set(similarData.map(c => c.institut)));
            if (instNames.length > 0) {
              const { data: picsData } = await supabase
                .from('Institute')
                .select('name, picture_url')
                .in('name', instNames);
              
              const picMap: Record<string, string> = {};
              picsData?.forEach(p => {
                if (isValidValue(p.picture_url)) {
                  picMap[p.name] = p.picture_url;
                }
              });
              setSimilarInstPics(picMap);
            }
          }
        } else {
          throw new Error('Kurs nicht gefunden.');
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.');
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center py-20 bg-white rounded-3xl border border-red-100 max-w-2xl mx-auto px-8 shadow-xl">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-red-900 mb-2">Fehler beim Laden</h3>
          <p className="text-red-700 mb-6">{error || 'Kurs konnte nicht gefunden werden.'}</p>
          <Link
            to="/studien-kurse"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition-colors"
          >
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={institute && isValidValue(institute.picture_url) ? institute.picture_url : '/platzhalterbild-institut.jpg'}
          alt={course.titel}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase"
            >
              {course.titel}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-12"
            >
              {isValidValue(course.institut) && (
                institute ? (
                  <Link 
                    to={`/institute/${getSlug(institute.url)}`}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="mt-1">
                      <Building2 className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Institut</div>
                      <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{course.institut}</div>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Building2 className="w-6 h-6 text-white/50" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Institut</div>
                      <div className="text-sm font-bold text-white">{course.institut}</div>
                    </div>
                  </div>
                )
              )}
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <Bookmark className="w-6 h-6 text-white/50" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Kategorie</div>
                  <div className="flex flex-wrap gap-2">
                    {(course.kategorie || '').split(',').map((cat, idx) => {
                      const trimmedCat = cat.trim();
                      if (!trimmedCat) return null;
                      
                      // Find main category if it exists in hierarchy
                      let mainCat = 'Alle';
                      Object.entries(CATEGORY_HIERARCHY).forEach(([main, subs]) => {
                        if (main === trimmedCat || subs.includes(trimmedCat)) {
                          mainCat = main;
                        }
                      });

                      const isMainCat = Object.keys(CATEGORY_HIERARCHY).includes(trimmedCat);
                      const queryParams = isMainCat 
                        ? `mainCategory=${encodeURIComponent(trimmedCat)}`
                        : `mainCategory=${encodeURIComponent(mainCat)}&subCategory=${encodeURIComponent(trimmedCat)}`;

                      return (
                        <React.Fragment key={idx}>
                          <Link 
                            to={`/studien-kurse?${queryParams}`}
                            className="text-sm font-bold text-white hover:text-primary transition-colors hover:underline underline-offset-4"
                          >
                            {trimmedCat}
                          </Link>
                          {idx < (course.kategorie || '').split(',').length - 1 && (
                            <span className="text-white/50 font-bold mx-1">,</span>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <section className="mb-12 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex border-b border-gray-100">
                <button className="px-8 py-4 text-sm font-bold text-primary border-b-2 border-primary">Beschreibung</button>
              </div>
              <div className="p-8 md:p-12">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {isValidValue(course.beschreibung_generiert) ? course.beschreibung_generiert : 'Keine Beschreibung verfügbar.'}
                </p>
              </div>
            </section>

            {/* Ähnliche Kurse Section */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-8">Ähnliche Kurse</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarCourses.length > 0 ? (
                  similarCourses.map((c) => (
                    <CourseCard 
                      key={c.url} 
                      course={c} 
                      institutePicture={similarInstPics[c.institut]}
                    />
                  ))
                ) : (
                  <div className="text-gray-400 text-sm italic">Keine ähnlichen Kurse gefunden.</div>
                )}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Details Table */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50">
                  <h3 className="text-lg font-bold text-gray-900">Details</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { label: 'Abschluss', value: course.abschluss },
                    { label: 'Regelstudienzeit', value: course.regelstudienzeit },
                    { label: 'ECTS', value: course.ects },
                    { label: 'Studienform', value: course.studienform },
                    { label: 'Standort', value: course.standort },
                    { label: 'Sprache', value: course.sprache },
                    { label: 'Studienbeginn', value: course.studienbeginn },
                    { label: 'Plätze', value: course.plaetze },
                    { label: 'Gesamtkosten', value: course.gesamtkosten },
                    { label: 'Kosten/Jahr', value: course.kosten_jahr },
                    { label: 'Kosten/Monat', value: course.kosten_monat },
                  ].filter(item => isValidValue(item.value)).map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 text-right ml-4">{item.value}</span>
                    </div>
                  ))}
                </div>
                {isValidValue(course.website_url) && (
                  <div className="p-6 bg-gray-50/50">
                    <a 
                      href={course.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-secondary transition-all shadow-lg shadow-primary/20 flex items-center justify-center"
                    >
                      Mehr Infos
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
