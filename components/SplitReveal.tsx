"use client";

import { createElement, useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = {
  children: string;
  as?: string;
  className?: string;
  type?: "lines" | "chars" | "words";
  scrub?: boolean;
  delay?: number;
  trigger?: "scroll" | "mount";
};

export default function SplitReveal({
  children,
  as: Tag = "div",
  className,
  type = "lines",
  scrub = false,
  delay = 0,
  trigger = "scroll",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const split = new SplitType(ref.current, {
      types: type === "chars" ? "chars,words" : type === "words" ? "words" : "lines",
      lineClass: "split-line",
    });

    const targets = type === "chars" ? split.chars : type === "words" ? split.words : split.lines;
    if (!targets || targets.length === 0) return;

    gsap.set(targets, { yPercent: 110, opacity: 0 });

    const tween = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      delay,
      stagger: type === "chars" ? 0.018 : 0.06,
      ease: "power4.out",
      scrollTrigger:
        trigger === "scroll"
          ? {
              trigger: ref.current,
              start: "top 85%",
              once: !scrub,
            }
          : undefined,
    });

    return () => {
      tween.kill();
      split.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createElement(Tag, { ref, className }, children);
}
