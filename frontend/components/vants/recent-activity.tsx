"use client"

import { Zap, ArrowDownLeft, Droplets } from "lucide-react"

const transactions = [
  {
    id: 1,
    title: "CFE Electric Bill",
    date: "Mar 15",
    type: "Bill Payment",
    amount: "-$85.00",
    status: "COMPLETED",
    icon: Zap,
    iconBg: "bg-[#ECC94B]/20",
    iconColor: "text-[#ECC94B]",
    isNegative: true,
  },
  {
    id: 2,
    title: "ACH Deposit",
    date: "Mar 12",
    type: "Incoming",
    amount: "+$250.00",
    status: "COMPLETED",
    icon: ArrowDownLeft,
    iconBg: "bg-[#4CAF50]/20",
    iconColor: "text-[#4CAF50]",
    isNegative: false,
  },
  {
    id: 3,
    title: "Water Service",
    date: "Mar 10",
    type: "Bill Payment",
    amount: "-$32.10",
    status: "COMPLETED",
    icon: Droplets,
    iconBg: "bg-[#00D2FF]/20",
    iconColor: "text-[#00D2FF]",
    isNegative: true,
  },
]

export function RecentActivity() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground mb-4">Transaction History</h2>
      
      <div className="flex flex-col gap-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center gap-4 rounded-xl bg-card border border-border p-4 hover:border-[#00D2FF]/20 transition-colors cursor-pointer"
          >
            <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${tx.iconBg}`}>
              <tx.icon className={`h-5 w-5 ${tx.iconColor}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{tx.title}</p>
              <p className="text-sm text-muted-foreground">{tx.date} • {tx.type}</p>
            </div>
            
            <div className="text-right">
              {/* Monospace for all financial data */}
              <p className={`font-bold font-mono ${tx.isNegative ? "text-foreground" : "text-[#4CAF50]"}`}>
                {tx.amount}
              </p>
              <p className="text-[10px] font-bold text-[#4CAF50] uppercase tracking-wider">{tx.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
