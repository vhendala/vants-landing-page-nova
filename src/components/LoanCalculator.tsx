import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../utils';

const COLLATERAL_OPTIONS = [
  { symbol: 'BTC', name: 'Bitcoin', price: 65000, color: 'text-[#F7931A]' },
  { symbol: 'ETH', name: 'Ethereum', price: 3500, color: 'text-[#627EEA]' },
  { symbol: 'XLM', name: 'Stellar', price: 0.15, color: 'text-white' },
];

const CURRENCY_OPTIONS = [
  { symbol: 'USD', prefix: '$', rate: 1 },
  { symbol: 'BRL', prefix: 'R$', rate: 5.0 },
  { symbol: 'ARS', prefix: '$', rate: 850 },
];

export const LoanCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [collateralType, setCollateralType] = useState(COLLATERAL_OPTIONS[0]);
  const [currency, setCurrency] = useState(CURRENCY_OPTIONS[0]);
  const [viewMode, setViewMode] = useState<'borrow' | 'sell'>('borrow');

  // Derived calculations
  const collateralAmount = (amount / (collateralType.price * currency.rate)) * 2; // Aiming for 50% LTV initially
  const ltv = (amount / (collateralAmount * collateralType.price * currency.rate)) * 100;
  const liquidationPrice = collateralType.price * 0.8; // Simplification
  const apr = 5.5; // Base rate

  // Health factor calculation
  const healthFactor = (100 / ltv) * 0.85; // Simplified formula

  const getHealthStatus = (hf: number) => {
    if (hf > 1.5) return { color: 'text-[#00C853]', bg: 'bg-[#00C853]', text: 'Safe' };
    if (hf > 1.1) return { color: 'text-[#FFAB00]', bg: 'bg-[#FFAB00]', text: 'Moderate' };
    return { color: 'text-[#EB5757]', bg: 'bg-[#EB5757]', text: 'High Risk' };
  };

  const status = getHealthStatus(healthFactor);

  return (
    <div className="relative z-10 w-full max-w-lg mx-auto">
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 transition-opacity opacity-50 group-hover:opacity-70" />

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-sans font-bold text-white">Loan Calculator</h3>
          <div className="flex bg-[#0A192F]/50 p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setViewMode('borrow')}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                viewMode === 'borrow' ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:text-white"
              )}
            >
              Borrow
            </button>
            <button
              onClick={() => setViewMode('sell')}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all",
                viewMode === 'sell' ? "bg-destructive text-white shadow-lg" : "text-muted-foreground hover:text-white"
              )}
            >
              Sell
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">I want to borrow</label>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-mono">
                    {currency.prefix}
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full bg-[#0A192F]/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white font-mono text-lg focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <select
                  className="bg-[#0A192F]/50 border border-white/10 rounded-xl py-3 px-4 text-white font-sans focus:outline-none focus:border-primary/50 cursor-pointer"
                  value={currency.symbol}
                  onChange={(e) => setCurrency(CURRENCY_OPTIONS.find(c => c.symbol === e.target.value) || CURRENCY_OPTIONS[0])}
                >
                  {CURRENCY_OPTIONS.map(c => <option key={c.symbol} value={c.symbol}>{c.symbol}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">My Collateral</label>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 bg-[#0A192F]/50 border border-white/10 rounded-xl py-3 px-4 flex items-center justify-between">
                  <span className="font-mono text-white text-lg">
                    {collateralAmount.toFixed(4)}
                  </span>
                  <span className={cn("font-bold text-sm", collateralType.color)}>
                    {collateralType.symbol}
                  </span>
                </div>
                <select
                  className="bg-[#0A192F]/50 border border-white/10 rounded-xl py-3 px-4 text-white font-sans focus:outline-none focus:border-primary/50 cursor-pointer"
                  value={collateralType.symbol}
                  onChange={(e) => setCollateralType(COLLATERAL_OPTIONS.find(c => c.symbol === e.target.value) || COLLATERAL_OPTIONS[0])}
                >
                  {COLLATERAL_OPTIONS.map(c => <option key={c.symbol} value={c.symbol}>{c.symbol}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Dynamic Analysis Card */}
          <div className="bg-[#0A192F] rounded-2xl p-5 border border-white/5 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {viewMode === 'borrow' ? (
                <motion.div
                  key="borrow-stats"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* LTV Bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">LTV (Loan-to-Value)</span>
                      <span className={status.color}>{ltv.toFixed(1)}% ({status.text})</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={cn("h-full rounded-full transition-colors", status.bg)}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(ltv, 100)}%` }}
                        transition={{ type: "spring", stiffness: 50 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Liquidation Price</div>
                      <div className="text-white font-mono text-sm">
                        ${liquidationPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground mb-1">
                        APR <Info size={12} />
                      </div>
                      <div className="text-[#00C853] font-mono text-sm">{apr}%</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="sell-stats"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <AlertTriangle className="text-destructive shrink-0" size={18} />
                    <div>
                      <h4 className="text-destructive font-bold text-sm mb-1">Capital Gains Tax Event</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Selling triggers a taxable event. You lose future upside potential on {collateralAmount.toFixed(4)} {collateralType.symbol}.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Potential Lost Upside (1y)</span>
                    <span className="text-destructive font-mono">-${(collateralAmount * collateralType.price * 0.5).toLocaleString()}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            variant="primary"
            className="w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 group-hover:shadow-primary/30"
          >
            {viewMode === 'borrow' ? 'Get Instant Liquidity' : 'Proceed to Sell'} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 size={12} className="text-[#00C853]" />
            <span>Powered by Soroban Smart Contracts</span>
          </div>
        </div>
      </div>
    </div>
  );
};
