"use client"

import { Landmark, Coins } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const pools = [
  {
    id: "usdc",
    name: "USDC POOL",
    icon: Landmark,
    apy: "8.2%",
    value: "$1,200.23",
    iconBg: "bg-[#00D2FF]/20",
    iconColor: "text-[#00D2FF]",
  },
  {
    id: "xlm",
    name: "XLM POOL",
    icon: Coins,
    apy: "12.1%",
    value: "$340.00",
    iconBg: "bg-[#ECC94B]/20",
    iconColor: "text-[#ECC94B]",
  },
]

export function InvestmentPools() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Active Pools</h2>
        <button className="text-sm font-semibold text-[#00D2FF] hover:text-[#00D2FF]/80 transition-colors uppercase tracking-wider">
          Manage
        </button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {pools.map((pool) => (
          <div
            key={pool.id}
            className="flex-shrink-0 w-44 rounded-xl bg-card border border-border p-4 hover:border-[#00D2FF]/30 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${pool.iconBg}`}>
                <pool.icon className={`h-5 w-5 ${pool.iconColor}`} />
              </div>
              <Badge className="bg-[#4CAF50]/20 text-[#4CAF50] border-0 text-xs font-bold font-mono">
                {pool.apy} APY
              </Badge>
            </div>
            
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              {pool.name}
            </p>
            {/* Monospace for all balances and financial data */}
            <p className="mt-1 text-xl font-bold text-foreground font-mono">
              {pool.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
