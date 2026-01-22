import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  // Parallax effect for the 3D card
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;

      x.set(xPct * 20); // Rotate Y axis
      y.set(yPct * -20); // Rotate X axis
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden bg-[#0A192F]">
      {/* Background Atmosphere */}
      <div className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-[100px]" />

      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">

        {/* Left Column: Content */}
        <div className="space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-white/80">Vants Protocol v1.0 Live</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-white leading-[1.1] tracking-tight mb-4 md:mb-6">
              Liquidity Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Liquidation</span>.
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
              The smartest way to borrow. Bridge your digital assets to real-world value with instant loans, smart payment routing via Pix & CBU, and Stellar-speed settlement.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="primary" size="lg" className="group">
              Calculate Loan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" className="group">
              View Documentation <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100" />
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="text-xl md:text-2xl lg:text-3xl font-mono font-bold text-white">$42M+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Total Value Locked</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl lg:text-3xl font-mono font-bold text-white">&lt; 2s</div>
              <div className="text-xs md:text-sm text-muted-foreground">Settlement Time</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl lg:text-3xl font-mono font-bold text-white">0%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Slippage</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Visualization */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center perspective-[1000px]" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <motion.div
            style={{
              rotateX: mouseYSpring,
              rotateY: mouseXSpring,
              transformStyle: "preserve-3d"
            }}
            className="relative w-64 md:w-72 lg:w-80 h-[380px] md:h-[430px] lg:h-[480px] bg-gradient-to-br from-[#112240]/90 to-[#0A192F]/90 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-xl"
          >
            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none" />

            {/* Card Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-between transform translate-z-[20px]">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Balance</div>
                  <div className="text-xl font-mono font-bold text-white">$124,500.00</div>
                </div>
              </div>

              {/* Middle Layer - Abstract Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-primary to-accent rounded-full blur-[60px] opacity-40 animate-pulse" />

              {/* Bottom Actions */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm text-white/80 bg-white/5 p-3 rounded-xl border border-white/5">
                  <span>Health Factor</span>
                  <span className="text-accent font-mono">1.85 (Safe)</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-accent rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="h-10 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-medium">Deposit</div>
                  <div className="h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white text-sm font-medium">Borrow</div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <motion.div
              className="hidden lg:block absolute -right-12 top-20 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00C853]/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-[#00C853]" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Incoming Pix</div>
                  <div className="text-sm font-bold text-white">+ R$ 5.000,00</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block absolute -left-12 bottom-32 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl z-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-sm" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Collateral Secured</div>
                  <div className="text-sm font-bold text-white">1.5 BTC</div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
