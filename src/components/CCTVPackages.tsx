import Link from "next/link";

import {
  ArrowRight,
  Camera,
  Check,
  CircleCheck,
  HardDrive,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Video,
} from "lucide-react";

import { cctvPackages, type CCTVPackage } from "@/data/cctvPackages";

import ScrollReveal from "@/components/ScrollReveal";

import { StaggerItem, StaggerReveal } from "@/components/StaggerReveal";

/* =====================================================
   CCTV PACKAGES
===================================================== */

export default function CCTVPackages() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-sky-400/15 bg-[#020817] py-10 sm:py-12">
      {/* BACKGROUND GRID */}

      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.05] blur-[140px]" />

      <div className="site-container relative">
        {/* =================================================
            HEADER
        ================================================= */}

        <ScrollReveal direction="up" distance={25}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] px-4 py-2">
              <Camera size={14} className="text-sky-400" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                CCTV Security Packages
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Choose the Right{" "}
              <span className="text-sky-400">Security Solution</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Flexible surveillance packages for residential, commercial and
              infrastructure projects. Each solution can be customized according
              to site conditions and security requirements.
            </p>
          </div>
        </ScrollReveal>

        {/* =================================================
            PACKAGE CARDS
        ================================================= */}

        <StaggerReveal
          className="mt-9 grid items-start gap-5 lg:grid-cols-3"
          delay={0.12}
        >
          {cctvPackages.map((cctvPackage) => (
            <StaggerItem key={cctvPackage.id} className="h-full">
              <PackageCard cctvPackage={cctvPackage} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* =================================================
            CUSTOM CCTV SOLUTION
        ================================================= */}

        <ScrollReveal direction="up" distance={30} delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-sky-400/20 bg-gradient-to-r from-[#08192b] to-[#06111f] p-5 sm:p-6 lg:p-7">
            <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-[100px]" />

            <div className="relative grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              {/* LEFT */}

              <div className="flex gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400 sm:flex">
                  <Network size={22} />
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                    Custom CCTV Solution
                  </div>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    Need More Than 16 Cameras?
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                    We can design customized surveillance systems for larger
                    residential, commercial, industrial and infrastructure
                    projects, including multi-building and multi-site systems.
                  </p>

                  {/* CUSTOM FEATURES */}

                  <StaggerReveal
                    className="mt-4 flex flex-wrap gap-2"
                    delay={0.04}
                  >
                    {[
                      "24 / 32 / 64+ Cameras",
                      "IP CCTV",
                      "NVR Systems",
                      "PTZ Cameras",
                      "ANPR",
                      "Video Analytics",
                      "Multi-Site Monitoring",
                      "Access Control",
                    ].map((item) => (
                      <StaggerItem key={item}>
                        <span className="block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold text-slate-400">
                          {item}
                        </span>
                      </StaggerItem>
                    ))}
                  </StaggerReveal>
                </div>
              </div>

              {/* BUTTON */}

              <Link
                href="/contact?service=cctv&package=custom"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
              >
                Request Custom Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* DISCLAIMER */}

        <ScrollReveal direction="up" distance={15}>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[11px] leading-5 text-slate-600">
            Package specifications are indicative and can be customized
            according to camera type, site layout, storage requirements, cabling
            distance and project conditions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* =====================================================
   PACKAGE CARD
===================================================== */

function PackageCard({ cctvPackage }: { cctvPackage: CCTVPackage }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 ${
        cctvPackage.featured
          ? "border-sky-400/40 bg-[#0a2036] shadow-xl shadow-sky-950/30"
          : "border-white/10 bg-[#08192b] hover:border-sky-400/30"
      }`}
    >
      {/* =================================================
          RECOMMENDED BADGE
      ================================================= */}

      {cctvPackage.featured && (
        <div className="absolute right-0 top-0 z-10 rounded-bl-xl bg-sky-500 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.15em] text-white">
          Recommended
        </div>
      )}

      {/* =================================================
          PACKAGE HEADER
      ================================================= */}

      <div className="border-b border-white/10 p-5">
        {/* ICON */}

        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
          <Camera size={20} />
        </div>

        {/* SUBTITLE */}

        <div className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-sky-400">
          {cctvPackage.subtitle}
        </div>

        {/* NAME */}

        <h3 className="mt-1.5 text-xl font-black text-white">
          {cctvPackage.name}
        </h3>

        {/* CAPACITY */}

        <div className="mt-4 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#020817]/50 px-4 py-3">
          <div>
            <div className="text-[10px] text-slate-500">
              Surveillance Capacity
            </div>

            <div className="mt-0.5 text-lg font-black text-white">
              {cctvPackage.cameras}
            </div>
          </div>

          <div className="rounded-lg border border-sky-400/15 bg-sky-400/[0.06] px-3 py-1.5 text-right text-[11px] font-bold text-sky-400">
            {cctvPackage.resolution}
          </div>
        </div>
      </div>

      {/* =================================================
          SPECIFICATIONS
      ================================================= */}

      <div className="flex flex-1 flex-col p-5">
        <div>
          <Specification
            icon={Video}
            label="Recorder"
            value={cctvPackage.recorder}
          />

          <Specification
            icon={HardDrive}
            label="Storage"
            value={cctvPackage.storage}
          />

          <Specification
            icon={MonitorSmartphone}
            label="Remote Viewing"
            value={cctvPackage.remoteViewing ? "Included" : "Optional"}
          />

          <Specification
            icon={MonitorSmartphone}
            label="Mobile App"
            value={cctvPackage.mobileApp ? "Included" : "Optional"}
          />

          <Specification
            icon={Camera}
            label="Night Vision"
            value={cctvPackage.nightVision ? "Included" : "Optional"}
          />

          <Specification
            icon={ShieldCheck}
            label="Installation"
            value={cctvPackage.installation}
          />

          <Specification
            icon={Network}
            label="Cabling"
            value={cctvPackage.cabling}
          />

          <Specification
            icon={CircleCheck}
            label="Support"
            value={cctvPackage.support}
          />
        </div>

        {/* =================================================
            QUOTE
        ================================================= */}

        <div className="mt-auto pt-5">
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-end justify-between gap-3">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  Package Pricing
                </div>

                <div className="mt-1 text-lg font-black text-white">
                  Request Quote
                </div>
              </div>

              <div className="hidden rounded-lg border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-[9px] font-medium text-slate-500 sm:block">
                Customizable
              </div>
            </div>

            <p className="mt-2 text-[10px] leading-4 text-slate-500">
              Final pricing depends on equipment, brand, cabling, installation
              and site requirements.
            </p>

            <Link
              href={`/contact?service=cctv&package=${cctvPackage.id}`}
              className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition duration-300 ${
                cctvPackage.featured
                  ? "bg-sky-500 text-white hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                  : "border border-sky-400/20 bg-sky-400/[0.07] text-sky-400 hover:border-sky-400/40 hover:bg-sky-400/10"
              }`}
            >
              Request Quote
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   SPECIFICATION
===================================================== */

type SpecificationProps = {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;

  label: string;

  value: string;
};

function Specification({ icon: Icon, label, value }: SpecificationProps) {
  return (
    <div className="flex min-h-[43px] items-center justify-between gap-3 border-b border-white/[0.06] py-2">
      {/* LEFT */}

      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-400/[0.07] text-sky-400">
          <Icon size={13} />
        </div>

        <span className="text-[11px] text-slate-500">{label}</span>
      </div>

      {/* VALUE */}

      <div className="flex items-center gap-1.5 text-right text-[11px] font-semibold text-slate-200">
        {value === "Included" && (
          <Check size={12} className="shrink-0 text-sky-400" />
        )}

        {value}
      </div>
    </div>
  );
}
