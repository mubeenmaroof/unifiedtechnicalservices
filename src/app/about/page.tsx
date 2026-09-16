import Link from "next/link";

import {
  ArrowRight,
  Award,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  DraftingCompass,
  Eye,
  Flame,
  Hammer,
  Lightbulb,
  Map,
  PanelsTopLeft,
  RadioTower,
  Search,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Unified Technical Services and our integrated approach to GIS, telecom, security, electrical and renewable-energy infrastructure.",
};

/* =====================================================
   COMPANY VALUES
===================================================== */

const values = [
  {
    title: "Technical Excellence",
    description:
      "We focus on accurate planning, practical engineering and dependable implementation.",
    icon: Award,
  },
  {
    title: "Integrated Thinking",
    description:
      "GIS, telecom, security, electrical and energy disciplines are connected rather than treated in isolation.",
    icon: Lightbulb,
  },
  {
    title: "Reliable Delivery",
    description:
      "Our approach is built around clear requirements, structured workflows and quality-focused execution.",
    icon: ShieldCheck,
  },
  {
    title: "Client Focus",
    description:
      "Solutions are developed around real project requirements, operational needs and future scalability.",
    icon: Users,
  },
];

/* =====================================================
   WORKFLOW
===================================================== */

const workflow = [
  {
    number: "01",
    title: "Survey",
    description:
      "Understand the site, requirements and available project data.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Develop routes, architecture, GIS analysis and technical strategy.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Prepare detailed layouts, drawings and engineering documentation.",
    icon: DraftingCompass,
  },
  {
    number: "04",
    title: "Implement",
    description:
      "Execute the approved solution through deployment and installation.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Test",
    description:
      "Verify installation, connectivity, performance and system operation.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Handover",
    description: "Deliver documentation, as-builts and the completed solution.",
    icon: CheckCircle2,
  },
];

/* =====================================================
   EXPERTISE
===================================================== */

