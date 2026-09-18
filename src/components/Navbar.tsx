"use client";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import BrandLogo from "@/components/BrandLogo";

/* =====================================================
   NAVIGATION LINKS
===================================================== */

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

/* =====================================================
   NAVBAR
===================================================== */

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  /* ===================================================
     ACTIVE PAGE
  =================================================== */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  /* ===================================================
     CLOSE MOBILE MENU
  =================================================== */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  /* ===================================================
     MOBILE BODY SCROLL LOCK
  =================================================== */

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          {/* =============================================
              BRAND
          ============================================= */}

          <div onClick={closeMobileMenu} className="min-w-0">
            <BrandLogo />
          </div>

          {/* =============================================
              DESKTOP NAVIGATION
          ============================================= */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    active ? "text-sky-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* ACTIVE INDICATOR */}

                  {active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sky-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =============================================
              DESKTOP CTA
          ============================================= */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* =============================================
              MOBILE MENU BUTTON
          ============================================= */}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-sky-400/20 hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-white/10 bg-[#020817] transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[600px] border-t opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="site-container flex flex-col py-5">
          {/* MOBILE LINKS */}

          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-sky-500/10 text-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  )}
                </div>
              </Link>
            );
          })}

          {/* MOBILE CTA */}

          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-4 flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Get a Quote
          </Link>

          {/* MOBILE TAGLINE */}

          <div className="mt-5 border-t border-white/[0.06] pt-5 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-600">
            Connect | Plan | Build | Sustain
          </div>
        </nav>
      </div>
    </header>
  );
}
