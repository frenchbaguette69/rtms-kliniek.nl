"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/hoofdlogo.png";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo and Social Icons */}
          <div className="flex items-center">
            <Image
              src={Logo}
              width={150}
              height={50}
              alt="rTMS kliniek logo"
              className="mb-4"
            />
            <h2 className="text-3xl font-semibold ml-8">rTMS kliniek</h2>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 md:gap-32 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">Onze behandelingen</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/rtms-behandeling" className="hover:underline">
                    rTMS behandelingen
                  </Link>
                </li>
                <li>
                  <Link href="/depressie-behandeling" className="hover:underline">
                    Depressie behandelingen
                  </Link>
                </li>
                <li>
                  <Link href="/neurofeedback" className="hover:underline">
                    Neurofeedback
                  </Link>
                </li>
                <li>
                  <Link href="/eeg-scan" className="hover:underline">
                    EEG scan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Over ons</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/ons-team" className="hover:underline">
                    Ons team
                  </Link>
                </li>
                <li>
                  <Link href="/onze-werkwijze" className="hover:underline">
                    Onze werkwijze
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    Veelgestelde vragen
                  </Link>
                </li>
                <li>
                  <Link href="/vestigingen" className="hover:underline">
                    Locaties
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-white mt-8 pt-4 text-center md:text-left">
          <p className="text-sm">
            Copyright © {new Date().getFullYear()} rTMS kliniek Nederland. Alle
            rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
