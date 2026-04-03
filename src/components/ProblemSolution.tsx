import { motion } from 'framer-motion';
import { TrendingDown, BadgeDollarSign, Clock4, TrendingUp, QrCode, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const problemIcons = [TrendingDown, BadgeDollarSign, Clock4];
const solutionIcons = [TrendingUp, QrCode, ShieldCheck];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const ProblemSolution = () => {
  const { t } = useLanguage();
  const ps = t.problemSolution;

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#081229] mb-4">
            {ps.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">{ps.title2}</span>
          </h2>
          <p className="text-slate-600 text-lg">{ps.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Problem */}
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl border border-red-100 p-6 md:p-8 shadow-sm"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">{ps.problemBadge}</span>
            </div>
            <div className="space-y-6">
              {ps.problems.map((item, i) => {
                const Icon = problemIcons[i];
                return (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4">
                    <div className="mt-0.5 w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#081229] mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-white rounded-2xl border border-[#6851FF]/20 p-6 md:p-8 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6851FF]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6851FF]/8 border border-[#6851FF]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6851FF]" />
              <span className="text-xs font-semibold text-[#6851FF] uppercase tracking-wider">{ps.solutionBadge}</span>
            </div>
            <div className="space-y-6 relative z-10">
              {ps.solutions.map((item, i) => {
                const Icon = solutionIcons[i];
                return (
                  <motion.div key={i} variants={itemVariants} className="flex gap-4">
                    <div className="mt-0.5 w-10 h-10 rounded-xl bg-[#6851FF]/8 border border-[#6851FF]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#6851FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#081229] mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Loop tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-3 md:gap-6 mt-12 text-sm font-semibold text-slate-400"
        >
          {ps.loop.map((step, i) => (
            <div key={step} className="flex items-center gap-3 md:gap-6">
              <span className={`px-4 py-2 rounded-full border ${i === 0 ? 'bg-[#6851FF]/8 border-[#6851FF]/20 text-[#6851FF]' : i === 1 ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-slate-100 border-slate-200 text-slate-600'}`}>
                {step}
              </span>
              {i < 2 && <span className="text-slate-300 text-base">→</span>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
