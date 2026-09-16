import { DraftingCompass, MapPinned, Network, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Network,
    title: "Fiber Networks",
    description: "FTTH • FTTB • FTTX",
  },
  {
    icon: MapPinned,
    title: "Geospatial",
    description: "ArcGIS • QGIS • RS/GIS",
  },
  {
    icon: DraftingCompass,
    title: "Engineering",
    description: "Planning • Design • As-Builts",
  },
  {
    icon: ShieldCheck,
    title: "Field Solutions",
    description: "Install • Test • Maintain",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-[#020817]">
      <div className="site-container">
        <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="flex items-center gap-4 px-3 py-6 sm:px-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                  <Icon size={22} />
                </div>

                <div>
                  <div className="font-bold text-white">{stat.title}</div>

                  <div className="mt-1 text-xs text-slate-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
