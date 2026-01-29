"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Briefcase, Zap, Mail, Menu, X, Instagram, Twitter, Linkedin } from "lucide-react"

const navItems = [
    { name: "HOME", icon: <Home className="w-5 h-5" />, href: "#" },
    { name: "WORK", icon: <Briefcase className="w-5 h-5" />, href: "#work" },
    { name: "SERVICES", icon: <Zap className="w-5 h-5" />, href: "#services" },
    { name: "CONTACT", icon: <Mail className="w-5 h-5" />, href: "#contact" },
]

const socialItems = [
    { name: "IG", icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com" },
    { name: "TW", icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    { name: "LN", icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* DESKTOP NAV (Visible on md+) */}
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

            {/* MOBILE NAV (Visible on sm) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4">
                <div className="bg-background border-t-2 border-x-2 border-foreground p-4 flex justify-between items-center shadow-[0px_-4px_0px_0px_rgba(0,0,0,0.1)]">
                    <Link href="#" className="font-black text-xl tracking-tighter uppercase">
                        SNEHAL<span className="text-primary">.WORLD</span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-foreground text-background p-2 active:scale-95 transition-transform"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col p-6"
                    >
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-primary-foreground p-2 border-2 border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 flex-1 justify-center items-center">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-5xl font-black uppercase text-foreground hover:text-primary transition-colors hover:scale-105 active:scale-95"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex gap-6 justify-center mt-auto pb-8">
                            {socialItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="bg-secondary p-4 border-2 border-foreground hover:-translate-y-2 transition-transform shadow-[4px_4px_0px_0px_var(--color-foreground)]"
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
