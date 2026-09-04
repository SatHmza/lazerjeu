"use client";

import Image from "next/image";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { eventPackages, contact, lummi } from "@/lib/data";

export default function AnniversairesPage() {
  return (
    <>
      <section className="flex min-h-[55vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Évènements
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[11vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[6vw]"
        >
          {"On gère la fête,\nvous gérez rien."}
        </SplitReveal>
      </section>

      <div className="border-y border-paper/10 bg-ink py-4">
        <Marquee
          items={["Anniversaires", "Sorties scolaires", "Team building", "Jusqu'à 200 invités"]}
          itemClassName="font-display text-xl uppercase tracking-tight text-paper/50"
        />
      </div>

      <section className="grid grid-cols-1 gap-px overflow-hidden bg-paper/10 md:grid-cols-3">
        {eventPackages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="group relative flex min-h-[70vh] flex-col justify-end bg-ink p-8">
            <div className="absolute inset-0 -z-10">
              <Image
                src={lummi(p.cid, 900, 1400)}
                alt={p.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
            </div>
            <span className="font-display text-xs uppercase tracking-widest2 text-laser-pink">
              {p.audience}
            </span>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-tight text-paper">{p.name}</h2>
            <p className="mt-4 text-sm text-paper/70">{p.description}</p>
            <p className="mt-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
              {p.capacity}
            </p>
          </Reveal>
        ))}
      </section>

      <section className="bg-ink px-6 py-28 text-center md:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl uppercase tracking-tight text-paper md:text-5xl">
            Dites-nous la date,
            <span className="text-laser-pink"> on s&apos;occupe du reste.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <a
            href={contact.whatsapp}
            data-cursor="link"
            className="inline-flex items-center gap-2 rounded-full bg-laser-pink px-8 py-4 font-display text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-105"
          >
            Demander un devis évènement →
          </a>
        </Reveal>
      </section>
    </>
  );
}
