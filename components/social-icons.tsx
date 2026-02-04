"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface Icon {
  name: string
  url: string
  delay: number
  icon: React.ReactNode
}

export default function SocialIcons() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const socialIcons: Icon[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/_snehverse_",
      delay: 0,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/Snehalpatil76?t=VFIxxeiAxl_JvubGToYgHQ&s=09",
      delay: 100,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.966 6.807H2.882l7.432-8.491L1.906 2.25h6.834l4.713 6.231 5.759-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/snehal-patil-14474b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      delay: 200,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.665 1.199-1.612 2.923-1.612 2.135 0 3.735 1.39 3.735 4.377v5.621zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.957.769-1.71 1.958-1.71 1.187 0 1.914.753 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.582 11.019H3.771V8.662h3.148v11.79zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@snehal5276?si=owbXzBCoYtpPxDJN",
      delay: 300,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1BmrxUBLSj/",
      delay: 500,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Gmail",
      url: "mailto:snehalpatil5276@gmail.com",
      delay: 600,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="social" ref={sectionRef} className="py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="hidden md:block absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 text-foreground animate-slide-up">
          Let’s connect
        </h2>
        <div className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto animate-slide-up space-y-4">
          <p>
            I share real learnings and behind the scenes breakdowns of social media marketing, performance ads, and how brands actually grow.
          </p>
          <p>
            If you are a brand founder creator marketer or someone curious about digital growth you will feel at home here.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {socialIcons.map((icon) => (
            <a
              key={icon.name}
              href={icon.url}
              style={{
                animationDelay: isVisible ? `${icon.delay}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredIcon(icon.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`relative group ${isVisible ? "animate-pop-in" : "opacity-0"}`}
            >
              <div
                className={`w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-3 border-primary flex items-center justify-center transition-all duration-300 ${hoveredIcon === icon.name
                  ? "border-primary bg-primary/20 scale-125 shadow-2xl -translate-y-3"
                  : "hover:border-accent hover:scale-110"
                  } cursor-pointer group-hover:animate-glow text-primary hover:text-accent`}
              >
                {icon.icon}
              </div>
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-sm font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {icon.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
