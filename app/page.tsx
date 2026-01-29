"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WorkExperience from "@/components/work-experience"
// import SocialIcons from "@/components/social-icons" // Removing duplicate bottom icons if not needed, but keeping for now if used elsewhere
import SocialIcons from "@/components/social-icons"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { FloatingNav } from "@/components/floating-nav"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <FloatingNav />
      <ThemeSwitcher />

      {/* Main Content */}
      <div className="md:pl-20"> {/* Offset for floating nav on desktop */}
        <Hero />
        <WorkExperience />
        <Services />
        <Portfolio />
        <SocialIcons />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
