"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    number: "01",
    title: "Social Strategy",
    description: "Data-driven strategic plans tailored to your brand's unique voice and goals.",
  },
  {
    number: "02",
    title: "Content Creation",
    description: "Authentic, engaging content that resonates and builds real connections.",
  },
  {
    number: "03",
    title: "Campaign Management",
    description: "From concept to execution, complete campaign oversight and optimization.",
  },
  {
    number: "04",
    title: "Analytics & Insights",
    description: "Deep performance analysis to inform strategy and maximize ROI.",
  },
]

export default function Services() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(services.map(() => true))
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-foreground animate-slide-up">Services</h2>
          <p className="text-foreground/60 font-light max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Strategic solutions to elevate your social media presence and achieve your business goals.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.number}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              className={`border-l-2 border-primary/30 pl-6 py-4 hover:border-primary transition-all duration-300 ${
                visibleItems[index] ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-lg font-light text-primary/60">{service.number}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-light text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
