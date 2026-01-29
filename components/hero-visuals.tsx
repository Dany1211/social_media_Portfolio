"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { MouseEvent } from "react"
import { MessageCircle, TrendingUp, BarChart3, Heart, Share2 } from "lucide-react"

export function HeroVisuals() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 50, damping: 10 })
    const mouseY = useSpring(y, { stiffness: 50, damping: 10 })

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        const xPct = (clientX - left) / width - 0.5
        const yPct = (clientY - top) / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-square max-w-[500px] mx-auto perspective-1000"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full"
            >
                {/* Main Profile Card */}
                <div className="absolute inset-8 rounded-3xl overflow-hidden glass-panel shadow-2xl border border-white/40 bg-white/10 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 mix-blend-overlay" />

                    <img
                        src="/heroImg.jpg"
                        alt="Social Media Manager"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Name/Verified Badge */}
                    <div className="absolute bottom-6 left-6 text-white transform translate-z-20">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-lg">Snehal Patil</span>
                            <div className="bg-blue-500 rounded-full p-0.5">
                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-white/80 text-sm">@socialstrategeist</p>
                    </div>
                </div>

                {/* Floating Elements - Parallax Effect */}
                <FloatingElement
                    delay={0}
                    className="absolute -right-4 top-20 bg-white/90 text-primary p-3 rounded-2xl shadow-xl flex items-center gap-3 transform translate-z-30"
                >
                    <div className="bg-green-100 p-2 rounded-full">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Growth</p>
                        <p className="text-sm font-bold text-gray-900">+350%</p>
                    </div>
                </FloatingElement>

                <FloatingElement
                    delay={1}
                    className="absolute -left-8 bottom-32 bg-white/90 text-primary p-3 rounded-2xl shadow-xl flex items-center gap-3 transform translate-z-30"
                >
                    <div className="bg-blue-100 p-2 rounded-full">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Engagement</p>
                        <p className="text-sm font-bold text-gray-900">High</p>
                    </div>
                </FloatingElement>

                {/* Orbiting Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <FloatingIcon delay={0} x={-120} y={-100} icon={<Heart className="fill-red-500 text-red-500" />} />
                    <FloatingIcon delay={2} x={140} y={-80} icon={<Share2 className="text-blue-500" />} />
                    <FloatingIcon delay={1} x={100} y={150} icon={<MessageCircle className="text-purple-500" />} />
                </div>

            </motion.div>
        </motion.div>
    )
}

function FloatingElement({ children, className, delay }: { children: React.ReactNode, className?: string, delay: number }) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function FloatingIcon({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: number, y: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                x: [x, x + 10, x],
                y: [y, y - 10, y],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            className="absolute left-1/2 top-1/2 bg-white/80 backdrop-blur shadow-lg p-3 rounded-full"
        >
            {icon}
        </motion.div>
    )
}
