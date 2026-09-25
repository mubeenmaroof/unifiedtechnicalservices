import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/ScrollReveal";
import { StaggerItem, StaggerReveal } from "@/components/StaggerReveal";

import {
  ArrowRight,
  Check,
  CircleCheck,
  DraftingCompass,
  Headphones,
  MapPinned,
  Settings,
} from "lucide-react";

import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",

  description:
    "Explore fiber optic, GPON planning, GIS, ArcGIS, QGIS, CCTV, electrical, fire alarm and solar services from Unified Technical Services.",
};

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We review your project requirements, location, existing data and technical objectives.",
    icon: Headphones,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our team develops the technical approach, GIS analysis, network plan or system design.",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Detailed drawings, layouts, routes and engineering documentation are prepared.",
    icon: DraftingCompass,
  },
  {
    number: "04",
    title: "Implement",
    description:
      "The approved solution moves into installation, deployment or field implementation.",
    icon: Settings,
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#06111f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-grid relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="site-container relative py-20 text-center sm:py-24 lg:py-28">
          <ScrollReveal direction="up" distance={25}>
            <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400 sm:text-xs">
              Our Expertise
            </div>

            <h1 className="mx-auto mt-6 max-w-4xl text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Comprehensive Solutions for a
              <span className="text-sky-400"> Connected Future</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              From fiber network planning and GIS intelligence to security,
              electrical, fire-alarm and renewable energy solutions, we bring
              technical disciplines together under one roof.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Discuss Your Project
                <ArrowRight size={17} />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          SERVICE NAVIGATION
      ===================================================== */}

      <section className="border-b border-white/10 bg-[#020817]">
        <div className="site-container py-5">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex shrink-0 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-300"
                >
                  <Icon size={15} />

                  {service.shortTitle}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section id="services" className="relative py-20 sm:py-24">
        <div className="site-container">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                What We Deliver
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                Technical Services Built Around
                <span className="text-sky-400"> Your Infrastructure</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-14 space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <ScrollReveal
                  key={service.id}
                  direction={index % 2 === 0 ? "right" : "left"}
                  distance={40}
                >
                  <article
                    id={service.id}
                    className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-[#08192b]"
                  >
                    <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                      {/* =====================================
                          SERVICE IMAGE
                      ===================================== */}

                      <div
                        className={`relative min-h-[320px] overflow-hidden sm:min-h-[430px] ${
                          index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover transition duration-700 hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/70 to-[#020817]/20" />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/50 to-transparent" />

                        <div className="tech-grid absolute inset-0 opacity-20" />

                        {/* CONTENT */}

                        <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9 lg:p-12">
                          <div className="flex items-center justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#020817]/80 text-sky-400 backdrop-blur-xl">
                              <Icon size={27} />
                            </div>

                            <span className="text-6xl font-black text-white/10">
                              {service.number}
                            </span>
                          </div>

                          <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
                            {service.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                            {service.description}
                          </p>

                          <Link
                            href={
                              service.id === "cctv"
                                ? "/services/cctv"
                                : `/contact?service=${service.id}`
                            }
                            className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-[#020817]/70 px-5 py-3 text-sm font-semibold text-sky-400 backdrop-blur-xl transition hover:border-sky-400/30 hover:bg-[#020817]"
                          >
                            {service.id === "cctv"
                              ? "View CCTV Packages"
                              : "Request This Service"}

                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>

                      {/* =====================================
                          CAPABILITIES
                      ===================================== */}

                      <div
                        className={`border-t border-white/10 bg-[#0b1d31]/70 p-7 sm:p-9 lg:border-t-0 lg:border-l lg:p-12 ${
                          index % 2 === 1
                            ? "lg:order-1 lg:border-l-0 lg:border-r"
                            : ""
                        }`}
                      >
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                          Capabilities
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {service.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                            >
                              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                                <Check size={12} />
                              </div>

                              <span className="text-sm leading-5 text-slate-300">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          GIS + FIBER
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#020817] py-20 sm:py-24">
        <div className="site-container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT NETWORK GRAPHIC */}

            <ScrollReveal direction="right" distance={40}>
              <div className="tech-grid relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#071525]">
                <div className="absolute left-[8%] top-[14%] rounded-xl border border-sky-400/30 bg-[#020817] px-4 py-3">
                  <div className="text-[9px] uppercase tracking-widest text-slate-500">
                    POP
                  </div>

                  <div className="mt-1 text-sm font-bold text-sky-400">
                    CORE
                  </div>
                </div>

                <div className="absolute left-[40%] top-[40%] rounded-xl border border-cyan-400/30 bg-[#020817] px-4 py-3">
                  <div className="text-[9px] uppercase tracking-widest text-slate-500">
                    FDT
                  </div>

                  <div className="mt-1 text-sm font-bold text-cyan-400">
                    DISTRIBUTION
                  </div>
                </div>

                <div className="absolute bottom-[12%] right-[8%] rounded-xl border border-sky-400/30 bg-[#020817] px-4 py-3">
                  <div className="text-[9px] uppercase tracking-widest text-slate-500">
                    ADT
                  </div>

                  <div className="mt-1 text-sm font-bold text-sky-400">
                    ACCESS
                  </div>
                </div>

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 600 450"
                  fill="none"
                >
                  <path
                    d="M100 105 C180 100 190 170 250 205 C310 240 360 200 400 255 C440 310 475 320 520 350"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                  />

                  <path
                    d="M270 220 C310 280 240 330 175 370"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    strokeDasharray="7 7"
                  />

                  <circle cx="100" cy="105" r="6" fill="#0ea5e9" />

                  <circle cx="270" cy="220" r="6" fill="#22d3ee" />

                  <circle cx="520" cy="350" r="6" fill="#0ea5e9" />
                </svg>

                <div className="absolute bottom-5 left-5 rounded-lg border border-white/10 bg-[#020817]/90 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                  GIS + GPON Network Planning
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT CONTENT */}

            <ScrollReveal direction="left" distance={40} delay={0.1}>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  Planning Intelligence
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  GIS-Powered
                  <span className="text-sky-400"> Fiber Network Planning</span>
                </h2>

                <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                  By combining GIS with telecom planning, network infrastructure
                  can be designed around real-world geography, existing assets,
                  service areas and deployment requirements.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "GIS-based fiber route planning",
                    "FTTH / FTTB / FTTX network design",
                    "POP, FDT and ADT planning",
                    "Feeder and distribution cable planning",
                    "Network asset mapping",
                    "As-built GIS documentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CircleCheck
                        size={18}
                        className="shrink-0 text-sky-400"
                      />

                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact?service=fiber"
                  className="mt-9 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Start a Fiber Project
                  <ArrowRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="py-20 sm:py-24">
        <div className="site-container">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                How We Work
              </div>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                From Requirement to
                <span className="text-sky-400"> Implementation</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            delay={0.12}
          >
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <StaggerItem key={step.number} className="h-full">
                  <div className="relative h-full rounded-2xl border border-white/10 bg-[#08192b] p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                        <Icon size={21} />
                      </div>

                      <span className="text-3xl font-black text-white/[0.06]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="border-t border-white/10 bg-[#020817] py-20">
        <div className="site-container">
          <ScrollReveal direction="up" distance={30}>
            <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-[#08192b] px-6 py-12 text-center sm:px-10 sm:py-16">
              <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[100px]" />

              <div className="relative">
                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  Need a Custom Technical Solution?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Tell us about your project requirements and we&apos;ll help
                  identify the right planning, engineering or implementation
                  services.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Request a Consultation
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
