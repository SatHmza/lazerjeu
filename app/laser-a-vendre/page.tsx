"use client";

import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { ultratag, contact } from "@/lib/data";

export default function LaserAVendrePage() {
  return (
    <>
      <section className="flex min-h-[55vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Pôle international · Ultratag
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[10vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[5.5vw]"
        >
          {"On construit\nvotre arène laser."}
        </SplitReveal>
        <Reveal delay={0.2} className="mt-8 max-w-xl">
          <p className="text-paper/70">{ultratag.intro}</p>
        </Reveal>
      </section>

      <div className="border-y border-paper/10 bg-ink py-4">
        <Marquee
          items={ultratag.countries}
          reverse
          itemClassName="font-display text-2xl uppercase tracking-tight text-paper/50"
        />
      </div>

      <section className="bg-ink px-6 py-28 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-paper/10 md:grid-cols-3">
          {ultratag.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-ink p-10">
              <span className="font-display text-4xl text-laser-pink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl uppercase tracking-tight text-paper">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-paper/70">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 pb-28 md:px-10">
        <Reveal className="flex flex-col items-start gap-6 rounded-3xl border border-paper/10 p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-tight text-paper md:text-4xl">
              Un projet d&apos;arène ?
            </h2>
            <p className="mt-2 max-w-md text-sm text-paper/70">
              Parlons de votre surface, de votre thème et de votre calendrier d&apos;ouverture.
            </p>
          </div>
          <a
            href={`mailto:${contact.email}`}
            data-cursor="link"
            className="shrink-0 rounded-full bg-laser-pink px-8 py-4 font-display text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-105"
          >
            Nous écrire
          </a>
        </Reveal>
      </section>
    </>
  );
}
