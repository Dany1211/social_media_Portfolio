"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Sun, Moon, Palette } from "lucide-react"

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
        // Set default theme to cosmic if not set
        if (!localStorage.getItem("theme")) {
            setTheme("cosmic")
        }
    }, [setTheme])

    if (!mounted) {
        return null
    }

    const themes = [
        { id: "cosmic", name: "Cosmic", icon: <Sparkles className="w-4 h-4" /> },
        { id: "luxury", name: "Luxury", icon: <Sun className="w-4 h-4" /> },
        { id: "minimal", name: "Minimal", icon: <Moon className="w-4 h-4" /> },
        { id: "neo", name: "Neo", icon: <Palette className="w-4 h-4" /> },
    ]

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className="flex flex-col gap-2 bg-background/80 backdrop-blur-md p-2 rounded-xl border border-border shadow-xl mb-2"
                    >
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setTheme(t.id)
                                    setIsOpen(false)
                                }}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${theme === t.id
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {t.icon}
                                {t.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 w-12 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label="Toggle Theme"
            >
                <Palette className="w-5 h-5" />
            </button>
        </div>
    )
}
