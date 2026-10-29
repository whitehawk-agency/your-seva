import { partners } from "@/lib/content";

export function PartnersMarquee() {
  const row = [...partners, ...partners];

  return (
    <section aria-label="Our partners" className="border-y border-stone-200 bg-white py-10">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          Delivered with local partners
        </p>
      </div>

      <div
        className="group relative mt-7 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {row.map((partner, index) => (
            <li
              key={`${partner}-${index}`}
              aria-hidden={index >= partners.length}
              className="whitespace-nowrap font-display text-lg font-bold tracking-[-0.01em] text-slate-600"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
