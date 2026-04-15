import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { CourseArchive } from './pages/CourseArchive';
import { CourseDetail } from './pages/CourseDetail';
import { InstituteArchive } from './pages/InstituteArchive';
import { InstituteDetail } from './pages/InstituteDetail';
import { Events } from './pages/Events';
import { ForProviders } from './pages/ForProviders';
import { Contact } from './pages/Contact';
import { AboutUs } from './pages/AboutUs';
import { Impressum } from './pages/Impressum';
import { Privacy } from './pages/Privacy';
import { Partner } from './pages/Partner';
import { Site } from './pages/Site';
import { motion, AnimatePresence } from 'motion/react';

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/studien-kurse" element={<CourseArchive />} />
            <Route path="/studien-kurse/:slug" element={<CourseDetail />} />
            <Route path="/institute" element={<InstituteArchive />} />
            <Route path="/institute/:slug" element={<InstituteDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/fuer-anbieter" element={<ForProviders />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/ueber-uns" element={<AboutUs />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/site" element={<Site />} />
            {/* Fallback routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
