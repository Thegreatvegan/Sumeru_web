import { ChevronRight } from "lucide-react"
import Link from "next/link"
import TechSection from "@/components/tech-section"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import Navigation from "@/components/navigation"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ChipAnimation from "@/components/chip-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />

      <main className="relative">
        <HeroSection />

        <div className="relative z-10">
          <ProblemSection />
          <TechSection />

          <section className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">
              Build the next era of computing with us.
            </h2>
            <Link
              href="#contact"
              className="group flex items-center bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full transition-all duration-300"
            >
              <span className="mr-2">Join Sumeru</span>
              <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </section>

          <ContactSection />
        </div>
      </main>

      <Footer />

      {/* Background chip animation */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <ChipAnimation />
      </div>
    </div>
  )
}

