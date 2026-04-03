import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(xPct * 20);
      y.set(yPct * -20);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const metrics = [
    { value: '391M+', label: 'Addressable users' },
    { value: '< 5s', label: 'Settlement time' },
    { value: '100%', label: 'Always your money' },
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-white">
      {/* Soft background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#6851FF]/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-100/60 rounded-full blur-[100px]" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#6851FF15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">

        {/* Left Column: Content */}
        <div className="space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6851FF]/8 border border-[#6851FF]/20 mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6851FF] animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-[#6851FF]">VANTS App — Early Access</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#081229] leading-[1.1] tracking-tight mb-4 md:mb-6">
              A global account to pay the real world with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">
                your own investments.
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
              Invest smarter. Earn more. Pay anywhere — all from one app.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="primary" size="lg" className="group bg-[#6851FF] hover:bg-[#5741e0] shadow-lg shadow-[#6851FF]/25" onClick={() => window.location.href = 'https://app.vants.xyz'}>
              Open App <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="group border-slate-300 text-slate-700 hover:border-[#6851FF]/40 hover:text-[#6851FF]"
              onClick={() => document.getElementById('bridge-feature')?.scrollIntoView({ behavior: 'smooth' })}
            >
              How it Works <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100" />
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="text-xl md:text-2xl lg:text-3xl font-sans tabular-nums tracking-tight font-bold text-[#081229]">{m.value}</div>
                <div className="text-xs md:text-sm text-slate-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: App Mockup Card */}
        <div
          className="relative h-[400px] md:h-[500px] lg:h-[580px] flex items-center justify-center perspective-[1000px]"
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{
              rotateX: mouseYSpring,
              rotateY: mouseXSpring,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-64 md:w-72 lg:w-80 rounded-3xl shadow-2xl shadow-[#6851FF]/15 border border-slate-200 bg-white overflow-hidden"
          >
            {/* Glossy top */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none z-10 rounded-3xl" />

            {/* App Header */}
            <div className="bg-[#6851FF] px-5 pt-8 pb-10 relative">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white/70 text-xs font-sans">Total balance</span>
                <span className="text-white/70 text-xs bg-white/10 px-2 py-0.5 rounded-full">● Live</span>
              </div>
              <div className="text-3xl font-sans tabular-nums tracking-tight font-bold text-white">$1,240.00</div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
                <span className="text-emerald-300 text-xs font-sans tabular-nums">+4.2% per year</span>
              </div>
            </div>

            {/* Card body */}
            <div className="px-5 pb-6 -mt-4 relative z-10 space-y-4">
              {/* Always your money badge */}
              <div className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-sans">ownership</div>
                  <div className="text-sm font-semibold text-[#081229]">Always your money</div>
                </div>
              </div>

              {/* Last payment */}
              <div>
                <div className="text-[10px] text-slate-400 mb-2 font-sans uppercase tracking-widest">Last payment</div>
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6851FF]/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-[#6851FF] rotate-45" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#081229]">Pix sent</div>
                      <div className="text-[10px] text-slate-400">Just now</div>
                    </div>
                  </div>
                  <span className="text-sm font-sans tabular-nums font-semibold text-[#081229]">- R$ 150,00</span>
                </div>
              </div>

              {/* CTA button */}
              <button className="w-full bg-[#6851FF] text-white rounded-xl py-3 text-sm font-semibold shadow-md shadow-[#6851FF]/20 hover:bg-[#5741e0] transition-colors">
                Pay with Vants
              </button>
            </div>

            {/* Floating pill — hidden on mobile */}
            <motion.div
              className="hidden lg:flex absolute -right-14 top-16 bg-white border border-slate-200 shadow-lg items-center gap-2 px-3 py-2 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transform: 'translateZ(40px)' }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-[#081229] whitespace-nowrap">Earning now</span>
            </motion.div>

            <motion.div
              className="hidden lg:flex absolute -left-16 bottom-28 bg-white border border-slate-200 shadow-lg items-center gap-2 px-3 py-2 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ transform: 'translateZ(30px)' }}
            >
              <div className="w-2 h-2 rounded-full bg-[#6851FF]" />
              <span className="text-xs font-medium text-[#081229] whitespace-nowrap">Pix • CBU • SPEI</span>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
