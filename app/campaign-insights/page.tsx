"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap } from "lucide-react"
import { useRef } from "react"

const campaigns = [
    "/campaigns/campaignsFirst/campaign1.jpeg",
    "/campaigns/campaignsFirst/campaign2.jpeg",
    "/campaigns/campaignsFirst/campaign3.jpeg",
    "/campaigns/campaignsFirst/campaign4.jpeg",
    "/campaigns/campaignsFirst/campaign5.jpeg",
    "/campaigns/campaignsFirst/campaign6.jpeg",
]

export default function CampaignInsightsPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollXProgress } = useScroll({ container: containerRef })

    return (
        <main className="h-screen w-full bg-background text-foreground overflow-hidden flex flex-col p-4 md:p-8">
            {/* HEADER */}
            <div className="flex-none max-w-7xl w-full mx-auto mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div>
                    <Link
                        href="/"
                        className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:-translate-x-2 transition-transform duration-300 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5 border-2 border-foreground rounded-full p-0.5 group-hover:bg-foreground group-hover:text-background transition-colors" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        CAMPAIGN <span className="text-primary text-stroke-foreground">INSIGHTS</span>
                    </h1>
                </div>

                <div className="hidden md:flex -rotate-2 bg-white border-2 border-foreground p-3 shadow-[4px_4px_0px_0px_var(--color-foreground)] max-w-xs items-center gap-3">
                    <div className="bg-yellow-400 p-2 rounded-full text-foreground border border-foreground">
                        <Zap className="w-5 h-5" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg text-xs font-mono font-medium text-muted-foreground border border-foreground/10">
                        Viral hits & creative wins.
                    </div>
                </div>
            </div>

            {/* CAROUSEL CONTAINER */}
            <div className="flex-1 w-full max-w-7xl mx-auto min-h-0 relative group/carousel">

                {/* Scroll Progress Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-secondary border-b border-foreground mb-4 z-10 mx-4">
                    <motion.div
                        className="h-full bg-primary"
                        style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
                    />
                </div>

                <div
                    ref={containerRef}
                    className="h-full w-full overflow-x-auto flex items-center gap-8 px-8 snap-x snap-mandatory pb-8 pt-6 hide-scrollbar"
                >
                    {campaigns.map((src, index) => (
                        <motion.div
                            key={index}
                            className="snap-center flex-none w-[85vw] md:w-[400px] aspect-[9/16] relative perspective-1000 group/card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={`
                                w-full h-full relative bg-secondary border-2 border-foreground p-1.5 
                                shadow-[4px_4px_0px_0px_var(--color-foreground)] 
                                transition-all duration-300 
                                group-hover/card:shadow-[8px_8px_0px_0px_var(--color-foreground)] 
                                group-hover/card:-translate-y-2
                                flex flex-col
                            `}>
                                {/* Browser Header */}
                                <div className="flex-none bg-background border-b-2 border-foreground p-1.5 mb-1.5 flex items-center gap-1.5">
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500 border border-foreground"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 border border-foreground"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500 border border-foreground"></div>
                                    </div>
                                    <div className="flex-1 bg-white border border-foreground rounded px-1.5 py-0.5 text-[8px] font-mono text-center overflow-hidden text-ellipsis whitespace-nowrap">
                                        campaign_insight_{index + 1}.pdf
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 relative overflow-hidden bg-white border border-foreground/10 group-hover/card:bg-gray-50 transition-colors">
                                    <img
                                        src={src}
                                        alt={`Campaign Insight ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover p-1 group-hover/card:scale-105 transition-transform duration-500"
                                    />

                                    {/* Overlay Info (visible on hover) */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none flex items-end justify-center p-4">
                                        <div className="bg-white border-2 border-foreground px-3 py-1 shadow-[2px_2px_0px_0px_var(--color-foreground)] -rotate-2">
                                            <span className="font-bold font-mono text-[10px] uppercase">View Case Study</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* End Spacer */}
                    <div className="flex-none w-8"></div>
                </div>
            </div>
        </main>
    )
}
