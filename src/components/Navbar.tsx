import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Developers', href: '#developers' },
    { name: 'Company', href: '#company' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0A192F]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="10" y="20" width="80" height="8" fill="white"/>
                <rect x="10" y="46" width="38" height="8" fill="white"/>
                <circle cx="75" cy="50" r="11" fill="white"/>
                <rect x="10" y="72" width="80" height="8" fill="white"/>
              </svg>
            </div>
            <span className="text-2xl font-bold font-sans tracking-tight text-white">
              Vants
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="primary" size="sm" className="shadow-primary/20">
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A192F] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white flex items-center justify-between group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Button variant="secondary" className="w-full justify-center">
                Log in
              </Button>
              <Button variant="primary" className="w-full justify-center">
                Launch App
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
