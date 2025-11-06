"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface FloatingIcon {
  id: number
  x: number
  y: number
  icon: React.ReactNode
  duration: number
  delay: number
}

export default function FloatingSocialIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const socialMedia = [
      {
        id: 1,
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <circle cx="17.5" cy="6.5" r="1.5" />
          </svg>
        ),
      },
      {
        id: 2,
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.966 6.807H2.882l7.432-8.491L1.906 2.25h6.834l4.713 6.231 5.759-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        ),
      },
      {
        id: 3,
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.665 1.199-1.612 2.923-1.612 2.135 0 3.735 1.39 3.735 4.377v5.621zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.957.769-1.71 1.958-1.71 1.187 0 1.914.753 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.582 11.019H3.771V8.662h3.148v11.79zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        ),
      },
      {
        id: 4,
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        ),
      },
      {
        id: 6,
        icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        ),
      },
    ]

    const generatedIcons = socialMedia.map((item, index) => ({
      id: item.id,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      icon: item.icon,
      duration: Math.random() * 3 + 4,
      delay: index * 0.2,
    }))

    setIcons(generatedIcons)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((item) => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `floatIcon ${item.duration}s ease-in-out ${item.delay}s infinite`,
            opacity: 0.08,
          }}
        >
          <div className="text-primary/70 transition-all duration-300 hover:opacity-100 hover:scale-125">
            {item.icon}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes floatIcon {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.08;
          }
          25% {
            transform: translate(30px, -30px) scale(1.15);
            opacity: 0.12;
          }
          50% {
            transform: translate(0, -60px) scale(1.05);
            opacity: 0.1;
          }
          75% {
            transform: translate(-30px, -30px) scale(1.1);
            opacity: 0.12;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.08;
          }
        }
      `}</style>
    </div>
  )
}
