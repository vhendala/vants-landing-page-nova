import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export const DashboardPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Dashboard 3D Rotation
  const dashboardRotateX = useTransform(smoothProgress, [0, 1], [15, 0]);
  const dashboardRotateY = useTransform(smoothProgress, [0, 1], [-15, 5]);
  const dashboardScale = useTransform(smoothProgress, [0, 1], [0.9, 1]);

  // Exploded View Elements
  const headerZ = useTransform(smoothProgress, [0.2, 0.8], [0, 30]);
  const contentZ = useTransform(smoothProgress, [0.2, 0.8], [0, 20]);

  // Health Factor Gauge
  // Starts at -45deg (Risk) and stabilizes to 65deg (Safe)
  const needleRotate = useTransform(smoothProgress, [0, 0.6], [-45, 65]);
  const safeZoneOpacity = useTransform(smoothProgress, [0.5, 0.6], [0, 1]);
  const pulseScale = useTransform(smoothProgress, [0.55, 0.65, 0.75], [1, 1.5, 1]);
  const pulseOpacity = useTransform(smoothProgress, [0.55, 0.65, 0.75], [0, 0.5, 0]);

  // Color transition for Health Factor text: Red -> Orange -> Green
  const healthColor = useTransform(
    smoothProgress,
    [0, 0.3, 0.6],
    ["#EB5757", "#FFAB00", "#00C853"]
  );

  return (
    <div ref={containerRef} className="w-full py-16 md:py-24 bg-[#0A192F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

        {/* Left: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sans font-bold text-white mb-4 md:mb-6">
            Complete Control Over Your <span className="text-primary">Financial Health</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
            Monitor your loan health in real-time. Our smart dashboard gives you granular control with features like "One-Click Repay" and "Auto-Top Up" to prevent liquidation.
          </p>

          <div className="space-y-4 md:space-y-6">
            {[
              { icon: Activity, title: "Real-time Health Monitoring", desc: "Live updates on your LTV and liquidation thresholds." },
              { icon: Zap, title: "Instant Collateral Top-Up", desc: "Add collateral in seconds to improve your health factor." },
              { icon: ShieldCheck, title: "Automated Safety Triggers", desc: "Set pre-defined actions to protect your assets while you sleep." }
            ].map((item, i) => (
              <div key={i} className="flex gap-3 md:gap-4">
                <div className="mt-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative perspective-[2000px] h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
          <motion.div
            style={{
              rotateX: dashboardRotateX,
              rotateY: dashboardRotateY,
              scale: dashboardScale,
              transformStyle: "preserve-3d"
            }}
            className="relative bg-[#112240] border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl w-full max-w-lg"
          >
            {/* Glossy Sheen Effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-50">
                <motion.div
                    style={{
                        left: useTransform(smoothProgress, [0, 1], ["-100%", "200%"])
                    }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                />
            </div>

            {/* Mock Dashboard Header */}
            <motion.div
              style={{ translateZ: headerZ }}
              className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 bg-[#112240]/80 backdrop-blur-sm rounded-t-xl"
            >
              <div className="flex gap-4">
                <div className="w-32 h-8 bg-white/5 rounded-lg" />
                <div className="w-24 h-8 bg-white/5 rounded-lg" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20" />
            </motion.div>

            {/* Health Factor Gauge Section */}
            <motion.div
              style={{ translateZ: contentZ }}
              className="bg-[#0A192F] rounded-2xl p-6 mb-6 border border-white/5 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
                  Live
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-medium">Health Factor</h3>
                <motion.span
                  style={{ color: healthColor }}
                  className="font-mono font-bold text-xl"
                >
                    1.65
                </motion.span>
              </div>

              {/* Gauge Visualization */}
              <div className="relative h-24 md:h-32 flex items-end justify-center overflow-hidden mb-3 md:mb-4">
                <div className="w-48 md:w-64 h-24 md:h-32 bg-white/5 rounded-t-full relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-[conic-gradient(from_180deg_at_50%_100%,#EB5757_0deg,#FFAB00_50deg,#00C853_100deg,transparent_180deg)] opacity-50" />

                  {/* Needle */}
                  <motion.div
                    style={{ rotate: needleRotate }}
                    className="absolute bottom-0 left-1/2 w-0.5 md:w-1 h-20 md:h-28 bg-white origin-bottom -translate-x-1/2 rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                  />

                  {/* Safe Zone Pulse Impact */}
                  <motion.div
                    style={{ opacity: pulseOpacity, scale: pulseScale }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 md:w-20 h-16 md:h-20 rounded-full bg-[#00C853]/30 z-0"
                  />

                  <div className="absolute bottom-0 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full -translate-x-1/2 translate-y-1/2 z-20 shadow-md" />
                </div>
              </div>

              <div className="flex justify-between text-[10px] md:text-xs text-muted-foreground px-2 md:px-4 relative">
                <span className="text-[#EB5757]">Liquidation</span>
                <span className="text-[#FFAB00]">Warning</span>
                <motion.span
                  style={{ opacity: safeZoneOpacity, scale: useTransform(safeZoneOpacity, [0, 1], [0.8, 1]) }}
                  className="text-[#00C853] font-bold bg-[#00C853]/10 px-1.5 md:px-2 py-0.5 rounded text-[9px] md:text-xs"
                >
                  Safe Zone
                </motion.span>
              </div>
            </motion.div>

            {/* Recent Activity Mock */}
            <motion.div
                style={{ translateZ: useTransform(smoothProgress, [0.2, 0.8], [0, 10]) }}
                className="space-y-3"
            >
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors bg-[#112240]/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5" />
                    <div className="space-y-1">
                      <div className="w-24 h-3 bg-white/10 rounded" />
                      <div className="w-16 h-2 bg-white/5 rounded" />
                    </div>
                  </div>
                  <div className="w-16 h-4 bg-white/5 rounded" />
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
