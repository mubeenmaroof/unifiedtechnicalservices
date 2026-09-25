import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { services } from "@/data/services";

import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";

import { StaggerItem, StaggerReveal } from "@/components/StaggerReveal";

export default function ServicesSection() {
  return (
    <section className="relative border-t border-white/5 bg-[#071525] py-20 sm:py-24">
      <div className="site-container">
        {/* HEADER */}

        <ScrollReveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              What We Do
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Integrated Technical
              <span className="text-sky-400"> Solutions</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              From digital network planning to field implementation,
              UnifiedTechnicalServices provides integrated solutions across
              telecom, GIS, security, electrical and renewable-energy
              infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* CARDS */}

        <StaggerReveal
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          delay={0.1}
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard
                id={service.id}
                title={service.shortTitle}
                description={service.shortDescription}
                items={service.items.slice(0, 4)}
                icon={service.icon}
                image={service.image}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* BUTTON */}

        <ScrollReveal direction="up" delay={0.1}>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-sky-300 transition hover:border-sky-400/50 hover:bg-sky-400/20"
            >
              View All Services
              <ArrowRight size={17} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
