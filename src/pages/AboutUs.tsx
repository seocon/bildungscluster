import React from 'react';
import { motion } from 'motion/react';
import { Info, Quote, GraduationCap, School, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#003d5b] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <Info className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">BildungsCluster</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Portal für Studium & Training
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-xl text-gray-600 leading-relaxed space-y-6">
                <p>
                  Bildung ist das wertvollste Gut, das wir haben, denn beruflicher Erfolg hängt wesentlich vom eigenen Bildungsstand ab. Doch Bildung kann veralten, daher gilt: Bildung ist gut, Weiterbildung ist besser.
                </p>
                
                <blockquote className="relative p-8 bg-gray-50 rounded-3xl border-l-8 border-secondary">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-gray-200" />
                  <p className="text-2xl font-medium text-gray-800 italic relative z-10">
                    "Education is the most powerful weapon which you can use to change the world"
                  </p>
                  <cite className="block mt-4 text-gray-500 font-bold not-italic">— Nelson Mandela</cite>
                </blockquote>
              </div>

              <div className="pt-12 space-y-8">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
                  Die erste Adresse für Deine Weiterbildung
                </h2>
                
                <div className="text-gray-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    BildungsCluster.at wurde Ende 2016 ins Leben gerufen, um Weiterbildungsinteressierten in Österreich die Suche nach passenden Kursen zu erleichtern. Unser Fokus liegt auf akademischen Weiterbildungsprogrammen und Trainings im Bereich der Erwachsenenbildung sowie berufsbegleitenden Fernstudiengängen: Namhafte Kunden und Partner präsentieren im BildungsCluster Bachelor- und Master-Studiengänge, MBA-Programme, Seminare, Kurse, Doktoratsstudien und Trainings. Unser Ziel ist, das Angebot qualitativ hochwertiger Programme stetig zu erweitern.
                  </p>
                  <p>
                    Zudem halten wir unsere User mit aktuellen Informationen und Tipps rund um die Themen Studium und Weiterbildung auf dem Laufenden. Wir wollen das Nutzererlebnis und den Content unserer Website stetig optimieren – das Feedback von Usern und Kunden nehmen wir daher sehr ernst.
                  </p>
                  <p>
                    Dabei ist unsere Mission, unsere drei Zielgruppen Weiterbildungsinteressierte, Studierende und Absolventen gleichermaßen vor während und nach der Weiterbildung mit hilfreichen News und Kursangeboten zu begleiten. Mit diesem Konzept verfolgt BildungsCluster.at das Ziel, zur ersten Anlaufstelle für Weiterbildungsinteressierte zu werden.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden shadow-2xl mb-24"
          >
            <div className="absolute inset-0">
              <img 
                src="https://www.bildungscluster.at/wp-content/uploads/2025/01/contact-symbols-1024x683.jpg" 
                alt="Kontaktmöglichkeiten" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <div className="relative z-10 p-12 md:p-20 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                Kontaktieren Sie uns
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Sie sind ein Bildungsanbieter und möchten Ihre Programme einer relevanten Zielgruppe präsentieren? Dann informieren Sie sich über unsere attraktiven Angebote und Preise.
              </p>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-secondary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all group"
              >
                Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
