import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Cable,
  Camera,
  MapPinned,
  PanelsTopLeft,
  RadioTower,
  ShieldCheck,
  Zap,
} from "lucide-react";

import CTASection from "@/components/CTASection";
import InfrastructureSection from "@/components/InfrastructureSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

import ScrollReveal from "@/components/ScrollReveal";

import { StaggerItem, StaggerReveal } from "@/components/StaggerReveal";

const heroCapabilities = [
  {
    icon: Cable,
    label: "Fiber & GPON",
  },
  {
    icon: MapPinned,
    label: "GIS Mapping",
  },
  {
    icon: Camera,
    label: "CCTV",
  },
  {
    icon: Zap,
    label: "Electrical",
  },
  {
    icon: ShieldCheck,
    label: "Fire Alarm",
  },
  {
    icon: PanelsTopLeft,
    label: "Solar",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#06111f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-grid relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="site-container relative">
          <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            {/* ===============================================
                LEFT CONTENT
            =============================================== */}

            <ScrollReveal direction="right" distance={40}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 sm:text-xs">
                  <span className="network-pulse h-2 w-2 rounded-full bg-sky-400" />
                  Smart Infrastructure Solutions
                </div>

                <h1 className="mt-7 max-w-3xl text-3xl font-black leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                  Engineering
                  <span className="text-sky-400"> Connections.</span>
                  <br />
                  Building
                  <span className="text-white"> Possibilities.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Integrated GIS, fiber optic, CCTV & security, electrical, fire
                  alarm and renewable-energy solutions designed for smarter,
                  safer and more connected infrastructure.
                </p>

                {/* BUTTONS */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                  >
                    Explore Our Services
                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    href="/contact#inquiry-form"
                    className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* CAPABILITIES */}

                <StaggerReveal
                  className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3"
                  delay={0.08}
                >
                  {heroCapabilities.map((item) => {
                    const Icon = item.icon;

                    return (
                      <StaggerItem key={item.label}>
                        <div className="flex h-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 transition hover:border-sky-400/20 hover:bg-sky-400/[0.04]">
                          <Icon size={18} className="shrink-0 text-sky-400" />

                          <span className="text-xs font-medium text-slate-300">
                            {item.label}
                          </span>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </StaggerReveal>
              </div>
            </ScrollReveal>

            {/* ===============================================
                RIGHT HERO IMAGE
            =============================================== */}

            <ScrollReveal direction="left" distance={45} delay={0.1}>
              <div className="relative order-first mt-2 block lg:order-none lg:mt-0">
                <div className="relative mx-auto aspect-[3/5] w-full max-w-[520px] sm:aspect-[4/5]">
                  {/* IMAGE */}

                  <div className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 bg-[#08192b] shadow-2xl shadow-black/40">
                    <Image
                      src="/images/hero/hero.png"
                      alt="Smart infrastructure and technical engineering services"
                      fill
                      priority
                      sizes="520px"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/25 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#06111f]/30 to-transparent" />

                    <div className="tech-grid absolute inset-0 opacity-30" />
                  </div>

                  {/* OUTER BORDER */}

                  <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[38px] border border-sky-400/10" />

                  {/* GIS BADGE */}

                  <div className="animate-float absolute left-2 top-[3%] rounded-2xl border border-white/10 bg-[#020817]/90 p-3 shadow-xl backdrop-blur-xl sm:-left-8 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                        <MapPinned size={20} />
                      </div>

                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                          Geospatial
                        </div>

                        <div className="mt-1 text-sm font-bold text-white">
                          GIS Planning
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FIBER BADGE */}

                  <div className="animate-float absolute left-2 top-[50%] rounded-2xl border border-white/10 bg-[#020817]/90 p-3 shadow-xl backdrop-blur-xl sm:-left-8 sm:p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <Cable size={20} />
                      </div>

                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                          Telecom
                        </div>

                        <div className="mt-1 text-sm font-bold text-white">
                          FTTH / GPON
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM PANEL */}

                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/10 bg-[#020817]/85 p-4 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-400">
                          UnifiedTechnicalServices
                        </div>

                        <div className="mt-2 text-sm font-bold text-white">
                          Digital Planning → Field Implementation
                        </div>
                      </div>

                      <RadioTower size={25} className="shrink-0 text-sky-400" />
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {["Survey", "Plan", "Build", "Sustain"].map(
                        (item, index) => (
                          <div key={item} className="text-center">
                            <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full border border-sky-400/20 bg-sky-400/10 text-[9px] font-bold text-sky-400">
                              {index + 1}
                            </div>

                            <div className="mt-1.5 text-[9px] font-medium text-slate-400">
                              {item}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER HOME SECTIONS
      ===================================================== */}

      <StatsSection />

      <ServicesSection />

      <InfrastructureSection />

      <CTASection />
    </main>
  );
}
