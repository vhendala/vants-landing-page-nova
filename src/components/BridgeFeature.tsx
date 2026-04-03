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
import { Wallet, Zap, RefreshCcw, ArrowLeftRight, Banknote, Store } from 'lucide-react';

// --- Custom Node Components (Light Mode) ---

const InputNode = ({ data }: NodeProps) => (
  <div className="relative group min-w-[180px]">
    <div className="absolute -inset-2 bg-gradient-to-br from-[#6851FF]/20 to-indigo-200/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="relative flex flex-col items-center p-5 bg-white border-2 border-[#6851FF]/30 rounded-2xl shadow-lg">
      <div className="w-12 h-12 rounded-xl bg-[#6851FF]/10 flex items-center justify-center mb-3 text-[#6851FF] border border-[#6851FF]/20">
        <Wallet size={24} />
      </div>
      <div className="text-center">
        <div className="text-[9px] font-sans text-[#6851FF]/60 mb-1 tracking-widest uppercase">Your Account</div>
        <h3 className="text-[#081229] font-bold text-sm">{data.label}</h3>
        <div className="mt-1.5 flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] text-emerald-500 font-medium">ACTIVE</span>
        </div>
      </div>
      <Handle type="source" position={Position.Right} className="!bg-[#6851FF] !w-3 !h-3 !border-2 !border-white" />
    </div>
  </div>
);

const CoreNode = ({ data }: NodeProps) => (
  <div className="relative min-w-[220px]">
    <div className="absolute inset-0 bg-gradient-to-r from-[#6851FF]/10 to-indigo-100/30 blur-2xl rounded-full animate-pulse" />
    <div className="relative p-5 bg-white border-2 border-[#6851FF] rounded-2xl shadow-xl">
      <div className="absolute top-0 left-0 bg-[#6851FF] text-white text-[9px] font-sans px-2 py-1 font-bold uppercase rounded-tl-xl rounded-br-xl tracking-wide">
        Smart Payment
      </div>
      <div className="flex items-center gap-3 mt-2">
        <div className="w-12 h-12 rounded-xl bg-[#6851FF]/10 flex items-center justify-center border border-[#6851FF]/20 text-[#6851FF] shrink-0 relative">
          <Zap size={24} />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
        </div>
        <div>
          <h3 className="text-base font-bold text-[#081229] tracking-tight">{data.label}</h3>
          <p className="text-[9px] text-[#6851FF] mt-0.5 font-sans tracking-wider uppercase">Routing engine</p>
        </div>
      </div>
      <Handle type="target" position={Position.Left} id="in" className="!bg-[#6851FF] !w-3 !h-3 !border-2 !border-white" />
      <Handle type="target" position={Position.Top} id="in-top" className="!bg-[#6851FF] !w-3 !h-3 !border-2 !border-white" />
      <Handle type="source" position={Position.Right} id="out-right" className="!bg-[#6851FF] !w-3 !h-3 !border-2 !border-white" />
    </div>
  </div>
);

const colors = {
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', icon: 'bg-amber-100', handle: '!bg-amber-400' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', icon: 'bg-violet-100', handle: '!bg-violet-400' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', icon: 'bg-emerald-100', handle: '!bg-emerald-400' },
};

const ServiceNode = ({ data }: NodeProps) => {
  const theme = colors[data.color as keyof typeof colors] || colors.amber;
  return (
    <div className={`relative p-4 ${theme.bg} border ${theme.border} rounded-2xl shadow-sm flex items-center gap-3 min-w-[200px] group hover:shadow-md transition-all`}>
      <div className={`w-10 h-10 rounded-xl ${theme.icon} flex items-center justify-center ${theme.text} shrink-0`}>
        {data.icon}
      </div>
      <div>
        <div className={`text-[9px] font-sans ${theme.text} mb-0.5 tracking-widest uppercase`}>{data.sub}</div>
        <h4 className="text-[#081229] font-bold text-sm">{data.label}</h4>
      </div>
      <Handle type="source" position={Position.Bottom} className={`!w-3 !h-3 !border-2 !border-white ${theme.handle}`} />
    </div>
  );
};

const DestinationNode = ({ data }: NodeProps) => (
  <div className="relative group min-w-[180px]">
    <div className="absolute -inset-2 bg-gradient-to-br from-amber-200/40 to-orange-100/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
    <div className="relative flex flex-col items-center p-5 bg-white border-2 border-amber-300 rounded-2xl shadow-lg">
      <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-3 text-amber-500 border border-amber-200">
        <Store size={24} />
      </div>
      <div className="text-center">
        <div className="text-[10px] font-sans text-amber-500/80 mb-1 tracking-widest uppercase">Destination</div>
        <h3 className="text-[#081229] font-bold text-sm">{data.label}</h3>
        <div className="mt-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
          <span className="text-[10px] text-amber-600 font-medium font-sans">Pix • CBU • SPEI</span>
        </div>
      </div>
      <Handle type="target" position={Position.Left} className="!bg-amber-400 !w-3 !h-3 !border-2 !border-white" />
    </div>
  </div>
);

// --- Main Component ---

export const BridgeFeature = () => {
  const initialNodes = useMemo(() => [
    {
      id: 'wallet',
      type: 'inputNode',
      position: { x: 50, y: 250 },
      data: { label: 'Your Account' },
    },
    {
      id: 'core',
      type: 'coreNode',
      position: { x: 380, y: 230 },
      data: { label: 'Vants' },
    },
    {
      id: 'merchant',
      type: 'destinationNode',
      position: { x: 790, y: 250 },
      data: { label: 'Merchant' },
    },
    {
      id: 'redeem',
      type: 'serviceNode',
      position: { x: 140, y: 30 },
      data: {
        label: 'Redeem Earnings',
        sub: 'Best option',
        icon: <RefreshCcw size={16} />,
        color: 'amber',
      },
    },
    {
      id: 'exchange',
      type: 'serviceNode',
      position: { x: 390, y: 30 },
      data: {
        label: 'Currency Exchange',
        sub: 'Best rate',
        icon: <ArrowLeftRight size={16} />,
        color: 'violet',
      },
    },
    {
      id: 'direct',
      type: 'serviceNode',
      position: { x: 640, y: 30 },
      data: {
        label: 'Direct Transfer',
        sub: 'Pix • CBU • SPEI',
        icon: <Banknote size={16} />,
        color: 'emerald',
      },
    },
  ], []);

  const initialEdges: Edge[] = useMemo(() => [
    {
      id: 'e1',
      source: 'wallet',
      target: 'core',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#6851FF', strokeWidth: 2.5 },
    },
    {
      id: 'e2',
      source: 'core',
      target: 'merchant',
      sourceHandle: 'out-right',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#f59e0b', strokeWidth: 2.5 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#f59e0b' },
    },
    {
      id: 'e3',
      source: 'redeem',
      target: 'core',
      targetHandle: 'in-top',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#fbbf24', strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#fbbf24' },
    },
    {
      id: 'e4',
      source: 'exchange',
      target: 'core',
      targetHandle: 'in-top',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#a78bfa', strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#a78bfa' },
    },
    {
      id: 'e5',
      source: 'direct',
      target: 'core',
      targetHandle: 'in-top',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#34d399', strokeWidth: 1.5 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#34d399' },
    },
  ], []);

  const nodeTypes = useMemo(() => ({
    inputNode: InputNode,
    coreNode: CoreNode,
    serviceNode: ServiceNode,
    destinationNode: DestinationNode,
  }), []);

  return (
    <div className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-sans font-bold text-[#081229] mb-4 md:mb-6">
            How Vants{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6851FF] to-indigo-400">
              pays for you
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Tap to pay. Vants figures out the best way to settle — you just go.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative w-full h-[380px] md:h-[480px] lg:h-[560px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Header bar */}
          <div className="absolute top-0 left-0 right-0 h-9 bg-white border-b border-slate-200 flex items-center px-4 justify-between z-10">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] text-emerald-500 font-medium font-sans">LIVE</span>
              <span className="hidden md:block text-[10px] font-sans text-slate-400 ml-2">PAYMENT_FLOW</span>
            </div>
          </div>

          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.15, minZoom: 0.5, maxZoom: 1.5 }}
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
            <Background color="#6851FF" gap={24} size={1} className="opacity-[0.04]" />
          </ReactFlow>
        </div>

        {/* Legend */}
        <div className="mt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-sans text-slate-400 px-2">
          <span className="text-slate-400">// Payment routing is automatic and instant</span>
          <div className="flex gap-5">
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-400" /><span>Redeem Earnings</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-violet-400" /><span>Currency Exchange</span></div>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-400" /><span>Direct Transfer</span></div>
          </div>
          <span className="text-emerald-500 font-medium">✓ Settled in under 5 seconds</span>
        </div>
      </div>
    </div>
  );
};
