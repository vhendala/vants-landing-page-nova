import { useMemo } from 'react';
import ReactFlow, {
  Handle,
  Position,
  Background,
  MarkerType,
  NodeProps,
  Edge
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Wallet, Zap, Lock, ArrowLeftRight, Banknote, Store } from 'lucide-react';

// --- Custom Node Components ---

// 1. Input Node (Wallet)
const InputNode = ({ data }: NodeProps) => {
  return (
    <div className="relative group min-w-[200px]">
       {/* Glow effect */}
       <div className="absolute -inset-2 bg-gradient-to-br from-[#6C63FF]/40 via-[#00C9FF]/40 to-primary/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>

       <div className="relative flex flex-col items-center p-5 bg-gradient-to-br from-[#112240] to-[#0A192F] border border-primary/40 rounded-2xl shadow-2xl">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mb-3 text-white border border-primary/30 shadow-lg">
          <Wallet size={26} className="drop-shadow-lg" />
        </div>
        <div className="text-center">
          <div className="text-[9px] font-mono text-primary/70 mb-1 tracking-widest">SOURCE</div>
          <h3 className="text-white font-bold text-base font-sans">{data.label}</h3>
          <div className="mt-1.5 flex items-center justify-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse"></div>
            <span className="text-[9px] text-[#00C853] font-medium">CONNECTED</span>
          </div>
        </div>
        <Handle type="source" position={Position.Right} className="!bg-primary !w-3 !h-3 !border-2 !border-[#0A192F]" />
      </div>
    </div>
  );
};

