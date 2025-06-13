"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from "next/image"

export default function Nav() {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", href: "/" },
    { label: "New Here", href: "/new-here" },
    { label: "About Us", href: "/about" },
    { label: "Sermons", href: "/sermons" },
    { label: "Ministries", href: "/ministries" },
    { label: "Events", href: "/events" },
    { label: "Give", href: "/give" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
           <Image
    src="/expectation-logo.png"
    alt="Expectation Ministries Logo"
    width={90} // Adjust based on your design
    height={90}
    className="object-contain"
    priority
  />
          <span className="sr-only">Home</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map(({ label, href }) => (
            <NavLink key={label} href={href} label={label} isActive={pathname === href} />
          ))}
        </nav>

        {/* Right side (contact + actions) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm font-medium">
            <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-500 dark:text-gray-400">+49 421 576 19379</span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input type="search" placeholder="Search..." className="pl-8 w-full" />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Toggle aria-label="Toggle dark mode" className="rounded-full">
            <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Toggle>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <SheetHeader>
                <SheetTitle> <Image
    src="/expectation-logo.png"
    alt="Expectation Ministries Logo"
    width={90} // Adjust based on your design
    height={90}
    className="object-contain"
    priority
  /></SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 p-4">
                {navItems.map(({ label, href }) => (
                  <NavLink key={label} href={href} label={label} isActive={pathname === href} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

// Nav Link
function NavLink({ href, label, isActive }) {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={href}
        prefetch={false}
        className={`transition hover:text-blue-600 ${
          isActive
            ? "text-blue-600 dark:text-blue-400 font-semibold"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        {label}
      </Link>
      {isActive && <hr className="mt-1 w-10 border-b-2 border-blue-600 dark:border-blue-400" />}
    </div>
  )
}

// Icons
function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="12" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="4" x2="20" y1="6" y2="6" stroke="currentColor" strokeWidth="2" />
      <line x1="4" x2="20" y1="18" y2="18" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
