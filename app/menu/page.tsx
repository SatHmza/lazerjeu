"use client";

import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { menuCategories, SAMPLE_VIDEO } from "@/lib/data";

export default function MenuPage() {
  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Le bistro
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[11vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[6vw]"
        >
          {"Manger bien,\nsans quitter le jeu."}
        </SplitReveal>
      </section>

      <div className="border-y border-paper/10 bg-ink py-4">
        <Marquee
          items={menuCategories.flatMap((c) => c.items.map((it) => it.name))}
          speed={30}
          itemClassName="font-display text-2xl uppercase tracking-tight text-paper/50"
        />
      </div>

      <section className="relative overflow-hidden bg-ink">
        {/* Muted autoplay loop instead of a GIF — heavy media, light weight. */}
        <video
          className="h-[46vh] w-full object-cover opacity-60"
          src={SAMPLE_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
          <p className="max-w-md px-6 text-center font-display text-xl uppercase tracking-wide text-paper md:text-3xl">
            Carte complète préparée à la commande — 9 pages, à télécharger sur place.
          </p>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-[200px_1fr]">
          <div className="hidden flex-col gap-4 md:flex md:sticky md:top-32 md:h-fit">
            {menuCategories.map((c) => (
              <a
                key={c.name}
                href={`#${c.name}`}
                data-cursor="link"
                className="font-display text-xs uppercase tracking-widest2 text-paper/50 hover:text-laser-pink"
              >
                {c.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-20">
            {menuCategories.map((c) => (
              <div key={c.name} id={c.name}>
                <Reveal>
                  <h2 className="mb-8 font-display text-3xl uppercase tracking-tight text-paper md:text-5xl">
                    {c.name}
                  </h2>
                </Reveal>
                <div className="flex flex-col divide-y divide-paper/10">
                  {c.items.map((item, i) => (
                    <Reveal
                      key={item.name}
                      delay={i * 0.05}
                      className="flex items-baseline justify-between gap-6 py-5"
                    >
                      <span className="text-lg text-paper">{item.name}</span>
                      <span className="flex-1 border-b border-dotted border-paper/20" />
                      <span className="font-display text-laser-pink">{item.price}</span>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
