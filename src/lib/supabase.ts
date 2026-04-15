import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Course = {
  id: string;
  titel: string;
  slug: string;
  institut_id: string;
  institut_name?: string;
  kategorie: string;
  abschluss: string;
  regelstudienzeit: string;
  ects?: string;
  gesamtkosten?: string;
  kosten_jahr?: string;
  kosten_monat?: string;
  studienform: string;
  plaetze?: string;
  sprache: string;
  standort: string;
  studienbeginn: string;
  website_url: string;
  beschreibung_generiert: string;
  image_url?: string;
  created_at: string;
};

export type Institute = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  beschreibung: string;
  adresse: string;
  website: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  location?: string; // Keep for compatibility if needed, but adresse is primary
  created_at: string;
};
