"use client"

import Link from "next/link"
import Image from "next/image"
import { GalleryDropdown } from "./gallery-dropdown"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { usePathname } from "next/navigation"

export function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const navLinkClass = (href: string) =>
    `relative whitespace-nowrap px-1 py-2 transition-smooth ${
      isActive(href)
        ? "text-primary font-semibold"
        : "text-foreground/80 hover:text-primary"
    }`

  const underlineClass = (href: string) =>
    `absolute bottom-0 left-0 h-0.5 bg-primary transition-all ${
      isActive(href) ? "w-full" : "w-0"
    }`

  return (
    <header className="border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/80">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* SINGLE ROW - Logo | Nav Links | Language + Login */}
        <nav className="hidden md:flex items-center justify-center h-16 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/ektalogo.png"
              alt="District Hotel Business Association Kathmandu"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav Links */}
          <Link href="/" className={navLinkClass("/")}>
            {t("nav.home")}
            <span className={underlineClass("/")} />
          </Link>

          {[
            { href: "/hotels", label: t("nav.memberHotels") },
            { href: "/destinations", label: t("nav.destinations") },
            { href: "/events", label: t("nav.events") },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
              <span className={underlineClass(link.href)} />
            </Link>
          ))}

          <GalleryDropdown />

          {[
            { href: "/resources", label: t("nav.resources") },
            { href: "/careers", label: t("nav.careers") },
            { href: "/about", label: t("nav.about") },
            { href: "/contact", label: t("nav.contact") },
          ].map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
              <span className={underlineClass(link.href)} />
            </Link>
          ))}

          {/* Language Toggle + Login */}
          <LanguageToggle />
          <Link
            href="/login"
            className={`px-5 py-2 rounded-full font-semibold transition-smooth whitespace-nowrap ${
              isActive("/login")
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-lg"
            }`}
          >
            {t("nav.login")}
          </Link>
        </nav>

        {/* MOBILE VIEW */}
        <div className="md:hidden">
          {/* Mobile Top Row - Logo + Language + Login */}
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/ektalogo.png"
                alt="District Hotel Business Association Kathmandu"
                width={120}
                height={30}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <Link
                href="/login"
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-smooth whitespace-nowrap ${
                  isActive("/login")
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-lg"
                }`}
              >
                {t("nav.login")}
              </Link>
            </div>
          </div>

          {/* Mobile Swipe Nav */}
          <div className="border-t border-border">
            <div className="flex gap-6 overflow-x-auto scrollbar-hide py-3 px-1">
              {[
                { href: "/", label: t("nav.home") },
                { href: "/hotels", label: t("nav.memberHotels") },
                { href: "/destinations", label: t("nav.destinations") },
                { href: "/events", label: t("nav.events") },
                { href: "/gallery/photos", label: "Photos" },
                { href: "/gallery/videos", label: "Videos" },
                { href: "/resources", label: t("nav.resources") },
                { href: "/careers", label: t("nav.careers") },
                { href: "/about", label: t("nav.about") },
                { href: "/contact", label: t("nav.contact") },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative whitespace-nowrap text-sm ${
                    isActive(link.href)
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
