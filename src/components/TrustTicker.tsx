import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, CreditCard, Building2 } from 'lucide-react';

export const TrustTicker = () => {
  const partners = [
    { name: 'Stellar', icon: Globe },
    { name: 'Circle', icon: ShieldCheck },
    { name: 'Pix', icon: Zap },
    { name: 'SPEI', icon: CreditCard },
    { name: 'CBU', icon: Building2 },
  ];

  return (
    <div className="w-full border-y border-slate-200 bg-slate-50 overflow-hidden py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center gap-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-12 md:gap-16 min-w-full"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: 'linear',
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-80 transition-opacity whitespace-nowrap">
                <partner.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-500" />
                <span className="text-sm md:text-base font-sans font-semibold text-slate-500 tracking-widest uppercase">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
