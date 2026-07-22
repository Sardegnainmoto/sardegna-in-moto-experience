"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Esperienze", href: "/#esperienze" },
  { label: "Chi siamo", href: "/esperienze/tunisia-desert-experience#chi-sono" },
  { label: "Contatti", href: "/esperienze/tunisia-desert-experience#contatti" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-20 pt-[max(.75rem,var(--safe-top))] text-white transition duration-500 ${isScrolled ? "bg-ink/68 shadow-[0_1px_0_rgba(255,255,255,.1)] backdrop-blur-xl" : "bg-transparent"}`}>
      <Container className="flex h-16 items-center justify-between border-b border-white/20 sm:h-20 lg:h-24">
        <a href="/" className="group flex items-center gap-3" aria-label="Sardegna in Moto Experience, home page">
          <span className="grid size-8 place-items-center rounded-full border border-white/60 text-xs font-bold tracking-tight">SM</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] sm:text-sm sm:tracking-[0.18em]">Sardegna in Moto</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] lg:flex" aria-label="Navigazione principale">
          {navigation.map((item) => <a key={item.label} className="transition duration-300 hover:text-dune" href={item.href}>{item.label}</a>)}
          <a href="/#esperienze" className="rounded-full bg-white px-5 py-3 text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune">Scopri i raid</a>
        </nav>

        <button className="flex size-11 flex-col items-center justify-center gap-1.5 lg:hidden" type="button" aria-label={isOpen ? "Chiudi il menu" : "Apri il menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span className={`block h-px w-6 bg-white transition ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-white transition ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </Container>

      {isOpen && (
        <div className="min-h-[calc(100svh-4rem-var(--safe-top))] min-h-[calc(100dvh-4rem-var(--safe-top))] border-b border-white/20 bg-ink/95 pl-[max(1.25rem,var(--safe-left))] pr-[max(1.25rem,var(--safe-right))] py-8 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-2 text-base font-semibold uppercase tracking-[0.12em]" aria-label="Navigazione mobile">
            {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="py-4">{item.label}</a>)}
            <a href="/#esperienze" onClick={() => setIsOpen(false)} className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 py-3 text-xs text-ink">Scopri i raid</a>
          </nav>
        </div>
      )}
    </header>
  );
}
