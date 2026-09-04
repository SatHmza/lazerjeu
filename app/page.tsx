"use client";

import Link from "next/link";
import Image from "next/image";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import RippleImage from "@/components/RippleImage";
import TubesCursor from "@/components/TubesCursor";
import { activities, stats, contact, lummi, galleryImages } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* HERO — the codepen's own look: full black canvas, neon tubes
          chasing the cursor, bold type layered on top. No photo here by
          design — this is the one moment that's pure neon/graphic. */}
      <section className="relative flex h-[100svh] items-end overflow-hidden bg-black">
        <TubesCursor />
        {/* Static neon wash behind the cursor trail — screen-blended so it
            adds light to the black canvas without dulling the tubes. */}
        <div
          className="hero-glow pointer-events-none absolute inset-0 z-[1]"
          style={{
            mixBlendMode: "screen",
            background: [
              "radial-gradient(65% 55% at 18% 88%, rgba(255,47,208,0.42), transparent 62%)",
              "radial-gradient(55% 45% at 84% 22%, rgba(57,242,230,0.32), transparent 62%)",
              "radial-gradient(75% 60% at 52% 112%, rgba(123,59,255,0.40), transparent 68%)",
            ].join(", "),
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/2"
          style={{ background: "linear-gradient(to top, rgba(10,10,13,0.85), transparent)" }}
        />

        <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-24">
          <span className="mb-4 block font-display text-xs uppercase tracking-widest2 text-laser-cyan">
            Harhoura · Témara · Front de mer
          </span>
          <SplitReveal
            as="h1"
            type="lines"
            className="font-display text-[13vw] font-semibold uppercase leading-[0.88] tracking-tight text-paper md:text-[7.5vw]"
          >
            {"Là où les rires\nrésonnent."}
          </SplitReveal>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md text-paper/70">
              8 expériences sous un même toit — laser game, karaoké, PS5, air hockey, fléchettes,
              photobooth 360°, jeux de société et un bistro qui ne fait aucun compromis.
            </p>
            <a
              href={contact.whatsapp}
              data-cursor="link"
              className="shrink-0 rounded-full bg-laser-pink px-8 py-4 font-display text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-105"
            >
              Réserver
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-paper/10 bg-ink py-6">
        <Marquee
          items={activities.map((a) => a.name)}
          speed={26}
          itemClassName="font-display text-3xl md:text-5xl uppercase tracking-tight text-paper/90"
        />
      </div>

      {/* ACTIVITIES GRID */}
      <section className="bg-ink px-6 py-28 md:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl uppercase leading-[0.95] tracking-tight text-paper md:text-6xl">
            8 façons de <span className="text-laser-pink">ne pas s&apos;ennuyer.</span>
          </h2>
        </Reveal>

        {/* Every activity gets its own photo, with a neon wash + hover glow
            so the grid still reads as part of the laser/neon language. */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 0.06} className="group relative aspect-[3/4] bg-ink">
              <RippleImage src={lummi(a.cid, 700, 900)} alt={a.name} className="absolute inset-0 h-full w-full" />
              <div
                className="pointer-events-none absolute inset-0 opacity-70 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    i % 2 === 0
                      ? "radial-gradient(90% 70% at 20% 100%, rgba(255,47,208,0.30), transparent 65%)"
                      : "radial-gradient(90% 70% at 80% 100%, rgba(57,242,230,0.28), transparent 65%)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/20 to-transparent p-5">
                <span className="font-display text-xs uppercase tracking-widest2 text-laser-cyan">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl uppercase leading-tight text-paper">{a.name}</h3>
                <p className="mt-1 text-xs text-paper/60">{a.tagline}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/activites"
            data-cursor="link"
            className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest2 text-paper/80 hover:text-laser-pink"
          >
            Découvrir les 8 activités en détail →
          </Link>
        </Reveal>
      </section>

      {/* STATS BAND */}
      <section className="border-y border-paper/10 bg-ink px-6 py-20 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="font-display text-4xl text-laser-pink md:text-5xl">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wide text-paper/50">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="bg-ink px-6 py-28 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <Reveal>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight text-paper md:text-6xl">
              L&apos;ambiance,
              <br />
              <span className="text-laser-cyan">en images.</span>
            </h2>
          </Reveal>
          <Link
            href="/galerie"
            data-cursor="link"
            className="hidden shrink-0 font-display text-xs uppercase tracking-widest2 text-paper/70 hover:text-laser-pink md:block"
          >
            Toute la galerie →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.slice(0, 4).map((g, i) => (
            <Reveal key={g.cid} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={lummi(g.cid, 600, 600)}
                alt={g.caption}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA MARQUEE */}
      <section className="overflow-hidden border-t border-paper/10 bg-ink py-10">
        <Marquee
          items={["Réservez maintenant", "4.5/5 · 600+ avis", "Ouvert 6j/7", "Harhoura · Témara"]}
          reverse
          speed={20}
          itemClassName="font-display text-2xl uppercase tracking-tight text-paper/30 md:text-4xl"
        />
      </section>
    </>
  );
}
