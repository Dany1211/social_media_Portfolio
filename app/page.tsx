"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import WorkExperience from "@/components/work-experience"
import SocialIcons from "@/components/social-icons"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FloatingSocialIcons from "@/components/floating-social-icons"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground">
      <FloatingSocialIcons />
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <WorkExperience />
      <SocialIcons />
      <Contact />
      <Footer />
    </main>
  )
}
