import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repetitieve Transcraniële Magnetische Stimulatie (rTMS) behandeling | rTMS kliniek",
  description: "Repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een behandeling bij depressie, psychische probblemen op biopolaire stoornis. Ervaart u ook stemmingswisselingen. Boek een behandeling bij rTMS kliniek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="pt-20 md:pt-28">
        {children}
        </div>
        <div className="mt-16">        <Footer /></div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
