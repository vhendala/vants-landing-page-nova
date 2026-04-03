import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { ProblemSolution } from './components/ProblemSolution';
import { BridgeFeature } from './components/BridgeFeature';
import { DashboardPreview } from './components/DashboardPreview';
import { SecuritySection } from './components/SecuritySection';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

export function VantsLandingPage() {
  return (
    <div className="min-h-screen bg-white text-foreground font-sans selection:bg-primary/20 selection:text-[#081229] overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <TrustTicker />

        <ProblemSolution />

        <section id="bridge-feature">
          <BridgeFeature />
        </section>

        <DashboardPreview />
        <SecuritySection />
        <Team />
      </main>

      <Footer />
    </div>
  );
}

export default VantsLandingPage;
