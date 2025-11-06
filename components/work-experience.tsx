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
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Content Strategy Lead",
    company: "Creative Studios",
    period: "2021 - 2022",
    description: "Developed and executed content calendars for major brands",
    highlights: ["450K new followers", "95% positive sentiment", "Viral campaigns"],
    icon: "✨",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Social Media Manager",
    company: "Marketing Solutions Inc",
    period: "2020 - 2021",
    description: "Managed 25+ social media accounts across platforms",
    highlights: ["20M total impressions", "Community building", "Engagement optimization"],
    icon: "🎯",
    color: "from-orange-500 to-red-500",
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
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground animate-slide-up">Experience</h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto animate-slide-up">
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
                className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-500 ${
                  hoveredId === exp.id
                    ? `border-primary bg-gradient-to-r ${exp.color} shadow-2xl scale-105 -translate-y-2`
                    : "border-border bg-card/50 backdrop-blur"
                }`}
              >
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-5xl mb-4">{exp.icon}</div>
                      <h3
                        className={`text-3xl font-bold mb-2 ${hoveredId === exp.id ? "text-white" : "text-foreground"}`}
                      >
                        {exp.title}
                      </h3>
                      <p
                        className={`text-lg font-semibold mb-1 ${hoveredId === exp.id ? "text-white/90" : "text-primary"}`}
                      >
                        {exp.company}
                      </p>
                      <p
                        className={`text-sm font-medium ${hoveredId === exp.id ? "text-white/70" : "text-muted-foreground"}`}
                      >
                        {exp.period}
                      </p>
                    </div>

                    <div
                      className={`text-5xl transform transition-all duration-500 ${
                        hoveredId === exp.id ? "scale-150 rotate-12" : "scale-100"
                      }`}
                    >
                      {exp.icon}
                    </div>
                  </div>

                  <p
                    className={`text-lg mb-6 leading-relaxed transition-all duration-300 ${
                      hoveredId === exp.id ? "text-white/95" : "text-foreground/80"
                    }`}
                  >
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exp.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                          hoveredId === exp.id
                            ? "bg-white/20 text-white font-semibold"
                            : "bg-background/40 text-foreground"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block w-2 h-2 rounded-full transition-all ${
                              hoveredId === exp.id ? "bg-white scale-150" : "bg-primary"
                            }`}
                          ></span>
                          {highlight}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                    hoveredId === exp.id ? "h-2 bg-white/50" : "bg-primary/30"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
