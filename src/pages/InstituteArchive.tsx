import React, { useEffect, useState } from 'react';
import { InstituteCard } from '../components/InstituteCard';
import { FilterBar } from '../components/FilterBar';
import { motion } from 'motion/react';
import { School, Loader2, AlertCircle } from 'lucide-react';
import { supabase, Institute } from '../lib/supabase';

export const InstituteArchive = () => {
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Alle');

  useEffect(() => {
    const fetchInstitutes = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
          throw new Error('Supabase ist nicht konfiguriert.');
        }

        const { data, error: supabaseError } = await supabase.from('Institute').select('*');
        
        if (supabaseError) throw supabaseError;
        
        if (data) {
          setInstitutes(data);
        }
      } catch (err) {
        console.error('Error fetching institutes:', err);
        setError(err instanceof Error ? err.message : 'Ein unbekannter Fehler ist aufgetreten.');
      } finally {
        setLoading(false);
      }
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

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-red-50 rounded-3xl border border-red-100 max-w-2xl mx-auto px-8">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-900 mb-2">Verbindungsfehler</h3>
            <p className="text-red-700 mb-6">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
            >
              Erneut versuchen
            </button>
          </div>
        ) : filteredInstitutes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInstitutes.map((inst, index) => (
              <motion.div
                key={inst.url}
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
