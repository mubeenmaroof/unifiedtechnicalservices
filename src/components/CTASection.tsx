import Link from "next/link";

import { ArrowRight, FileText, MapPinned } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#020817] py-20">
      <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="site-container relative">
        <ScrollReveal direction="up" distance={35}>
          <div className="mx-auto max-w-4xl rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 to-blue-600/5 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-400">
              <MapPinned size={27} />
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Have a Technical Project in Mind?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Whether you need fiber network planning, GIS services, CCTV,
              electrical works, fire alarm or solar installation, tell us about
              your requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Request a Consultation
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <FileText size={17} />
                Explore Services
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
