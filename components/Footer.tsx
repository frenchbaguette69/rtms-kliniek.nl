"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logowhite.png";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-10 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Logo & socials */}
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src={Logo}
              width={160}
              height={60}
              alt="rtms behandeling Logo"
              className="mb-4"
            />
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/company/rtms-behandeling-nederland"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} className="hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Sitemap links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-center lg:text-left w-full">
            <div>
              <h3 className="text-lg font-semibold mb-4">Behandelingen</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline">rTMS behandeling</Link></li>
                <li><Link href="/depressie-behandeling" className="hover:underline">Depressie behandeling</Link></li>
                <li><Link href="/neurofeedback" className="hover:underline">Neurofeedback</Link></li>
                <li><Link href="/eeg-scan" className="hover:underline">EEG scan</Link></li>
                <li><Link href="/behandelingen" className="hover:underline">Alle behandelingen</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Over ons</h3>
              <ul className="space-y-2">
                <li><Link href="/ons-team" className="hover:underline">Ons team</Link></li>
                <li><Link href="/onze-werkwijze" className="hover:underline">Onze werkwijze</Link></li>
                <li><Link href="/vestigingen" className="hover:underline">Locaties</Link></li>
                <li><Link href="/faq" className="hover:underline">Veelgestelde vragen</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Meer informatie</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                <li><Link href="/afspraak-maken" className="hover:underline">Afspraak maken</Link></li>
                <li><Link href="/login" className="hover:underline">Inloggen</Link></li>
                <li><Link href="/" className="hover:underline">Home</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contactgegevens & registraties */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-center lg:text-left">
          <div>
            <h3 className="text-lg font-semibold mb-3">Locaties</h3>
            <address className="not-italic space-y-1">
              <p>Heiloo: Kennemerstraatweg 464, unit 1.03, 1851 NG Heiloo</p>
              <p>Volendam: Heideweg 1B, 1132 DA Volendam (Gezondheidscentrum Volendam)</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p>
              Telefoon:{" "}
              <a href="tel:+31850606774" className="underline underline-offset-4">
                085 060 6774
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a href="mailto:info@neo-clinics.nl" className="underline underline-offset-4">
                info@neo-clinics.nl
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Registraties & team</h3>
            <p>BIG: 19934011201 (I.F. Blom)</p>
            <p>AGB: 22221993 • KVK: 92761577</p>
            <p>Neurowetenschapper: dr. Ruud Kortekaas (PhD)</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} rtms behandeling Nederland. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
