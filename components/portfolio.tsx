"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, FolderOpen } from "lucide-react"

const showcaseItems = [
  {
    number: "01",
    title: "Client Testimonials",
    subtitle: "Real Results",
  },
  {
    number: "02",
    title: "Performance Dashboards",
    subtitle: "Data & Analytics",
  },
  {
    number: "03",
    title: "Campaign Insights",
    subtitle: "Strategy Breakdown",
  },
  {
    number: "04",
    title: "Content Snapshots",
    subtitle: "Creative Growth",
  },
]

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section id="work" ref={sectionRef} className="py-24 px-4 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-b-4 border-foreground pb-6">
          <h2 className="text-5xl md:text-8xl font-black text-foreground uppercase tracking-tighter">
            PROOF OF <span className="text-primary">WORK</span>
          </h2>
          <div className="mt-6 flex items-start gap-4 max-w-2xl">
            <FolderOpen className="w-8 h-8 text-foreground" />
            <p className="text-xl font-bold font-mono text-muted-foreground">
              I believe in showing the process and results, not just talking about them.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t-4 border-foreground">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="border-b-4 border-foreground py-8 md:py-12 group cursor-pointer relative overflow-hidden transition-colors hover:bg-foreground"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10 px-4 md:px-8">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-2xl md:text-3xl font-mono font-bold text-muted-foreground group-hover:text-background/50 transition-colors">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase group-hover:text-background transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg font-mono text-primary font-bold mt-2 group-hover:text-primary-foreground">{item.subtitle}</p>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-10 group-hover:translate-x-0">
                  <div className="bg-primary text-primary-foreground p-4 rounded-full border-2 border-background">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
