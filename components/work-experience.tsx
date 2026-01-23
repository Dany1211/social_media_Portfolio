"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const experiences = [
  {
    id: 1,
    company: "Ideatribe creative hub",
    role: "Social Media Manager",
    period: "April 2024 - Feb 2025",
    location: "Pune (Remote)",
    description: "Managed social media presence and community engagement.",
  },
  {
    id: 2,
    company: "Nexolve technologies",
    role: "Social Media Strategist",
    period: "April 2025 - Oct 2025",
    location: "Pune (Remote)",
    description: "Developed and executed strategic social media campaigns.",
  },
  {
    id: 3,
    company: "Cohop",
    role: "Social Media Strategist",
    period: "Nov 2025 - Current",
    location: "Bengaluru (Remote)",
    description: "Leading social media strategy for brand growth.",
  },
]

const achievements = [
  {
    id: 1,
    title: "Brand Growth",
    metric: "150%",
    description: "Increase in organic engagement across client portfolios.",
  },
  {
    id: 2,
    title: "Viral Campaigns",
    metric: "2M+",
    description: "Views generated through strategic content planning.",
  },
  {
    id: 3,
    title: "Community Scaling",
    metric: "10k+",
    description: "Active community members grounded in authentic interaction.",
  },
]

export default function WorkExperience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Optional parallax values
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section id="experience" className="py-24 px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <motion.div style={{ y }} className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            Professional <span className="text-primary italic">Highlights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          {/* Vertical Divider for large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          {/* LEFT COLUMN: EXPERIENCE */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-2xl font-bold text-foreground">Experience</span>
              <div className="h-[1px] flex-1 bg-border/60" />
            </div>

            <div className="relative border-l-2 border-primary/20 ml-3 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-[16px] h-[16px] rounded-full bg-background border-2 border-primary shadow-[0_0_0_4px_rgba(var(--primary),0.1)]">
                    <div className="absolute inset-0 m-auto w-1.5 h-1.5 bg-primary rounded-full" />
                  </div>

                  <div className="flex flex-col items-start text-left">
                    <div className="inline-block px-3 py-1 rounded-full bg-secondary/50 border border-secondary-foreground/10 text-xs font-semibold tracking-wider uppercase text-secondary-foreground mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-base text-primary font-medium mb-2">
                      {exp.company}
                    </div>
                    <p className="text-sm text-foreground/50 mb-1">
                      {exp.location}
                    </p>
                    {exp.description && (
                      <p className="text-muted-foreground leading-relaxed text-sm mt-2 font-light">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: ACHIEVEMENTS */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="text-2xl font-bold text-foreground">Achievements</span>
              <div className="h-[1px] flex-1 bg-border/60" />
            </div>

            <div className="grid gap-6">
              {achievements.map((ach, index) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {ach.title}
                    </h3>
                    <span className="text-3xl font-bold text-primary opacity-80 decoration-slice">
                      {ach.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">
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
