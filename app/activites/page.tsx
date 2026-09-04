"use client";

import Image from "next/image";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { activities, img } from "@/lib/data";

export default function ActivitesPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Nos activités
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[11vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[6vw]"
        >
          {"8 expériences,\nun seul club."}
        </SplitReveal>
      </section>

      <div className="border-y border-paper/10 bg-ink py-4">
        <Marquee
          items={activities.map((a) => a.name)}
          itemClassName="font-display text-xl uppercase tracking-tight text-paper/50"
        />
      </div>

      {/* Sticky stack: each section covers the previous as you scroll. */}
      <section className="relative">
        {activities.map((a, i) => (
          <div
            key={a.slug}
            className="sticky top-0 flex min-h-screen flex-col justify-end overflow-hidden bg-ink md:flex-row md:items-stretch md:justify-normal"
            style={{ zIndex: i + 1 }}
          >
            <div className="relative h-[45vh] w-full md:h-auto md:w-1/2">
              <Image
                src={img(a.seed, 1200, 1400)}
                alt={a.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="flex w-full flex-col justify-center gap-6 border-t border-paper/10 bg-ink px-6 py-10 md:w-1/2 md:border-l md:border-t-0 md:px-16">
              <span className="font-display text-sm text-laser-pink">
                {String(i + 1).padStart(2, "0")} / {String(activities.length).padStart(2, "0")}
              </span>
              <Reveal>
                <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-paper md:text-6xl">
                  {a.name}
                </h2>
                <p className="mt-3 font-display text-sm uppercase tracking-widest2 text-laser-cyan">
                  {a.tagline}
                </p>
                <p className="mt-6 max-w-md text-paper/70">{a.description}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-ink px-6 py-28 text-center md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl uppercase tracking-tight text-paper md:text-5xl">
            Prêt à tout essayer <span className="text-laser-pink">en une soirée ?</span>
          </h2>
        </Reveal>
      </section>
    </>
  );
}
