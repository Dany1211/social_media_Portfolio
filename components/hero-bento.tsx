"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, TrendingUp, Users, Play, Calendar } from "lucide-react"

export function HeroBento() {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">

            {/* Block 1: Headline (Large, Top Left) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 md:row-span-2 bg-background border-2 border-primary rounded-xl p-8 flex flex-col justify-center relative overflow-hidden group hover:shadow-[8px_8px_0px_0px_var(--color-primary)] transition-all duration-300"
            >
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border border-primary-foreground">
                    Available for Hire
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mt-8">
                    SOCIAL <span className="text-primary">MEDIA</span> THAT <span className="italic decoration-wavy underline decoration-accent">CONVERTS.</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground font-medium max-w-md">
                    Stop posting into the void. I build data-driven content strategies that actually grow your revenue.
                </p>
            </motion.div>

            {/* Block 2: Profile Image (Top Right) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-1 md:row-span-2 bg-accent border-2 border-foreground rounded-xl overflow-hidden relative group"
            >
                <img
                    src="/heroImg.jpg"
                    alt="Snehal Profile"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t-2 border-foreground p-4">
                    <p className="font-bold text-lg">Snehal Patil</p>
                    <p className="text-xs text-muted-foreground">Top 1% Social Strategist</p>
                </div>
            </motion.div>

            {/* Block 3: Stats (Middle Right) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-1 md:row-span-1 bg-secondary border-2 border-foreground rounded-xl p-6 flex flex-col justify-between hover:translate-y-[-4px] transition-transform"
            >
                <div className="flex justify-between items-start">
                    <div className="bg-primary/20 p-2 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold bg-foreground text-background px-2 py-1 rounded">+24%</span>
                </div>
                <div>
                    <p className="text-4xl font-black">1.2M+</p>
                    <p className="text-sm font-bold text-muted-foreground uppercase">Accounts Reached</p>
                </div>
            </motion.div>

            {/* Block 4: Ticker (Bottom, Wide) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-3 md:row-span-1 bg-foreground text-background border-2 border-foreground rounded-xl flex items-center overflow-hidden relative"
            >
                <div className="absolute inset-0 flex items-center animate-marquee whitespace-nowrap">
                    {Array(5).fill("STRATEGY • CONTENT CREATION • LEAD GENERATION • BRANDING • ANALYTICS • ").map((text, i) => (
                        <span key={i} className="text-4xl md:text-5xl font-black mx-4 opacity-50">{text}</span>
                    ))}
                </div>
            </motion.div>

            {/* Block 5: CTA (Bottom Right) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:col-span-1 md:row-span-1 bg-primary border-2 border-foreground rounded-xl p-6 flex flex-col justify-center items-center text-center cursor-pointer group hover:bg-primary/90 transition-colors"
            >
                <Link href="#contact" className="flex flex-col items-center gap-4 w-full h-full justify-center">
                    <div className="bg-background border-2 border-foreground p-3 rounded-full group-hover:rotate-45 transition-transform duration-300">
                        <ArrowUpRight className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                        <p className="text-2xl font-black text-primary-foreground">BOOK A CALL</p>
                        <p className="text-xs font-bold text-primary-foreground/80">Let's explode your growth</p>
                    </div>
                </Link>
            </motion.div>

        </div>
    )
}
