"use client"

import { Filter, Landmark, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const positions = [
  {
    id: "usdc",
    name: "USDC Blend Pool",
    apy: "8.2%",
    icon: Landmark,
  },
  {
    id: "xlm",
    name: "XLM Blend Pool",
    apy: "12.1%",
    icon: Rocket,
  },
]

const strategies = [
  {
    id: "btc",
    name: "BTC Alpha Yield",
    risk: "LOW RISK",
    riskColor: "bg-[#4CAF50]/20 text-[#4CAF50]",
    tvl: "$42.5M",
    apy: "14.2%",
    apyColor: "text-[#00D2FF]",
    icon: "BTC",
    iconBg: "bg-[#ECC94B]/20 text-[#ECC94B]",
  },
  {
    id: "eth",
    name: "ETH Liquid Staking",
    risk: "MEDIUM RISK",
    riskColor: "bg-[#ECC94B]/20 text-[#ECC94B]",
    tvl: "$128.1M",
    apy: "18.5%",
    apyColor: "text-[#00D2FF]",
    icon: "ETH",
    iconBg: "bg-[#00D2FF]/20 text-[#00D2FF]",
  },
  {
    id: "sol",
    name: "SOL High Frequency",
    risk: "HIGH RISK",
    riskColor: "bg-red-500/20 text-red-400",
    tvl: "$8.2M",
    apy: "34.9%",
    apyColor: "text-[#00D2FF]",
    icon: "SOL",
    iconBg: "bg-[#6851FF]/20 text-[#6851FF]",
  },
]

export function InvestmentsView() {
  return (
    <main className="px-4 py-4 flex flex-col gap-6">
      {/* Your Positions */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Your Positions</h2>
          <button className="text-sm font-semibold text-[#00D2FF] hover:text-[#00D2FF]/80 transition-colors uppercase tracking-wider">
            View All
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {positions.map((position) => (
            <div
              key={position.id}
              className="flex items-center justify-between rounded-xl bg-card border border-border p-4"
            >
              <div className="flex-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  ACTIVE POSITION
                </p>
                <p className="font-semibold text-foreground">{position.name}</p>
                {/* Monospace for APY */}
                <p className="text-sm text-[#4CAF50] font-bold font-mono">{position.apy} APY</p>
                
                <Button
                  size="sm"
                  className="mt-3 bg-[#00D2FF] hover:bg-[#00D2FF]/90 text-[#081229] font-bold rounded-lg"
                >
                  Manage
                </Button>
              </div>
              
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-background border border-border">
                <position.icon className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Available Strategies */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Available Strategies</h2>
          <button className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="rounded-xl bg-card border border-border p-4"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Icon with monospace font for crypto symbols */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${strategy.iconBg} text-sm font-bold font-mono`}>
                    {strategy.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{strategy.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className={`${strategy.riskColor} border-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5`}>
                        {strategy.risk}
                      </Badge>
                      {/* Monospace for TVL */}
                      <span className="text-xs text-muted-foreground font-mono">TVL: {strategy.tvl}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  {/* Monospace for APY percentage */}
                  <p className={`text-2xl font-bold ${strategy.apyColor} font-mono`}>{strategy.apy}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                    Estimated APY
                  </p>
                </div>
              </div>
              
              {/* Primary action button - Vants Indigo */}
              <Button
                className="w-full bg-[#6851FF] hover:bg-[#5842e6] text-white font-bold rounded-lg"
              >
                Deposit Now
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
