"use client"

import { useState } from "react"
import { ArrowLeft, Zap, Wallet, ArrowLeftRight, CreditCard, Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PaymentViewProps {
  onBack: () => void
}

type PaymentSource = "vault" | "swap" | "direct"

const paymentSources = [
  {
    id: "vault" as const,
    name: "Unwind Vault",
    description: "Withdraw from USDC Blend Pool",
    fee: "$0.70",
    icon: Wallet,
    recommended: true,
  },
  {
    id: "swap" as const,
    name: "Swap Asset",
    description: "Swap 680 XLM → USDC",
    fee: "$1.25",
    icon: ArrowLeftRight,
    recommended: false,
  },
  {
    id: "direct" as const,
    name: "Direct Pay",
    description: "USDC Balance",
    fee: "$2.00",
    icon: CreditCard,
    recommended: false,
  },
]

export function PaymentView({ onBack }: PaymentViewProps) {
  const [selectedSource, setSelectedSource] = useState<PaymentSource>("vault")
  const [isPaid, setIsPaid] = useState(false)

  const selectedPayment = paymentSources.find(s => s.id === selectedSource)
  const networkFee = selectedPayment?.fee || "$0.70"
  const total = selectedSource === "vault" ? "$100.70" : selectedSource === "swap" ? "$101.25" : "$102.00"

  if (isPaid) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        <div className="mx-auto max-w-md w-full flex-1 flex flex-col">
          {/* Header */}
          <header className="flex items-center justify-between px-4 py-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground hover:bg-card rounded-lg h-10 w-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6851FF] font-bold text-white text-sm">
              V
            </div>
            <div className="w-10" />
          </header>

          {/* Success Content */}
          <main className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#4CAF50] mb-6">
              <Check className="h-12 w-12 text-white" strokeWidth={3} />
            </div>
            
            <h1 className="text-2xl font-bold text-foreground mb-2">Bill Paid!</h1>
            <p className="text-[#4CAF50] flex items-center gap-2 mb-8 font-semibold">
              <Zap className="h-4 w-4" />
              Settled in 4.2 seconds
            </p>
            
            {/* Monospace for financial amounts */}
            <p className="text-5xl font-bold text-foreground font-mono mb-1">$100.00</p>
            <p className="text-xl text-muted-foreground font-mono">1,850.00 MXN</p>
            
            <div className="mt-8 rounded-lg bg-card border border-border px-5 py-3">
              <p className="text-sm text-[#00D2FF] flex items-center gap-2 font-semibold">
                <span className="text-[#4CAF50]">↗</span>
                Remaining balance earning <span className="font-mono">8.2%</span> APY
              </p>
            </div>

            {/* Payment Details Card */}
            <div className="mt-8 w-full rounded-xl bg-card border border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6851FF]/20">
                  <CreditCard className="h-5 w-5 text-[#6851FF]" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">PAID FROM</p>
                  <p className="font-semibold text-foreground">Vants Yield Account</p>
                  <p className="text-sm text-muted-foreground font-mono">••84</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">STATUS</p>
                  <p className="text-sm font-bold text-[#4CAF50] uppercase tracking-wider">Confirmed</p>
                </div>
              </div>
            </div>
          </main>

          {/* Bottom Actions */}
          <div className="px-4 pb-8 flex flex-col gap-3">
            <Button
              onClick={onBack}
              className="w-full h-14 bg-[#6851FF] hover:bg-[#5842e6] text-white font-bold text-base rounded-xl"
            >
              Done
            </Button>
            <Button
              variant="outline"
              className="w-full h-14 bg-transparent border-border text-foreground hover:bg-card font-bold text-base rounded-xl"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share Receipt
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground hover:bg-card rounded-lg h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <span className="text-sm font-bold text-foreground uppercase tracking-widest">Review Payment</span>
          <div className="w-10" />
        </header>

        {/* Payment Amount */}
        <div className="text-center px-4 py-6">
          {/* Monospace for payment amount */}
          <h1 className="text-3xl font-bold text-foreground font-mono">Pay $100.00 USD</h1>
          <p className="mt-2 text-[#00D2FF] font-mono">≈ 1,850.00 MXN via SPEI</p>
        </div>

        {/* Main Content */}
        <main className="px-4 flex flex-col gap-6">
          {/* Recipient */}
          <section>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">
              RECIPIENT
            </p>
            <div className="flex items-center gap-4 rounded-xl bg-card border border-border p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#ECC94B]/20">
                <Zap className="h-5 w-5 text-[#ECC94B]" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">CFE Electric</p>
                <p className="text-sm text-muted-foreground">Electricity Utility</p>
              </div>
              {/* Monospace for CLABE/account numbers */}
              <p className="text-sm text-muted-foreground font-mono">CLABE ...5678</p>
            </div>
          </section>

          {/* Pay From */}
          <section>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">
              PAY FROM
            </p>
            <div className="flex flex-col gap-3">
              {paymentSources.map((source) => (
                <button
                  key={source.id}
                  onClick={() => setSelectedSource(source.id)}
                  className={`relative flex items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                    selectedSource === source.id
                      ? "border-[#6851FF] bg-[#6851FF]/10 ring-1 ring-[#6851FF]"
                      : "border-border bg-card hover:border-[#6851FF]/50"
                  }`}
                >
                  {source.recommended && (
                    <Badge className="absolute -top-2 right-4 bg-[#6851FF] text-white border-0 text-[10px] font-bold uppercase tracking-wider">
                      Recommended
                    </Badge>
                  )}
                  
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#6851FF]/20">
                    <source.icon className="h-5 w-5 text-[#6851FF]" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{source.name}</p>
                    <p className="text-sm text-muted-foreground">{source.description}</p>
                    {/* Monospace for fees */}
                    <p className="text-sm text-[#00D2FF] font-mono font-semibold">Fee: {source.fee}</p>
                  </div>
                  
                  <div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center ${
                    selectedSource === source.id
                      ? "border-[#6851FF] bg-[#6851FF]"
                      : "border-muted-foreground/30"
                  }`}>
                    {selectedSource === source.id && (
                      <Check className="h-4 w-4 text-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="rounded-xl bg-card border border-border p-4">
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Payment Amount</span>
              {/* Monospace for all amounts */}
              <span className="font-bold text-foreground font-mono">$100.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-muted-foreground">Network Fee</span>
              <span className="font-bold text-foreground font-mono">{networkFee}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-border mt-2 pt-4">
              <span className="font-bold text-foreground">Total</span>
              <span className="font-bold text-[#00D2FF] text-lg font-mono">{total}</span>
            </div>
          </section>

          {/* Confirm Button - Primary action uses Vants Indigo */}
          <Button
            onClick={() => setIsPaid(true)}
            className="w-full h-14 bg-[#6851FF] hover:bg-[#5842e6] text-white font-bold text-base rounded-xl mb-4"
          >
            Confirm Payment
          </Button>
          
          <p className="text-center text-xs text-muted-foreground pb-8">
            By confirming, you authorize Vants to execute the transaction from the selected source.
          </p>
        </main>
      </div>
    </div>
  )
}
