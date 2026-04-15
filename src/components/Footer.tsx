import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Printer, Mail, ChevronRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1e2433] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Über Uns */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg uppercase tracking-wider">Über Uns</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <p className="font-bold">BildungsCluster –<br />Portal für Studium & Training</p>
              <p className="text-gray-400">
                Bildung ist das wertvollste Gut, das wir haben, denn beruflicher Erfolg hängt wesentlich vom eigenen Bildungsstand ab. Doch Bildung kann veralten, daher gilt: Bildung ist gut, Weiterbildung ist besser.
              </p>
            </div>
            <Link 
              to="/ueber-uns" 
              className="inline-block border-2 border-white text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#1e2433] transition-all"
            >
              Über Uns
            </Link>
          </div>

          {/* Column 2: Quicklinks */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg uppercase tracking-wider">Quicklinks</h3>
            <ul className="space-y-0 text-sm">
              <li className="border-b border-gray-700/50 py-3">
                <Link to="/fuer-anbieter" className="flex items-center hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                  <ChevronRight className="w-3 h-3 mr-2 text-primary" />
                  Für Anbieter
                </Link>
              </li>
              <li className="border-b border-gray-700/50 py-3">
                <Link to="/kontakt" className="flex items-center hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                  <ChevronRight className="w-3 h-3 mr-2 text-primary" />
                  Kontaktiere uns
                </Link>
              </li>
              <li className="py-3">
                <Link to="/ueber-uns" className="flex items-center hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">
                  <ChevronRight className="w-3 h-3 mr-2 text-primary" />
                  Über uns
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontakt */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg uppercase tracking-wider">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/648Gdars6NNPQ6zq7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hafenstraße 47-51, 4020 Linz
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                <a href="tel:+437327700770" className="text-gray-400 hover:text-white transition-colors">
                  +43 (0)732 / 77 00 77 - 0
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <Printer className="w-5 h-5 text-gray-500 shrink-0" />
                <span className="text-gray-400">+43 (0)732 / 77 00 77 - 11</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <a href="mailto:office@bildungscluster.at" className="text-gray-400 hover:text-white transition-colors">office@bildungscluster.at</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Öffnungszeiten */}
          <div className="space-y-6">
            <h3 className="text-white font-black text-lg uppercase tracking-wider">Sie erreichen uns</h3>
            <div className="space-y-3 text-sm">
              {[
                { day: 'Montag', time: '09:00 - 16:00 Uhr' },
                { day: 'Dienstag', time: '09:00 - 16:00 Uhr' },
                { day: 'Mittwoch', time: '09:00 - 16:00 Uhr' },
                { day: 'Donnerstag', time: '09:00 - 16:00 Uhr' },
                { day: 'Freitag', time: '09:00 - 12:00 Uhr' },
              ].map((item, i) => (
                <div key={i} className="flex items-end justify-between group">
                  <span className="text-gray-400">{item.day}</span>
                  <div className="flex-grow border-b border-dotted border-gray-700 mx-2 mb-1"></div>
                  <span className="text-gray-400">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#4a5568] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-6">
              <img 
                src="/Bildungscluster-logo.png" 
                alt="Logo" 
                className="h-6 w-auto brightness-0 invert opacity-80"
              />
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-gray-300">
                <span>© 2026 bildungscluster.at</span>
                <span className="text-gray-500">|</span>
                <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
                <span className="text-gray-500">|</span>
                <Link to="/kontakt" className="hover:text-white transition-colors">Kontakt</Link>
                <span className="text-gray-500">|</span>
                <Link to="/partner" className="hover:text-white transition-colors">Partner</Link>
                <span className="text-gray-500">|</span>
                <Link to="/site" className="hover:text-white transition-colors">Site</Link>
                <span className="text-gray-500">|</span>
                <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
