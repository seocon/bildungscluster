import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseCard } from '../components/CourseCard';
import { InstituteCard } from '../components/InstituteCard';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, GraduationCap, School, Sparkles, BookOpen, Lightbulb, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, Course, Institute } from '../lib/supabase';

const SLIDES = [
  {
    image: '/public/Titelbild-BildungsCluster-Navigator.png',
    titleRed: 'DEIN NAVIGATOR',
    titleWhite: 'IM KURS-DSCHUNGEL',
    buttonText: 'Weiterbildung suchen',
    link: '/studien-kurse'
  },
  {
    image: '/public/Titelbild-BildungsCluster-verbinden.png',
    titleRed: 'BILDUNGSCLUSTER',
    titleWhite: 'WIR VERBINDEN, UM ZU LERNEN',
    buttonText: 'Bildungsanbieter suchen',
    link: '/institute'
  }
];

export const Home = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
          return; // Silent fail for home page, just show empty or loading
        }
        
        const { data: coursesData } = await supabase.from('Studiengänge').select('*').limit(6);
        if (coursesData) setCourses(coursesData);

        const { data: institutesData } = await supabase.from('Institute').select('*').limit(6);
        if (institutesData) setInstitutes(institutesData);
      } catch (err) {
        console.error('Error fetching home data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Slider Section */}
      <section className="relative h-[600px] lg:h-[800px] overflow-hidden bg-black">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img 
                src={SLIDES[currentSlide].image} 
                alt="Hero" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-2"
              >
                <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
                  <span className="text-[#e30613] block">{SLIDES[currentSlide].titleRed}</span>
                  <span className="text-white block">{SLIDES[currentSlide].titleWhite}</span>
                </h1>
                
                <div className="pt-12">
                  <Link 
                    to={SLIDES[currentSlide].link}
                    className="inline-block border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                  >
                    {SLIDES[currentSlide].buttonText}
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'bg-white w-8' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Chancen wahrnehmen',
                desc: 'Wir sind Dein persönlicher Navigator im Kurs-Dschungel. Sieh Dich auf unseren Kursseiten um und informiere Dich über Programme und Studiengänge.',
                btn: 'Bildungsangebote',
                link: '/studien-kurse',
                dark: true,
                icon: GraduationCap
              },
              {
                title: 'Quelle des Wissens',
                desc: 'Ob Master, MBA, Doktorat, Seminar, Training, Kurse & Co: Der BildungsCluster hat die Weiterbildungen renommierter Anbieter im Fokus.',
                btn: 'Bildungsanbieter',
                link: '/institute',
                dark: false,
                icon: BookOpen
              },
              {
                title: 'Seriöses Portal',
                desc: 'Wir sind Teil eines erfahrenen Netzwerks. Die Marke des Jobportals absolventen.at bringt weiterbildungsaffine Menschen und Bildungsanbieter zusammen.',
                btn: 'Über BildungsCluster',
                link: '/ueber-uns',
                dark: true,
                icon: Award
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl shadow-xl flex flex-col h-full ${
                  card.dark ? 'bg-[#003d5b] text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  card.dark ? 'bg-white/10' : 'bg-white shadow-sm'
                }`}>
                  <card.icon className={`w-8 h-8 ${card.dark ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className={`text-sm leading-relaxed mb-8 flex-grow ${card.dark ? 'text-white/70' : 'text-gray-600'}`}>
                  {card.desc}
                </p>
                <Link
                  to={card.link}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
                    card.dark 
                      ? 'bg-white text-[#003d5b] hover:bg-secondary hover:text-white' 
                      : 'bg-[#003d5b] text-white hover:bg-primary'
                  }`}
                >
                  {card.btn}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 relative z-10 lg:-mr-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#003d5b] p-12 md:p-16 rounded-3xl shadow-2xl text-white"
              >
                <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">Unsere Mission</h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Wir verbinden Bildung, Wirtschaft und Zukunft. Der Bildungscluster fördert den Austausch zwischen Schulen, Unternehmen und Institutionen, um jungen Menschen Perspektiven zu eröffnen und Fachkräfte nachhaltig zu stärken.
                </p>
              </motion.div>
            </div>
            <div className="w-full lg:w-2/3 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                  alt="Students studying" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 border-y border-gray-100 py-16">
            <div className="flex items-start space-x-6 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                "Gemeinsam gestalten wir die Zukunft der Bildung."
              </h2>
            </div>
            <div className="shrink-0">
              <a 
                href="https://www.best-messe.at/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="public/logo-best.svg" 
                  alt="BeSt Logo" 
                  className="h-24 w-auto"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Was Wir Tun Section */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">Was wir tun</h2>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Chancen wahrnehmen',
                desc: 'Wir sind Dein persönlicher Navigator im Kurs-Dschungel. Sieh Dich auf unseren Kursseiten um und informiere Dich über Programme und Studiengänge.',
                icon: GraduationCap
              },
              {
                title: 'Quelle des Wissens',
                desc: 'Ob Master, MBA, Doktorat, Seminar, Training, Kurse & Co: Der BildungsCluster hat die Weiterbildungen renommierter Anbieter im Fokus.',
                icon: BookOpen
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 p-10 rounded-3xl shadow-lg text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <h3 className="text-2xl font-black text-gray-900 mb-6 tracking-tight">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Slider (Horizontal Scroll) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-end justify-between">
          <div>
            <div className="flex items-center space-x-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <GraduationCap className="w-5 h-5 text-secondary" />
              <span>Top Angebote</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Beliebte <span className="text-primary">Studien & Kurse</span>
            </h2>
          </div>
          <Link
            to="/studien-kurse"
            className="hidden md:flex items-center text-primary font-bold hover:text-secondary transition-colors"
          >
            Alle ansehen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 gap-8 no-scrollbar snap-x">
            {courses.map((course) => (
              <div key={course.url} className="w-[350px] shrink-0 snap-start">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Institutes Slider */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex items-end justify-between">
          <div>
            <div className="flex items-center space-x-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
              <School className="w-5 h-5 text-secondary" />
              <span>Partner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Führende <span className="text-primary">Institute</span>
            </h2>
          </div>
          <Link
            to="/institute"
            className="hidden md:flex items-center text-primary font-bold hover:text-secondary transition-colors"
          >
            Alle ansehen
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 gap-8 no-scrollbar snap-x">
            {institutes.map((inst) => (
              <div key={inst.url} className="w-[350px] shrink-0 snap-start">
                <InstituteCard institute={inst} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#003d5b] mb-8 uppercase tracking-wider">
                In Kontakt bleiben
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Bleiben Sie mit uns rund um das Thema Weiterbildung und Fortbildung in Kontakt. Wir versorgen Sie mit aktuellen News.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#003d5b] uppercase tracking-widest mb-4">
                  E-Mail-Adresse
                </label>
                <div className="flex flex-col sm:flex-row gap-0">
                  <input 
                    type="email" 
                    placeholder="E-Mail-Adresse eingeben"
                    className="flex-grow px-6 py-4 bg-white border-none focus:ring-2 focus:ring-[#003d5b] outline-none text-gray-900"
                  />
                  <button className="bg-[#1e2433] text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#003d5b] transition-colors">
                    Abonnieren
                  </button>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Mit der Nutzung dieses Formulars erklären Sie Sich mit der Speicherung und Verarbeitung Ihrer Daten gemäß unserer Datenschutzbestimmungen einverstanden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
