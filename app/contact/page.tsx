"use client";

import SplitReveal from "@/components/SplitReveal";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[45vh] flex-col justify-end bg-ink px-6 pb-16 pt-40 md:px-10">
        <span className="mb-4 font-display text-xs uppercase tracking-widest2 text-laser-cyan">
          Contact
        </span>
        <SplitReveal
          as="h1"
          type="lines"
          className="max-w-4xl font-display text-[11vw] font-semibold uppercase leading-[0.9] tracking-tight text-paper md:text-[6vw]"
        >
          {"Parlons-en."}
        </SplitReveal>
      </section>

      <section className="grid grid-cols-1 gap-16 bg-ink px-6 pb-28 md:grid-cols-2 md:px-10">
        <Reveal className="flex flex-col gap-10">
          <div>
            <span className="font-display text-xs uppercase tracking-widest2 text-laser-cyan">
              Téléphone
            </span>
            <div className="mt-2 flex flex-col gap-1">
              <a href={`tel:${contact.phone1}`} className="font-display text-2xl text-paper hover:text-laser-pink">
                {contact.phone1}
              </a>
              <a href={`tel:${contact.phone2}`} className="font-display text-2xl text-paper hover:text-laser-pink">
                {contact.phone2}
              </a>
            </div>
          </div>

          <div>
            <span className="font-display text-xs uppercase tracking-widest2 text-laser-cyan">Email</span>
            <div className="mt-2">
              <a href={`mailto:${contact.email}`} className="font-display text-2xl text-paper hover:text-laser-pink">
                {contact.email}
              </a>
            </div>
          </div>

          <div>
            <span className="font-display text-xs uppercase tracking-widest2 text-laser-cyan">Adresse</span>
            <p className="mt-2 max-w-xs text-paper/70">{contact.address}</p>
          </div>

          <div>
            <span className="font-display text-xs uppercase tracking-widest2 text-laser-cyan">Horaires</span>
            <div className="mt-2 flex flex-col gap-1 text-paper/70">
              {contact.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-8">
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={contact.whatsapp}
            data-cursor="link"
            className="w-fit rounded-full bg-laser-pink px-8 py-4 font-display text-xs uppercase tracking-widest2 text-ink transition-transform hover:scale-105"
          >
            Réserver sur WhatsApp →
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-3xl border border-paper/10">
          <iframe
            title="Lazar Jeux Club — carte"
            src="https://www.google.com/maps?q=Harhoura,+Temara,+Maroc&output=embed"
            className="absolute inset-0 h-full w-full grayscale invert-[0.92]"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
