"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Briefcase, Mail, PenTool, Twitter, Linkedin, Instagram } from "lucide-react"

export function FloatingNav() {
    const navItems = [
        { name: "Home", icon: <Home className="w-5 h-5" />, href: "#" },
        { name: "Work", icon: <Briefcase className="w-5 h-5" />, href: "#work" },
        { name: "Services", icon: <PenTool className="w-5 h-5" />, href: "#services" },
        { name: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" },
    ]

    const socialItems = [
        { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com" },
        { name: "Twitter", icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
        { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com" },
    ]

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8"
        >
            {/* Navigation Pill */}
            <div className="glass-panel rounded-full px-2 py-6 flex flex-col gap-6 items-center shadow-xl border border-border/50 bg-background/50 backdrop-blur-md">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                    >
                        {item.icon}

                        {/* Tooltip */}
                        <span className="absolute left-10 ml-4 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
                            {item.name}
                        </span>
                    </Link>
                ))}

                <div className="w-6 h-[1px] bg-border" />

                {socialItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                    >
                        {item.icon}
                    </Link>
                ))}
            </div>
        </motion.div>
    )
}
