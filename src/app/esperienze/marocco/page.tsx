import type { Metadata } from "next";
import { MoroccoPreviewPage } from "@/components/morocco/MoroccoPreviewPage";

export const metadata: Metadata = {
  title: "Marocco Expedition 2027 | Sardegna in Moto Experience",
  description: "Una preview di Marocco Expedition: il prossimo raid adventure di Sardegna in Moto Experience.",
  openGraph: { title: "Marocco Expedition 2027", description: "Il prossimo orizzonte.", images: [{ url: "/images/morocco/IMG_7099.jpg" }] },
};

export default function MoroccoPage() {
  return <MoroccoPreviewPage />;
}
