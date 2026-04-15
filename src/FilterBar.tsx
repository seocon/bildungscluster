import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { CATEGORY_HIERARCHY, DEGREE_MAPPING } from '../constants/categories';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedMainCategory?: string;
  setSelectedMainCategory?: (val: string) => void;
  selectedSubCategory?: string;
  setSelectedSubCategory?: (val: string) => void;
  selectedDegree?: string;
  setSelectedDegree?: (val: string) => void;
  selectedStudyForm?: string;
  setSelectedStudyForm?: (val: string) => void;
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
  studyForms?: string[];
  locations: string[];
}

export const FilterBar = ({
  searchTerm,
  setSearchTerm,
  selectedMainCategory = 'Alle',
  setSelectedMainCategory,
  selectedSubCategory = 'Alle',
  setSelectedSubCategory,
  selectedDegree = 'Alle',
  setSelectedDegree,
  selectedStudyForm = 'Alle',
  setSelectedStudyForm,
  selectedLocation,
  setSelectedLocation,
  studyForms = [],
  locations,
}: FilterBarProps) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const hasActiveFilters = 
    (selectedMainCategory !== 'Alle') || 
    (selectedSubCategory !== 'Alle') || 
    (selectedDegree !== 'Alle') || 
    (selectedStudyForm !== 'Alle') || 
    selectedLocation !== 'Alle';

  const clearFilters = () => {
    setSelectedMainCategory?.('Alle');
    setSelectedSubCategory?.('Alle');
    setSelectedDegree?.('Alle');
    setSelectedStudyForm?.('Alle');
    setSelectedLocation('Alle');
    setSearchTerm('');
  };

  const mainCategories = ['Alle', ...Object.keys(CATEGORY_HIERARCHY)];
  const subCategories = selectedMainCategory !== 'Alle' 
    ? ['Alle', ...CATEGORY_HIERARCHY[selectedMainCategory]] 
    : [];
  const degrees = ['Alle', ...Object.keys(DEGREE_MAPPING)];

  const showCourseFilters = !!setSelectedMainCategory;

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 p-6 mb-12 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Suchen nach Titeln, Kategorien oder Orten..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl text-sm font-bold transition-all w-full md:w-auto ${
              isFilterOpen || hasActiveFilters
                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
            {hasActiveFilters && (
              <span className="ml-2 bg-secondary text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                !
              </span>
            )}
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="p-4 bg-secondary/10 text-secondary rounded-2xl hover:bg-secondary/20 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 mt-8 border-t border-gray-100">
              {showCourseFilters && (
                <>
                  {/* Main Category */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Hauptkategorie
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {mainCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setSelectedMainCategory?.(cat);
                            setSelectedSubCategory?.('Alle');
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            selectedMainCategory === cat
                              ? 'bg-primary/10 text-primary'
                              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sub Category */}
                  {selectedMainCategory !== 'Alle' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        Unterkategorie
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {subCategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => setSelectedSubCategory?.(sub)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                              selectedSubCategory === sub
                                ? 'bg-secondary/10 text-secondary'
                                : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Degree Filter */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Abschluss
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {degrees.map((deg) => (
                        <button
                          key={deg}
                          onClick={() => setSelectedDegree?.(deg)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            selectedDegree === deg
                              ? 'bg-primary/10 text-primary'
                              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                          }`}
                        >
                          {deg}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Study Form Filter */}
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                      Studienform
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Alle', ...studyForms].map((form) => (
                        <button
                          key={form}
                          onClick={() => setSelectedStudyForm?.(form)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            selectedStudyForm === form
                              ? 'bg-primary/10 text-primary'
                              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                          }`}
                        >
                          {form}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Location Filter */}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  Standort
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Alle', ...locations].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setSelectedLocation(loc)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedLocation === loc
                          ? 'bg-primary/10 text-primary'
                          : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
