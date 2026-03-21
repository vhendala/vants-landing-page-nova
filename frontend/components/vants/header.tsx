"use client"

import { Bell, Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center">
        <span className="text-xl font-bold text-foreground uppercase tracking-widest">
          VANTS
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-muted-foreground hover:text-foreground hover:bg-card rounded-lg"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground hover:bg-card rounded-lg"
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        
        <Avatar className="h-9 w-9 border-2 border-[#00D2FF]">
          <AvatarImage src="/avatar.png" alt="User" />
          <AvatarFallback className="bg-card text-foreground text-sm font-semibold">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
