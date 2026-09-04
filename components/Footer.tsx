import Link from "next/link";
import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink px-6 pb-10 pt-20 text-paper md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            On vous voit
            <br />
            <span className="text-laser-pink">à Harhoura ?</span>
          </h2>
          <a
            href={contact.whatsapp}
            data-cursor="link"
            className="group inline-flex w-fit items-center gap-3 self-start rounded-full border border-paper/30 px-6 py-3 font-display text-xs uppercase tracking-widest2 transition-colors hover:border-laser-pink hover:text-laser-pink"
          >
            Réserver sur WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm text-paper/70 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-widest2 text-paper">Adresse</span>
            <span>{contact.address}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-widest2 text-paper">Contact</span>
            <a href={`tel:${contact.phone1}`}>{contact.phone1}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-widest2 text-paper">Horaires</span>
            {contact.hours.map((h) => (
              <span key={h.days}>
                {h.days} — {h.time}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-xs uppercase tracking-widest2 text-paper">Suivez-nous</span>
            <a href={contact.instagram}>Instagram</a>
            <a href={contact.tiktok}>TikTok</a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Lazar Jeux Club — Harhoura, Témara</span>
          <div className="flex gap-6">
            <Link href="/faq">FAQ</Link>
            <Link href="/laser-a-vendre">Laser à vendre</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
