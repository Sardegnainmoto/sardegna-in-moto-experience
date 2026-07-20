import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";
import type { Expedition } from "@/data/expeditions";

type ExpeditionTemplateProps = { expedition: Expedition };

function BookingCard({ expedition }: ExpeditionTemplateProps) {
  return <aside className="rounded-[1.5rem] bg-ink p-6 text-white shadow-[0_24px_80px_rgba(17,18,15,.16)] sm:p-8 lg:sticky lg:top-28">
    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-dune">Tunisia Expedition</p>
    <p className="mt-4 font-display text-5xl tracking-[-.055em]">{expedition.price}</p>
    <p className="mt-1 text-sm text-white/65">Acconto {expedition.deposit}</p>
    <dl className="mt-7 divide-y divide-white/15 border-y border-white/15">
      {[["Date", expedition.date], ["Durata", expedition.duration], ["Livello", expedition.level], ["Posti disponibili", "10"], ["Moto", expedition.motorcycle]].map(([term, definition]) => <div key={term} className="py-4"><dt className="text-[10px] font-bold uppercase tracking-[.17em] text-white/50">{term}</dt><dd className="mt-1 text-sm leading-5 text-white/90">{definition}</dd></div>)}
    </dl>
    <a href="#prenota" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-4 text-xs font-bold uppercase tracking-[.14em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune">Prenota il tuo posto <ArrowIcon className="size-4" /></a>
  </aside>;
}

function SectionHeading({ eyebrow, title, inverted = false }: { eyebrow: string; title: string; inverted?: boolean }) {
  return <FadeIn className="max-w-3xl"><p className={`text-[10px] font-bold uppercase tracking-[.22em] ${inverted ? "text-dune" : "text-clay"}`}>{eyebrow}</p><h2 className={`mt-4 font-display text-5xl leading-[.9] tracking-[-.06em] sm:text-6xl ${inverted ? "text-white" : "text-ink"}`}>{title}</h2></FadeIn>;
}

function ContactIcon({ type }: { type: "mail" | "phone" | "message" }) {
  if (type === "mail") return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>;
  if (type === "phone") return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]"><path d="M6.7 3.5 4.9 5.3c-1.3 1.3.8 5.5 4.8 9.5s8.2 6.1 9.5 4.8l1.8-1.8-3.4-3.4-2.2 1.2c-1.5-.7-3.2-2.4-3.9-3.9l1.2-2.2-3.4-3.4Z" /></svg>;
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-[1.5]"><path d="M20.5 11.5a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.3-4.6A8.2 8.2 0 1 1 20.5 11.5Z" /><path d="M8.2 8.3c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.5c0 .2-.1.4-.4.6-.6.3-1.5.3-3.1-.5-1.4-.7-2.8-2.1-3.5-3.5-.8-1.6-.8-2.5-.5-3.1Z" /></svg>;
}

