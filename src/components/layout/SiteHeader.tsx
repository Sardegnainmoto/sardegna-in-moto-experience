"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";

const navigation = [
  { label: "Esperienze", href: "#esperienze" },
  { label: "Chi siamo", href: "#" },
  { label: "Contatti", href: "#" },
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

  return (
    <header className={`fixed inset-x-0 top-0 z-20 text-white transition duration-500 ${isScrolled ? "bg-ink/68 shadow-[0_1px_0_rgba(255,255,255,.1)] backdrop-blur-xl" : "bg-transparent"}`}>
      <Container className="flex h-20 items-center justify-between border-b border-white/20 lg:h-24">
        <a href="/" className="group flex items-center gap-3" aria-label="Sardegna in Moto Experience, home page">
          <span className="grid size-8 place-items-center rounded-full border border-white/60 text-xs font-bold tracking-tight">SM</span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">Sardegna in Moto</span>
        </a>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] lg:flex" aria-label="Navigazione principale">
          {navigation.map((item) => <a key={item.label} className="transition duration-300 hover:text-dune" href={item.href}>{item.label}</a>)}
          <a href="#esperienze" className="rounded-full bg-white px-5 py-3 text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune">Scopri i raid</a>
        </nav>

        <button className="grid size-10 place-items-center lg:hidden" type="button" aria-label={isOpen ? "Chiudi il menu" : "Apri il menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span className="block h-px w-6 bg-white" />
          <span className="block h-px w-6 -translate-y-1 bg-white" />
        </button>
      </Container>

      {isOpen && (
        <div className="border-b border-white/20 bg-ink/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-[0.14em]" aria-label="Navigazione mobile">
            {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>)}
            <a href="#esperienze" onClick={() => setIsOpen(false)} className="mt-2 w-fit rounded-full bg-white px-5 py-3 text-xs text-ink">Scopri i raid</a>
          </nav>
        </div>
      )}
    </header>
  );
}
