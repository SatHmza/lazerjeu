"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import RippleImage from "@/components/RippleImage";
import { activities, stats, contact, lummi, galleryImages } from "@/lib/data";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(heroImgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO — pinned, parallax image, split-text headline */}
      <section ref={heroRef} className="relative flex h-[100svh] items-end overflow-hidden bg-ink">
        <div ref={heroImgRef} className="absolute inset-0 -top-[10%] h-[120%] w-full">
          <Image
            src={lummi("QmUtaJj4v3UPX9NPo8x8iALMmb1HTEJoG6XJpmd96CVQau", 1800, 2200)}
            alt="Arène laser game Lazar Jeux, Harhoura"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        </div>

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

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a, i) => (
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
          {galleryImages.slice(0, 8).map((g, i) => (
            <Reveal
              key={g.cid}
              delay={(i % 4) * 0.05}
              className={`relative overflow-hidden rounded-xl ${i % 5 === 0 ? "aspect-[3/4] md:col-span-2 md:row-span-2" : "aspect-square"}`}
            >
              <Image
                src={lummi(g.cid, 800, 800)}
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
