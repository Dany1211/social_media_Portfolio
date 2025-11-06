"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Left: Logo with minimal design */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <span className="text-xl font-bold tracking-widest text-foreground">Snehal Patil</span>
        </Link>

        {/* Center: Navigation with underline effect */}
        <ul className="hidden md:flex gap-8">
          {["About", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="relative text-lg font-light text-foreground/70 hover:text-foreground transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 h-px bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-block text-base md:text-lg font-light px-4 py-2 border border-foreground/30 rounded hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Get in Touch
          </Link>
          <button
            aria-label="Open menu"
            className="md:hidden p-2 text-foreground/80 hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            {["About", "Work", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block text-base py-3 text-foreground/80 hover:text-foreground"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-base py-3 text-foreground/80 hover:text-foreground"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
