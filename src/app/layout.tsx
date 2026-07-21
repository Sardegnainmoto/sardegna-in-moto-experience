import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
