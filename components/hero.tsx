"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { HeroSocialIcons } from "./hero-social-icons"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(248, 245, 240, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        ctx.fillStyle = `rgba(139, 90, 43, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="relative z-10 animate-slide-up">
          <div className="mb-6">
            <span className="text-xs font-light tracking-widest text-primary uppercase">Social Media Strategist</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-foreground">
            Crafting Digital Stories That <span className="text-primary">Convert</span>
          </h1>
          <p className="text-base font-light text-foreground/60 leading-relaxed mb-8 max-w-md">
            I help brands build authentic social presence through data-driven strategies, compelling content, and
            genuine audience engagement. Let's create something remarkable together.
          </p>

          <div className="flex gap-4">
            <Link
              href="#work"
              className="text-sm font-light px-6 py-3 bg-primary text-primary-foreground rounded hover:shadow-md transition-shadow duration-300"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="text-sm font-light px-6 py-3 border border-foreground/20 text-foreground rounded hover:border-primary hover:text-primary transition-colors duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Right: Professional Photo */}
        <div className="relative z-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-muted">
            <img
              src="/hero.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          <div className="absolute bottom-8 right-8 animate-subtle-shift">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <HeroSocialIcons />
      </div>
    </section>
  )
}
