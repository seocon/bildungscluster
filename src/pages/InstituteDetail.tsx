import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Globe, Mail, Phone, ArrowLeft, ExternalLink, GraduationCap, Loader2, Facebook, Instagram, Youtube, AlertCircle } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { motion } from 'motion/react';
import { supabase, Institute, Course } from '../lib/supabase';

export const InstituteDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [institute, setInstitute] = useState<Institute | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstitute = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
          throw new Error('Supabase ist nicht konfiguriert.');
        }

        const { data: instData, error: instError } = await supabase
          .from('Institute')
          .select('*')
          .eq('url', slug)
          .single();
        
        if (instError) throw instError;
        
        if (instData) {
          setInstitute(instData);
          const { data: coursesData } = await supabase
            .from('Studiengänge')
            .select('*')
            .eq('institut', instData.name);
          if (coursesData) setCourses(coursesData);
        } else {
          throw new Error('Institut nicht gefunden.');
        }
      } catch (err) {
        console.error('Error fetching institute:', err);
        setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.');
      } finally {
        setLoading(false);
      }
    };
    fetchInstitute();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !institute) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center py-20 bg-white rounded-3xl border border-red-100 max-w-2xl mx-auto px-8 shadow-xl">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-red-900 mb-2">Fehler beim Laden</h3>
          <p className="text-red-700 mb-6">{error || 'Institut konnte nicht gefunden werden.'}</p>
          <Link
            to="/institute"
            className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-secondary transition-colors"
          >
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Header */}
      <div className="relative bg-primary pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/institute"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zur Übersicht
            </Link>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-32 h-32 bg-white rounded-3xl p-4 flex items-center justify-center border border-white/20 shadow-2xl"
            >
              <img
                src={institute.logo}
                alt={institute.name}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight"
              >
                {institute.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center text-white/90"
              >
                <MapPin className="w-5 h-5 text-secondary mr-2" />
                <span className="font-bold">{institute.adresse}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Über das Institut</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {institute.beschreibung}
              </p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Angebotene Studien & Kurse</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <CourseCard key={course.url} course={course} />
                ))}
              </div>
              {courses.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                  <p className="text-gray-500">Aktuell sind keine Kurse für dieses Institut gelistet.</p>
                </div>
              )}
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Contact Card */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-primary/10 p-8">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Kontakt & Links</h4>
                <div className="space-y-6">
                  {institute.website && (
                    <a
                      href={institute.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                      <span className="font-bold">Webseite besuchen</span>
                    </a>
                  )}
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-bold">{institute.adresse}</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-50">
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Social Media</h5>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, url: institute.facebook, label: 'Facebook' },
                      { icon: Instagram, url: institute.instagram, label: 'Instagram' },
                      { icon: Youtube, url: institute.youtube, label: 'YouTube' },
                    ].filter(social => social.url).map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
