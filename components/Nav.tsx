"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  // Close on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock background scroll while the panel is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
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
            onClick={() => setOpen(false)}
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
            className="glass relative z-[2] flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
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

      {/* Mobile panel. Driven by a CSS transition rather than GSAP: GSAP was
          baking Tailwind's -translate-y-full into its own `y` and then
          animating `yPercent` on top of it, so the panel stayed off-screen
          and the burger appeared to do nothing. */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[84] flex flex-col overflow-y-auto bg-ink px-8 pb-12 pt-28 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 45% at 15% 95%, rgba(255,47,208,0.22), transparent 65%), radial-gradient(60% 40% at 90% 10%, rgba(57,242,230,0.16), transparent 65%)",
          }}
        />

        <nav className="relative mt-auto flex flex-col gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-paper/10 py-3 font-display text-3xl uppercase leading-none tracking-tight transition-colors ${
                  active ? "text-laser-pink" : "text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={contact.whatsapp}
          onClick={() => setOpen(false)}
          className="relative mb-auto mt-8 w-fit rounded-full bg-laser-pink px-7 py-4 font-display text-xs uppercase tracking-widest2 text-ink"
        >
          Réserver sur WhatsApp →
        </a>
      </div>
    </>
  );
}
