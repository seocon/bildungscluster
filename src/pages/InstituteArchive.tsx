import React, { useEffect, useState } from 'react';
import { MOCK_INSTITUTES } from '../mockData';
import { InstituteCard } from '../components/InstituteCard';
import { FilterBar } from '../components/FilterBar';
import { motion } from 'motion/react';
import { School, Loader2 } from 'lucide-react';
import { supabase, Institute } from '../lib/supabase';

export const InstituteArchive = () => {
  const [institutes, setInstitutes] = useState<Institute[]>(MOCK_INSTITUTES);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Alle');

  useEffect(() => {
    const fetchInstitutes = async () => {
      if (!import.meta.env.VITE_SUPABASE_URL) return;
      setLoading(true);
      const { data, error } = await supabase.from('institutes').select('*');
      if (data && !error) {
        setInstitutes(data);
      }
      setLoading(false);
    };
    fetchInstitutes();
  }, []);

  const locations = Array.from(new Set(institutes.map((i) => i.adresse))) as string[];

  const filteredInstitutes = institutes.filter((inst) => {
    const matchesSearch =
      inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.beschreibung.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'Alle' || inst.adresse === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <School className="w-4 h-4" />
            <span>Unsere Partner</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Bildungs<span className="text-primary">institute</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Entdecken Sie renommierte Universitäten, Fachhochschulen und private Bildungseinrichtungen.
          </motion.p>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          locations={locations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {filteredInstitutes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstitutes.map((inst, index) => (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <InstituteCard institute={inst} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">Keine Institute gefunden.</p>
          </div>
        )}
      </div>
    </div>
  );
};
