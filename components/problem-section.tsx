"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingDown, Zap, Cpu, Thermometer } from "lucide-react"

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const challenges = [
    {
      icon: TrendingDown,
      title: "Moore's Law Breakdown",
      description:
        "After decades of exponential growth, transistor scaling is hitting fundamental physical limits, slowing the pace of computing advancement.",
    },
    {
      icon: Thermometer,
      title: "Thermal Constraints",
      description:
        "As transistors shrink, power density and heat generation increase exponentially, creating thermal barriers to further miniaturization.",
    },
    {
      icon: Zap,
      title: "Energy Inefficiency",
      description:
        "Traditional CMOS technology faces diminishing returns in energy efficiency, limiting performance in power-constrained environments.",
    },
    {
      icon: Cpu,
      title: "Quantum Tunneling",
      description:
        "At sub-5nm nodes, quantum effects like electron tunneling create leakage currents and unpredictable behavior in transistors.",
    },
  ]

  return (
    <section id="problem" className="relative py-32 border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-center"
          >
            The Silicon Ceiling
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-white/70 text-center mb-16 max-w-2xl mx-auto">
            For decades, Moore's Law has driven computing forward. Today, we're approaching fundamental physical limits
            that conventional silicon technology cannot overcome.
          </motion.p>

          <motion.div variants={itemVariants} className="relative mb-24">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="relative flex justify-between items-center">
              <MooresLawGraph />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-white/10">
                    <challenge.icon className="h-6 w-6 text-white/80" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">{challenge.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-white/70 italic">
              "The future of computing requires a fundamental paradigm shift beyond traditional silicon."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MooresLawGraph() {
  return (
    <div className="w-full h-64 relative">
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-48">
        {/* Timeline */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between">
          <div className="text-white/50 text-xs">1970</div>
          <div className="text-white/50 text-xs">1980</div>
          <div className="text-white/50 text-xs">1990</div>
          <div className="text-white/50 text-xs">2000</div>
          <div className="text-white/50 text-xs">2010</div>
          <div className="text-white/50 text-xs">2020</div>
          <div className="text-white/50 text-xs">2030</div>
        </div>

        {/* Moore's Law Line */}
        <svg className="absolute bottom-6 left-0 right-0 h-40 w-full" viewBox="0 0 600 160" preserveAspectRatio="none">
          {/* Ideal Moore's Law */}
          <motion.path
            d="M0,160 C150,120 300,80 450,40 L600,0"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Actual progress */}
          <motion.path
            d="M0,160 C100,140 200,100 300,60 C400,20 450,15 500,25 C550,35 580,45 600,60"
            fill="none"
            stroke="rgba(168,85,247,0.8)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5 }}
          />
        </svg>

        {/* Labels */}
        <div className="absolute top-0 left-0 text-white/70 text-xs">
          Transistor
          <br />
          Density
        </div>

        {/* Annotation */}
        <motion.div
          className="absolute right-20 top-16 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <div className="w-16 h-px bg-purple-500/80"></div>
          <div className="text-xs text-white/70 bg-black/50 backdrop-blur-sm p-1 rounded">
            Silicon
            <br />
            Ceiling
          </div>
        </motion.div>
      </div>
    </div>
  )
}
