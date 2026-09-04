"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

// Framework-level route animation: app/template.tsx remounts this on every
// navigation, so each new page wipes in from behind a curtain.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = (window as any).__lenis;
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    const tl = gsap.timeline();
    tl.set(contentRef.current, { opacity: 0, y: 24 })
      .to(curtainRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.inOut",
      })
      .to(
        contentRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.35"
      );

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <div
        ref={curtainRef}
        className="pointer-events-none fixed inset-0 z-[95] bg-ink"
        style={{ transform: "translateY(0%)" }}
      />
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
