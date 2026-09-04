"use client";

import { useRef, useState } from "react";
import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import { gsap } from "@/lib/gsap";
import { faqs } from "@/lib/data";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (!el) return;
    if (!open) {
      gsap.set(el, { height: "auto" });
      const h = el.offsetHeight;
      gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(el, { height: 0, duration: 0.4, ease: "power3.inOut" });
    }
    setOpen((v) => !v);
  };

  return (
    <Reveal delay={index * 0.04} className="border-b border-paper/10">
      <button
        onClick={toggle}
        data-cursor="link"
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="font-display text-lg uppercase tracking-tight text-paper md:text-2xl">{q}</span>
        <span
          className={`shrink-0 font-display text-xl text-laser-pink transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden">
        <p className="max-w-2xl pb-7 text-paper/70">{a}</p>
      </div>
    </Reveal>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="flex min-h-[45vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Questions fréquentes
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[11vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[6vw]"
        >
          {"Vous vous\ndemandez ?"}
        </SplitReveal>
      </section>

      <section className="bg-ink px-6 pb-28 md:px-10">
        <div className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
