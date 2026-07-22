import Image from "next/image";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

type ExperienceCardProps = {
  title: string;
  description: string;
  status: "Disponibile" | "Coming soon";
  image: string;
  href?: string;
  priority?: boolean;
};

export function ExperienceCard({ title, description, status, image, href, priority = false }: ExperienceCardProps) {
  const useDirectImage = image.startsWith("/images/morocco/");

  const content = (
    <>
      <Image src={image} alt="" fill priority={priority} unoptimized={useDirectImage} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-ink/5 transition duration-500 group-hover:from-ink/90" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
        <span className="mb-5 inline-flex rounded-full border border-white/35 bg-ink/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">{status}</span>
        <h3 className="font-display text-4xl leading-none sm:text-5xl">{title}</h3>
        <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">{description}</p>
        {href && <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] transition duration-300 group-hover:text-dune">Scopri il raid <ArrowIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></span>}
      </div>
    </>
  );

  const className = "group relative isolate block min-h-[420px] overflow-hidden bg-ink shadow-[0_1px_0_rgba(17,18,15,.1)] transition duration-500 sm:min-h-[560px] hover:shadow-[0_18px_45px_rgba(17,18,15,.16)]";
  return href ? <a className={className} href={href}>{content}</a> : <div className={`${className} grayscale-[0.3]`} aria-label={`${title}, coming soon`}>{content}</div>;
}
