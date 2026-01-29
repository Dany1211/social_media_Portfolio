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
import { Navbar } from "@/components/navbar"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 pb-24 md:pb-32">
      <Navbar />
      <ThemeSwitcher />

      {/* Main Content */}
      <div className="w-full">
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
