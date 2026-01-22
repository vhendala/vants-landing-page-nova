import { Twitter, Linkedin, Github, Disc } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050C16] border-t border-white/5 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16 lg:mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <a href="/" className="flex items-center gap-3 w-fit">
              <div className="h-7 w-7 md:h-8 md:w-8 flex items-center justify-center">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="10" y="20" width="80" height="8" fill="white"/>
                  <rect x="10" y="46" width="38" height="8" fill="white"/>
                  <circle cx="75" cy="50" r="11" fill="white"/>
                  <rect x="10" y="72" width="80" height="8" fill="white"/>
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white">
                Vants
              </span>
            </a>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm">
              The bridge between decentralized finance and real-world utility. Building the trust infrastructure for the next generation of fintech in Latin America.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Github size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Disc size={16} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Products</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Lending</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Bridge</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Earn</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Vants Card</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Developers</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Status</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-white font-bold text-sm md:text-base">Legal</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Vants Financial Technologies. All rights reserved.
          </p>
          <div className="text-[10px] md:text-xs text-muted-foreground max-w-lg text-center md:text-right">
            Cryptocurrency assets are volatile and involve a high degree of risk. Vants is a technology provider, not a bank.
          </div>
        </div>
      </div>
    </footer>
  );
};
