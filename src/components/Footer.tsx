import { X, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <a href="/" className="flex items-center gap-3 w-fit">
              <span className="text-xl md:text-2xl font-bold font-sans uppercase tracking-widest text-white">
                VANTS
              </span>
            </a>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-sm">
              A global account that makes your money work harder. Earn returns on your savings and pay any bill in seconds — anywhere in Latin America.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="https://x.com/vantsapp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <X size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="https://instagram.com/vantsapp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <Instagram size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/company/vantsapp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#6851FF] hover:text-white transition-all">
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Products</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">High-Yield Accounts</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Pay</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Earn</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Vants Card</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#team" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">About</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Press</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Support</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Status</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Legal</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm md:text-base text-slate-400 hover:text-[#6851FF] transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-slate-500 text-center md:text-left">
            © 2026 VANTS. All rights reserved.
          </p>
          <div className="text-[10px] md:text-xs text-slate-500 max-w-lg text-center md:text-right">
            Financial services involve risk. Vants is a technology provider, not a bank. Returns are not guaranteed.
          </div>
        </div>
      </div>
    </footer>
  );
};
