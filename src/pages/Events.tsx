import React from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export const Events = () => {
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
            <Calendar className="w-8 h-8 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Karrierekalender</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            Du möchtest Dich über Studiengänge informieren und Deine zukünftige Hochschule kennenlernen? Du bist auf Jobsuche und möchtest Dich auf einer Karrieremesse persönlich vorstellen. In unserem ständig aktualisierten Karrierekalender findest du die wichtigsten Karrieremessen und Infotage in Österreich.
          </motion.p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-4 md:p-8 shadow-inner overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/embed?title=Karrierekalender%20%E2%80%93%20Messen%2C%20Infotage%20%26%20Co.&height=600&wkst=2&bgcolor=%23FFFFFF&src=absolventen.at_rmdeco6hahjko60vn5b3qbcj64%40group.calendar.google.com&color=%23dd3628&ctz=Europe%2FVienna" 
              style={{ border: 0 }} 
              width="100%" 
              height="800" 
              frameBorder="0" 
              scrolling="no"
              title="Karrierekalender"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
