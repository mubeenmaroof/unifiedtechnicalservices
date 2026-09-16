import Link from "next/link";

import {
  ArrowRight,
  Cable,
  Clock3,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Unified Technical Services for GIS, GPON, fiber optic, CCTV, electrical, fire alarm and solar project requirements.",
};

/* =====================================================
   CONTACT METHODS

   Replace placeholder details with real company
   information when available.
===================================================== */

const contactMethods = [
  {
    title: "Call Us",
    value: "Add company phone number",
    description: "Speak with our technical team.",
    icon: Phone,
  },
  {
    title: "Email Us",
    value: "Add company email address",
    description: "Send project details and requirements.",
    icon: Mail,
  },
  {
    title: "Office",
    value: "Add company office address",
    description: "Visit us for project discussions.",
    icon: MapPinned,
  },
  {
    title: "Working Hours",
    value: "Add working hours",
    description: "Our standard consultation schedule.",
    icon: Clock3,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#06111f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-grid relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="site-container relative py-20 text-center sm:py-24 lg:py-28">
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400 sm:text-xs">
            Contact Us
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something
            <span className="text-sky-400"> Better.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
            Have a fiber, GIS, security, electrical, fire-alarm or solar
            project? Share your requirements and let&apos;s start the
            conversation.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT METHODS
      ===================================================== */}

      <section className="border-b border-white/10 bg-[#020817]">
        <div className="site-container py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <div
                  key={method.title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <Icon size={20} />
                  </div>

                  <div className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {method.title}
                  </div>

                  <div className="mt-2 text-sm font-bold text-white">
                    {method.value}
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM + CONTACT PANEL
      ===================================================== */}

      <section className="relative py-20 sm:py-24">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="site-container relative">
          <div className="grid items-start gap-8 lg:grid-cols-[0.65fr_1.35fr]">
            {/* LEFT PANEL */}

            <div className="space-y-6 lg:sticky lg:top-28">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  Start a Project
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Tell Us What You
                  <span className="text-sky-400"> Need.</span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Whether you&apos;re planning a new fiber network, preparing
                  GIS data, installing CCTV or developing electrical and
                  renewable-energy infrastructure, send us your requirements.
                </p>
              </div>

              {/* WHAT TO SEND */}

              <div className="rounded-2xl border border-white/10 bg-[#08192b] p-6">
                <h3 className="font-bold text-white">
                  Helpful Project Information
                </h3>

                <div className="mt-5 space-y-4">
                  {[
                    "Project location or service area",
                    "Required technical service",
                    "Expected project scope",
                    "Existing drawings or GIS data",
                    "Target schedule or deadline",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK CONTACT */}

              <div className="relative overflow-hidden rounded-2xl border border-sky-400/20 bg-sky-400/[0.06] p-6">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-400/10 blur-[50px]" />

                <div className="relative">
                  <MessageCircle size={25} className="text-sky-400" />

                  <h3 className="mt-4 font-bold text-white">
                    Need a Quick Discussion?
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    We can add a direct WhatsApp consultation button here once
                    your official business number is finalized.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}

            <ContactForm />
          </div>
        </div>
      </section>

      {/* =====================================================
          MAP / OFFICE AREA
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#020817] py-20">
        <div className="site-container">
          <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#08192b] lg:grid-cols-2">
            {/* MAP PLACEHOLDER */}

            <div className="tech-grid relative min-h-[380px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/[0.04] to-transparent" />

              <svg
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 600 400"
                fill="none"
              >
                <path
                  d="M30 320 C130 250 130 150 240 170 C350 190 390 70 570 80"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                <path
                  d="M70 50 C150 100 200 270 330 290 C430 305 480 220 570 250"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/30 bg-[#020817] text-sky-400 shadow-[0_0_60px_rgba(14,165,233,0.25)]">
                  <MapPinned size={28} />
                </div>

                <div className="mt-4 rounded-full border border-white/10 bg-[#020817]/90 px-5 py-2 text-xs font-semibold text-slate-300">
                  Office Location
                </div>
              </div>
            </div>

            {/* OFFICE CONTENT */}

            <div className="flex items-center p-7 sm:p-10 lg:p-12">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  Visit Us
                </div>

                <h2 className="mt-4 text-3xl font-black text-white">
                  Let&apos;s Discuss Your Project.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                  Once the official office address is confirmed, this section
                  can display an interactive map, directions and complete
                  contact information.
                </p>

                <div className="mt-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <MapPinned size={21} />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white">
                      UnifiedTechnicalServices
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Company office address will appear here.
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-white">
                      Working Hours
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      Business schedule will appear here.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="py-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-[#08192b] px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="absolute left-1/2 top-0 h-64 w-[650px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                <Cable size={27} />
              </div>

              <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                Your Next Project Starts Here.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Explore our technical capabilities or send us your project
                requirements to begin the discussion.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
