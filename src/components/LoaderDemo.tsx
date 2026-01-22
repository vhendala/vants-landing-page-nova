import { VantsLoader } from './ui/VantsLoader';

export const LoaderDemo = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-16">

        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Vants Loader Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            Soroban abacus-inspired loading animation
          </p>
        </div>

        {/* Size Variations */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Small */}
            <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
              <VantsLoader size="sm" />
              <div className="text-center">
                <p className="text-white font-medium">Small</p>
                <p className="text-sm text-muted-foreground">32x32px</p>
              </div>
            </div>

            {/* Medium */}
            <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
              <VantsLoader size="md" />
              <div className="text-center">
                <p className="text-white font-medium">Medium</p>
                <p className="text-sm text-muted-foreground">48x48px</p>
              </div>
            </div>

            {/* Large */}
            <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
              <VantsLoader size="lg" />
              <div className="text-center">
                <p className="text-white font-medium">Large</p>
                <p className="text-sm text-muted-foreground">64x64px</p>
              </div>
            </div>

          </div>
        </div>

        {/* Speed Variations */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Speed Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Slow */}
            <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
              <VantsLoader size="md" speed={0.5} />
              <div className="text-center">
                <p className="text-white font-medium">Slow</p>
                <p className="text-sm text-muted-foreground">0.5x speed</p>
              </div>
            </div>

            {/* Normal */}
            <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
              <VantsLoader size="md" speed={1} />
              <div className="text-center">
                <p className="text-white font-medium">Normal</p>
                <p className="text-sm text-muted-foreground">1x speed</p>
              </div>
            </div>

            {/* Fast */}
            <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
              <VantsLoader size="md" speed={1.5} />
              <div className="text-center">
                <p className="text-white font-medium">Fast</p>
                <p className="text-sm text-muted-foreground">1.5x speed</p>
              </div>
            </div>

          </div>
        </div>

        {/* Use Case Examples */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white">Use Case Examples</h2>

          {/* Full Screen Loading with Text Prop */}
          <div className="bg-[#112240] border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center space-y-4">
            <VantsLoader size="lg" text="Loading your dashboard..." />
          </div>

          {/* Medium Loading with Text */}
          <div className="bg-[#112240] border border-white/10 rounded-2xl p-12 flex flex-col items-center justify-center space-y-4">
            <VantsLoader size="md" text="Processing transaction..." />
          </div>

          {/* Inline Loading */}
          <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 space-y-4">
            <p className="text-white">Fetching transaction data</p>
            <div className="flex items-center gap-3">
              <VantsLoader size="sm" />
              <span className="text-sm text-muted-foreground">Please wait...</span>
            </div>
          </div>

          {/* Button Loading State */}
          <div className="bg-[#112240] border border-white/10 rounded-2xl p-8 flex items-center justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-3 cursor-not-allowed opacity-80">
              <VantsLoader size="sm" />
              Processing...
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center pt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
          >
            ← Back to Home
          </a>
        </div>

      </div>
    </div>
  );
};
