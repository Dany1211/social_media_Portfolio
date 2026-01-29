import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Snehal's World",
  description: "Professional portfolio for social media strategy, planning, and content creation",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster position="top-right" richColors closeButton toastOptions={{
          style: {
            border: "2px solid var(--color-foreground)",
            boxShadow: "4px 4px 0px 0px var(--color-foreground)",
            fontWeight: "bold",
          }
        }} />
      </body>
    </html>
  )
}
