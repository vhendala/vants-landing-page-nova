import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../i18n/translations';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
];

export const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.products, href: '#products' },
    { name: t.nav.howItWorks, href: '#bridge-feature' },
    { name: t.nav.appPreview, href: '#dashboard' },
    { name: t.nav.security, href: '#security' },
    { name: t.nav.team, href: '#team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold font-sans uppercase tracking-widest text-[#081229]">
              VANTS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-[#081229] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher inline */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 mr-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                    language === lang.code
                      ? 'bg-white text-[#6851FF] shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <Button
              variant="primary"
              size="sm"
              className="bg-[#6851FF] hover:bg-[#5741e0] shadow-md shadow-[#6851FF]/20"
              onClick={() => window.location.href = 'https://app.vants.xyz'}
            >
              {t.nav.openApp}
            </Button>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Inline lang selector on mobile */}
            <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-1 rounded-md text-xs font-semibold transition-all ${
                    language === lang.code
                      ? 'bg-white text-[#6851FF] shadow-sm'
                      : 'text-slate-500'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#081229] p-2"
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-[#081229] flex items-center justify-between group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <div className="h-px bg-slate-200 my-2" />
              <Button
                variant="primary"
                className="w-full justify-center bg-[#6851FF]"
                onClick={() => window.location.href = 'https://app.vants.xyz'}
              >
                {t.nav.openApp}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
