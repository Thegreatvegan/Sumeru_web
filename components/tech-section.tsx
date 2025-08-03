"use client"

import { useRef } from "react"
import { motion, useScroll, useInView } from "framer-motion"

export default function TechSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const technologies = [
    {
      id: "multi-state",
      title: "Multi-state Logic",
      description:
        "Beyond binary 0s and 1s, our chips utilize quantum superposition to process multiple states simultaneously, exponentially increasing computational density.",
      color: "from-purple-500/20 to-transparent",
    },
    {
      id: "quantum-filter",
      title: "Quantum Filter Chips",
      description:
        "Proprietary quantum filter architecture enables precise state measurement and coherence preservation, solving key challenges in quantum-classical integration.",
      color: "from-blue-500/20 to-transparent",
    },
    {
      id: "3d-stacking",
      title: "3D Chip Stacking",
      description:
        "Revolutionary vertical integration techniques allow for unprecedented component density and reduced signal latency between quantum and classical layers.",
      color: "from-cyan-500/20 to-transparent",
    },
    {
      id: "post-cmos",
      title: "Post-CMOS Efficiency",
      description:
        "Breaking free from traditional CMOS limitations, our architecture delivers orders of magnitude improvements in performance-per-watt for next-generation computing.",
      color: "from-green-500/20 to-transparent",
    },
  ]

  return (
    <section id="technology" ref={containerRef} className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-24 tracking-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Technology
        </motion.h2>

        <div className="space-y-40 md:space-y-64">
          {technologies.map((tech, index) => {
            return <TechItem key={tech.id} tech={tech} index={index} />
          })}
        </div>
      </div>
    </section>
  )
}

function TechItem({ tech, index }: { tech: any; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: false, amount: 0.3, margin: "-100px 0px" })

  return (
    <motion.div
      ref={itemRef}
      className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="w-full md:w-1/2">
        <div className="relative aspect-square md:aspect-video w-full max-w-lg mx-auto">
          <div className={`absolute inset-0 rounded-lg bg-gradient-radial ${tech.color} opacity-70`}></div>
          <div className="absolute inset-0 border border-white/10 rounded-lg"></div>

          <TechVisual id={tech.id} />
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-lg">
        <h3 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">{tech.title}</h3>
        <p className="text-white/70 leading-relaxed">{tech.description}</p>
      </div>
    </motion.div>
  )
}

function TechVisual({ id }: { id: string }) {
  // Different visualizations for each technology
  switch (id) {
    case "multi-state":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-full h-full border border-purple-500/30 rounded-full"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{
                  duration: 3,
                  delay: i * 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full"
              style={{
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      )

    case "quantum-filter":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-5 grid-rows-5 gap-4 w-48 h-48">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-blue-500/30 rounded-sm"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      )

    case "3d-stacking":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border border-cyan-500/40 rounded-md"
              style={{
                transform: `translate(-50%, -50%) translateZ(${i * 10}px)`,
              }}
              animate={{
                y: [i * -4, i * 4, i * -4],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )

    case "post-cmos":
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-48">
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"
              animate={{
                y: [0, 48, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent"
              animate={{
                y: [0, -48, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-green-500 to-transparent"
              animate={{
                x: [0, 48, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-0 bottom-0 right-0 w-0.5 bg-gradient-to-b from-transparent via-green-500 to-transparent"
              animate={{
                x: [0, -48, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      )

    default:
      return null
  }
}
