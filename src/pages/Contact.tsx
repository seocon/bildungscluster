import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Printer, Clock } from 'lucide-react';

export const Contact = () => {
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
            <Mail className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Kontaktiere Uns</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Wir sind für Sie da. Kontaktieren Sie uns bei Fragen zu unserem Portal, Ihren Bildungsangeboten oder für allgemeine Informationen.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Kundenbetreuung</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Adresse</h3>
                      <p className="text-gray-600">Hafenstraße 47-51, 4020 Linz, Österreich</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Telefonnummer</h3>
                      <p className="text-gray-600">+43 732 / 77 00 77 – 0</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">E-Mail</h3>
                      <a href="mailto:office@bildungscluster.at" className="text-primary hover:text-secondary transition-colors font-medium">
                        office@bildungscluster.at
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase tracking-tight">Sie erreichen uns</h2>
                <div className="space-y-4">
                  {[
                    { day: 'Montag', time: '09:00 - 16:00 Uhr' },
                    { day: 'Dienstag', time: '09:00 - 16:00 Uhr' },
                    { day: 'Mittwoch', time: '09:00 - 16:00 Uhr' },
                    { day: 'Donnerstag', time: '09:00 - 16:00 Uhr' },
                    { day: 'Freitag', time: '09:00 - 12:00 Uhr' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <span className="font-bold text-gray-700">{item.day}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[600px] bg-gray-100 rounded-3xl overflow-hidden shadow-xl"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d2658.08447814467!2d14.31037067713833!3d48.3110515792377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47739796e6e6e6e7%3A0x6b7447444397e59!2sHafenstra%C3%9Fe%2047-51%2C%204020%20Linz!5e0!3m2!1sde!2sat!4v1713778500000!5m2!1sde!2sat" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
