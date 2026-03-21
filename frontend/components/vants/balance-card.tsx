"use client"

import { TrendingUp, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BalanceCard() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card p-6 text-foreground border border-[#6851FF]/30">
      {/* Subtle accent glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#6851FF]/10 blur-3xl" />
      
      <div className="relative z-10">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Total Portfolio Value
        </p>
        {/* Monospace font for financial data - MANDATORY */}
        <p className="mt-2 text-5xl font-bold tracking-tight font-mono text-foreground">
          $1,740.23
        </p>
        
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-foreground/10 px-3 py-2 backdrop-blur-sm">
          <TrendingUp className="h-4 w-4 text-[#4CAF50]" />
          <span className="text-sm font-medium font-mono">
            <span className="text-[#4CAF50]">+$12.47 (0.72%)</span>
            <span className="text-muted-foreground ml-1">/ 30d</span>
          </span>
        </div>
        
        <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Total Yield
            </p>
            {/* Monospace for all balances */}
            <p className="mt-1 text-2xl font-bold font-mono text-foreground">$47.82</p>
          </div>
          
          <Button
            size="sm"
            className="bg-foreground/15 hover:bg-foreground/25 text-foreground border border-border backdrop-blur-sm rounded-lg font-semibold"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Reports
          </Button>
        </div>
      </div>
    </div>
  )
}
