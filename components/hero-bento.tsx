"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, TrendingUp, Sparkles, Star } from "lucide-react"

export function HeroBento() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])

    return (
        <div className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 bg-background">

            {/* BACKGROUND MASSIVE TEXT (Parallax moving down) */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 flex flex-col justify-center items-center opacity-10 select-none pointer-events-none z-0"
            >
                <h1 className="text-[15vw] md:text-[18vw] font-black leading-none text-foreground text-center tracking-tighter whitespace-nowrap">
                    SOCIAL
                </h1>
                <h1 className="text-[15vw] md:text-[18vw] font-black leading-none text-transparent text-stroke-foreground text-center tracking-tighter whitespace-nowrap">
                    EMPIRE
                </h1>
            </motion.div>

            {/* FOREGROUND LAYOUT */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center">

                {/* LEFT: Intro Text & CTA */}
                <div className="flex-1 text-center md:text-left relative order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-20"
                    >
                        <h3 className="text-xl md:text-2xl font-black text-foreground mb-2 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary inline-block"></span>
                            HI, I AM SNEHAL
                        </h3>
                        <div className="bg-primary text-primary-foreground px-4 py-1 text-sm font-bold uppercase tracking-widest inline-block mb-6 border-2 border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] -rotate-2">
                            Available for Hire
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-foreground uppercase leading-[0.9] tracking-tighter mb-6 relative">
                            Turn <span className="text-primary italic">Followers</span><br />
                            Into <span className="bg-foreground text-background px-2">Revenue</span>
                        </h2>

                        <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-md mb-8 leading-relaxed">
                            Stop posting into the void. I build data-driven content strategies that actually grow your business.
                        </p>

                        <Link href="#contact" className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xl font-black uppercase tracking-wider hover:bg-primary hover:text-foreground hover:scale-105 hover:-rotate-1 hover:shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-all duration-300 border-2 border-foreground group">
                            Book a Call
                            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* CENTER/RIGHT: Portrait Layer (Overlapping) */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex-1 flex justify-center order-1 md:order-2 mb-12 md:mb-0"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] bg-secondary border-4 border-foreground shadow-[12px_12px_0px_0px_var(--color-foreground)] rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                        <img
                            src="/heroImg.jpg"
                            alt="Snehal Profile"
                            className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                        />

                        {/* Floating Badge on Image */}
                        <div className="absolute bottom-6 right-6 bg-primary text-foreground p-3 md:p-4 border-2 border-foreground rounded-full animate-spin-slow">
                            <Sparkles className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                    </div>

                    {/* FLOATING STICKER 1: Stats */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[20%] -left-[10%] md:-left-[20%] bg-background border-2 border-foreground p-4 shadow-[6px_6px_0px_0px_var(--color-foreground)] -rotate-6 hidden md:block"
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            <span className="font-bold text-sm uppercase">Reach</span>
                        </div>
                        <p className="text-3xl font-black">1.2M+</p>
                    </motion.div>

                    {/* FLOATING STICKER 2: Rating */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[10%] -right-[5%] md:-right-[10%] bg-accent text-accent-foreground border-2 border-foreground p-3 shadow-[6px_6px_0px_0px_var(--color-foreground)] rotate-3 hidden md:block"
                    >
                        <div className="flex gap-1 mb-1 justify-center">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="font-black text-center text-sm uppercase">Top 1% Talent</p>
                    </motion.div>
                </motion.div>
            </div>

            {/* BOTTOM MARQUEE BAR */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary border-t-4 border-foreground py-3 overflow-hidden z-20">
                <div className="flex animate-marquee whitespace-nowrap">
                    {Array(8).fill("STRATEGY • CONTENT • ANALYTICS • GROWTH • ").map((text, i) => (
                        <span key={i} className="text-xl md:text-2xl font-black uppercase text-foreground mx-4 italic tracking-widest">{text}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
