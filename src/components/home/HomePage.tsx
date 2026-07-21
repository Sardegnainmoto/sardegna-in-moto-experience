import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ExperienceCard } from "@/components/home/ExperienceCard";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";

const experiences = [
  { title: "Tunisia", description: "Piste remote, dune e il Sahara davanti a te.", status: "Disponibile" as const, image: "/images/hero-desert-raid.png", href: "/esperienze/tunisia-desert-experience" },
  { title: "Sardegna", description: "Curve, sterrati e l'energia selvaggia dell'isola.", status: "Coming soon" as const, image: "/images/sardegna-coastal-trail.png" },
  { title: "Marocco", description: "Atlante, kasbah e piste che sfiorano l'orizzonte.", status: "Coming soon" as const, image: "/images/marocco-dune-raid.jpg" },
];

export function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-[100svh] min-h-[100dvh] overflow-hidden bg-ink text-white sm:min-h-[780px]">
        <Image src="/images/hero-desert-raid.png" alt="Moto adventure tra le dune del deserto" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,11,.86)_0%,rgba(12,13,11,.58)_47%,rgba(12,13,11,.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,13,11,.45)_0%,transparent_34%)]" />
        <SiteHeader />
        <Container className="relative z-10 flex min-h-[100svh] min-h-[100dvh] items-end pb-[max(2rem,var(--safe-bottom))] pt-[max(7rem,calc(var(--safe-top)+5rem))] sm:min-h-[780px] sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-dune sm:mb-6 sm:tracking-[0.24em] sm:text-xs">Motorcycle adventure experiences</p>
            <h1 className="font-display text-[clamp(2.4rem,10vw,7.8rem)] leading-[0.88] tracking-[-0.06em] sm:leading-[0.86] sm:tracking-[-0.065em]">Un viaggio non è una vacanza.</h1>
            <p className="mt-5 max-w-xl text-[clamp(1rem,2.5vw,1.125rem)] leading-7 text-white/88 sm:mt-7">È qualcosa che ti cambia.</p>
            <a href="#esperienze" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-ink shadow-[0_12px_35px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-dune hover:shadow-[0_16px_38px_rgba(0,0,0,.3)] sm:mt-9 sm:w-auto">Scopri i raid <ArrowIcon className="size-4" /></a>
          </div>
        </Container>
      </section>

      <section id="esperienze" className="scroll-mt-10 bg-canvas py-16 sm:py-28">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay">Le destinazioni</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3.75rem)] leading-[0.91] tracking-[-0.055em] text-ink">Tre destinazioni. Un solo modo di viverle: in moto.</h2>
          </FadeIn>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16 lg:gap-6">
            {experiences.map((experience, index) => <FadeIn key={experience.title} delay={index * 0.1}><ExperienceCard {...experience} priority={index === 0} /></FadeIn>)}
          </div>
        </Container>
      </section>

      <section id="tunisia" className="bg-ink py-6 text-white sm:py-8">
        <Container className="grid items-center gap-5 sm:grid-cols-[1fr_auto] sm:gap-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="font-display text-3xl text-dune">Tunisia Desert Experience</span>
            <span className="text-white/70">6 giorni</span><span className="text-white/70">Deserto & piste</span><span className="text-white/70">Gruppo ristretto</span>
          </div>
          <a href="/esperienze/tunisia-desert-experience" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-dune transition duration-300 hover:text-white">Scopri il raid <ArrowIcon className="size-4" /></a>
        </Container>
      </section>

      <section className="overflow-hidden bg-sand">
        <Container className="grid min-h-[570px] items-center gap-12 py-20 lg:grid-cols-[1fr_1fr] lg:py-0">
          <FadeIn className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay">Un viaggio, in un colpo d&apos;occhio</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,8vw,3.75rem)] leading-[0.91] tracking-[-0.055em]">Il deserto non si guarda. Si attraversa.</h2>
            <p className="mt-6 text-base leading-7 text-ink/75">Dune, piste e silenzio: una settimana progettata per chi cerca l&apos;essenza della guida adventure.</p>
            <a href="/esperienze/tunisia-desert-experience" className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[0.15em] transition duration-300 hover:border-clay hover:text-clay">Richiedi disponibilità <ArrowIcon className="size-4" /></a>
          </FadeIn>
          <div className="grid grid-cols-2 gap-px bg-ink/15 self-stretch lg:my-0">
            {[['Livello', 'Intermedio'], ['Durata', '6 giorni'], ['Terreno', 'Piste & dune'], ['Gruppo', 'Posti limitati']].map(([label, value]) => (
              <div key={label} className="flex min-h-40 flex-col justify-end bg-sand p-6 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/50">{label}</p><p className="mt-3 font-display text-3xl sm:text-4xl">{value}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-sea py-24 text-white sm:py-32">
        <Image src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85" alt="Paesaggio desertico al tramonto" fill sizes="100vw" className="-z-10 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-sea/75" />
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-dune">La prossima partenza inizia qui</p>
            <h2 className="mt-5 font-display text-[clamp(2.5rem,10vw,4.5rem)] leading-[0.86] tracking-[-0.065em]">Il deserto non aspetta.</h2>
            <a href="/esperienze/tunisia-desert-experience" className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-ink shadow-[0_12px_35px_rgba(0,0,0,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-dune hover:shadow-[0_16px_38px_rgba(0,0,0,.3)] sm:w-auto">Richiedi disponibilità <ArrowIcon className="size-4" /></a>
          </FadeIn>
        </Container>
      </section>

      <footer className="bg-ink py-10 text-white/65"><Container className="flex flex-col gap-5 text-xs sm:flex-row sm:items-center sm:justify-between"><p className="font-semibold uppercase tracking-[0.15em] text-white">Sardegna in Moto Experience</p><p>© {new Date().getFullYear()} · Adventure motorcycle journeys</p></Container></footer>
    </main>
  );
}
