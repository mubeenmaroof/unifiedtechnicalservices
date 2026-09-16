import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  items,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1d31]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-[#0d2239]">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-sky-500/10 blur-3xl transition group-hover:bg-sky-500/20" />

      <div className="relative">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
          <Icon size={24} />
        </div>

        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>

        <ul className="mt-5 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition hover:text-sky-300"
        >
          Learn More
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
