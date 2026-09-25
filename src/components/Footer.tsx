import Link from "next/link";

import {
  ArrowUpRight,
  Clock3,
  Globe,
  Link2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import BrandLogo from "@/components/BrandLogo";
import { siteConfig } from "@/data/site";

/* =====================================================
   FOOTER LINKS
===================================================== */

const companyLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const serviceLinks = [
  {
    label: "Fiber & GPON Planning",
    href: "/services#fiber",
  },
  {
    label: "GIS & Mapping",
    href: "/services#gis",
  },
  {
    label: "CCTV & Security",
    href: "/services#cctv",
  },
  {
    label: "Electrical Works",
    href: "/services#electrical",
  },
  {
    label: "Fire Alarm Systems",
    href: "/services#fire",
  },
  {
    label: "Solar Solutions",
    href: "/services#solar",
  },
];

const technicalLinks = [
  "FTTH Planning",
  "FTTB Planning",
  "FTTX Planning",
  "GPON Planning",
  "ADT / FDT Planning",
  "ArcGIS & QGIS",
];

/* =====================================================
   FOOTER
===================================================== */

export default function Footer() {
  const phoneAvailable = Boolean(siteConfig.contact.phone);

  const emailAvailable = Boolean(siteConfig.contact.email);

  const addressAvailable = Boolean(siteConfig.contact.address);

  const facebookAvailable = Boolean(siteConfig.social.facebook);

  const linkedinAvailable = Boolean(siteConfig.social.linkedin);

  const workingAvailable = Boolean(siteConfig.contact.workingHours);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020817]">
      {/* =================================================
          BACKGROUND EFFECTS
      ================================================= */}

      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[650px] -translate-x-1/2 rounded-full bg-sky-500/[0.05] blur-[120px]" />

      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/[0.04] blur-[100px]" />

      {/* =================================================
          MAIN FOOTER
      ================================================= */}

      <div className="site-container relative py-8 sm:py-9">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr_1fr] lg:gap-8">
          {/* =============================================
              BRAND / COMPANY INFORMATION
          ============================================= */}

          <div>
            <BrandLogo />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {siteConfig.description}
            </p>

            {/* ===========================================
                CONTACT INFORMATION
            =========================================== */}

            <div className="mt-4 space-y-2">
              {/* PHONE */}

              {phoneAvailable ? (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400/15">
                    <Phone size={15} />
                  </div>

                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              ) : (
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] text-slate-500">
                    <Phone size={15} />
                  </div>

                  <span>{siteConfig.contact.phoneDisplay}</span>
                </div>
              )}

              {/* EMAIL */}

              {emailAvailable ? (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400 transition group-hover:bg-sky-400/15">
                    <Mail size={15} />
                  </div>

                  <span className="break-all">
                    {siteConfig.contact.emailDisplay}
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] text-slate-500">
                    <Mail size={15} />
                  </div>

                  <span>{siteConfig.contact.emailDisplay}</span>
                </div>
              )}

              {/* ADDRESS */}

              {addressAvailable ? (
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <MapPin size={15} />
                  </div>

                  <span className="max-w-xs pt-1.5 leading-5">
                    {siteConfig.contact.addressDisplay}
                  </span>
                </div>
              ) : (
                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-slate-500">
                    <MapPin size={15} />
                  </div>

                  <span className="max-w-xs pt-1.5 leading-5">
                    {siteConfig.contact.addressDisplay}
                  </span>
                </div>
              )}

              {/* WORKING HOURS */}

              {workingAvailable ? (
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                    <Clock3 size={15} />
                  </div>

                  <span className="max-w-xs pt-1.5 leading-5">
                    {siteConfig.contact.workingHours}
                  </span>
                </div>
              ) : (
                <div className="flex items-start gap-3 text-sm text-slate-500">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-slate-500">
                    <Clock3 size={15} />
                  </div>

                  <span className="max-w-xs pt-1.5 leading-5">
                    {siteConfig.contact.workingHours}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* =============================================
              COMPANY LINKS
          ============================================= */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Company
            </h3>

            <div className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:translate-x-1 hover:text-sky-400"
                >
                  <ArrowUpRight
                    size={13}
                    className="text-slate-600 transition group-hover:text-sky-400"
                  />

                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* =============================================
              SERVICES
          ============================================= */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <div className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-sky-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* =============================================
              TECHNICAL EXPERTISE
          ============================================= */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Technical Expertise
            </h3>

            <div className="mt-4 space-y-2">
              {technicalLinks.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          BOTTOM FOOTER
      ================================================= */}

      <div className="relative border-t border-white/10">
        <div className="site-container flex flex-col gap-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          {/* COPYRIGHT */}

          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>

          {/* RIGHT SIDE */}

          <div className="flex flex-wrap items-center gap-5">
            <span>Privacy Policy</span>

            <span>Terms & Conditions</span>

            {/* SOCIAL LINKS */}

            {(facebookAvailable || linkedinAvailable) && (
              <div className="flex items-center gap-2">
                {facebookAvailable && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400"
                  >
                    <Globe size={14} />
                  </a>
                )}

                {linkedinAvailable && (
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-400"
                  >
                    <Link2 size={14} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
