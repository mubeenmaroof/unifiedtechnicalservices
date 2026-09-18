import type { Metadata } from "next";

import Link from "next/link";

import { Suspense } from "react";

import {
  ArrowRight,
  Building2,
  Clock3,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  RadioTower,
  ShieldCheck,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";

import { siteConfig } from "@/data/site";

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
  const phoneAvailable = Boolean(siteConfig.contact.phone);

  const emailAvailable = Boolean(siteConfig.contact.email);

  const whatsappAvailable = Boolean(siteConfig.contact.whatsapp);

  const addressAvailable = Boolean(siteConfig.contact.address);

  return (
    <main className="overflow-hidden bg-[#06111f]">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#020817]">
        {/* GRID */}

        <div className="tech-grid absolute inset-0 opacity-60" />

        {/* GLOWS */}

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
          <div className="mx-auto max-w-4xl text-center">
            {/* EYEBROW */}

            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
              <RadioTower size={14} />
              Connect With Our Team
            </div>

            {/* TITLE */}

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Build <span className="text-sky-400">Smarter</span>{" "}
              Infrastructure.
            </h1>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Tell us about your technical requirements, project scope or
              infrastructure challenge. Our team is ready to discuss GIS, fiber,
              security, electrical, fire-alarm and solar solutions.
            </p>

            {/* CAPABILITIES */}

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "GIS",
                "GPON",
                "FTTH",
                "CCTV",
                "Electrical",
                "Fire Alarm",
                "Solar",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          CONTACT METHODS
      ================================================= */}

      <section className="relative border-b border-white/[0.06] bg-[#06111f] py-14 sm:py-16">
        <div className="site-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* PHONE */}

            <ContactMethodCard
              icon={Phone}
              label="Call Us"
              value={
                phoneAvailable
                  ? siteConfig.contact.phoneDisplay
                  : "Phone number coming soon"
              }
              href={
                phoneAvailable ? `tel:${siteConfig.contact.phone}` : undefined
              }
            />

            {/* EMAIL */}

            <ContactMethodCard
              icon={Mail}
              label="Email Us"
              value={
                emailAvailable
                  ? siteConfig.contact.emailDisplay
                  : "Email address coming soon"
              }
              href={
                emailAvailable
                  ? `mailto:${siteConfig.contact.email}`
                  : undefined
              }
            />

            {/* WHATSAPP */}

            <ContactMethodCard
              icon={MessageCircle}
              label="WhatsApp"
              value={
                whatsappAvailable
                  ? "Start a conversation"
                  : "WhatsApp coming soon"
              }
              href={
                whatsappAvailable
                  ? `https://wa.me/${siteConfig.contact.whatsapp}`
                  : undefined
              }
              external
            />

            {/* LOCATION */}

            <ContactMethodCard
              icon={MapPin}
              label="Office"
              value={
                addressAvailable
                  ? siteConfig.contact.addressDisplay
                  : "Office details coming soon"
              }
            />
          </div>
        </div>
      </section>

      {/* =================================================
          PROJECT INQUIRY
      ================================================= */}

      <section className="relative py-20 sm:py-24 lg:py-28">
        {/* BACKGROUND */}

        <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.04] blur-[130px]" />

        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            {/* =========================================
                LEFT SIDE
            ========================================= */}

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

              {/* INFO CARDS */}

              <div className="mt-9 space-y-4">
                <ProjectInfo
                  icon={Network}
                  title="Technical Requirements"
                  description="Describe the service, scope, project location and any specific technical requirements."
                />

                <ProjectInfo
                  icon={FileText}
                  title="Attach Project Files"
                  description="You can include drawings, spreadsheets, KML/KMZ files, documents and other supported project material."
                />

                <ProjectInfo
                  icon={ShieldCheck}
                  title="Direct Communication"
                  description="Your inquiry is delivered directly to our team so we can review the project requirements."
                />
              </div>

              {/* PROCESS */}

              <div className="mt-10 rounded-2xl border border-white/10 bg-[#08192b]/80 p-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-sky-400">
                  How It Works
                </div>

                <div className="mt-5 space-y-5">
                  <ProcessStep number="01" title="Submit Inquiry" />

                  <ProcessStep number="02" title="Technical Review" />

                  <ProcessStep number="03" title="Project Discussion" />

                  <ProcessStep number="04" title="Solution & Proposal" />
                </div>
              </div>
            </div>

            {/* =========================================
                CONTACT FORM

                IMPORTANT:
                ContactForm uses useSearchParams().
                Suspense prevents the Next.js
                production prerender error.
            ========================================= */}

            <div>
              <Suspense fallback={<ContactFormLoading />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          HELPFUL INFORMATION
      ================================================= */}

      <section className="border-y border-white/[0.06] bg-[#020817] py-16 sm:py-20">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* PROJECT DETAILS */}

            <InfoBlock
              icon={Building2}
              title="Project Information"
              description="Providing clear project scope, location and service requirements helps our team understand your technical needs."
            />

            {/* WORKING HOURS */}

            <InfoBlock
              icon={Clock3}
              title="Working Hours"
              description={
                siteConfig.contact.workingHours ||
                "Company working hours will be added here."
              }
            />

            {/* DOCUMENTS */}

            <InfoBlock
              icon={FileText}
              title="Technical Documents"
              description="Attach available drawings, BOQs, GIS data, spreadsheets, KML/KMZ files or supporting project documents."
            />
          </div>
        </div>
      </section>

      {/* =================================================
          WHATSAPP / QUICK CONTACT
      ================================================= */}

      <section className="relative py-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#08192b] to-[#020817] p-7 sm:p-10 lg:p-12">
            {/* GRID */}

            <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

            {/* GLOW */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-[90px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  <MessageCircle size={16} />
                  Quick Contact
                </div>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  Need to Discuss a Project Directly?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                  For project discussions, technical requirements or service
                  information, use the inquiry form or contact our team directly
                  when company contact details are available.
                </p>
              </div>

              {whatsappAvailable ? (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                  <ArrowRight size={16} />
                </a>
              ) : (
                <Link
                  href="#project-inquiry"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                >
                  Project Inquiry
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          OFFICE / MAP PLACEHOLDER
      ================================================= */}

      <section className="pb-20 sm:pb-24">
        <div className="site-container">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#08192b]">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
              {/* DETAILS */}

              <div className="p-7 sm:p-9 lg:p-10">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Our Office
                </div>

                <h2 className="mt-4 text-2xl font-black text-white">
                  Visit Unified Technical Services
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {addressAvailable
                    ? siteConfig.contact.addressDisplay
                    : "Our official office address and map location will be published here once the company contact details are finalized."}
                </p>

                {addressAvailable && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-[#020817]/50 p-4">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-sky-400"
                    />

                    <span className="text-sm leading-6 text-slate-300">
                      {siteConfig.contact.addressDisplay}
                    </span>
                  </div>
                )}
              </div>

              {/* MAP VISUAL */}

              <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-white/10 bg-[#020817] lg:border-l lg:border-t-0">
                <div className="tech-grid absolute inset-0 opacity-60" />

                {/* DECORATIVE ROUTE */}

                <div className="absolute left-[12%] top-[25%] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />

                <div className="absolute right-[18%] top-[60%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

                <div className="absolute left-[15%] top-[28%] h-px w-[65%] rotate-[18deg] bg-gradient-to-r from-sky-400/70 via-cyan-400/30 to-transparent" />

                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
                    <MapPin size={28} />
                  </div>

                  <div className="mt-5 text-sm font-bold text-white">
                    Office Location
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Map integration will appear here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="border-t border-white/[0.06] bg-[#020817] py-16">
        <div className="site-container">
          <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                Unified Technical Services
              </div>

              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Connect. Plan. Build. Sustain.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Integrated technical solutions for smarter, safer and more
                sustainable infrastructure.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white transition hover:border-sky-400/30 hover:bg-sky-400/10"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   CONTACT FORM LOADING

   Required as the Suspense fallback for ContactForm.
===================================================== */

function ContactFormLoading() {
  return (
    <div className="flex min-h-[540px] items-center justify-center rounded-3xl border border-white/10 bg-[#08192b] p-8 shadow-2xl shadow-black/20">
      <div className="text-center">
        {/* SPINNER */}

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
   CONTACT METHOD CARD
===================================================== */

type ContactMethodCardProps = {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;

  label: string;

  value: string;

  href?: string;

  external?: boolean;
};

function ContactMethodCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactMethodCardProps) {
  const content = (
    <div className="group h-full rounded-2xl border border-white/10 bg-[#08192b] p-5 transition hover:border-sky-400/30 hover:bg-[#0a1f35]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
        <Icon size={20} />
      </div>

      <div className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>

      <div className="mt-2 break-words text-sm font-semibold leading-6 text-slate-200 transition group-hover:text-white">
        {value}
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} className="block h-full">
      {content}
    </a>
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

/* =====================================================
   INFORMATION BLOCK
===================================================== */

type InfoBlockProps = {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;

  title: string;

  description: string;
};

function InfoBlock({ icon: Icon, title, description }: InfoBlockProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#08192b]/60 p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-base font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
    </div>
  );
}
