import { Institute } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface InstituteCardProps {
  institute: Institute;
}

export const InstituteCard = ({ institute }: InstituteCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 flex items-center justify-center border border-gray-100">
          {institute.logo ? (
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
        {institute.website && (
          <a
            href={institute.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-secondary transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors">
        {institute.name}
      </h3>
      <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">
        {institute.beschreibung}
      </p>
      <div className="flex items-center text-gray-400 text-xs mb-6">
        <MapPin className="w-4 h-4 mr-2 text-primary" />
        <span>{institute.adresse}</span>
      </div>
      <Link
        to={`/institute/${institute.url}`}
        className="flex items-center justify-center w-full py-3 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-primary hover:text-white transition-all group/btn"
      >
        Zum Profil
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </motion.div>
  );
};
