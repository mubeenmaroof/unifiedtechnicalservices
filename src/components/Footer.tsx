import Link from "next/link";

import {
  ArrowUpRight,
  Cable,
  Globe,
  Link2,
  Mail,
  MapPin,
  Phone,
  RadioTower,
} from "lucide-react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Fiber & GPON Planning", href: "/services#fiber" },
  { label: "GIS & Mapping", href: "/services#gis" },
  { label: "CCTV & Security", href: "/services#cctv" },
  { label: "Electrical Works", href: "/services#electrical" },
  { label: "Fire Alarm Systems", href: "/services#fire" },
  { label: "Solar Solutions", href: "/services#solar" },
];

const telecomLinks = [
  "FTTH Planning",
  "FTTB Planning",
  "FTTX Planning",
  "GPON Planning",
  "ADT / FDT Planning",
  "ArcGIS & QGIS",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817]">
      {/* Background effects */}

      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[700px] -translate-x-1/2 rounded-full bg-sky-500/[0.05] blur-[120px]" />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="site-container relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_1fr]">
          {/* BRAND */}

          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-sky-400 to-blue-700 shadow-lg shadow-sky-500/20">
                <RadioTower size={24} className="text-white" />
              </div>

              <div className="leading-tight">
                <div className="text-lg font-bold tracking-tight text-white">
                  Unified
                  <span className="text-sky-400">Technical</span>
                  Services
                </div>

                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.23em] text-slate-500">
                  Connect | Plan | Build | Sustain
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Integrated technical solutions across GIS, fiber-optic networks,
              security, electrical infrastructure, fire-alarm systems and
              renewable energy.
            </p>

            {/* Contact details */}

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={16} className="shrink-0 text-sky-400" />

                <span>Add company phone number</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={16} className="shrink-0 text-sky-400" />

                <span>Add company email</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />

                <span>Add company office address</span>
              </div>
            </div>
          </div>

          {/* COMPANY */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Company
            </h3>

            <div className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-sky-400"
                >
                  <ArrowUpRight size={13} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <div className="mt-6 space-y-3">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:text-sky-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* TECHNICAL */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Technical Expertise
            </h3>

            <div className="mt-6 space-y-3">
              {telecomLinks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTACT CTA
        ===================================================== */}

        <div className="mt-12 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
              <Cable size={21} />
            </div>

            <div>
              <div className="font-bold text-white">
                Have a technical project?
              </div>

              <div className="mt-1 text-sm text-slate-500">
                Tell us about your requirements and project scope.
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Get a Quote
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="relative border-t border-white/10">
        <div className="site-container flex flex-col gap-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} UnifiedTechnicalServices. All rights
            reserved.
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="transition hover:text-sky-400">
              Privacy Policy
            </Link>

            <Link href="/" className="transition hover:text-sky-400">
              Terms & Conditions
            </Link>

            {/* Social placeholders */}

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-sky-400/30 hover:text-sky-400">
                <Globe size={14} />
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-sky-400/30 hover:text-sky-400">
                <Link2 size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
