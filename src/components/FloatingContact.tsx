"use client";

import Link from "next/link";

import { Mail, MessageCircle, Phone, X } from "lucide-react";

import { useState } from "react";

import { siteConfig } from "@/data/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  const phoneAvailable = Boolean(siteConfig.contact.phone);

  const emailAvailable = Boolean(siteConfig.contact.email);

  const whatsappAvailable = Boolean(siteConfig.contact.whatsapp);

  return (
    <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[60] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* CONTACT PANEL */}

      <div
        className={`origin-bottom-right overflow-hidden rounded-2xl border border-white/10 bg-[#020817]/95 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <div className="w-[min(280px,calc(100vw-1.5rem))] p-4">
          <div className="px-2 pb-3">
            <div className="text-sm font-bold text-white">Contact Us</div>

            <div className="mt-1 text-xs leading-5 text-slate-500">
              Choose how you would like to discuss your project.
            </div>
          </div>

          <div className="space-y-2">
            {/* WHATSAPP */}

            {whatsappAvailable && (
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition hover:border-emerald-400/30 hover:bg-emerald-400/[0.05]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <MessageCircle size={18} />
                </div>

                <div>
                  <div className="text-xs font-semibold text-white">
                    WhatsApp
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-500">
                    Chat about your project
                  </div>
                </div>
              </a>
            )}

            {/* PHONE */}

            {phoneAvailable && (
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition hover:border-sky-400/30 hover:bg-sky-400/[0.05]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                  <Phone size={17} />
                </div>

                <div>
                  <div className="text-xs font-semibold text-white">
                    Call Us
                  </div>

                  <div className="mt-0.5 text-[10px] text-slate-500">
                    {siteConfig.contact.phoneDisplay}
                  </div>
                </div>
              </a>
            )}

            {/* EMAIL */}

            {emailAvailable && (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition hover:border-sky-400/30 hover:bg-sky-400/[0.05]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white">
                    Email Us
                  </div>

                  <div className="mt-0.5 truncate text-[10px] text-slate-500">
                    {siteConfig.contact.emailDisplay}
                  </div>
                </div>
              </a>
            )}

            {/* CONTACT PAGE */}

            <Link
              href="/contact#inquiry-form"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 transition hover:border-sky-400/30 hover:bg-sky-400/[0.05]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-400">
                <MessageCircle size={17} />
              </div>

              <div>
                <div className="text-xs font-semibold text-white">
                  Project Inquiry
                </div>

                <div className="mt-0.5 text-[10px] text-slate-500">
                  Send project requirements
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* FLOATING BUTTON */}

      <button
        type="button"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        className="network-pulse flex h-14 w-14 items-center justify-center rounded-full border border-sky-300/20 bg-sky-500 text-white shadow-xl shadow-sky-500/25 transition hover:scale-105 hover:bg-sky-400"
      >
        {open ? <X size={22} /> : <MessageCircle size={23} />}
      </button>
    </div>
  );
}