const expertise = [
  {
    title: "Fiber & Telecom",
    description: "FTTH, FTTB, FTTX, GPON, FDT and ADT planning.",
    icon: Cable,
  },
  {
    title: "GIS & Geospatial",
    description: "ArcGIS, QGIS, RS/GIS, spatial analysis and network mapping.",
    icon: Map,
  },
  {
    title: "CCTV & Security",
    description:
      "Surveillance planning, installation and monitoring solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Electrical",
    description: "Single-phase, three-phase and electrical as-built works.",
    icon: Zap,
  },
  {
    title: "Fire Alarm",
    description:
      "Fire detection, alarm design, installation and commissioning.",
    icon: Flame,
  },
  {
    title: "Solar Energy",
    description: "Residential, commercial and industrial solar solutions.",
    icon: PanelsTopLeft,
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#06111f]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tech-grid relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

        <div className="site-container relative py-20 text-center sm:py-24 lg:py-28">
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400 sm:text-xs">
            About UnifiedTechnicalServices
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Engineering Smarter
            <span className="text-sky-400"> Infrastructure</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
            Bringing together geospatial intelligence, telecom planning,
            security, electrical engineering and renewable energy to support
            modern infrastructure projects.
          </p>
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className="relative py-20 sm:py-24">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="site-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* CONTENT */}

            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                Who We Are
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                One Team.
                <br />
                Multiple
                <span className="text-sky-400"> Disciplines.</span>
              </h2>

              <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
                UnifiedTechnicalServices is focused on integrated technical and
                engineering solutions across telecom, GIS, security, electrical
                infrastructure, fire-alarm systems and renewable energy.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Our approach connects digital planning with physical
                implementation. GIS and network intelligence help shape the
                design, while structured engineering workflows carry the project
                through implementation, testing and final documentation.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Integrated technical planning",
                  "GIS-based infrastructure intelligence",
                  "Engineering documentation",
                  "Field implementation support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <CheckCircle2 size={18} className="shrink-0 text-sky-400" />

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* TECHNICAL VISUAL */}

            <div className="relative mx-auto w-full max-w-xl">
              <div className="tech-grid relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#08192b] shadow-2xl shadow-black/30">
                {/* Rings */}

                <div className="absolute inset-[10%] rounded-full border border-sky-400/10" />
                <div className="absolute inset-[25%] rounded-full border border-sky-400/20" />
                <div className="absolute inset-[39%] rounded-full border border-sky-400/30" />

                {/* Network */}

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 500 500"
                  fill="none"
                >
                  <line
                    x1="250"
                    y1="250"
                    x2="110"
                    y2="110"
                    stroke="#0ea5e9"
                    strokeOpacity=".5"
                  />

                  <line
                    x1="250"
                    y1="250"
                    x2="395"
                    y2="100"
                    stroke="#22d3ee"
                    strokeOpacity=".5"
                  />

                  <line
                    x1="250"
                    y1="250"
                    x2="405"
                    y2="385"
                    stroke="#0ea5e9"
                    strokeOpacity=".5"
                  />

                  <line
                    x1="250"
                    y1="250"
                    x2="105"
                    y2="385"
                    stroke="#22d3ee"
                    strokeOpacity=".5"
                  />
                </svg>

                {/* Center */}

                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-sky-400/30 bg-[#020817] text-sky-400 shadow-[0_0_70px_rgba(14,165,233,0.2)]">
                  <RadioTower size={38} />
                </div>

                {/* Nodes */}

                <div className="absolute left-[13%] top-[14%] flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-[#020817] text-sky-400">
                  <Map size={23} />
                </div>

                <div className="absolute right-[13%] top-[12%] flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#020817] text-cyan-400">
                  <Cable size={23} />
                </div>

                <div className="absolute bottom-[12%] right-[12%] flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-[#020817] text-sky-400">
                  <Zap size={23} />
                </div>

                <div className="absolute bottom-[12%] left-[12%] flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[#020817] text-cyan-400">
                  <PanelsTopLeft size={23} />
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#020817]/90 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Connect • Plan • Build • Sustain
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#020817] py-20 sm:py-24">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* MISSION */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08192b] p-7 sm:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-[80px]" />

              <div className="relative">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 p-3 text-sky-400">
                  <Target size={26} />
                </div>

                <div className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                  Our Mission
                </div>

                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Practical Technology.
                  <br />
                  Reliable Infrastructure.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  To provide integrated technical solutions that combine
                  accurate planning, engineering expertise and dependable
                  implementation to help clients develop smarter and more
                  reliable infrastructure.
                </p>
              </div>
            </div>

            {/* VISION */}

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08192b] p-7 sm:p-10">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />

              <div className="relative">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-400">
                  <Eye size={26} />
                </div>

                <div className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Our Vision
                </div>

                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                  Connected.
                  <br />
                  Intelligent. Sustainable.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  To contribute to a future where infrastructure is
                  intelligently planned, efficiently connected, securely
                  operated and increasingly powered by sustainable technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="py-20 sm:py-24">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              What Guides Us
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Our Core
              <span className="text-sky-400"> Values</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              The principles behind how we plan, design and deliver technical
              solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-[#08192b] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400/15">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#071525] py-20 sm:py-24">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                Our Expertise
              </div>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                One Technical
                <span className="text-sky-400"> Ecosystem</span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                Our service areas are designed to complement one another,
                allowing projects to move from digital planning and
                documentation into real-world infrastructure implementation.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
              >
                View Detailed Services
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-white/[0.08] bg-[#020817]/40 p-5 transition hover:border-sky-400/20"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="relative py-20 sm:py-24">
        <div className="absolute left-1/2 top-1/2 h-80 w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

        <div className="site-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Project Lifecycle
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Survey to
              <span className="text-sky-400"> Handover</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              A structured workflow keeps technical projects clear, traceable
              and focused from the first requirement to final delivery.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Desktop connector */}

            <div className="absolute left-[8%] right-[8%] top-[36px] hidden h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {workflow.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="relative rounded-2xl border border-white/10 bg-[#08192b] p-5"
                  >
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-[#06111f] text-sky-400">
                      <Icon size={23} />
                    </div>

                    <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400">
                      Step {step.number}
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-xs leading-5 text-slate-400">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY STATS PLACEHOLDER
      ===================================================== */}

      <section className="border-y border-white/10 bg-[#020817] py-16">
        <div className="site-container">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-2xl font-black text-sky-400">GIS</div>

              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                Spatial Intelligence
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-sky-400">GPON</div>

              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                Fiber Planning
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-sky-400">ELV</div>

              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                Security & Fire
              </div>
            </div>

            <div>
              <div className="text-2xl font-black text-sky-400">ENERGY</div>

              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-slate-500">
                Electrical & Solar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="py-20">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-[#08192b] px-6 py-12 text-center sm:px-10 sm:py-16">
            <div className="absolute left-1/2 top-0 h-64 w-[650px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
                <RadioTower size={27} />
              </div>

              <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
                Let&apos;s Build Smarter Infrastructure.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Have a GIS, fiber, security, electrical, fire-alarm or solar
                project? Tell us what you need and we can discuss the right
                technical approach.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Discuss Your Project
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
