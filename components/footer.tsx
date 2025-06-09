import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-light mb-4">Sumeru</h3>
            <p className="text-sm text-white/50 max-w-xs">
              Engineering quantum-classical chips with multi-state logic and 3D integration.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-white/70">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#press" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-white/70">Technology</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#research"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link href="#patents" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Patents
                </Link>
              </li>
              <li>
                <Link
                  href="#publications"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 text-white/70">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#twitter" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#linkedin"
                  className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Sumeru. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
