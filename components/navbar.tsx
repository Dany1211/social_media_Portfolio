"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Briefcase, Zap, Mail, Menu, X, Instagram, Linkedin, Star, FolderOpen } from "lucide-react"

const navItems = [
    { name: "HOME", icon: <Home className="w-5 h-5" />, href: "#home" },
    { name: "EXPERIENCE", icon: <Star className="w-5 h-5" />, href: "#experience" },
    { name: "SERVICES", icon: <Zap className="w-5 h-5" />, href: "#services" },
    { name: "PROOF", icon: <FolderOpen className="w-5 h-5" />, href: "#work" },
    { name: "CONTACT", icon: <Mail className="w-5 h-5" />, href: "#contact" },
]

const socialItems = [
    { name: "IG", icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/_snehverse_" },
    {
        name: "X",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.966 6.807H2.882l7.432-8.491L1.906 2.25h6.834l4.713 6.231 5.759-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        href: "https://x.com"
    },
    { name: "LN", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    // Scroll Spy Logic
    useEffect(() => {
        const sections = navItems.map(item => item.href.replace("#", ""))

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, { threshold: 0.5 })

        sections.forEach(id => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault()
        setIsOpen(false)
        const targetId = href.replace("#", "")
        const elem = document.getElementById(targetId)
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
            setActiveSection(targetId)
        } else if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" })
            setActiveSection("home")
        }
    }

    return (
        <>
            {/* DESKTOP NAV (Fixed Bottom Floating Capsule) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
                    className="bg-background border-2 border-foreground px-2 py-2 flex items-center gap-2 shadow-[4px_4px_0px_0px_var(--color-foreground)] rounded-full"
                >
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "")
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 group ${isActive ? "text-background" : "text-foreground hover:text-primary"}`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabDesktop"
                                            className="absolute inset-0 bg-foreground rounded-full"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">
                                        {item.icon}
                                    </span>

                                    {/* Tooltip */}
                                    {!isActive && (
                                        <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background px-2 py-1 text-xs font-bold uppercase whitespace-nowrap border-2 border-background shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] pointer-events-none">
                                            {item.name}
                                        </span>
                                    )}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="w-[2px] h-6 bg-foreground opacity-20 mx-2" />

                    <div className="flex items-center gap-2 pr-2">
                        {socialItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-transform p-1"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* MOBILE NAV (Floating Kinetic Dock) */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px] md:hidden">
                <div className="bg-background border-2 border-foreground rounded-full p-2 flex items-center justify-between shadow-[4px_4px_0px_0px_var(--color-foreground)]">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace("#", "")
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="relative flex flex-col items-center justify-center w-full"
                            >
                                <div className={`relative z-10 p-2 rounded-full transition-all duration-300 ${isActive ? "bg-primary text-foreground -translate-y-4 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] scale-110" : "text-muted-foreground hover:text-foreground"}`}>
                                    {item.icon}
                                </div>
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -bottom-1 text-[8px] font-black uppercase tracking-widest text-foreground"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* FULL SCREEN MENU OVERLAY (Keep existing logic mainly for "More" if needed, but simplified since all items are now in bottom bar? 
                Actually, the bottom bar has 5 slots now, replacing the need for a hamburger menu unless there are more pages.
                The previous design had "Menu" button. The user asked to "show current tab". 
                If all 5 fits, we can drop the hamburger. But lets check if 5 fits comfortably.
                Home, Exp, Services, Proof, Contact. That is 5.
                I will replace the old mobile grid with a simple 5-col grid for the main nav items directly.
            */}
        </>
    )
}
