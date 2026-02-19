"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const experiences = [
  {
    id: 1,
    company: "Cohop",
    role: "Social Media Strategist",
    period: "Nov 2025 - Current",
    location: "Bengaluru (Remote)",
    description: "Leading social media strategy for brand growth. Strategised and managed viral, relatable content to connect with the target audience.",
  },
  {
    id: 2,
    company: "Nexolve",
    role: "Social Media Strategist",
    period: "April 2025 - Oct 2025",
    location: "Pune (Remote)",
    description: "Developed and executed strategic social media campaigns. Managed clients’ personal brands. Curated platform specific content and handled all social media platforms.",
  },
  {
    id: 3,
    company: "Ideatribe",
    role: "Social Media Manager",
    period: "April 2024 - Feb 2025",
    location: "Pune (Remote)",
    description: "Managed social media presence for clients. Improved platform engagement through consistent content planning.",
  },
]

const achievements = [
  {
    id: 1,
    title: "Brand Growth",
    metric: "120%",
    description: "Increase in organic engagement across client portfolios.",
  },
  {
    id: 2,
    title: "Viral Campaigns",
    metric: "1.1M+",
    description: "Views generated through strategic content planning.",
  },
  {
    id: 3,
    title: "Community Scaling",
    metric: "5k+",
    description: "Active community members built through authentic interaction.",
  },
]

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="experience" className="py-24 px-4 overflow-hidden relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 border-b-4 border-foreground pb-4"
        >
          <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter">
            PRO <span className="text-primary text-stroke-foreground">HIGHLIGHTS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* LEFT COLUMN: EXPERIENCE */}
          <div>
            <h3 className="text-2xl font-bold border-2 border-foreground bg-primary text-primary-foreground p-3 inline-block mb-8 shadow-[4px_4px_0px_0px_var(--color-foreground)]">
              EXPERIENCE
            </h3>

            <div className="relative border-l-4 border-foreground ml-3 space-y-12 pl-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group cursor-default"
                >
                  {/* Timeline Square */}
                  <div className="absolute -left-[43px] top-1.5 w-6 h-6 bg-background border-4 border-foreground group-hover:bg-primary transition-colors duration-300" />

                  <div className="flex flex-col items-start text-left">
                    <span className="inline-block px-2 py-1 text-sm font-bold bg-foreground text-background mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-black text-foreground uppercase">
                      {exp.role}
                    </h3>
                    <div className="text-lg font-bold text-primary mb-1">
                      @{exp.company}
                    </div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-3">
                      {exp.location}
                    </p>
                    <p className="text-base font-medium border-l-2 border-primary/50 pl-4">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: ACHIEVEMENTS */}
          <div>
            <h3 className="text-2xl font-bold border-2 border-foreground bg-accent text-accent-foreground p-3 inline-block mb-8 shadow-[4px_4px_0px_0px_var(--color-foreground)]">
              ACHIEVEMENTS
            </h3>

            <div className="grid gap-6">
              {achievements.map((ach, index) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ translateX: 5, translateY: -5, boxShadow: "8px 8px 0px 0px var(--color-foreground)" }}
                  className="p-6 border-2 border-foreground bg-background shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {ach.title}
                    </h3>
                    <span className="text-4xl font-black text-primary">
                      {ach.metric}
                    </span>
                  </div>
                  <p className="font-medium text-foreground/80">
                    {ach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
