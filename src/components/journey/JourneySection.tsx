"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { tunisiaJourney, type JourneyStage } from "@/data/journey";
import { JourneySidebar } from "@/components/journey/JourneySidebar";

const JourneyMap = dynamic(() => import("@/components/journey/JourneyMap"), {
  ssr: false,
  loading: () => <div className="h-[340px] animate-pulse rounded-[1.5rem] bg-sand sm:h-[400px] lg:h-[640px]" aria-label="Caricamento mappa" />,
});

type JourneySectionProps = {
  stages?: JourneyStage[];
};

export function JourneySection({ stages = tunisiaJourney }: JourneySectionProps) {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return <section id="percorso" className="scroll-mt-20 bg-ink py-16 text-white sm:py-24 lg:py-32">
    <Container>
      <FadeIn className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-dune sm:tracking-[.22em]">Il percorso del raid</p><h2 className="mt-4 font-display text-[clamp(2rem,8vw,3.75rem)] leading-[.92] tracking-[-.055em] text-white sm:leading-[.9] sm:tracking-[-.06em]">Sei tappe. Un solo orizzonte.</h2><p className="mt-5 max-w-xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">Un percorso disegnato tra città, piste, oasi e deserto aperto.</p></FadeIn>
      <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[minmax(0,1.85fr)_minmax(300px,1fr)] lg:gap-7">
        <JourneyMap stages={stages} activeStage={activeStage} onStageSelect={setActiveStage} />
        <JourneySidebar stages={stages} activeStage={activeStage} onStageSelect={setActiveStage} />
      </div>
    </Container>
  </section>;
}
