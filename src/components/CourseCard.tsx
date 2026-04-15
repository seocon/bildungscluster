import React from 'react';
import { supabase, Course, getSlug, isValidValue } from '../lib/supabase';
import { Link } from 'react-router-dom';
import { MapPin, GraduationCap, ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/studien-kurse/${getSlug(course.url)}`} className="block h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.image_url || 'https://images.unsplash.com/photo-1523050335392-9ae574d79993?auto=format&fit=crop&q=80&w=800'}
            alt={course.titel}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          {isValidValue(course.kategorie) && (
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                {course.kategorie.split(',')[0].trim()}
              </span>
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors line-clamp-2">
            {course.titel}
          </h3>
          <div className="space-y-3">
            {isValidValue(course.institut) && (
              <div className="flex items-center text-gray-400 text-xs">
                <Building2 className="w-4 h-4 mr-2 text-primary" />
                <span className="font-medium text-gray-700">{course.institut}</span>
              </div>
            )}
            {isValidValue(course.standort) && (
              <div className="flex items-center text-gray-400 text-xs">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>{course.standort}</span>
              </div>
            )}
            {isValidValue(course.abschluss) && (
              <div className="flex items-center text-gray-400 text-xs">
                <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                <span>{course.abschluss}</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
