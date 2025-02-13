import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rTMS behandeling | rTMS kliniek",
  description:
    "Repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een rTMS behandeling bij depressie, psychische problemen op bipolaire stoornis. Ervaart u ook stemmingswisselingen? Boek een behandeling bij rTMS kliniek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/hoofdlogo.png" // Ensure hoofdlogo.png is in the /public directory
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="">{children}</div>
        <div className="mt-16">
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
