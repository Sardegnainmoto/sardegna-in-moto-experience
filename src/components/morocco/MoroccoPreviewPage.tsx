import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { Container } from "@/components/ui/Container";

const gallery = [
  "IMG_6744.jpg", "IMG_6824.jpg", "IMG_6826.jpg", "IMG_6844.jpg", "IMG_6959.jpg", "IMG_7003.jpg", "IMG_7052.jpg", "IMG_7099.jpg", "IMG_7126.jpg", "IMG_7181.jpg", "IMG_7213.jpg", "IMG_7287.jpg", "IMG_7400.jpg", "IMG_7508.jpg", "IMG_7541.jpg", "IMG_7599.jpg", "IMG_7632.jpg", "IMG_7643.jpg", "IMG_7651.jpg", "IMG_7677.jpg", "IMG_7698.jpg",
];

export function MoroccoPreviewPage() {
  return <main>
    <section className="relative isolate min-h-[100svh] min-h-[100dvh] overflow-hidden bg-ink text-white sm:min-h-[850px]">
      <Image src="/images/morocco/IMG_7698.jpg" alt="Viaggiatori nel deserto del Marocco" fill priority unoptimized sizes="100vw" className="object-cover object-[60%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,13,11,.88)_0%,rgba(12,13,11,.52)_56%,rgba(12,13,11,.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,13,11,.7)_0%,transparent_50%)]" />
      <SiteHeader />
      <Container className="relative z-10 flex min-h-[100svh] min-h-[100dvh] items-end pb-[max(2rem,var(--safe-bottom))] pt-[max(7rem,calc(var(--safe-top)+5rem))] sm:min-h-[850px] sm:pb-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-dune">In allestimento · 2027</p>
          <h1 className="font-display text-[clamp(2.8rem,11vw,8rem)] leading-[.84] tracking-[-.07em]">Marocco.<br />Il prossimo orizzonte.</h1>
          <p className="mt-6 max-w-xl text-[clamp(1rem,2.5vw,1.125rem)] leading-7 text-white/85">Dune, piste lontane e una spedizione da vivere con il tempo giusto. Stiamo costruendo il prossimo raid: queste immagini sono il suo primo capitolo.</p>
          <a href="#anteprima" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune sm:w-auto">Scopri l’anteprima <ArrowIcon className="size-4" /></a>
        </div>
      </Container>
    </section>

    <section id="anteprima" className="scroll-mt-20 bg-canvas py-16 sm:py-24 lg:py-32"><Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.72fr)] lg:gap-24"><FadeIn><p className="text-[10px] font-bold uppercase tracking-[.22em] text-clay">Marocco Expedition</p><h2 className="mt-4 font-display text-[clamp(2rem,8vw,3.75rem)] leading-[.9] tracking-[-.06em] text-ink">Un viaggio che sta prendendo forma.</h2></FadeIn><FadeIn className="self-end text-[clamp(1rem,2.5vw,1.125rem)] leading-7 text-ink/72"><p>Non è ancora il momento di raccontare tutto. È il momento di guardare le dune, immaginare le piste e iniziare a pensare alla prossima partenza.</p><p className="mt-5">Marocco Expedition arriverà nel 2027: un gruppo ristretto, percorsi scelti con cura e il deserto come unico programma.</p></FadeIn></Container></section>

    <section className="bg-sand py-16 sm:py-24 lg:py-32"><Container><FadeIn className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-clay">Appunti dal deserto</p><h2 className="mt-4 font-display text-[clamp(2rem,8vw,3.75rem)] leading-[.9] tracking-[-.06em]">Una preview, prima della partenza.</h2></FadeIn><div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:gap-6">{gallery.map((image, index) => <FadeIn key={image} delay={Math.min(index * .02, .18)} className={index === 0 || index === 8 || index === 15 ? "md:col-span-2" : ""}><div className={`group relative overflow-hidden rounded-2xl bg-ink ${index === 0 || index === 8 || index === 15 ? "aspect-[4/3] md:aspect-[16/8]" : "aspect-[4/5]"}`}><Image src={`/images/morocco/${image}`} alt="Anteprima di Marocco Expedition" fill sizes={index === 0 || index === 8 || index === 15 ? "(max-width: 768px) 100vw, 90vw" : "(max-width: 768px) 100vw, 45vw"} className="object-cover transition duration-700 group-hover:scale-[1.03]" /></div></FadeIn>)}</div></Container></section>

    <section className="relative isolate overflow-hidden bg-sea py-20 text-white sm:py-32"><Image src="/images/morocco/IMG_7126.jpg" alt="Pista di moto tra le dune del Marocco" fill sizes="100vw" className="-z-10 object-cover opacity-45" /><div className="absolute inset-0 -z-10 bg-sea/80" /><Container><FadeIn className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-dune">Marocco Expedition · 2027</p><h2 className="mt-5 font-display text-[clamp(2.5rem,10vw,4.5rem)] leading-[.86] tracking-[-.065em]">Il deserto chiama già.</h2><p className="mt-6 max-w-xl text-[clamp(1rem,2.5vw,1.125rem)] leading-7 text-white/82">Vuoi sapere quando apriremo le prime disponibilità? Scrivici: ti aggiorneremo appena il raid sarà pronto.</p><a href="/esperienze/tunisia-desert-experience#contatti" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.15em] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-dune sm:w-auto">Ricevi gli aggiornamenti <ArrowIcon className="size-4" /></a></FadeIn></Container></section>
  </main>;
}
