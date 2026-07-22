import type { Metadata } from "next";
import { ExpeditionTemplate } from "@/components/expedition/ExpeditionTemplate";
import { tunisiaExpedition } from "@/data/expeditions";

export const metadata: Metadata = {
  title: "Tunisia Expedition | Sardegna in Moto Experience",
  description: "Sei giorni e quattro giornate di guida nel Sahara tunisino. Tunisia Expedition, 20–25 Marzo 2027.",
  openGraph: { title: "Tunisia Expedition", description: "Un viaggio non è una vacanza.", images: [{ url: "/images/tunisia/tunisia-cover-campo-dune.png" }] },
};

export default function TunisiaDesertExperiencePage() {
  return <ExpeditionTemplate expedition={tunisiaExpedition} />;
}
