import type { Metadata } from "next";

import { Suspense } from "react";

import {
  ExternalLink,
  FileText,
  LocateFixed,
  MapPin,
  Navigation,
  Network,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

import { StaggerItem, StaggerReveal } from "@/components/StaggerReveal";

import { siteConfig } from "@/data/site";

import OfficeMapLoader from "@/components/OfficeMapLoader";

/* =====================================================
   METADATA
===================================================== */

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact Unified Technical Services for GIS, Fiber Optic, GPON Planning, CCTV, Electrical, Fire Alarm and Solar Installation services.",
};

/* =====================================================
   CONTACT PAGE
===================================================== */

export default function ContactPage() {
  const addressAvailable = Boolean(siteConfig.contact.address);

  const latitude = siteConfig.contact.latitude;

  const longitude = siteConfig.contact.longitude;

  /* ===================================================
     MAP LINKS
  =================================================== */

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <main className="overflow-hidden bg-[#06111f]">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#020817]">
        <div className="tech-grid absolute inset-0 opacity-60" />

        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[120px]" />

        {/* NETWORK LINES */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute left-[8%] top-[28%] h-px w-[20%] rotate-[12deg] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          <div className="absolute right-[8%] top-[40%] h-px w-[24%] -rotate-[10deg] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="absolute left-[35%] top-[20%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)]" />

          <div className="absolute right-[25%] top-[55%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>

        <div className="site-container relative py-20 sm:py-24 lg:py-28">
          <ScrollReveal direction="up" distance={30}>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                <RadioTower size={14} />
                Connect With Our Team
              </div>

              <h1 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Build <span className="text-sky-400">Smarter</span>{" "}
                Infrastructure.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                Tell us about your technical requirements, project scope or
                infrastructure challenge. Our team is ready to discuss GIS,
                fiber, security, electrical, fire-alarm and solar solutions.
              </p>

              <StaggerReveal
                className="mt-8 flex flex-wrap justify-center gap-2"
                delay={0.06}
              >
                {[
                  "GIS",
                  "GPON",
                  "FTTH",
                  "CCTV",
                  "Electrical",
                  "Fire Alarm",
                  "Solar",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <span className="block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {item}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =================================================
          PROJECT INQUIRY
      ================================================= */}

      <section
        id="inquiry-form"
        className="relative scroll-mt-20 py-20 sm:py-24 lg:py-28"
      >
        <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.04] blur-[130px]" />

        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* LEFT */}

            <ScrollReveal direction="right" distance={45}>
              <div className="lg:pt-5">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Start a Project
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Tell Us What You Need.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                  Whether you&apos;re planning a fiber network, organizing GIS
                  data, deploying security systems or building technical
                  infrastructure, share the project details with our team.
                </p>

                <StaggerReveal className="mt-9 space-y-4" delay={0.1}>
                  <StaggerItem>
                    <ProjectInfo
                      icon={Network}
                      title="Technical Requirements"
                      description="Describe the service, scope, project location and any specific technical requirements."
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <ProjectInfo
                      icon={FileText}
                      title="Attach Project Files"
                      description="You can include drawings, spreadsheets, KML/KMZ files, documents and other supported project material."
                    />
                  </StaggerItem>

                  <StaggerItem>
                    <ProjectInfo
                      icon={ShieldCheck}
                      title="Direct Communication"
                      description="Your inquiry is delivered directly to our team so we can review the project requirements."
                    />
                  </StaggerItem>
                </StaggerReveal>

                <ScrollReveal direction="up" distance={25} delay={0.1}>
                  <div className="mt-10 rounded-2xl border border-white/10 bg-[#08192b]/80 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                      How It Works
                    </div>

                    <StaggerReveal className="mt-5 space-y-5" delay={0.08}>
                      <StaggerItem>
                        <ProcessStep number="01" title="Submit Inquiry" />
                      </StaggerItem>

                      <StaggerItem>
                        <ProcessStep number="02" title="Technical Review" />
                      </StaggerItem>

                      <StaggerItem>
                        <ProcessStep number="03" title="Project Discussion" />
                      </StaggerItem>

                      <StaggerItem>
                        <ProcessStep number="04" title="Solution & Proposal" />
                      </StaggerItem>
                    </StaggerReveal>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* CONTACT FORM */}

            <ScrollReveal direction="left" distance={45} delay={0.1}>
              <div>
                <Suspense fallback={<ContactFormLoading />}>
                  <ContactForm />
                </Suspense>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* =================================================
          OFFICE LOCATION + REAL MAP
      ================================================= */}

      <section id="office-location" className="scroll-mt-24 pb-20 sm:pb-24">
        <div className="site-container">
          {/* SECTION HEADING */}

          <ScrollReveal direction="up" distance={25}>
            <div className="mb-9 text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400">
                Find Us
              </div>

              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Our Office Location
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Use the interactive map to view our company location or open
                directions in Google Maps.
              </p>
            </div>
          </ScrollReveal>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#08192b] shadow-2xl shadow-black/20">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              {/* =========================================
                  OFFICE DETAILS
              ========================================= */}

              <ScrollReveal direction="right" distance={40} className="h-full">
                <div className="h-full p-7 sm:p-9 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                    <MapPin size={22} />
                  </div>

                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                    Our Office
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-white">
                    Unified Technical Services
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {addressAvailable
                      ? siteConfig.contact.addressDisplay
                      : "Our company location is shown on the map using the configured GPS coordinates."}
                  </p>

                  {/* =====================================
                      GPS COORDINATES
                  ===================================== */}

                  <div className="mt-7 rounded-2xl border border-white/10 bg-[#020817]/60 p-5">
                    <div className="flex items-center gap-2">
                      <LocateFixed size={16} className="text-sky-400" />

                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                        GPS Coordinates
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                      {/* LATITUDE */}

                      <div>
                        <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                          Latitude
                        </div>

                        <div className="mt-2 font-mono text-sm font-semibold text-slate-200">
                          {latitude.toFixed(6)}
                        </div>
                      </div>

                      {/* LONGITUDE */}

                      <div>
                        <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                          Longitude
                        </div>

                        <div className="mt-2 font-mono text-sm font-semibold text-slate-200">
                          {longitude.toFixed(6)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* =====================================
                      MAP BUTTONS
                  ===================================== */}

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-xs font-bold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                    >
                      <MapPin size={16} />
                      View on Google Maps
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-bold text-slate-200 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-white"
                    >
                      <Navigation size={16} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* =========================================
                  INTERACTIVE MAP
              ========================================= */}

              <ScrollReveal
                direction="left"
                distance={40}
                delay={0.1}
                className="h-full"
              >
                <div className="h-full min-h-[380px] overflow-hidden border-t border-white/10 bg-[#020817] lg:border-l lg:border-t-0">
                  <OfficeMapLoader
                    latitude={latitude}
                    longitude={longitude}
                    companyName="Unified Technical Services"
                    address={
                      addressAvailable
                        ? siteConfig.contact.addressDisplay
                        : undefined
                    }
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   CONTACT FORM LOADING
===================================================== */

function ContactFormLoading() {
  return (
    <div className="flex min-h-[540px] items-center justify-center rounded-3xl border border-white/10 bg-[#08192b] p-8 shadow-2xl shadow-black/20">
      <div className="text-center">
        <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-slate-700 border-t-sky-400" />

        <div className="mt-5 text-sm font-semibold text-white">
          Loading Project Inquiry
        </div>

        <p className="mt-2 text-xs text-slate-500">
          Preparing the inquiry form...
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   PROJECT INFO
===================================================== */

type ProjectInfoProps = {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;

  title: string;

  description: string;
};

function ProjectInfo({ icon: Icon, title, description }: ProjectInfoProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
        <Icon size={19} />
      </div>

      <div>
        <h3 className="text-sm font-bold text-white">{title}</h3>

        <p className="mt-1 text-xs leading-6 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

/* =====================================================
   PROCESS STEP
===================================================== */

type ProcessStepProps = {
  number: string;

  title: string;
};

function ProcessStep({ number, title }: ProcessStepProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/[0.07] font-mono text-[10px] font-bold text-sky-400">
        {number}
      </div>

      <div className="h-px w-5 bg-sky-400/20" />

      <div className="text-sm font-semibold text-slate-300">{title}</div>
    </div>
  );
}
