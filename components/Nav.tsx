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
      <header className="fixed inset-x-0 top-0 z-[85] mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 text-paper md:px-10">
          <Link href="/" className="font-display text-lg font-semibold uppercase tracking-widest2">
            Lazar Jeux
          </Link>

          <nav className="hidden items-center gap-8 font-display text-xs uppercase tracking-widest2 md:flex">
            {LINKS.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-opacity hover:opacity-60 ${
                  pathname === link.href ? "opacity-100" : "opacity-70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col items-end gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span className={`h-px w-7 bg-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-paper transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-7 bg-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[84] flex -translate-y-full flex-col justify-center gap-4 bg-ink px-8 md:hidden"
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
