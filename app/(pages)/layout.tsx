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
          href="/hoofdlogo.png"
        />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "rTMS Behandeling - Effectieve Therapie voor Depressie & Angst",
              "url": "https://rtms-kliniek.nl",
              "description":
                "rTMS Behandeling is een innovatieve, niet-invasieve therapie voor depressie, angststoornissen en OCD. Ontdek hoe rTMS therapie jou kan helpen en plan een intake.",
              "image": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "publisher": {
                "@type": "Organization",
                "name": "rTMS Kliniek",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://rtms-kliniek.nl/RTMSlogo.png"
                }
              },
              "author": {
                "@type": "Person",
                "name": "Jouw Naam"
              },
              "mainEntity": {
                "@type": "MedicalWebPage",
                "name": "rTMS Therapie",
                "medicalSpecialty": "Neurology",
                "url": "https://rtms-kliniek.nl/rtms-behandeling"
              }
            }),
          }}
        />
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
