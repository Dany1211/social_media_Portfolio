"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Social Media Management",
    description: "I plan, manage, and grow social media accounts with content that speaks to the right audience and builds consistent engagement.",
  },
  {
    title: "Content & Creative Strategy",
    description: "From reel ideas to in-house content and collab planning, I focus on creativity that aligns with your brand voice and goals.",
  },
  {
    title: "Performance Marketing",
    description: "I work on Meta ad creatives and campaigns focused on user acquisition, testing, and improving performance over time.",
  },
  {
    title: "Analytics & Growth Thinking",
    description: "I track what is working, understand audience behavior, and improve strategy using insights not assumptions.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-12 bg-secondary border-y-4 border-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-foreground uppercase tracking-tighter">
            GROWTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">TOOLKIT</span>
          </h2>
          <div className="text-foreground text-xl font-bold max-w-2xl space-y-2 border-l-4 border-primary pl-4">
            <p>NO RANDOM POSTING.</p>
            <p>NO FAKE HYPE.</p>
            <p className="text-muted-foreground">JUST RAW STRATEGY.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ translateX: -4, translateY: -4, boxShadow: "8px 8px 0px 0px var(--color-foreground)" }}
              className="border-2 border-foreground bg-background p-8 shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all duration-300 group hover:bg-foreground"
            >
              <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 uppercase group-hover:text-background transition-colors">{service.title}</h3>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed group-hover:text-background/80 transition-colors">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary border-2 border-foreground p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--color-foreground)]">
          <h3 className="text-3xl font-black mb-8 text-primary-foreground uppercase">What clients get:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["CLEAR COMMUNICATION", "HONEST EFFORT", "GROWTH MINDSET", "OWNERSHIP"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 bg-background border-2 border-primary-foreground flex-shrink-0" />
                <span className="text-lg text-primary-foreground font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
