"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={
        {
          "--mouse-x": "0px",
          "--mouse-y": "0px",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,70,0.1),rgba(0,0,0,0.5))]"></div>

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6">
          Beyond Moore.
          <br />
          Beyond Binary.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/70 font-light max-w-2xl mx-auto tracking-wide">
          Multi-state, quantum-classical chips. Built for a post-silicon world.
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-white/30"></div>
          <p className="text-white/50 text-sm mt-2">Scroll to explore</p>
        </div>
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-radial from-blue-900/10 to-transparent opacity-70"
        style={{
          transform: "translate(var(--mouse-x), var(--mouse-y))",
          transition: "transform 0.2s ease-out",
        }}
      ></div>
    </section>
  )
}
