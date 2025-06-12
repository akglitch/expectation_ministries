import Link from "next/link"
import {
  Facebook,
  Instagram,
  Youtube,
  Music, // Placeholder for TikTok
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Side: Info */}
        <div>
          <h3 className="text-xl font-semibold">Expectation Ministries</h3>
          <p className="text-sm mt-1">
            Lüssumer Straße 105, 28779, Bremen, Germany
          </p>
          <a
            href="tel:+4942157619379"
            className="text-blue-600 text-sm underline block mt-1 hover:text-blue-800"
          >
            tel:+4942157619379
          </a>
          <p className="mt-2 text-sm">Faith, Hope, Community, Growth</p>
        </div>

        {/* Right Side: Follow Us */}
        <div className="md:text-right">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <SocialIcon href="#" icon={<Facebook />} label="Facebook" />
            <SocialIcon href="#" icon={<Instagram />} label="Instagram" />
            <SocialIcon href="#" icon={<Music />} label="TikTok" />
            <SocialIcon href="#" icon={<Youtube />} label="YouTube" />
          </div>
        </div>
      </div>

      {/* Links and Copyright */}
      <div className="mt-8 text-center space-y-3">
        <div className="flex flex-wrap justify-center gap-3 text-sm text-blue-600">
          <FooterLink href="#">About Us</FooterLink>
          <Separator />
          <FooterLink href="#">Locations</FooterLink>
          <Separator />
          <FooterLink href="#">Give</FooterLink>
          <Separator />
          <FooterLink href="#">Terms of Use</FooterLink>
          <Separator />
          <FooterLink href="#">Privacy Policy</FooterLink>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Expectation Ministries e.V. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }) {
  return (
    <Link href={href} className="hover:underline hover:text-blue-800">
      {children}
    </Link>
  )
}

function Separator() {
  return <span className="text-gray-400">|</span>
}

function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-blue-600"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
    </a>
  )
}
