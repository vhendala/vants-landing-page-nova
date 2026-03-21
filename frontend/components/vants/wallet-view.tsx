"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { RotateCcw, Image, X, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import jsQR from "jsqr"

interface RecentPayee {
  id: string
  name: string
  description: string
  initials: string
  color: string
}

const recentPayees: RecentPayee[] = [
  { id: "cfe", name: "CFE", description: "Service", initials: "CFE", color: "bg-[#00D2FF]" },
  { id: "telmex", name: "Telmex", description: "Telmex", initials: "TM", color: "bg-[#6851FF]" },
  { id: "totalplay", name: "Totalplay", description: "Internet", initials: "TP", color: "bg-[#4CAF50]" },
]

type ScanStatus = "idle" | "requesting" | "scanning" | "denied" | "result"

interface WalletViewProps {
  onPayBill?: () => void
}

export function WalletView({ onPayBill }: WalletViewProps) {
  const [status, setStatus] = useState<ScanStatus>("idle")
  const [qrResult, setQrResult] = useState<string | null>(null)
  const [facingMode, setFacingMode] = useState<"environment" | "user">("environment")

  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animFrameRef = useRef<number>(0)

  const stopCamera = useCallback(() => {
    cancelAnimationFrame(animFrameRef.current)
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    setStatus("idle")
  }, [])

  const scanFrame = useCallback(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
      animFrameRef.current = requestAnimationFrame(scanFrame)
      return
    }

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const code = jsQR(imageData.data, imageData.width, imageData.height)

    if (code) {
      setQrResult(code.data)
      setStatus("result")
      stopCamera()
      return
    }

    animFrameRef.current = requestAnimationFrame(scanFrame)
  }, [stopCamera])

  const startCamera = useCallback(async () => {
    setStatus("requesting")
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, aspectRatio: 1 },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
      setStatus("scanning")
      animFrameRef.current = requestAnimationFrame(scanFrame)
    } catch {
      setStatus("denied")
    }
  }, [facingMode, scanFrame])

  const flipCamera = useCallback(() => {
    stopCamera()
    setFacingMode(prev => prev === "environment" ? "user" : "environment")
  }, [stopCamera])

  // Restart when facingMode changes after flip
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animFrameRef.current)
      streamRef.current?.getTracks().forEach(t => t.stop())
    }
  }, [])

  const isScanning = status === "scanning"

  return (
    <div className="flex flex-col h-full">
      {/* Camera area */}
      <div className="relative bg-black overflow-hidden" style={{ minHeight: 320 }}>
        {/* Video feed */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          style={{ minHeight: 320, display: isScanning ? "block" : "none" }}
          muted
          playsInline
        />
        {/* Hidden canvas for QR decoding */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Placeholder when not scanning */}
        {!isScanning && (
          <div className="absolute inset-0 bg-[#060e1f] flex items-center justify-center" style={{ minHeight: 320 }}>
            <div className="w-full h-full opacity-20 bg-gradient-radial from-[#6851FF]/30 to-transparent" />
          </div>
        )}

        {/* Top controls overlay */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-4 z-20">
          <div className="w-10" />
          <div className="flex items-center gap-3">
            <button
              onClick={flipCamera}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:text-white transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:text-white transition-colors">
              <Image className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* QR Viewfinder frame */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-56 h-56">
            {/* Corner brackets */}
            {/* Top-left */}
            <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00D2FF] rounded-tl-sm" />
            {/* Top-right */}
            <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00D2FF] rounded-tr-sm" />
            {/* Bottom-left */}
            <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00D2FF] rounded-bl-sm" />
            {/* Bottom-right */}
            <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00D2FF] rounded-br-sm" />

            {/* Scanning line */}
            {isScanning && (
              <span className="scan-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent shadow-[0_0_8px_2px_rgba(0,210,255,0.6)]" />
            )}

            {/* Dim overlay outside frame (4 quadrants) */}
            <div className="absolute inset-0 border border-transparent"
              style={{ boxShadow: "0 0 0 9999px rgba(0,0,0,0.55)" }} />
          </div>
        </div>

        {/* Result overlay */}
        {status === "result" && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-30 gap-3 px-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4CAF50]">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>
            <p className="text-white font-bold text-lg">QR Detected!</p>
            <p className="text-[#8F9BBA] text-sm text-center font-mono break-all line-clamp-3">{qrResult}</p>
            <Button
              size="sm"
              onClick={() => { setStatus("idle"); setQrResult(null) }}
              className="mt-2 bg-[#6851FF] hover:bg-[#5842e6] text-white rounded-lg"
            >
              Scan Again
            </Button>
          </div>
        )}

        {/* Scanning indicator text */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20">
          <p className="text-white/80 text-sm">
            {status === "denied"
              ? "Camera access denied"
              : status === "result"
              ? ""
              : "Center the QR code within the frame"}
          </p>
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="flex-1 bg-background rounded-t-3xl -mt-4 relative z-20 px-5 pt-6 pb-8">
        {/* Drag handle */}
        <div className="w-10 h-1 rounded-full bg-border mx-auto mb-6" />

        {/* Section title */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-foreground">Pay a Bill</h2>
          <button
            className="text-[#00D2FF] text-sm font-semibold mt-1 hover:text-[#00D2FF]/80 transition-colors"
            onClick={onPayBill}
          >
            Or enter CLABE/Pix manually
          </button>
        </div>

        {/* CTA Button */}
        <Button
          onClick={isScanning ? stopCamera : startCamera}
          disabled={status === "requesting"}
          className="w-full h-12 rounded-xl font-bold text-base bg-[#6851FF] hover:bg-[#5842e6] text-white gap-2 mb-7"
        >
          {status === "requesting" && (
            <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          )}
          {status === "scanning" ? (
            <>
              <X className="h-5 w-5" />
              Stop Scanning
            </>
          ) : status === "requesting" ? (
            "Requesting Camera…"
          ) : (
            <>
              {/* QR icon */}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <path d="M14 14h2v2h-2zM18 14h3v2h-3zM14 18h2v3h-2zM18 18h3v3h-3z" fill="currentColor" stroke="none" />
              </svg>
              Ready to Scan
            </>
          )}
        </Button>

        {/* Recent Payees */}
        <div>
          <h3 className="text-base font-bold text-foreground mb-4">Recent Payees</h3>
          <div className="flex flex-col gap-1">
            {recentPayees.map((payee) => (
              <button
                key={payee.id}
                onClick={onPayBill}
                className="flex items-center gap-4 rounded-xl p-3 hover:bg-card transition-colors text-left w-full"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-full ${payee.color} text-white text-xs font-bold flex-shrink-0`}>
                  {payee.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{payee.name}</p>
                  <p className="text-sm text-muted-foreground">{payee.description}</p>
                </div>
                <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
