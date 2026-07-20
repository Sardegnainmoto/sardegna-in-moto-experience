import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sardegna in Moto Experience | Adventure motorcycle journeys",
  description:
    "Esperienze adventure in moto pensate per chi cerca piste remote, paesaggi autentici e il viaggio giusto da vivere fino in fondo.",
  keywords: ["viaggi in moto", "motorcycle adventure", "Tunisia desert", "Sardegna in Moto"],
  openGraph: {
    title: "Sardegna in Moto Experience",
    description: "Scegli dove inizia la tua prossima avventura.",
    type: "website",
    locale: "it_IT",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
