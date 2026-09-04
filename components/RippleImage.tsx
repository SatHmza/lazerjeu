"use client";

import { useEffect, useRef, useState } from "react";
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture } from "ogl";

const VERT = /* glsl */ `
  attribute vec2 uv;
  attribute vec3 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAG = /* glsl */ `
  precision highp float;
  uniform sampler2D tMap;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uHover;
  uniform float uRipple;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 dir = uv - uMouse;
    float dist = length(dir);
    float ripple = sin(dist * 28.0 - uTime * 6.0) * 0.02 * uHover * uRipple;
    ripple *= smoothstep(0.55, 0.0, dist);
    uv += normalize(dir + 0.0001) * ripple;
    vec4 tex = texture2D(tMap, uv);
    gl_FragColor = tex;
  }
`;

export default function RippleImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  // Only spin up a WebGL context once the card is actually on screen —
  // with a full grid of these, running every context off-screen is wasted
  // GPU work for zero visual benefit.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );
    io.observe(container);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !inView) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return; // keep the plain <img> fallback for touch devices

    let renderer: Renderer;
    let raf = 0;
    let destroyed = false;
    const state = { hover: 0, ripple: 0, mouse: { x: 0.5, y: 0.5 } };

    try {
      renderer = new Renderer({ alpha: true, antialias: true });
    } catch {
      return; // no WebGL support — plain <img> already covers this visually
    }

    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.canvas.style.position = "absolute";
    gl.canvas.style.inset = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    const camera = new Camera(gl);
    camera.position.z = 1;

    const scene = new Transform();
    const geometry = new Plane(gl);

    // Route through Next's own image optimizer so the texture request is
    // same-origin — external CDNs (Lummi included) don't send CORS headers,
    // and WebGL's texImage2D silently refuses cross-origin images without them.
    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.src = `/_next/image?url=${encodeURIComponent(src)}&w=1200&q=75`;

    const texture = new Texture(gl);
    image.onload = () => {
      texture.image = image;
    };
    image.onerror = () => {
      // Fall back silently to the plain <img> underneath.
      destroyed = true;
      cancelAnimationFrame(raf);
      gl.canvas.remove();
    };

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        tMap: { value: texture },
        uMouse: { value: [0.5, 0.5] },
        uTime: { value: 0 },
        uHover: { value: 0 },
        uRipple: { value: 0 },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      state.mouse.x = (e.clientX - rect.left) / rect.width;
      state.mouse.y = 1 - (e.clientY - rect.top) / rect.height;
      state.ripple = 1;
    };
    const onEnter = () => (state.hover = 1);
    const onLeave = () => (state.hover = 0);

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    const start = performance.now();
    const loop = () => {
      if (destroyed) return;
      const t = (performance.now() - start) / 1000;
      program.uniforms.uTime.value = t;
      program.uniforms.uMouse.value = [state.mouse.x, state.mouse.y];
      program.uniforms.uHover.value += (state.hover - program.uniforms.uHover.value) * 0.08;
      state.ripple += (0 - state.ripple) * 0.02;
      program.uniforms.uRipple.value = state.ripple;
      renderer.render({ scene, camera });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      gl.canvas.remove();
    };
  }, [src, inView]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </div>
  );
}
