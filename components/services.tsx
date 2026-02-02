"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Social Strategy",
    tag: "THE BLUEPRINT",
    description: "Data-backed roadmaps that define your brand voice, content pillars, and growth levers. I build the ecosystem where your content thrives.",
    color: "bg-red-400"
  },
  {
    id: "02",
    title: "Content Creation",
    tag: "VISUALS",
    description: "High-fidelity vertical video and static assets designed for retention. From scripting to editing, I craft visuals that stop the scroll.",
    color: "bg-yellow-400"
  },
  {
    id: "03",
    title: "Community Mgmt",
    tag: "ENGAGEMENT",
    description: "Active audience nurturing that turns passive followers into brand advocates. I manage conversations to build genuine loyalty.",
    color: "bg-green-400"
  },
  {
    id: "04",
    title: "Full Management",
    tag: "A-Z HANDLING",
    description: "End-to-end execution. I handle scheduling, copywriting, posting, and optimization so you can focus on running your business.",
    color: "bg-blue-400"
  },
  {
    id: "05",
    title: "Paid Advertising",
    tag: "ROI FOCUSED",
    description: "Strategic paid campaigns on Meta platforms. I design creatives and manage targeting to lower CAC and scale revenue.",
    color: "bg-purple-400"
  },
  {
    id: "06",
    title: "Analytics & Data",
    tag: "INSIGHTS",
    description: "Comprehensive monthly reporting that demystifies metrics. I translate reach, engagement, and conversion data into actionable next steps.",
    color: "bg-orange-400"
  },
  {
    id: "07",
    title: "Profile Optimization",
    tag: "MAKEOVER",
    description: "A complete audit of your digital storefront. I optimize bios, highlights, and grid aesthetics to maximize visitor-to-follower conversion.",
    color: "bg-pink-400"
  },
  {
    id: "08",
    title: "Consulting & Audits",
    tag: "1:1 GUIDANCE",
    description: "Expert analysis of your current performance. I provide a prioritized checklist of improvements for teams handling social in-house.",
    color: "bg-cyan-400"
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-12 bg-background border-y-4 border-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <div className="inline-block bg-primary px-4 py-1 border-2 border-foreground mb-4 shadow-[4px_4px_0px_0px_var(--color-foreground)] -rotate-2">
              <span className="font-bold text-primary-foreground tracking-widest uppercase">My Expertise</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-foreground uppercase tracking-tighter leading-[0.9]">
              Service <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Directory</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <p className="text-xl font-medium text-muted-foreground border-l-4 border-foreground pl-4">
              Comprehensive social media solutions designed to take your brand from <span className="underline decoration-wavy decoration-accent">invisible</span> to <span className="bg-foreground text-background px-1 font-bold">ignorable-proof</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>

              <div className="relative h-full bg-secondary border-2 border-foreground p-6 flex flex-col justify-between transition-transform duration-300 border-b-4 border-r-4">

                <div className="mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-black text-foreground/20 font-mono">{service.id}</span>
                    <div className={`${service.color} px-2 py-0.5 border border-foreground text-[10px] font-bold uppercase tracking-wider`}>
                      {service.tag}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-foreground uppercase leading-none mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <div className="w-12 h-1 bg-foreground mb-4 group-hover:w-full transition-all duration-300"></div>

                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
