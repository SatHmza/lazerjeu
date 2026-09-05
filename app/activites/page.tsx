"use client";

import Image from "next/image";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { activities, lummi } from "@/lib/data";

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

      {/* Sticky stack: every panel pins at the top of the viewport and the
          next one slides up over it. The margin below each panel is the
          pause — pinned, nothing moving, text readable — before the next
          panel starts climbing over it. */}
      <section className="relative">
        {activities.map((a, i) => (
          <div
            key={a.slug}
            className={`sticky top-0 flex h-[100svh] flex-col justify-end overflow-hidden bg-ink md:h-screen md:flex-row md:items-stretch md:justify-normal ${
              i === activities.length - 1 ? "" : "mb-[38svh] md:mb-[45vh]"
            }`}
            style={{ zIndex: i + 1 }}
          >
            <div className="relative h-[42svh] w-full overflow-hidden md:h-auto md:w-1/2">
              <Image
                src={lummi(a.cid, 1200, 1400)}
                alt={a.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="flex w-full flex-1 flex-col justify-center gap-5 border-t border-paper/10 bg-ink px-6 py-8 md:w-1/2 md:flex-none md:gap-6 md:border-l md:border-t-0 md:px-16 md:py-10">
              <span className="font-display text-sm text-laser-pink">
                {String(i + 1).padStart(2, "0")} / {String(activities.length).padStart(2, "0")}
              </span>
              <Reveal>
                <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight text-paper sm:text-4xl md:text-6xl">
                  {a.name}
                </h2>
                <p className="mt-3 font-display text-xs uppercase tracking-widest2 text-laser-cyan md:text-sm">
                  {a.tagline}
                </p>
                <p className="mt-5 max-w-md text-sm text-paper/70 md:mt-6 md:text-base">{a.description}</p>
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
