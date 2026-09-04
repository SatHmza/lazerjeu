"use client";

import { useEffect, useRef } from "react";

// Landing-page-only cursor: colored 3D tubes chase the pointer in WebGL,
// standing in for the system cursor. Adapted from
// https://codepen.io/soju22/pen/qEbdVjK (threejs-components "tubes1" cursor).
export default function TubesCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch || !canvasRef.current) return;

    let app: any;
    let destroyed = false;

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
      app?.dispose?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[80] h-full w-full"
      aria-hidden
    />
  );
}
