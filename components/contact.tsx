"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-accent border-t-4 border-foreground relative overflow-hidden">
      {/* Decorative Grid BG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-3xl mx-auto relative z-10 bg-background border-4 border-foreground p-8 md:p-12 shadow-[12px_12px_0px_0px_var(--color-foreground)]">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter mb-4">
            LET'S <span className="text-primary italic">TALK</span>
          </h2>
          <p className="text-lg font-medium text-muted-foreground border-2 border-foreground bg-secondary inline-block px-4 py-2 shadow-[4px_4px_0px_0px_var(--color-foreground)]">
            Ready to grow your brand?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-foreground uppercase tracking-wider mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-4 bg-background border-2 border-foreground focus:border-primary focus:shadow-[4px_4px_0px_0px_var(--color-primary)] outline-none transition-all placeholder:text-muted-foreground/50 font-bold"
              placeholder="YOUR NAME"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-foreground uppercase tracking-wider mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 bg-background border-2 border-foreground focus:border-primary focus:shadow-[4px_4px_0px_0px_var(--color-primary)] outline-none transition-all placeholder:text-muted-foreground/50 font-bold"
              placeholder="YOUR@EMAIL.COM"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-foreground uppercase tracking-wider mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-4 bg-background border-2 border-foreground focus:border-primary focus:shadow-[4px_4px_0px_0px_var(--color-primary)] outline-none transition-all resize-none placeholder:text-muted-foreground/50 font-bold"
              placeholder="TELL ME ABOUT YOUR PROJECT..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-foreground text-background font-black text-xl uppercase tracking-widest hover:bg-primary hover:text-foreground hover:shadow-[4px_4px_0px_0px_var(--color-foreground)] hover:-translate-y-1 transition-all duration-300 border-2 border-foreground flex items-center justify-center gap-3"
          >
            Send Message
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  )
}
