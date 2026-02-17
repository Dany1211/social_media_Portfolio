"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Zap, Pause, Play, ChevronLeft, ChevronRight } from "lucide-react"

const campaigns = [
    "/campaigns/campaignsFirst/campaign1.jpeg",
    "/campaigns/campaignsFirst/campaign2.jpeg",
    "/campaigns/campaignsFirst/campaign3.jpeg",
    "/campaigns/campaignsFirst/campaign4.jpeg",
    "/campaigns/campaignsFirst/campaign5.jpeg",
    "/campaigns/campaignsFirst/campaign6.jpeg",
]

export default function CampaignInsightsPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    // Auto-play effect
    useEffect(() => {
        let interval: NodeJS.Timeout

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % campaigns.length)
            }, 3000)
        }

        return () => clearInterval(interval)
    }, [isPlaying])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % campaigns.length)
        setIsPlaying(false) // Pause on manual interaction
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length)
        setIsPlaying(false)
    }

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
                </div>
            </div>

            {/* SLIDESHOW CONTAINER */}
            <div className="flex-1 w-full max-w-5xl mx-auto min-h-0 flex flex-col items-center justify-center relative">

                {/* Main Frame */}
                {/* Fixed height container to prevent layout shift */}
                <div className="relative w-full max-w-4xl aspect-video bg-secondary border-2 border-foreground shadow-[8px_8px_0px_0px_var(--color-foreground)] overflow-hidden">

                    {/* Browser Header */}
                    <div className="absolute top-0 left-0 right-0 z-20 bg-background border-b-2 border-foreground px-3 py-2 flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 border border-foreground"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 border border-foreground"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-foreground"></div>
                        </div>
                        <div className="flex-1 bg-white border border-foreground rounded px-2 py-1 text-[10px] font-mono flex justify-between items-center">
                            <span className="truncate uppercase font-bold tracking-wider">Women-led growth community growth campaign</span>
                            <span className="text-muted-foreground font-bold">{currentIndex + 1}/{campaigns.length}</span>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="absolute inset-0 top-[42px] z-10 bg-white">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={currentIndex}
                                src={campaigns[currentIndex]}
                                alt={`Campaign Slide ${currentIndex + 1}`}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* Controls */}
                <div className="mt-8 flex items-center justify-center gap-6 w-full">
                    <button
                        onClick={prevSlide}
                        className="p-3 border-2 border-foreground bg-white hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_var(--color-foreground)] active:translate-y-1 active:shadow-none"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="px-6 py-3 border-2 border-foreground bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_var(--color-foreground)] active:translate-y-1 active:shadow-none min-w-[140px] flex items-center justify-center gap-2 font-bold font-mono uppercase tracking-widest text-sm"
                    >
                        {isPlaying ? (
                            <>
                                <Pause className="w-4 h-4" /> Pause
                            </>
                        ) : (
                            <>
                                <Play className="w-4 h-4" /> Play
                            </>
                        )}
                    </button>

                    <button
                        onClick={nextSlide}
                        className="p-3 border-2 border-foreground bg-white hover:bg-foreground hover:text-background transition-all shadow-[4px_4px_0px_0px_var(--color-foreground)] active:translate-y-1 active:shadow-none"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots */}
                <div className="mt-6 flex gap-3">
                    {campaigns.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentIndex(idx)
                                setIsPlaying(false)
                            }}
                            className={`h-2.5 transition-all duration-300 border border-foreground ${idx === currentIndex ? "w-8 bg-foreground" : "w-2.5 bg-white hover:bg-gray-200"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
