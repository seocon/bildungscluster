import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, School, Calendar, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Studien & Kurse', path: '/studien-kurse', icon: GraduationCap },
    { name: 'Institute', path: '/institute', icon: School },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Für Anbieter', path: '/fuer-anbieter', icon: Briefcase },
  ];

  const navBg = isHome 
    ? (isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : 'bg-transparent border-transparent')
    : 'bg-white/90 backdrop-blur-md border-b border-gray-100';

  const textColor = isHome && !isScrolled ? 'text-white' : 'text-gray-600';
  const logoFilter = isHome && !isScrolled ? 'brightness-0 invert' : '';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/Bildungscluster-logo.png" 
                alt="Bildungscluster" 
                className={`h-12 w-auto transition-all duration-300 ${logoFilter}`}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                      : `${textColor} hover:text-primary hover:bg-primary/5`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${textColor} hover:text-primary`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-4 text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
