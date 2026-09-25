import type { Metadata } from "next";

import Link from "next/link";

import { ArrowLeft, ChevronRight } from "lucide-react";

import CCTVPackages from "@/components/CCTVPackages";
import ScrollReveal from "@/components/ScrollReveal";

/* =====================================================
   METADATA
===================================================== */

export const metadata: Metadata = {
  title: "CCTV & Security Solutions",

  description:
    "Explore CCTV security packages, surveillance systems, IP cameras, DVR and NVR solutions from Unified Technical Services.",
};

/* =====================================================
   CCTV PAGE
===================================================== */

export default function CCTVPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06111f]">
      {/* =====================================================
          PAGE NAVIGATION
      ===================================================== */}

      <section className="relative z-20 overflow-hidden border-b border-white/10 bg-[#020817]">
        {/* BACKGROUND GRID */}

        <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />

        {/* TOP GLOW */}

        <div className="pointer-events-none absolute left-1/2 top-0 h-28 w-[700px] -translate-x-1/2 rounded-full bg-sky-500/[0.05] blur-[70px]" />

        {/* LEFT GLOW */}

        <div className="pointer-events-none absolute -left-24 top-0 h-40 w-40 rounded-full bg-blue-600/[0.05] blur-[70px]" />

        {/* RIGHT GLOW */}

        <div className="pointer-events-none absolute -right-24 top-0 h-40 w-40 rounded-full bg-cyan-500/[0.05] blur-[70px]" />

        <div className="site-container relative">
          <div className="flex min-h-[72px] items-center justify-between gap-4">
            {/* ===============================================
                BACK BUTTON
            =============================================== */}

            <ScrollReveal direction="right" distance={20} duration={0.45}>
              <Link
                href="/services#cctv"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-400 transition hover:text-sky-400"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-0.5"
                  />
                </span>

                <span className="hidden sm:inline">Back to Services</span>

                <span className="sm:hidden">Back</span>
              </Link>
            </ScrollReveal>

            {/* ===============================================
                BREADCRUMB
            =============================================== */}

            <ScrollReveal
              direction="left"
              distance={20}
              duration={0.45}
              delay={0.05}
            >
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[11px] font-medium text-slate-500"
              >
                <Link
                  href="/services"
                  className="transition duration-300 hover:text-sky-400"
                >
                  Services
                </Link>

                <ChevronRight size={13} className="text-slate-700" />

                <span className="text-sky-400">CCTV & Security</span>
              </nav>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          CCTV PACKAGES AREA
      ===================================================== */}

      <section id="packages" className="relative scroll-mt-24 overflow-hidden">
        {/* ===============================================
            BACKGROUND EFFECTS
        =============================================== */}

        <div className="pointer-events-none absolute -left-48 top-32 h-[450px] w-[450px] rounded-full bg-blue-600/[0.05] blur-[140px]" />

        <div className="pointer-events-none absolute -right-48 top-[480px] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />

        <div className="pointer-events-none absolute left-1/2 top-[850px] h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-sky-500/[0.025] blur-[140px]" />

        {/* DECORATIVE NETWORK */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]">
          <div className="absolute left-[5%] top-[18%] h-px w-[25%] rotate-[10deg] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="absolute right-[5%] top-[42%] h-px w-[25%] -rotate-[10deg] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="absolute left-[28%] top-[19%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />

          <div className="absolute right-[28%] top-[43%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>

        {/* ===============================================
            CCTV PACKAGE COMPONENT
        =============================================== */}

        <div className="relative">
          <ScrollReveal direction="up" distance={35} duration={0.65}>
            <CCTVPackages />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
