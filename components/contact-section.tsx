"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="contact" className="relative py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-light mb-16 tracking-tight text-center"
          >
            Contact
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-light tracking-wide">Get in touch</h3>
              <p className="text-white/70 leading-relaxed">
                Interested in our quantum-classical technology? Have questions about our approach to post-CMOS
                computing? We'd love to hear from you.
              </p>

              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 transition-colors duration-300 px-4 py-2 rounded-md">
                  <Mail className="h-4 w-4 text-white/50" />
                  <span className="text-white/70">info@sumeru.tech</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-light tracking-wide">Leadership</h3>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                      <span className="text-lg font-light">VS</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-light">Vedant Sagare</h4>
                      <p className="text-white/50 text-sm">Founder & CEO</p>
                    </div>
                  </div>

                  <div className="pl-16 space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-white/50" />
                      <Link
                        href="mailto:vedantsagare@berkeley.edu"
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                      >
                        vedantsagare@berkeley.edu
                      </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Linkedin className="h-4 w-4 text-white/50" />
                        <Link
                          href="#linkedin"
                          className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                        >
                          LinkedIn
                        </Link>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Twitter className="h-4 w-4 text-white/50" />
                        <Link
                          href="#twitter"
                          className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                        >
                          Twitter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-24 pt-12 border-t border-white/10">
            <div className="bg-white/5 rounded-lg p-8 text-center">
              <h3 className="text-xl font-light mb-4">Ready to explore the future of computing?</h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Join us in building the next generation of quantum-classical chips that will define the post-silicon
                era.
              </p>
              <Link
                href="#contact-form"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full transition-all duration-300"
              >
                <span className="mr-2">Schedule a conversation</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

