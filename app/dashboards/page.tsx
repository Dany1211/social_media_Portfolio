"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, LineChart } from "lucide-react"

const dashboards = [
    "/dashboards/dashboard1.jpeg",
    "/dashboards/dashboard2.jpeg",
    "/dashboards/dashboard3.jpeg",
    "/dashboards/dashboard4.jpeg",
    "/dashboards/dashboard5.jpeg",
    "/dashboards/dashboard6.jpeg",
]

const rotations = [-1, 1, -1, 1, -1, 1]

export default function DashboardsPage() {
    return (
        <main className="min-h-screen w-full bg-background text-foreground flex flex-col p-4 md:p-8">
            {/* HEADER */}
            <div className="flex-none max-w-7xl w-full mx-auto mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                <div>
                    <Link
                        href="/"
                        className="group flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:-translate-x-2 transition-transform duration-300 mb-4"
                    >
                        <ArrowLeft className="w-5 h-5 border-2 border-foreground rounded-full p-0.5 group-hover:bg-foreground group-hover:text-background transition-colors" />
                        Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        DATA <span className="text-primary text-stroke-foreground">VISUALIZED</span>
                    </h1>
                </div>

                <div className="hidden md:flex rotate-3 bg-white border-2 border-foreground p-3 shadow-[4px_4px_0px_0px_var(--color-foreground)] max-w-xs items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-full text-white">
                        <LineChart className="w-5 h-5" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg text-xs font-mono font-medium text-muted-foreground">
                        Metrics that matter.
                    </div>
                </div>
            </div>

            {/* GRID CONTAINER */}
            <div className="flex-1 w-full max-w-7xl mx-auto min-h-0 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-12 px-4">
                    {dashboards.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative w-full aspect-[9/16] scale-95"
                        >
                            <div className={`
                                w-full h-full relative bg-secondary border-2 border-foreground p-1.5 shadow-[4px_4px_0px_0px_var(--color-foreground)] 
                                transition-all duration-300 hover:shadow-[8px_8px_0px_0px_var(--color-foreground)] hover:scale-110 hover:z-50
                                flex flex-col group
                            `}>
                                {/* Header Bar */}
                                <div className="flex-none bg-background border-b-2 border-foreground p-2 mb-2 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500 border border-foreground"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 border border-foreground"></div>
                                    </div>
                                    <div className="flex-1 bg-white border border-foreground rounded px-2 py-1 text-[10px] font-mono text-center overflow-hidden text-ellipsis whitespace-nowrap">
                                        {`dashboard_${index + 1}.tsx`}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 relative overflow-hidden bg-white border border-foreground/10">
                                    <img
                                        src={src}
                                        alt={`Dashboard ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-contain p-1"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                                        <span className="bg-foreground text-background font-bold px-3 py-1 rounded-full text-xs uppercase transform scale-90 group-hover:scale-100 transition-transform">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer Text */}
            <div className="text-center pb-12 opacity-50 font-mono text-xs uppercase tracking-widest">
                End of Gallery
            </div>
        </main>
    )
}
