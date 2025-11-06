"use client"

import { useState, useRef, useEffect } from "react"

const projects = [
  {
    number: "01",
    title: "Brand Transformation",
    category: "Strategy",
    description: "Repositioned brand identity, resulting in 340% engagement growth",
    year: "2024",
  },
  {
    number: "02",
    title: "Viral Campaign",
    category: "Content",
    description: "Generated 12M impressions and 450K new followers in 60 days",
    year: "2024",
  },
  {
    number: "03",
    title: "Community Growth",
    category: "Engagement",
    description: "Built engaged communities with 95% positive sentiment rate",
    year: "2023",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <section id="work" ref={sectionRef} className="py-24 px-4 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground animate-slide-up">Selected Work</h2>
          <p className="text-foreground/60 font-light mt-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Recent projects showcasing strategy and results
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.number}
              style={{
                animationDelay: `${isVisible ? index * 100 : 0}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`border-b border-border pb-12 group cursor-pointer transition-all duration-500 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="grid md:grid-cols-4 gap-8 items-start">
                <div>
                  <span className="text-sm font-light text-primary/60">{project.number}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-light text-foreground/50 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed">{project.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-light text-foreground/50">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
