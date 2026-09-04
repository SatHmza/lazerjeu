"use client";

import { useState } from "react";
import Image from "next/image";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import RippleImage from "@/components/RippleImage";
import Marquee from "@/components/Marquee";
import { galleryImages, lummi } from "@/lib/data";

export default function GaleriePage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className="flex min-h-[50vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Galerie
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[11vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[6vw]"
        >
          {"L'ambiance parle\nd'elle-même."}
        </SplitReveal>
      </section>

      <div className="border-y border-paper/10 bg-ink py-4">
        <Marquee
          items={["Instagram @lazarjeux", "13 moments", "600+ avis", "Harhoura"]}
          reverse
          itemClassName="font-display text-xl uppercase tracking-tight text-paper/50"
        />
      </div>

      <section className="bg-ink px-6 py-20 md:px-10">
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {galleryImages.map((g, i) => (
            <Reveal key={g.cid} delay={(i % 6) * 0.04} className="mb-4 break-inside-avoid">
              {i < 3 ? (
                <button onClick={() => setActive(i)} className="block w-full" data-cursor="link">
                  <RippleImage src={lummi(g.cid, 700, 900)} alt={g.caption} className="w-full rounded-xl" />
                </button>
              ) : (
                <button
                  onClick={() => setActive(i)}
                  className="relative block aspect-[4/5] w-full overflow-hidden rounded-xl"
                  data-cursor="link"
                >
                  <Image
                    src={lummi(g.cid, 700, 900)}
                    alt={g.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              )}
              <p className="mt-2 text-xs text-paper/50">{g.caption}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[99] flex items-center justify-center bg-ink/95 p-6 backdrop-blur"
          onClick={() => setActive(null)}
        >
          <div className="relative aspect-[4/5] w-full max-w-xl">
            <Image
              src={lummi(galleryImages[active].cid, 1000, 1250)}
              alt={galleryImages[active].caption}
              fill
              sizes="90vw"
              className="rounded-2xl object-cover"
            />
          </div>
          <button
            className="absolute right-6 top-6 font-display text-xs uppercase tracking-widest2 text-paper"
            onClick={() => setActive(null)}
          >
            Fermer ✕
          </button>
        </div>
      )}
    </>
  );
}
