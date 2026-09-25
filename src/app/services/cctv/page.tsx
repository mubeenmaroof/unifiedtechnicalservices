import type { Metadata } from "next";

import Link from "next/link";

import { ArrowLeft, ChevronRight } from "lucide-react";

import CCTVPackages from "@/components/CCTVPackages";

export const metadata: Metadata = {
  title: "CCTV & Security Solutions",

  description:
    "Explore CCTV security packages, surveillance systems, IP cameras, DVR and NVR solutions from Unified Technical Services.",
};

export default function CCTVPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06111f]">
      {/* =====================================================
          PAGE NAVIGATION
      ===================================================== */}

      <section className="border-b border-white/10 bg-[#020817]">
        <div className="site-container">
          <div className="flex min-h-[72px] items-center justify-between gap-4">
            {/* BACK BUTTON */}

            <Link
              href="/services#cctv"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-400 transition hover:text-sky-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] transition group-hover:border-sky-400/30 group-hover:bg-sky-400/10">
                <ArrowLeft
                  size={17}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
              </span>

              <span className="hidden sm:inline">Back to Services</span>

              <span className="sm:hidden">Back</span>
            </Link>

            {/* BREADCRUMB */}

            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[11px] font-medium text-slate-500"
            >
              <Link href="/services" className="transition hover:text-sky-400">
                Services
              </Link>

              <ChevronRight size={13} className="text-slate-700" />

              <span className="text-sky-400">CCTV & Security</span>
            </nav>
          </div>
        </div>
      </section>

      {/* =====================================================
          CCTV PACKAGES
      ===================================================== */}

      <div id="packages" className="scroll-mt-24">
        <CCTVPackages />
      </div>
    </main>
  );
}
