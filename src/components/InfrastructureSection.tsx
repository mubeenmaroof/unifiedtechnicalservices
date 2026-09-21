import Link from "next/link";

import { ArrowRight, Cable, CircleCheck, Map, RadioTower } from "lucide-react";

const capabilities = [
  "GIS-based infrastructure planning",
  "Fiber route and GPON network design",
  "CCTV & security system integration",
  "Technical drawings and as-built documentation",
  "Field implementation and installation support",
];

export default function InfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-[#06111f] py-20 sm:py-24">
      {/* Background effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="site-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              Complete Project Lifecycle
            </div>

            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Digital Planning to
              <span className="text-sky-400"> Physical Infrastructure</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              We combine geospatial intelligence, network planning and field
              engineering to transform infrastructure requirements into
              practical, reliable and future-ready solutions.
            </p>

            <div className="mt-8 space-y-4">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CircleCheck size={18} className="shrink-0 text-sky-400" />

                  {capability}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Discover Our Approach
              <ArrowRight size={17} />
            </Link>
          </div>

          {/* Right technical visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="tech-grid relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-[#081a2d] p-5 shadow-2xl shadow-black/30 sm:p-8">
              {/* Decorative map paths */}
              <svg
                className="absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 600 450"
                fill="none"
              >
                <path
                  d="M70 350 C150 240 180 300 250 180 C320 70 400 140 530 60"
                  stroke="#0ea5e9"
                  strokeWidth="2"
                  strokeDasharray="7 7"
                />

                <path
                  d="M80 90 C190 120 190 220 320 230 C420 240 450 340 540 360"
                  stroke="#22d3ee"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                />
              </svg>

              {/* Nodes */}
              <div className="absolute left-[10%] top-[68%] flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-[#06111f] text-sky-400 shadow-xl">
                <Map size={24} />
              </div>

              <div className="absolute left-[40%] top-[38%] flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#06111f] text-cyan-400 shadow-xl">
                <RadioTower size={27} />
              </div>

              <div className="absolute right-[8%] top-[10%] flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/30 bg-[#06111f] text-sky-400 shadow-xl">
                <Cable size={24} />
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#020817]/90 p-5 backdrop-blur">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
                  Unified Workflow
                </div>

                <div className="mt-3 grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-slate-300 sm:text-xs">
                  <div>Survey</div>
                  <div>Plan</div>
                  <div>Build</div>
                  <div>Maintain</div>
                </div>

                <div className="relative mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="absolute inset-y-0 left-0 w-[82%] rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
