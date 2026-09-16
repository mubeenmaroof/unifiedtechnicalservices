"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-xl">
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          {/* =========================================
              LOGO
          ========================================= */}

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-700 shadow-lg shadow-sky-500/20">
              <span className="text-xl font-black text-white">U</span>
            </div>

            <div className="leading-tight">
              <div className="text-[13px] font-bold tracking-tight text-white min-[380px]:text-[15px] sm:text-lg">
                Unified
                <span className="text-sky-400">Technical</span>
                Services
              </div>

              <div className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:block">
                Connect | Plan | Build | Sustain
              </div>
            </div>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}

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

                  {active && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-sky-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* =========================================
              DESKTOP CTA
          ========================================= */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
            >
              Get a Quote
            </Link>
          </div>

          {/* =========================================
              MOBILE BUTTON
          ========================================= */}

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}

      <div
        className={`overflow-hidden border-white/10 bg-[#020817] transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] border-t opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="site-container flex flex-col py-5">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-sky-500/10 text-sky-400"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
