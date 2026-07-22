"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { JourneyStage } from "@/data/journey";

type JourneySidebarProps = {
  stages: JourneyStage[];
  activeStage: JourneyStage;
  onStageSelect: (stage: JourneyStage) => void;
};

export function JourneySidebar({ stages, activeStage, onStageSelect }: JourneySidebarProps) {
  return <div className="min-w-0 rounded-[1.5rem] border border-ink/10 bg-canvas p-3 shadow-[0_24px_70px_rgba(17,18,15,.08)] sm:p-4 lg:h-[640px] lg:overflow-y-auto">
    <ol className="divide-y divide-ink/10">
      {stages.map((stage) => {
        const active = stage.number === activeStage.number;

        return <li key={stage.number}>
          <button type="button" onClick={() => onStageSelect(stage)} onMouseEnter={() => onStageSelect(stage)} className={`w-full rounded-xl px-3 py-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dune sm:px-4 ${active ? "bg-sand" : "hover:bg-sand/55"}`} aria-current={active ? "step" : undefined}>
            <span className="flex items-start gap-4"><span className={`mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${active ? "border-clay bg-clay text-white" : "border-ink/20 text-ink/60"}`}>{stage.number}</span><span className="min-w-0"><span className="block font-display text-[1.65rem] leading-none tracking-[-.035em] text-ink">{stage.title}</span><AnimatePresence initial={false}>{active && <motion.span initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }} className="mt-2 block overflow-hidden text-sm leading-6 text-ink/68">{stage.description}</motion.span>}</AnimatePresence></span></span>
          </button>
        </li>;
      })}
    </ol>
  </div>;
}
