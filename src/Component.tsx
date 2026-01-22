import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { BridgeFeature } from './components/BridgeFeature';
// import { LoanCalculator } from './components/LoanCalculator';
import { DashboardPreview } from './components/DashboardPreview';
import { SecuritySection } from './components/SecuritySection';
import { Footer } from './components/Footer';

export function VantsLandingPage() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-foreground font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <TrustTicker />

        <section id="bridge-feature">
          <BridgeFeature />
        </section>

        {/* <section id="calculator" className="relative py-24 bg-[#0A192F]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] to-[#112240] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">
                Calculate Your <span className="text-primary">Liquidity</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                See exactly how much you can borrow against your assets. No hidden fees, instant approval.
              </p>
            </div>
            <LoanCalculator />
          </div>
        </section> */}

        <DashboardPreview />
        <SecuritySection />
      </main>

      <Footer />
    </div>
  );
}

export default VantsLandingPage;
