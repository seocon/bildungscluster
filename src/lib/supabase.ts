import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSlug = (url: string) => {
  if (!url) return '';
  // If it's a full URL, extract the last part
  if (url.includes('://') || url.includes('www.')) {
    try {
      const parts = url.split('/').filter(Boolean);
      return parts[parts.length - 1];
    } catch (e) {
      return url;
    }
  }
  return url;
};

export type Course = {
  url: string;
  titel: string;
  institut: string;
  kategorie: string;
  abschluss: string;
  regelstudienzeit: string;
  ects: string;
  gesamtkosten: string;
  kosten_jahr: string;
  kosten_monat: string;
  studienform: string;
  plaetze: string;
  sprache: string;
  standort: string;
  studienbeginn: string;
  website_url: string;
  beschreibung_generiert: string;
  image_url?: string; // Fallback if needed
};

export type Institute = {
  url: string;
  name: string;
  logo: string;
  beschreibung: string;
  adresse: string;
  website: string;
  facebook: string;
  instagram: string;
  youtube: string;
};
