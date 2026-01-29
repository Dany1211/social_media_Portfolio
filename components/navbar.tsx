"use client"

import { useState } from "react"
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
    { name: "IG", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
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
        } else if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" })
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
                    className="bg-background border-2 border-foreground px-6 py-3 flex items-center gap-8 shadow-[4px_4px_0px_0px_var(--color-foreground)]"
                >
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className="group relative flex items-center justify-center p-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-transparent hover:border-foreground"
                            >
                                {item.icon}
                                <span className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background px-2 py-1 text-xs font-bold uppercase whitespace-nowrap border-2 border-background shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="w-[2px] h-6 bg-foreground opacity-20" />

                    <div className="flex items-center gap-4">
                        {socialItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                className="text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-transform"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* MOBILE NAV (Fixed Bottom Bar) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                {/* Visual "Command Bar" */}
                {/* Visual "Command Bar" */}
                <div className="bg-background border-t-2 border-foreground p-3 grid grid-cols-6 items-center shadow-[0px_-4px_0px_0px_rgba(0,0,0,0.1)] gap-1">

                    {/* Brand / Home */}
                    <div className="col-span-1 flex justify-center">
                        <Link href="#home" onClick={(e) => handleScroll(e, "#home")} className="bg-primary p-2 border-2 border-foreground shadow-[2px_2px_0px_0px_var(--color-foreground)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
                            <Home className="w-5 h-5 text-foreground" />
                        </Link>
                    </div>

                    {/* Quick Action Links (Middle) */}
                    <div className="col-span-4 flex justify-between gap-1 px-2">
                        <Link href="#experience" onClick={(e) => handleScroll(e, "#experience")} className="flex flex-col items-center gap-1 group min-w-[50px]">
                            <Star className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-[9px] font-bold uppercase truncate">Exp</span>
                        </Link>
                        <Link href="#services" onClick={(e) => handleScroll(e, "#services")} className="flex flex-col items-center gap-1 group min-w-[50px]">
                            <Zap className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-[9px] font-bold uppercase truncate">Services</span>
                        </Link>
                        <Link href="#work" onClick={(e) => handleScroll(e, "#work")} className="flex flex-col items-center gap-1 group min-w-[50px]">
                            <FolderOpen className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-[9px] font-bold uppercase truncate">Proof</span>
                        </Link>
                        <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="flex flex-col items-center gap-1 group min-w-[50px]">
                            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-[9px] font-bold uppercase truncate">Contact</span>
                        </Link>
                    </div>

                    {/* Menu Toggle (Right) */}
                    <div className="col-span-1 flex justify-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-foreground text-background p-2 border-2 border-transparent active:scale-95 transition-transform"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* FULL SCREEN MENU OVERLAY (Creative) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 90% 90%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 90% 90%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 90% 90%)" }}
                        transition={{ duration: 0.5, ease: "circIn" }}
                        className="fixed inset-0 z-[60] bg-foreground flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-12 border-b-2 border-background/20 pb-4">
                            <span className="text-background font-black text-2xl tracking-tighter uppercase">Menu</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-foreground p-2 border-2 border-background shadow-[4px_4px_0px_0px_var(--color-background)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8 flex-1 justify-center items-start pl-8">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    className="group flex items-center gap-4 text-5xl md:text-7xl font-black uppercase text-background hover:text-primary transition-colors"
                                >
                                    <span className="text-sm font-mono text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all">0{i + 1}</span>
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex gap-4 justify-center mt-auto pb-8 border-t-2 border-background/20 pt-8">
                            {socialItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="bg-background text-foreground p-4 border-2 border-transparent hover:bg-primary hover:scale-110 transition-all rounded-full"
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
