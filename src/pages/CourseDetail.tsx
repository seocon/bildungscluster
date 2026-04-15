import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_COURSES, MOCK_INSTITUTES } from '../mockData';
import { Star, Building2, Bookmark, Info, ArrowLeft, ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { supabase, Course, Institute } from '../lib/supabase';
import { CourseCard } from '../components/CourseCard';

export const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [similarCourses, setSimilarCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      
      // Try Supabase first
      if (import.meta.env.VITE_SUPABASE_URL) {
        const { data: courseData } = await supabase
          .from('courses')
          .select('*')
          .eq('slug', slug)
          .single();
        
        if (courseData) {
          setCourse(courseData);
          const { data: instData } = await supabase
            .from('institutes')
            .select('*')
            .eq('id', courseData.institut_id)
            .single();
          if (instData) setInstitute(instData);

          // Fetch similar courses
          const { data: similarData } = await supabase
            .from('courses')
            .select('*')
            .eq('kategorie', courseData.kategorie)
            .neq('id', courseData.id)
            .limit(2);
          if (similarData) setSimilarCourses(similarData);

          setLoading(false);
          return;
        }
      }

      // Fallback to Mock
      const mockCourse = MOCK_COURSES.find((c) => c.slug === slug);
      if (mockCourse) {
        setCourse(mockCourse);
        const mockInst = MOCK_INSTITUTES.find((i) => i.id === mockCourse.institut_id);
        if (mockInst) setInstitute(mockInst);
        
        const mockSimilar = MOCK_COURSES.filter(
          (c) => c.kategorie === mockCourse.kategorie && c.id !== mockCourse.id
        ).slice(0, 2);
        setSimilarCourses(mockSimilar);
      }
      setLoading(false);
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={course.image_url}
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
              {institute && (
                <Link 
                  to={`/institute/${institute.slug}`}
                  className="flex items-start space-x-4 group"
                >
                  <div className="mt-1">
                    <Building2 className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Institut</div>
                    <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{institute.name}</div>
                  </div>
                </Link>
              )}
              <Link 
                to={`/studien-kurse?category=${course.kategorie}`}
                className="flex items-start space-x-4 group"
              >
                <div className="mt-1">
                  <Bookmark className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Kategorie</div>
                  <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                    {course.kategorie}
                  </div>
                </div>
              </Link>
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
                  {course.beschreibung_generiert}
                </p>
              </div>
            </section>

            {/* Ähnliche Kurse Section */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-8">Ähnliche Kurse</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarCourses.length > 0 ? (
                  similarCourses.map((c) => (
                    <CourseCard key={c.id} course={c} />
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
                    { label: 'Standorte', value: course.standort },
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 text-right ml-4">{item.value || 'N/A'}</span>
                    </div>
                  ))}
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
