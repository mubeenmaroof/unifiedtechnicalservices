import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Check } from "lucide-react";

import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  image: string;
};

export default function ServiceCard({
  id,
  title,
  description,
  items,
  icon: Icon,
  image,
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#08192b] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-2xl hover:shadow-sky-950/30">
      {/* IMAGE */}

      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08192b] via-[#08192b]/25 to-transparent" />

        <div className="absolute inset-0 bg-sky-950/10 transition group-hover:bg-transparent" />

        {/* ICON */}

        <div className="absolute bottom-4 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#020817]/90 text-sky-400 shadow-xl backdrop-blur-xl">
          <Icon size={23} />
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>

        <div className="mt-5 space-y-2.5">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-400">
                <Check size={11} />
              </div>

              <span className="text-sm text-slate-300">{item}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/services#${id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
        >
          Explore Service
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* HOVER LINE */}

      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
