import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TrendingUp, QrCode, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const featureIcons = [TrendingUp, QrCode, ShieldCheck];

export const DashboardPreview = () => {
  const { t } = useLanguage();
  const d = t.dashboard;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'center center'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const dashboardRotateX = useTransform(smoothProgress, [0, 1], [12, 0]);
  const dashboardRotateY = useTransform(smoothProgress, [0, 1], [-10, 3]);
  const dashboardScale = useTransform(smoothProgress, [0, 1], [0.92, 1]);
  const sheenLeft = useTransform(smoothProgress, [0, 1], ['-100%', '200%']);

  const txAmounts = ['- R$ 49,90', '+ R$ 200,00', '- R$ 127,30'];
  const txColors = ['bg-red-50 text-red-500', 'bg-emerald-50 text-emerald-600', 'bg-slate-100 text-slate-500'];

  return (
    <div ref={containerRef} className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sans font-bold text-[#081229] mb-4 md:mb-6">
            {d.title1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">{d.title2}</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">{d.subtitle}</p>

          <div className="space-y-6">
            {d.features.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex gap-4"
                >
                  <div className="mt-0.5 w-10 h-10 rounded-full bg-[#6851FF]/8 border border-[#6851FF]/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#6851FF]" />
                  </div>
                  <div>
                    <h3 className="text-[#081229] font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: App mockup */}
        <div className="relative lg:perspective-[2000px] h-auto lg:h-[480px] flex items-center justify-center py-4 lg:py-0">
          <motion.div
            style={{ rotateX: dashboardRotateX, rotateY: dashboardRotateY, scale: dashboardScale }}
            className="relative bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 w-full max-w-sm overflow-hidden lg:[transform-style:preserve-3d]"
          >
            {/* Sheen */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-50">
              <motion.div style={{ left: sheenLeft }} className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
            </div>

            {/* App header */}
            <div className="bg-[#6851FF] px-6 pt-6 pb-10">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-white/60 text-xs font-sans mb-0.5">{d.cardBalance}</div>
                  <div className="text-3xl font-sans tabular-nums tracking-tight font-bold text-white">$1,240.00</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-emerald-200 text-xs font-sans tabular-nums">{d.cardEarning}</span>
              </div>
            </div>

            {/* Card body */}
            <div className="px-5 pb-5 -mt-4 bg-white rounded-t-3xl relative z-10">
              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <span className="text-sm text-slate-500">{d.cardAvailable}</span>
                <span className="text-sm font-sans tabular-nums font-semibold text-[#081229]">$1,240.00</span>
              </div>

              <div className="space-y-2 mt-4">
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-sans mb-3">{d.cardRecent}</div>
                {d.transactions.map((tx, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${txColors[i]} flex items-center justify-center text-xs font-bold`}>
                        {tx.label.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#081229]">{tx.label}</div>
                        <div className="text-[10px] text-slate-400">{tx.sublabel}</div>
                      </div>
                    </div>
                    <span className={`text-sm font-sans tabular-nums font-semibold ${txAmounts[i].startsWith('+') ? 'text-emerald-600' : 'text-[#081229]'}`}>
                      {txAmounts[i]}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.open('https://app.vants.xyz', '_blank')}
                className="w-full mt-4 bg-[#6851FF] text-white rounded-xl py-3 text-sm font-semibold shadow-md shadow-[#6851FF]/20 hover:bg-[#5741e0] transition-colors"
              >
                {d.cardPayButton}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
