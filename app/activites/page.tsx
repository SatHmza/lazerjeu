"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { activities, lummi } from "@/lib/data";

export default function ActivitesPage() {
  const stackRef = useRef<HTMLElement | null>(null);

  // Only the image drifts during the pinned dwell — the text block never
  // moves, which is the whole point of the threshold.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-activity-track]").forEach((track) => {
        const image = track.querySelector("[data-activity-image]");
        if (!image) return;
        gsap.fromTo(
          image,
          { scale: 1.14 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: track,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, stackRef);
    return () => ctx.revert();
  }, []);

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

      {/* Sticky stack. Each panel sits in a track taller than the viewport:
          the extra height is dead scroll where the panel stays pinned and
          perfectly still, so the copy is readable before the next panel
          starts sliding over it. Track height - panel height = dwell. */}
      <section ref={stackRef} className="relative">
        {activities.map((a, i) => (
          <div key={a.slug} data-activity-track className="h-[138svh] md:h-[158vh]">
            <div
              className="sticky top-0 flex h-[100svh] flex-col justify-end overflow-hidden bg-ink md:h-screen md:flex-row md:items-stretch md:justify-normal"
              style={{ zIndex: i + 1 }}
            >
              <div className="relative h-[42svh] w-full overflow-hidden md:h-auto md:w-1/2">
                <div data-activity-image className="absolute inset-0">
                  <Image
                    src={lummi(a.cid, 1200, 1400)}
                    alt={a.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
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
