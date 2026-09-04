"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { activities, img } from "@/lib/data";

// A curated set of above-the-fold assets we actually preload, so the
// percentage reflects real network/decode progress rather than a fake timer.
const CRITICAL_ASSETS = [
  img("lazar-hero", 1600, 2000),
  ...activities.slice(0, 6).map((a) => img(a.seed, 900, 1100)),
];

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const pctRef = useRef({ value: 0 });

  useEffect(() => {
    const already =
      typeof window !== "undefined" &&
      sessionStorage.getItem("lazarjeux-preloaded") === "1";

    if (already) {
      setVisible(false);
      document.documentElement.classList.remove("preload-lock");
      return;
    }

    document.documentElement.classList.add("preload-lock");

    let cancelled = false;
    let loaded = 0;
    const total = CRITICAL_ASSETS.length;

    const bump = () => {
      loaded += 1;
      const target = Math.round((loaded / total) * 100);
      gsap.to(pctRef.current, {
        value: target,
        duration: 0.4,
        ease: "power2.out",
        onUpdate: () => setPct(Math.round(pctRef.current.value)),
      });
    };

    const loaders = CRITICAL_ASSETS.map(
      (src) =>
        new Promise<void>((resolve) => {
          const image = new Image();
          image.onload = () => {
            bump();
            resolve();
          };
          image.onerror = () => {
            bump();
            resolve();
          };
          image.src = src;
        })
    );

    // Safety net: never hold the site hostage to a slow/broken asset.
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, 4500));

    Promise.race([Promise.all(loaders), timeout]).then(() => {
      if (cancelled) return;
      gsap.to(pctRef.current, {
        value: 100,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => setPct(Math.round(pctRef.current.value)),
        onComplete: () => {
          sessionStorage.setItem("lazarjeux-preloaded", "1");
          const tl = gsap.timeline({
            onComplete: () => {
              document.documentElement.classList.remove("preload-lock");
              setVisible(false);
            },
          });
          tl.to(barRef.current, { scaleX: 1, duration: 0.3, ease: "power2.out" })
            .to(rootRef.current, {
              yPercent: -100,
              duration: 0.9,
              ease: "power4.inOut",
              delay: 0.15,
            });
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="font-display text-xs uppercase tracking-widest2 text-paper/60">
          Lazar Jeux Club
        </span>
        <div className="font-display text-[18vw] leading-none tabular-nums md:text-[10vw]">
          {pct}
          <span className="text-laser-pink">%</span>
        </div>
      </div>
      <div className="mt-10 h-px w-48 overflow-hidden bg-paper/15">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-laser-pink"
          style={{ transform: `scaleX(${pct / 100})` }}
        />
      </div>
    </div>
  );
}
