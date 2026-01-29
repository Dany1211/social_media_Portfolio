"use client"

import { motion } from "framer-motion"

export function BackgroundGradient() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-[#f8f5f0]">
            {/* Abstract gradient blobs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/30 to-purple-500/30 blur-[100px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -50, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/20 to-primary/20 blur-[80px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -bottom-[20%] left-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-t from-orange-300/20 to-rose-300/20 blur-[90px]"
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opactiy-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 90%, transparent)'
                }}
            ></div>
        </div>
    )
}
