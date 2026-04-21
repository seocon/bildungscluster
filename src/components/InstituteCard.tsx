import { Institute, getSlug, isValidValue } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface InstituteCardProps {
  institute: Institute;
}

export const InstituteCard = ({ institute }: InstituteCardProps) => {
  return (
    <Link to={`/institute/${getSlug(institute.url)}`} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-16 h-16 bg-[#f0f4f8] rounded-xl p-2 flex items-center justify-center border border-gray-100 shadow-sm">
            {isValidValue(institute.logo) ? (
              <img
                src={institute.logo}
                alt={institute.name}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="text-primary font-bold text-xl">
                {institute.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="text-gray-400 group-hover:text-primary transition-colors">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors">
          {institute.name}
        </h3>
        {isValidValue(institute.beschreibung) && (
          <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">
            {institute.beschreibung}
          </p>
        )}
        {isValidValue(institute.adresse) && (
          <div className="flex items-center text-gray-400 text-xs mt-auto">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>{institute.adresse}</span>
          </div>
        )}
      </motion.div>
    </Link>
  );
};
