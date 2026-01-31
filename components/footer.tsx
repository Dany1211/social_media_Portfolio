"use client"

import { Instagram, Linkedin, Twitter } from "lucide-react" // optional icons

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/snehalpatil._.76?igsh=NWVleHJoYmRqa2Vr",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/snehal-patil-14474b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "X",
      href: "https://x.com/Snehalpatil76?t=VFIxxeiAxl_JvubGToYgHQ&s=09",
    },
  ]

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Social Strategy Co.</h3>
            <p className="text-muted-foreground">
              Building brands through strategic social media excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              {["Services", "Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              {socialLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Snehal Patil. All rights reserved.</p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://dany24.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-0.5"
            >
              <span className="font-semibold">Made by DAnY</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full group-hover:bg-foreground"></span>
              <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">Click here to view more</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
