"use client";

import { useEffect, useRef } from "react";

// The neon tubes background from https://codepen.io/soju22/pen/qEbdVjK
// (threejs-components "tubes1" cursor), adapted 1:1 from the pen: there it's
// the entire page background with the hero text layered on top via normal
// DOM order — not a transparent overlay. The renderer clears to opaque
// black, so this must stay scoped to its own section (see Hero in
// app/page.tsx), never `position: fixed` over the rest of the page, or it
// blacks out everything below it.
export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || !canvasRef.current) return;

    const canvas = canvasRef.current;
    let app: any;
    let destroyed = false;
    let onPointerMove: ((e: PointerEvent) => void) | null = null;

    import("threejs-components/build/cursors/tubes1.min.js").then((mod) => {
      if (destroyed || !canvasRef.current) return;
      const TubesCursorFactory = mod.default;
      app = TubesCursorFactory(canvasRef.current, {
        tubes: {
          colors: ["#ff2fd0", "#7b3bff", "#39f2e6"],
          lights: {
            intensity: 200,
            colors: ["#ff2fd0", "#c6ff3a", "#39f2e6", "#7b3bff"],
          },
        },
      });

      // The library's own render loop falls back to a wide "sleep" orbit
      // (sleepRadius 300x150) the moment the pointer leaves the canvas or the
      // window — it picks up mid-orbit, which reads as the tubes snapping to
      // the centre or the far side. We drive the target ourselves instead, so
      // leaving the tab simply leaves the tubes where they were.
      const { three, tubes } = app;
      if (three && tubes) {
        three.onBeforeRender = (state: any) => tubes.update(state);

        onPointerMove = (e: PointerEvent) => {
          const rect = canvas.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          const { wWidth = 0, wHeight = 0 } = three.size ?? {};
          tubes.target.x = (nx * wWidth) / 2;
          tubes.target.y = (ny * wHeight) / 2;
          tubes.target.z = 0;
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });
      }
    });

    const onClick = () => {
      if (!app) return;
      const random = (n: number) =>
        new Array(n)
          .fill(0)
          .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"));
      app.tubes.setColors(random(3));
      app.tubes.setLightsColors(random(4));
    };
    window.addEventListener("click", onClick);

    return () => {
      destroyed = true;
      window.removeEventListener("click", onClick);
      if (onPointerMove) window.removeEventListener("pointermove", onPointerMove);
      app?.dispose?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden
    />
  );
}
