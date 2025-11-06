"use client"

import { useEffect, useRef, useState } from "react"

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  icon: string
  color: string
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Social Media Strategist",
    company: "Digital Growth Agency",
    period: "2022 - Present",
    description: "Led strategic social media initiatives for 50+ brands",
    highlights: ["340% engagement increase", "12M+ reach", "45+ campaigns"],
    icon: "",
    color: "",
  },
  {
    id: 2,
    title: "Content Strategy Lead",
    company: "Creative Studios",
    period: "2021 - 2022",
    description: "Developed and executed content calendars for major brands",
    highlights: ["450K new followers", "95% positive sentiment", "Viral campaigns"],
    icon: "",
    color: "",
  },
  {
    id: 3,
    title: "Social Media Manager",
    company: "Marketing Solutions Inc",
    period: "2020 - 2021",
    description: "Managed 25+ social media accounts across platforms",
    highlights: ["20M total impressions", "Community building", "Engagement optimization"],
    icon: "",
    color: "",
  },
]

export default function WorkExperience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
    <section id="experience" ref={sectionRef} className="py-20 px-4 md:px-8 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-foreground animate-slide-up">Experience</h2>
        <p className="text-center text-foreground/60 text-base md:text-lg mb-16 max-w-2xl mx-auto animate-slide-up">
          Professional journey and key achievements
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                animationDelay: `${isVisible ? index * 150 : 0}ms`,
              }}
              onMouseEnter={() => setHoveredId(exp.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  hoveredId === exp.id
                    ? "border-border bg-card shadow-lg -translate-y-1"
                    : "border-border bg-card"
                }`}
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm md:text-base font-medium mb-1 text-foreground/80">
                        {exp.company}
                      </p>
                      <p className="text-xs md:text-sm font-normal text-foreground/60">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-base md:text-lg mb-6 leading-relaxed text-foreground/80">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="p-4 rounded-lg border border-border bg-card text-foreground">
                        <div className="flex items-center gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground/40"></span>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
