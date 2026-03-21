"use client"

import { Receipt, Plus, ArrowLeftRight } from "lucide-react"

interface QuickActionsProps {
  onPayBill?: () => void
}

export function QuickActions({ onPayBill }: QuickActionsProps) {
  const actions = [
    {
      icon: Receipt,
      label: "PAY BILL",
      onClick: onPayBill,
      active: true,
    },
    {
      icon: Plus,
      label: "ADD FUNDS",
      onClick: () => {},
      active: false,
    },
    {
      icon: ArrowLeftRight,
      label: "SWAP",
      onClick: () => {},
      active: false,
    },
  ]

  return (
    <div className="flex justify-center gap-6">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={action.onClick}
          className="group flex flex-col items-center gap-2"
        >
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-xl transition-all ${
              action.active
                ? "bg-[#00D2FF] text-[#081229] shadow-lg shadow-[#00D2FF]/20"
                : "bg-[#151E32] text-[#8F9BBA] hover:bg-[#1a2540] border border-white/5"
            }`}
          >
            <action.icon className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-bold text-[#8F9BBA] group-hover:text-white transition-colors uppercase tracking-wider">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  )
}
