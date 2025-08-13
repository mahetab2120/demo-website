import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { NavItem } from './types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#footer' },
];

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative">
      <Header onMenuClick={() => setIsNavOpen(true)} />
      <AnimatePresence>
        {isNavOpen && (
          <Navbar navItems={navItems} onClose={() => setIsNavOpen(false)} />
        )}
      </AnimatePresence>
      <main>
        <Hero id="hero" />
        <Services id="services" />
        <AboutUs id="about" />
        <Footer id="footer" />
      </main>
    </div>
  );
};

export default App;