export function ExpeditionTemplate({ expedition }: ExpeditionTemplateProps) {
  const quickFacts = [expedition.date, expedition.duration, expedition.ridingDays, expedition.distance, expedition.groupSize, expedition.level];
  return <main>
    <section className="relative isolate min-h-[820px] overflow-hidden bg-ink text-white sm:min-h-[900px]">
      <Image src={expedition.heroImage} alt={expedition.heroAlt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,11,.88)_0%,rgba(12,13,11,.6)_47%,rgba(12,13,11,.26)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,13,11,.72)_0%,transparent_52%)]" />
      <SiteHeader />
      <Container className="relative z-10 flex min-h-[820px] items-end py-16 pt-36 sm:min-h-[900px] sm:pb-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[.24em] text-dune">{expedition.eyebrow}</p>
          <h1 className="font-display text-[clamp(4rem,10vw,9rem)] leading-[.8] tracking-[-.075em]">Un viaggio<br />non è una vacanza.</h1>
          <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-dune">{expedition.name}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/88 sm:text-lg">{expedition.description}</p>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-y border-white/20 py-5 text-xs font-semibold uppercase tracking-[.1em] text-white/84">{quickFacts.map((fact) => <span key={fact}>{fact}</span>)}</div>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#prenota" className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune">Prenota il tuo posto <ArrowIcon className="size-4" /></a><a href="#programma" className="inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-white transition duration-300 hover:border-white hover:bg-white/10">Scopri il programma <ArrowIcon className="size-4" /></a></div>
        </div>
      </Container>
    </section>

    <section id="prenota" className="scroll-mt-28 bg-canvas py-24 sm:py-32"><Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20"><div>
      <SectionHeading eyebrow="Entrare nel deserto" title="Il deserto non si guarda. Si attraversa." />
      <FadeIn className="mt-8 max-w-2xl"><p className="text-lg leading-8 text-ink/75 sm:text-xl">{expedition.intro}</p></FadeIn>
    </div><BookingCard expedition={expedition} /></Container></section>

    <section className="bg-sand py-24 sm:py-32"><Container><SectionHeading eyebrow="In un colpo d’occhio" title="Il raid in numeri." /><div className="mt-14 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">{expedition.stats.map((stat) => <FadeIn key={stat.label} className="border-b border-r border-ink/15 p-6 sm:p-8"><p className="font-display text-5xl leading-none tracking-[-.06em] sm:text-6xl">{stat.value}</p><p className="mt-3 text-[10px] font-bold uppercase tracking-[.17em] text-ink/60">{stat.label}</p></FadeIn>)}</div></Container></section>

    <section className="bg-canvas py-24 sm:py-32"><Container><SectionHeading eyebrow="L’essenziale della spedizione" title="Ogni dettaglio ha un motivo." /><div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">{expedition.principles.map((principle, index) => <FadeIn key={principle.title} delay={index * .04}><p className="text-[10px] font-bold uppercase tracking-[.2em] text-clay">0{index + 1}</p><h3 className="mt-4 font-display text-3xl tracking-[-.04em]">{principle.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-ink/70">{principle.text}</p></FadeIn>)}</div></Container></section>

    <section id="programma" className="scroll-mt-20 bg-ink py-24 text-white sm:py-32"><Container><SectionHeading eyebrow="Il ritmo del raid" title="Sei giorni, una sola direzione." inverted /><div className="mt-14 border-t border-white/20">{expedition.itinerary.map((item) => <FadeIn key={item.day} className="grid gap-5 border-b border-white/20 py-9 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-10"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-dune">{item.day}</p><p className="mt-2 text-xs leading-5 text-white/45">{item.location}</p></div><div><h3 className="font-display text-3xl tracking-[-.04em] sm:text-4xl">{item.title}</h3>{item.ride && <p className="mt-3 text-[10px] font-bold uppercase tracking-[.16em] text-dune">{item.ride}</p>}<p className="mt-4 max-w-2xl text-sm leading-6 text-white/72">{item.description}</p><p className="mt-4 text-xs font-semibold uppercase tracking-[.14em] text-white/50">{item.overnight}</p></div></FadeIn>)}</div></Container></section>

    <section className="bg-canvas py-24 sm:py-32"><Container><SectionHeading eyebrow="Fotografie di spedizione" title="Una traccia nel Sahara." /><div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-6">{expedition.gallery.map((image, index) => <FadeIn key={image.src} delay={index * .04} className={image.size === "wide" ? "md:col-span-2" : ""}><div className={`group relative overflow-hidden bg-sand ${image.size === "large" ? "aspect-[4/5]" : image.size === "wide" ? "aspect-[16/8]" : "aspect-[4/5]"}`}><Image src={image.src} alt={image.alt} fill sizes={image.size === "wide" ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"} className="object-cover transition duration-700 group-hover:scale-[1.03]" /></div></FadeIn>)}</div></Container></section>

    <section className="bg-sand py-24 sm:py-32"><Container className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20"><div><SectionHeading eyebrow="Cosa accompagna la partenza" title="Tutto ciò che serve. Niente di superfluo." /><div className="mt-14 grid gap-12 md:grid-cols-2">{[["Incluso", expedition.included], ["Non incluso", expedition.excluded]].map(([title, items]) => <FadeIn key={title as string}><h3 className="text-[10px] font-bold uppercase tracking-[.22em] text-clay">{title as string}</h3><ul className="mt-6 space-y-3 border-t border-ink/15 pt-4 text-sm leading-6 text-ink/75">{(items as string[]).map((item) => <li key={item} className="border-b border-ink/15 pb-3">{item}</li>)}</ul></FadeIn>)}</div><FadeIn className="mt-12 border-t border-ink/15 pt-8"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-clay">Opzioni</p><div className="mt-5 grid gap-4 sm:grid-cols-2">{expedition.options.map((option) => <div key={option.title} className="border border-ink/15 p-5"><h3 className="font-display text-2xl tracking-[-.035em]">{option.title}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{option.detail}</p></div>)}</div></FadeIn></div><BookingCard expedition={expedition} /></Container></section>

    <section className="bg-canvas py-24 sm:py-32"><Container><p className="text-[10px] font-bold uppercase tracking-[.22em] text-clay">Chi c’è dietro Tunisia Expedition</p><div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:items-center lg:gap-20"><FadeIn><div className="relative aspect-[4/5] overflow-hidden bg-sand"><Image src={expedition.founder.image} alt={expedition.founder.imageAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></div></FadeIn><FadeIn><p className="text-[10px] font-bold uppercase tracking-[.22em] text-clay">{expedition.founder.eyebrow}</p><h2 className="mt-4 font-display text-5xl leading-[.9] tracking-[-.06em] text-ink sm:text-6xl">{expedition.founder.title}</h2><div className="mt-7 space-y-5 text-base leading-7 text-ink/72">{expedition.founder.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="mt-7 text-xs font-bold uppercase tracking-[.16em] text-clay">{expedition.founder.name}</p></FadeIn></div></Container></section>

    <section className="bg-sand py-24 sm:py-32"><Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.7fr)] lg:gap-24"><SectionHeading eyebrow="A chi è rivolto questo viaggio" title={expedition.audience.title} /><FadeIn className="space-y-5 self-end text-base leading-7 text-ink/72">{expedition.audience.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</FadeIn></Container></section>

    <section className="bg-ink py-24 text-white sm:py-32"><Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.7fr)] lg:gap-24"><SectionHeading eyebrow="Lo spirito del raid" title={expedition.spirit.title} inverted /><FadeIn className="space-y-5 self-end text-base leading-7 text-white/72">{expedition.spirit.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</FadeIn></Container></section>

    <section className="bg-canvas py-24 sm:py-32"><Container><SectionHeading eyebrow="Contatti" title="Pronto a vivere il tuo prossimo viaggio?" /><FadeIn className="mt-7 max-w-2xl"><p className="text-base leading-7 text-ink/72 sm:text-lg">Se desideri maggiori informazioni, vuoi ricevere il programma completo oppure semplicemente fare due chiacchiere sul viaggio, sarò felice di risponderti personalmente.</p></FadeIn><div className="mt-14 grid gap-4 md:grid-cols-3">{[{ type: "mail" as const, label: "Email", value: "mauro.sanna96@hotmail.com", action: "Scrivimi una mail", href: "mailto:mauro.sanna96@hotmail.com" }, { type: "phone" as const, label: "Telefono", value: "+39 348 272 6568", action: "Chiamami", href: "tel:+393482726568" }, { type: "message" as const, label: "WhatsApp", value: "+39 348 272 6568", action: "Scrivimi su WhatsApp", href: "https://wa.me/393482726568" }].map((contact) => <FadeIn key={contact.label}><div className="flex h-full flex-col border border-ink/15 p-6 sm:p-7"><div className="flex items-center gap-3 text-clay"><ContactIcon type={contact.type} /><p className="text-[10px] font-bold uppercase tracking-[.2em]">{contact.label}</p></div><p className="mt-6 break-words font-display text-2xl tracking-[-.035em] text-ink">{contact.value}</p><a href={contact.href} className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[.13em] transition duration-300 hover:-translate-y-0.5 ${contact.type === "message" ? "bg-moss text-white hover:bg-sea" : "bg-ink text-white hover:bg-clay"}`}>{contact.action} <ArrowIcon className="size-4" /></a></div></FadeIn>)}</div></Container></section>

    <section className="relative isolate overflow-hidden bg-sea py-28 text-white sm:py-36"><Image src="/images/tunisia/return-dunes.png" alt="Dune del Sahara tunisino" fill sizes="100vw" className="-z-10 object-cover opacity-45" /><div className="absolute inset-0 -z-10 bg-sea/80" /><Container><FadeIn className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-dune">Tunisia Expedition · Marzo 2027</p><h2 className="mt-5 font-display text-6xl leading-[.86] tracking-[-.065em] sm:text-7xl">Il Sahara ti aspetta.</h2><p className="mt-6 max-w-xl text-base leading-7 text-white/82 sm:text-lg">Non tutti i viaggi si misurano in chilometri. Alcuni si misurano nei ricordi che porterai con te per sempre.</p><a href="#prenota" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.15em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune">Prenota il tuo posto <ArrowIcon className="size-4" /></a></FadeIn></Container></section>
  </main>;
}
