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
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 100%, rgba(255,47,208,0.16), transparent 70%)",
          }}
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

        {/* Alternates real photos with pure neon/graphic cards — fewer
            photos, more of the codepen's glow-on-black language. */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) =>
            i % 2 === 0 ? (
              <Reveal key={a.slug} delay={(i % 4) * 0.06} className="group relative aspect-[3/4] bg-ink">
                <RippleImage src={lummi(a.cid, 700, 900)} alt={a.name} className="absolute inset-0 h-full w-full" />
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/10 to-transparent p-5">
                  <span className="font-display text-xs uppercase tracking-widest2 text-laser-cyan">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl uppercase leading-tight text-paper">{a.name}</h3>
                  <p className="mt-1 text-xs text-paper/60">{a.tagline}</p>
                </div>
              </Reveal>
            ) : (
              <Reveal
                key={a.slug}
                delay={(i % 4) * 0.06}
                className="relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-black p-5"
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 15% 100%, rgba(57,242,230,0.18), transparent 60%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen" aria-hidden>
                  <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 rotate-[18deg] bg-gradient-to-b from-transparent via-laser-cyan to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-[12deg] bg-gradient-to-b from-transparent via-laser-pink to-transparent" />
                </div>
                <span className="relative font-display text-5xl text-transparent text-outline">
                  0{i + 1}
                </span>
                <h3 className="relative mt-2 font-display text-xl uppercase leading-tight text-paper">
                  {a.name}
                </h3>
                <p className="relative mt-1 text-xs text-paper/60">{a.tagline}</p>
              </Reveal>
            )
          )}
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
