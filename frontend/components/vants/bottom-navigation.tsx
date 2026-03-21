"use client"

import { LayoutGrid, Wallet, TrendingUp, Settings } from "lucide-react"

type View = "home" | "wallet" | "yield" | "profile" | "invest"

interface BottomNavigationProps {
  activeView: View
  onViewChange: (view: View) => void
}

const navItems = [
  { id: "home" as const, icon: LayoutGrid, label: "Overview" },
  { id: "wallet" as const, icon: Wallet, label: "Assets" },
  { id: "yield" as const, icon: TrendingUp, label: "Markets" },
  { id: "profile" as const, icon: Settings, label: "Settings" },
]

export function BottomNavigation({ activeView, onViewChange }: BottomNavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-around bg-card/95 backdrop-blur-lg border-t border-border px-2 py-3 safe-bottom">
          {navItems.map((item) => {
            const isActive = activeView === item.id
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  isActive ? "bg-accent/10" : ""
                }`}>
                  <item.icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider">
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
