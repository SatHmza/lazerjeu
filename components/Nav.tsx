"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { contact } from "@/lib/data";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/activites", label: "Activités" },
  { href: "/galerie", label: "Galerie" },
  { href: "/menu", label: "Menu" },
  { href: "/anniversaires", label: "Évènements" },
  { href: "/laser-a-vendre", label: "Laser à vendre" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!overlayRef.current) return;
    gsap.to(overlayRef.current, {
      yPercent: open ? 0 : -100,
      duration: 0.6,
      ease: "power4.inOut",
    });
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Refraction filter for the glass panels (Chrome uses it, others fall
          back to plain blur — see .glass in globals.css). */}
      <svg aria-hidden className="pointer-events-none absolute h-0 w-0">
        <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.014"
            numOctaves="2"
            seed="17"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.6" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <header className="fixed inset-x-0 top-0 z-[85]">
        <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-6">
          <Link
            href="/"
            className="glass rounded-full px-5 py-3 font-display text-sm font-semibold uppercase tracking-widest2 text-paper transition-transform duration-300 hover:scale-[1.03]"
          >
            Lazar Jeux
          </Link>

          <nav className="glass hidden items-center gap-1 rounded-full px-2 py-2 font-display text-[11px] uppercase tracking-widest2 lg:flex">
            {LINKS.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 transition-colors duration-300 ${
                    active
                      ? "bg-white/20 text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]"
                      : "text-paper/80 hover:bg-white/10 hover:text-paper"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={contact.whatsapp}
            data-cursor="link"
            className="glass hidden rounded-full px-5 py-3 font-display text-[11px] uppercase tracking-widest2 text-paper transition-transform duration-300 hover:scale-[1.03] lg:block"
          >
            Réserver
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
            aria-label="Menu"
          >
            <span
              className={`h-px w-5 bg-paper transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-5 bg-paper transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-5 bg-paper transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[84] flex -translate-y-full flex-col justify-center gap-4 bg-ink px-8 lg:hidden"
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-4xl uppercase tracking-wide text-paper"
          >
            {link.label}
          </Link>
        ))}
        <a href={contact.whatsapp} className="mt-8 font-display text-sm uppercase tracking-widest2 text-laser-pink">
          Réserver sur WhatsApp →
        </a>
      </div>
    </>
  );
}
