import { X, Linkedin, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = t.nav;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6">
            <a href="/" className="flex items-center gap-3 w-fit">
              <span className="text-xl md:text-2xl font-bold font-sans uppercase tracking-widest text-white">VANTS</span>
            </a>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-sm">{f.tagline}</p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://x.com/vantsapp" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <X size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="https://instagram.com/vantsapp" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/company/vantsapp" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="mailto:hello@vants.xyz" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <Mail size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">{f.navigation}</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#products" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">{nav.products}</a></li>
              <li><a href="#bridge-feature" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">{nav.howItWorks}</a></li>
              <li><a href="#dashboard" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">{nav.appPreview}</a></li>
              <li><a href="#security" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">{nav.security}</a></li>
              <li><a href="#team" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">{nav.team}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-800 flex items-center justify-center">
          <p className="text-xs md:text-sm text-slate-500 text-center">{f.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
