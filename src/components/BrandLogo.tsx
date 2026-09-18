import Link from "next/link";

import { Network, RadioTower } from "lucide-react";

type BrandLogoProps = {
  showTagline?: boolean;
  compact?: boolean;
};

export default function BrandLogo({
  showTagline = true,
  compact = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="group inline-flex min-w-0 items-center gap-2 sm:gap-3"
      aria-label="Unified Technical Services home"
    >
      {/* LOGO MARK */}

      <div
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-sky-300/20 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-700 shadow-lg shadow-sky-500/20 ${
          compact ? "h-10 w-10" : "h-11 w-11"
        }`}
      >
        {/* Background network icon */}

        <Network size={34} strokeWidth={1} className="absolute text-white/10" />

        {/* Main icon */}

        <RadioTower
          size={compact ? 19 : 21}
          strokeWidth={2.2}
          className="relative text-white"
        />

        {/* Small glow */}

        <div className="absolute bottom-0 h-3 w-8 rounded-full bg-cyan-300/30 blur-md" />
      </div>

      {/* BRAND TEXT */}

      <div className="min-w-0 leading-tight">
        <div
          className={`font-bold tracking-tight text-white ${
            compact
              ? "text-[12px] min-[380px]:text-[14px]"
              : "text-[12px] min-[380px]:text-[15px] sm:text-lg"
          }`}
        >
          Unified
          <span className="text-sky-400">Technical</span>
          Services
        </div>

        {showTagline && (
          <div className="mt-1 hidden text-[8px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:block">
            Connect | Plan | Build | Sustain
          </div>
        )}
      </div>
    </Link>
  );
}
