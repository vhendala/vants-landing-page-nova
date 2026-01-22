import { Shield, Lock, FileCheck, Server } from 'lucide-react';

export const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: FileCheck,
      title: "Audited Smart Contracts",
      description: "Core protocol contracts have been audited by top-tier firms including CertiK and Trail of Bits.",
      link: "View Audit Report"
    },
    {
      icon: Shield,
      title: "Institutional Custody",
      description: "Assets are secured using Multi-Party Computation (MPC) technology with $100M insurance coverage.",
      link: "Learn about Custody"
    },
    {
      icon: Server,
      title: "Built on Soroban",
      description: "Leveraging the formal verification capabilities of the Stellar network's smart contract layer.",
      link: "Stellar Developer Docs"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Fully compliant with BCB (Banco Central do Brasil) standards and GDPR/LGPD data privacy regulations.",
      link: "Compliance Center"
    }
  ];

  return (
    <div className="w-full py-16 md:py-24 bg-[#0A192F] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sans font-bold text-white mb-4 md:mb-6">
            Institutional-Grade <span className="text-primary">Security</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            In the post-FTX era, trust is our primary product. We've built a fortress around your assets using the most advanced cryptographic security available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className="bg-[#112240] border border-white/5 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                {feature.description}
              </p>
              <a href="#" className="text-xs md:text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-2">
                {feature.link} <span className="text-xs">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Vanta Badge Section */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center">
          <div className="bg-[#112240] border border-white/5 rounded-full py-2 px-4 md:px-6 flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
            <span className="text-xs md:text-sm text-muted-foreground text-center">SOC2 Type II Compliant • ISO 27001 Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
