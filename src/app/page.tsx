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

import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import CTASection from "@/components/CTASection";

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
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="site-container relative">
          <div className="grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Smart Infrastructure Solutions
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Engineering
                <span className="text-sky-400"> Connections.</span>
                <br />
                Building
                <span className="text-white"> Possibilities.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Integrated GIS, fiber optic, security, electrical, fire alarm
                and renewable-energy solutions designed for smarter, safer and
                more connected infrastructure.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>

              {/* Capabilities */}
              <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {heroCapabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3"
                    >
                      <Icon size={18} className="shrink-0 text-sky-400" />

                      <span className="text-xs font-medium text-slate-300">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-[550px]">
                {/* Rings */}
                <div className="absolute inset-[8%] rounded-full border border-sky-400/10" />
                <div className="absolute inset-[22%] rounded-full border border-sky-400/20" />
                <div className="absolute inset-[36%] rounded-full border border-sky-400/30" />

                {/* Center */}
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-400/30 bg-[#071525] text-sky-400 shadow-[0_0_80px_rgba(14,165,233,0.2)]">
                  <RadioTower size={43} />
                </div>

                {/* Network lines */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 500 500"
                  fill="none"
                >
                  <line
                    x1="250"
                    y1="250"
                    x2="110"
                    y2="105"
                    stroke="#0ea5e9"
                    strokeOpacity=".45"
                  />

                  <line
                    x1="250"
                    y1="250"
                    x2="405"
                    y2="115"
                    stroke="#22d3ee"
                    strokeOpacity=".45"
                  />

                  <line
                    x1="250"
                    y1="250"
                    x2="425"
                    y2="355"
                    stroke="#0ea5e9"
                    strokeOpacity=".45"
                  />

                  <line
                    x1="250"
                    y1="250"
                    x2="100"
                    y2="390"
                    stroke="#22d3ee"
                    strokeOpacity=".45"
                  />
                </svg>

                {/* Nodes */}
                <div className="absolute left-[14%] top-[14%] flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-[#071525] text-sky-400 shadow-xl">
                  <MapPinned size={25} />
                </div>

                <div className="absolute right-[11%] top-[16%] flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#071525] text-cyan-400 shadow-xl">
                  <Cable size={25} />
                </div>

                <div className="absolute bottom-[15%] right-[7%] flex h-16 w-16 items-center justify-center rounded-2xl border border-sky-400/20 bg-[#071525] text-sky-400 shadow-xl">
                  <Camera size={25} />
                </div>

                <div className="absolute bottom-[9%] left-[12%] flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#071525] text-cyan-400 shadow-xl">
                  <PanelsTopLeft size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE STRIP
      ===================================================== */}

      <StatsSection />

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <ServicesSection />

      {/* =====================================================
          DIGITAL → PHYSICAL
      ===================================================== */}

      <InfrastructureSection />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection />
    </main>
  );
}
