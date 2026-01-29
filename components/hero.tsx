"use client"

import { BackgroundGradient } from "./background-gradient"
import { HeroBento } from "./hero-bento"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      <BackgroundGradient />
      <HeroBento />
    </section>
  )
}
