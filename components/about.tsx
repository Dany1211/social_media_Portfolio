"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 md:px-12">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-light text-foreground animate-slide-up">About</h2>
          <div className="w-12 h-px bg-primary mt-4 animate-slide-up" style={{ animationDelay: "0.1s" }}></div>
        </div>

        <div className={`space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <p className="text-base font-light text-foreground/70 leading-relaxed">
            I'm a social media strategist passionate about helping brands tell their authentic stories. With over 5
            years of experience building digital communities and driving engagement, I've helped companies of all sizes
            achieve their social media goals.
          </p>

          <p className="text-base font-light text-foreground/70 leading-relaxed">
            My approach combines data-driven insights with creative storytelling. I believe the best social media
            strategies are built on genuine audience understanding and authentic brand voice.
          </p>

          <p className="text-base font-light text-foreground/70 leading-relaxed">
            When I'm not crafting campaigns, you'll find me exploring the latest social trends, writing about digital
            strategy, or helping other creatives level up their online presence.
          </p>
        </div>
      </div>
    </section>
  )
}
