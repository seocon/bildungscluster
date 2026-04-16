import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSlug = (url: string) => {
  if (!url) return '';
  try {
    // Handle full URLs
    if (url.includes('://') || url.includes('www.')) {
      const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
      const parts = urlObj.pathname.split('/').filter(Boolean);
      return parts[parts.length - 1] || urlObj.hostname.replace('www.', '').split('.')[0];
    }
    // Handle relative paths or simple strings
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1] || url;
  } catch (e) {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1] || url;
  }
};

export const isValidValue = (value: any): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string' && (value.trim() === '' || value.toUpperCase() === 'NULL' || value.trim() === '/')) return false;
  return true;
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
  picture_url: string;
};