// 2. Core Processor Node (Smart Router)
const CoreNode = ({ data }: NodeProps) => {
  return (
    <div className="relative min-w-[260px]">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl rounded-full animate-pulse"></div>
      <div className="relative p-6 bg-gradient-to-br from-[#112240] to-[#0A192F] border-2 border-primary rounded-2xl shadow-[0_0_40px_rgba(108,99,255,0.3)]">
        <div className="absolute top-0 left-0 bg-gradient-to-r from-primary to-accent text-white text-[9px] font-mono px-2 py-1 font-bold uppercase rounded-tl-xl rounded-br-xl">
          AI Router
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-primary/40 text-white shrink-0 shadow-lg relative">
            <Zap size={28} className="drop-shadow-lg" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-sans tracking-tight">{data.label}</h3>
            <p className="text-[9px] text-accent mt-1 font-mono tracking-wider">ROUTING_ENGINE</p>
          </div>
        </div>

        {/* Managed Services Indicators */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50"></div>
          <span className="text-[8px] text-white/40 font-mono ml-1.5 tracking-wider">
            MANAGES_ALL
          </span>
        </div>

        {/* Handles */}
        <Handle type="target" position={Position.Left} id="in" className="!bg-primary !w-3 !h-3 !border-2 !border-[#0A192F]" />
        <Handle type="target" position={Position.Top} id="in-top" className="!bg-primary !w-3 !h-3 !border-2 !border-[#0A192F]" />
        <Handle type="source" position={Position.Right} id="out-right" className="!bg-primary !w-3 !h-3 !border-2 !border-[#0A192F]" />
      </div>
    </div>
  );
};

// 3. Service Node (Liquidity, DEX, Offramp)
const ServiceNode = ({ data }: NodeProps) => {
  const colors = {
    amber: {
      gradient: "from-amber-500/20 to-orange-500/20",
      border: "border-amber-400/40",
      text: "text-amber-400",
      glow: "shadow-amber-500/20",
      icon: "from-amber-500/30 to-orange-500/30"
    },
    violet: {
      gradient: "from-violet-500/20 to-purple-500/20",
      border: "border-violet-400/40",
      text: "text-violet-400",
      glow: "shadow-violet-500/20",
      icon: "from-violet-500/30 to-purple-500/30"
    },
    emerald: {
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-400/40",
      text: "text-emerald-400",
      glow: "shadow-emerald-500/20",
      icon: "from-emerald-500/30 to-teal-500/30"
    },
    cyan: {
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-400/40",
      text: "text-cyan-400",
      glow: "shadow-cyan-500/20",
      icon: "from-cyan-500/30 to-blue-500/30"
    }
  };

  const theme = colors[data.color as keyof typeof colors] || colors.amber;

  return (
    <div className={`relative p-4 bg-gradient-to-br ${theme.gradient} backdrop-blur-sm border ${theme.border} rounded-2xl shadow-xl ${theme.glow} flex items-center gap-4 min-w-[220px] group hover:scale-105 transition-all`}>
      {/* Decorative corner glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${theme.icon} flex items-center justify-center border border-white/10 ${theme.text} shrink-0 shadow-lg`}>
        {data.icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-mono text-white/80 mb-0.5 tracking-widest uppercase">{data.sub}</div>
        <h4 className="text-white font-bold font-sans text-base tracking-wide">{data.label}</h4>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className={`!w-3 !h-3 !border-2 !border-[#0A192F] ${data.handleColor || '!bg-gray-400'}`}
      />
    </div>
  );
};

// 4. Destination Node (Merchant)
const DestinationNode = ({ data }: NodeProps) => {
  return (
    <div className="relative group min-w-[200px]">
       {/* Glow effect */}
       <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/40 via-orange-500/40 to-amber-600/40 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>

       <div className="relative flex flex-col items-center p-5 bg-gradient-to-br from-[#112240] to-[#0A192F] border border-amber-500/40 rounded-2xl shadow-2xl">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center mb-3 text-white border border-amber-500/30 shadow-lg">
          <Store size={26} className="drop-shadow-lg" />
        </div>
        <div className="text-center">
          <div className="text-[10px] font-mono text-amber-400/80 mb-1 tracking-widest">DESTINATION</div>
          <h3 className="text-white font-bold text-base font-sans">{data.label}</h3>
          <div className="mt-1.5 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
            <span className="text-[10px] text-amber-400 font-medium font-mono">PIX • CVU</span>
          </div>
        </div>
        <Handle type="target" position={Position.Left} className="!bg-amber-500 !w-3 !h-3 !border-2 !border-[#0A192F]" />
      </div>
    </div>
  );
};


// --- Main Component ---

export const BridgeFeature = () => {

  // Define Nodes - Main flow horizontal + background services
  const initialNodes = useMemo(() => [
    {
      id: 'wallet',
      type: 'inputNode',
      position: { x: 50, y: 250 },
      data: { label: 'Your Wallet' },
    },
    {
      id: 'core',
      type: 'coreNode',
      position: { x: 420, y: 230 },
      data: { label: 'Vants Router' },
    },
    {
      id: 'merchant',
      type: 'destinationNode',
      position: { x: 850, y: 250 },
      data: { label: 'Merchant' },
    },
    // Background services (abstracted)
    {
      id: 'liquidity',
      type: 'serviceNode',
      position: { x: 140, y: 30 },
      data: {
        label: 'Liquidity Pool',
        sub: 'Collateral Lock',
        icon: <Lock size={18} />,
        color: 'amber',
        handleColor: '!bg-amber-400',
        hasOutput: false
      },
    },
    {
      id: 'dex',
      type: 'serviceNode',
      position: { x: 400, y: 30 },
      data: {
        label: 'DEX Swap',
        sub: 'Best Rate',
        icon: <ArrowLeftRight size={18} />,
        color: 'violet',
        handleColor: '!bg-violet-400',
        hasOutput: false
      },
    },
    {
      id: 'offramp',
      type: 'serviceNode',
      position: { x: 660, y: 30 },
      data: {
        label: 'Payment Rails',
        sub: 'Pix • CVU • Wire',
        icon: <Banknote size={18} />,
        color: 'cyan',
        handleColor: '!bg-cyan-400',
        hasOutput: false
      },
    },
  ], []);

  // Define Edges - Primary flow + background services
  const initialEdges: Edge[] = useMemo(() => [
    // PRIMARY FLOW - Main user journey
    // Wallet -> Core (thick, animated, purple)
    {
      id: 'e1',
      source: 'wallet',
      target: 'core',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#6C63FF', strokeWidth: 3 }
    },
    // Core -> Merchant (thick, animated, amber)
    {
      id: 'e2',
      source: 'core',
      target: 'merchant',
      sourceHandle: 'out-right',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#f59e0b', strokeWidth: 3 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' }
    },

    // BACKGROUND SERVICES - Connected to Vants Router
    // Liquidity -> Core
    {
      id: 'e3',
      source: 'liquidity',
      target: 'core',
      targetHandle: 'in-top',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#fbbf24', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#fbbf24' }
    },
    // DEX -> Core
    {
      id: 'e4',
      source: 'dex',
      target: 'core',
      targetHandle: 'in-top',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#a78bfa', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#a78bfa' }
    },
    // Offramp -> Core
    {
      id: 'e5',
      source: 'offramp',
      target: 'core',
      targetHandle: 'in-top',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#06b6d4', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' }
    },
  ], []);

  const nodeTypes = useMemo(() => ({
    inputNode: InputNode,
    coreNode: CoreNode,
    serviceNode: ServiceNode,
    destinationNode: DestinationNode
  }), []);

  return (
    <div className="w-full py-16 md:py-24 bg-[#0A192F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sans font-bold text-white mb-4 md:mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Smart Bridge</span> Engine
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Simple flow. Complex infrastructure abstracted. Instant settlement in &lt; 3 seconds.
          </p>
        </div>

        {/* Diagram Container */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-[#112240]/40 to-[#0A192F]/40 border border-primary/20 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 h-8 md:h-10 bg-gradient-to-r from-[#112240] to-[#0A192F] border-b border-white/10 flex items-center px-3 md:px-5 justify-between z-10">
            <div className="flex items-center gap-1.5 md:gap-2.5">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/60 hover:bg-red-500 transition-colors cursor-pointer"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/60 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/60 hover:bg-green-500 transition-colors cursor-pointer"></div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1 md:gap-1.5">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[8px] md:text-[10px] text-green-400 font-medium">LIVE</span>
              </div>
              <div className="hidden md:block text-[10px] font-mono text-white/40">PAYMENT_FLOW_V3.0</div>
            </div>
          </div>

          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{
              padding: 0.15,
              minZoom: 0.5,
              maxZoom: 1.5
            }}
            proOptions={{ hideAttribution: true }}
            panOnScroll={false}
            zoomOnScroll={false}
            panOnDrag={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            preventScrolling={false}
            nodesDraggable={false}
            nodesConnectable={false}
            elementsSelectable={false}
            className="bg-transparent"
          >
            <Background
              color="#64ffda"
              gap={20}
              size={1}
              className="opacity-[0.05]"
            />
          </ReactFlow>
        </div>

        {/* Legend / Status Footer */}
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[10px] md:text-xs font-mono text-primary/40 px-2 md:px-4">
          <div className="flex items-center gap-2">
            <span className="text-white/60">// FLOW_ARCHITECTURE</span>
          </div>
          <div className="flex gap-4 md:gap-6">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400"></div>
              <span>Liquidity</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-violet-400"></div>
              <span>Exchange</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400"></div>
              <span>Fiat Rails</span>
            </div>
          </div>
          <div className="flex gap-2 md:gap-4 text-[9px] md:text-xs">
            <span className="hidden sm:inline">USER_FLOW: 3</span>
            <span className="hidden sm:inline">SERVICES: 3</span>
            <span className="text-green-500/80">✓ ABSTRACTED</span>
          </div>
        </div>

      </div>
    </div>
  );
};
