"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

const testimonials = [
    "/testimonials/testimonial1.jpg",
    "/testimonials/testimonial2.jpg",
    "/testimonials/testimonial3.jpg",
    "/testimonials/testimonial4.jpg",
    "/testimonials/testimonial5.jpg",
    "/testimonials/testimonial6.jpg",
]

export default function TestimonialsPage() {
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
                    <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                        THE <span className="text-primary text-stroke-foreground">RECEIPTS</span>
                    </h1>
                </div>

                <div className="hidden md:flex rotate-6 bg-white border-2 border-foreground p-3 shadow-[4px_4px_0px_0px_var(--color-foreground)] max-w-xs items-center gap-3">
                    <div className="bg-green-500 p-2 rounded-full text-white">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg text-xs font-mono font-medium text-muted-foreground">
                        No scripts. Just happy clients.
                    </div>
                </div>
            </div>

            {/* GRID CONTAINER - Fills remaining height */}
            <div className="flex-1 w-full max-w-7xl mx-auto min-h-0">
                <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-12">
                    {testimonials.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="relative w-full h-full min-h-0"
                        >
                            <div className={`
                w-full h-full relative bg-secondary border-4 border-foreground p-2 shadow-[4px_4px_0px_0px_var(--color-foreground)] 
                transition-all duration-300 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:z-50
                flex flex-col
                `}>
                                {/* Fake Phone Header */}
                                <div className="flex-none bg-background border-b-2 border-foreground p-1.5 mb-1.5 flex items-center gap-1.5 opacity-50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                </div>

                                <div className="flex-1 relative overflow-hidden bg-white">
                                    <img
                                        src={src}
                                        alt={`Client Receipt ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover object-top hover:object-contain transition-all duration-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    )
}
