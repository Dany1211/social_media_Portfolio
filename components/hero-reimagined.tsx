"use client"

import Link from "next/link"
import { ArrowUpRight, Sparkles, Star, TrendingUp } from "lucide-react"

export function HeroReimagined() {
    return (
        <section id="home" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center bg-background overflow-x-hidden pt-12 md:pt-0 pb-12 md:pb-0">

            {/* BACKGROUND NOISE & GRID */}
            <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

            {/* MAIN CONTAINER */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4 md:gap-16 h-full justify-center">

                {/* LEFT COLUMN: TYPOGRAPHY & INTRO */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 relative z-20">

                    {/* HI, I AM SNEHAL */}
                    <div className="flex items-center gap-4 mb-2 animate-slide-up">
                        <div className="h-[2px] w-12 bg-primary"></div>
                        <h3 className="text-xl md:text-2xl font-black tracking-widest uppercase">Hi, I am Snehal</h3>
                    </div>

                    {/* MASSIVE GLITCH HEADLINE */}
                    {/* MASSIVE HEADLINE RE-DESIGN */}
                    <h1 className="flex flex-col items-center md:items-start font-black leading-[0.85] tracking-tighter mb-4 w-full">
                        {/* LETS BUILD - Forced Single Line */}
                        <div className="text-4xl md:text-7xl lg:text-[6rem] text-foreground flex flex-nowrap whitespace-nowrap gap-2 md:gap-4">
                            LET'S <span className="text-foreground">BUILD</span>
                        </div>

                        {/* YOUR BRAND - Block Highlight */}
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 mt-1 md:mt-2">
                            <span className="text-4xl md:text-7xl lg:text-[6rem] text-foreground">YOUR</span>
                            <span className="text-4xl md:text-7xl lg:text-[6rem] bg-primary text-foreground px-2 md:px-4 -rotate-2 inline-block shadow-[4px_4px_0px_0px_var(--color-foreground)] md:shadow-[6px_6px_0px_0px_var(--color-foreground)]">
                                BRAND
                            </span>
                        </div>
                    </h1>

                    <p className="text-base md:text-lg font-medium text-muted-foreground max-w-lg mb-4 leading-relaxed animate-fade-in text-center md:text-left" style={{ animationDelay: "0.2s" }}>
                        Stop posting into the void. I build <span className="text-foreground font-black bg-primary/20 px-1">data driven</span> strategies that turn followers into revenue-generating assets.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
                        <Link
                            href="#contact"
                            className="group relative px-8 py-4 bg-foreground text-background font-black text-xl uppercase tracking-widest overflow-hidden border-2 border-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex justify-center items-center"
                        >
                            <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative flex items-center gap-2 group-hover:text-foreground">
                                Book a Call <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </Link>

                        <Link
                            href="#work"
                            className="px-8 py-4 bg-background text-foreground font-bold text-xl uppercase tracking-widest border-2 border-foreground hover:bg-secondary transition-colors text-center flex justify-center items-center"
                        >
                            View Work
                        </Link>
                    </div>
                </div>

                {/* RIGHT COLUMN: VISUALS (CSS ONLY ANIMATIONS) */}
                <div className="flex-1 relative order-1 md:order-2 w-full max-w-[500px] md:max-w-none flex justify-center items-center">

                    {/* MAIN PORTRAIT CARD */}
                    <div className="relative w-[220px] h-[280px] md:w-[400px] md:h-[530px] border-4 border-foreground bg-secondary shadow-[8px_8px_0px_0px_var(--color-foreground)] md:shadow-[12px_12px_0px_0px_var(--color-foreground)] -rotate-2 hover:rotate-0 transition-transform duration-500 will-change-transform z-10 group">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>

                        {/* Image using standard img tag for simplicity within this constraint, or Next Image if preferred, but img is fine here for the glitch effect context */}
                        <img
                            src="/heroImg.jpg"
                            alt="Snehal Social Media Manager"
                            className="w-full h-full object-cover select-none"
                            style={{ objectPosition: "top" }}
                        />

                        {/* CORNER ACCENTS */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-foreground"></div>
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-foreground"></div>
                    </div>

                    {/* DECORATIVE ELEMENTS (CSS ONLY, NO JS SCROLL) - Kept Reach Stats only */}
                    <div className="absolute bottom-20 -left-4 md:-left-12 bg-accent text-foreground border-2 border-foreground p-3 shadow-[4px_4px_0px_0px_var(--color-foreground)] rotate-12 hidden md:block animate-float" style={{ animationDelay: "2s" }}>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            <span className="font-black text-xl">1.1M+</span>
                        </div>
                        <p className="text-xs font-bold uppercase">Reach Generated</p>
                    </div>

                </div>

            </div>

            {/* MARQUEE FOOTER */}
            <div className="absolute bottom-0 left-0 w-full border-t-2 border-foreground bg-background py-2 overflow-hidden z-20">
                <div className="whitespace-nowrap animate-marquee flex items-center">
                    {Array(10).fill("").map((_, i) => (
                        <span key={i} className="text-lg font-bold uppercase tracking-widest mx-8 opacity-50 flex items-center gap-4">
                            Strategy <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Content <span className="w-2 h-2 bg-primary rounded-full"></span>
                            Growth <span className="w-2 h-2 bg-primary rounded-full"></span>
                        </span>
                    ))}
                </div>
            </div>

        </section>
    )
}
