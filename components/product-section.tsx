"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Snowflake, Zap } from "lucide-react"

export default function ProductSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const products = [
    {
      name: "Sumeru Avalon",
      subtitle: "Fully Superconducting Architecture",
      description:
        "A fully superconducting chip using quantum-classical logic to process and filter data at cryogenic temperatures without CMOS.",
      features: [
        "100% superconducting design",
        "Quantum-classical logic processing",
        "Cryogenic temperature operation",
        "CMOS-free architecture",
      ],
      color: "from-blue-400/30 to-cyan-400/30",
      icon: Snowflake,
      temperature: "< 4K",
    },
    {
      name: "Sumeru Nirvana",
      subtitle: "Hybrid Cryo-CMOS Solution",
      description:
        "A hybrid cryo-CMOS chip that combines multi-state logic and superconducting signal preprocessing for efficient AI and RF computing at 4K–77K.",
      features: [
        "Hybrid cryo-CMOS design",
        "Multi-state logic processing",
        "Superconducting preprocessing",
        "AI & RF optimization",
      ],
      color: "from-purple-400/30 to-pink-400/30",
      icon: Zap,
      temperature: "4K–77K",
    },
  ]

  return (
    <section id="products" className="relative py-32 border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/5 to-black opacity-60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-center"
          >
            Our Chip Architecture
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-white/70 text-center mb-20 max-w-3xl mx-auto">
            Two revolutionary approaches to quantum-classical computing, each optimized for different temperature ranges
            and applications.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {products.map((product, index) => (
              <motion.div key={product.name} variants={itemVariants} className="relative group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/8 transition-all duration-500 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${product.color}`}>
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-light tracking-tight">{product.name}</h3>
                        <p className="text-white/60 text-sm">{product.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50 mb-1">Operating Temp</div>
                      <div className="text-sm font-medium text-white/80">{product.temperature}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed mb-8">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-white/80 mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40"></div>
                          <span className="text-sm text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className="mt-8 relative h-32 rounded-lg overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ProductVisual productId={product.name.toLowerCase().replace(" ", "-")} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-white/5 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-light mb-4">Complementary Technologies</h3>
              <p className="text-white/70 leading-relaxed">
                Avalon and Nirvana represent two paths toward the same goal: transcending the limitations of traditional
                silicon. Whether through pure superconducting architecture or hybrid cryo-CMOS design, both chips
                deliver unprecedented computational capabilities for the quantum era.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProductVisual({ productId }: { productId: string }) {
  if (productId === "sumeru-avalon") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Superconducting rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border border-blue-400/40 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 4,
              delay: i * 1.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="w-3 h-3 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    )
  }

  if (productId === "sumeru-nirvana") {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Hybrid visualization */}
        <div className="relative">
          <motion.div
            className="w-12 h-12 border-2 border-purple-400/50 rounded-md"
            animate={{
              rotateY: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-6 h-6 bg-pink-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    )
  }

  return null
}
