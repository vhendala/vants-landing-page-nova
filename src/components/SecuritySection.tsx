import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe, FileCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const securityIcons = [ShieldCheck, Lock, Globe, FileCheck];

export const SecuritySection = () => {
  const { t } = useLanguage();
  const s = t.security;

  return (
    <div className="w-full py-16 md:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-5xl font-sans font-bold text-[#081229] mb-4 md:mb-6"
          >
            {s.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">{s.title2}</span>{' '}
            {s.title3}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base md:text-lg"
          >
            {s.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {s.features.map((feature, idx) => {
            const Icon = securityIcons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-[#6851FF]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#6851FF]/8 border border-[#6851FF]/20 flex items-center justify-center mb-5 group-hover:bg-[#6851FF]/15 transition-colors">
                  <Icon className="w-5 h-5 text-[#6851FF]" />
                </div>
                <h3 className="text-lg font-bold text-[#081229] mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-col items-center justify-center"
        >
          <div className="bg-white border border-slate-200 rounded-full py-2.5 px-6 flex items-center gap-3 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs md:text-sm text-slate-500 text-center">{s.badge}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
