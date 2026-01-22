import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Zap, Lock, CreditCard } from 'lucide-react';

export const TrustTicker = () => {
  const partners = [
    { name: 'Stellar', icon: Globe },
    { name: 'Circle', icon: ShieldCheck },
    { name: 'CertiK', icon: Lock },
    { name: 'MoneyGram', icon: CreditCard },
    { name: 'Pix', icon: Zap }, // Using Zap as placeholder for Pix if no SVG available
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#0A192F]/50 backdrop-blur-sm overflow-hidden py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center gap-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#0A192F] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#0A192F] to-transparent z-10" />

        <div className="flex overflow-hidden w-full">
          <motion.div
            className="flex items-center gap-12 md:gap-16 min-w-full"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3 opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap">
                <partner.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                <span className="text-sm md:text-base lg:text-lg font-mono font-semibold text-white tracking-widest uppercase">
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
