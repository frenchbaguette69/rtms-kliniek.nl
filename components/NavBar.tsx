"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/rTMS kliniek.png";
import { Button } from "./ui/button";

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link); // Stel in welke link is gehovered
  };

  const handleMouseLeave = () => {
    setHoveredLink(null); // Verwijder hover state
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* Zwarte bovenste navigatiebalk */}
      <div className="h-10 bg-black hidden md:block">
        <div className="container h-full flex items-center justify-between mx-auto px-4">
          <div className="font-semibold flex gap-4 text-sm">
            <Link href="/rtms-behandeling" className="text-gray-400 hover:text-white">
              rTMS behandeling
            </Link>
            <Link href="/depressie-behandeling" className="text-gray-400 hover:text-white">
              Depressie behandeling
            </Link>
          </div>
          <div className="font-semibold flex gap-4 text-sm">
            <Link href="/faq" className="text-gray-400 hover:text-white">
              Veelgestelde vragen
            </Link>
            <Link href="/afspraak-maken" className="text-gray-400 hover:text-white">
              Afspraak maken
            </Link>
          </div>
        </div>
      </div>

      {/* Witte navigatiebalk met geïntegreerd hover-menu */}
      <div
        className={`bg-white relative transition-all duration-300 ${
          hoveredLink ? "h-80" : "h-20"
        } border-b`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center container h-20 mx-auto px-4">
          {/* Logo */}
          <Image
            src={Logo}
            width={200}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain"
          />

          {/* Navigation Links */}
          <div className="flex gap-8 items-center text-lg">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("watBiedenWij")}
            >
              <Link href="#" className="text-black hover:underline">
                Wat bieden wij
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("overOns")}
            >
              <Link href="#" className="text-black hover:underline">
                Over ons
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("hulp")}
            >
              <Link href="#" className="text-black hover:underline">
                Ik ben op zoek naar hulp
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("locaties")}
            >
              <Link href="#" className="text-black hover:underline">
                Locaties
              </Link>
            </div>
          </div>
          <Button variant="outline">Afspraak inplannen</Button>
        </div>

        {/* Hover Menu */}
        {hoveredLink && (
          <div className="absolute left-0 w-full transition-all duration-300">
            <div className="container mx-auto py-4 px-4">
              {hoveredLink === "watBiedenWij" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-20">
                    <h2 className="text-6xl font-bold text-center">Wat bieden wij</h2>
                    <ul className="flex gap-8 font-semibold text-2xl">
                      <li>
                        <Link href="/service1" className="text-gray-600 hover:text-black">
                          rTMS behandelingen
                        </Link>
                      </li>
                      <li>
                        <Link href="/service2" className="text-gray-600 hover:text-black">
                          Depressie behandelingen
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {hoveredLink === "overOns" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-20">
                    <h2 className="text-6xl font-bold text-center">Over rTMS kliniek</h2>
                    <ul className="flex gap-16 font-semibold text-2xl">
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/ons-team" className="text-gray-600 hover:text-black">
                            Ons team
                          </Link>
                        </li>
                        <li>
                          <Link href="/onze-werkwijze" className="text-gray-600 hover:text-black">
                            Onze werkwijze
                          </Link>
                        </li>
                      </div>
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/nieuws" className="text-gray-600 hover:text-black">
                            Nieuws
                          </Link>
                        </li>
                        <li>
                          <Link href="/onze-locaties" className="text-gray-600 hover:text-black">
                            Onze locaties
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
              {hoveredLink === "hulp" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-16">
                    <h2 className="text-6xl font-bold text-center">Wij bieden hulp bij</h2>
                    <ul className="flex gap-16 font-semibold text-2xl">
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/ons-team" className="text-gray-600 hover:text-black">
                            rTMS behandelingen
                          </Link>
                        </li>
                        <li>
                          <Link href="/onze-werkwijze" className="text-gray-600 hover:text-black">
                            Depressie behandelingen
                          </Link>
                        </li>
                        <li>
                          <Link href="/onze-werkwijze" className="text-gray-600 hover:text-black">
                            Neurofeedback
                          </Link>
                        </li>
                      </div>
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/nieuws" className="text-gray-600 hover:text-black">
                            Qeeg scan
                          </Link>
                        </li>
                        <li>
                          <Link href="/onze-locaties" className="text-gray-600 hover:text-black">
                            Eeg scan
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
              {hoveredLink === "locaties" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-16">
                    <h2 className="text-6xl font-bold text-center">Onze locaties</h2>
                    <ul className="flex gap-8 font-semibold text-2xl">
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/service1" className="text-gray-600 hover:text-black">
                            Kennemerstraatweg 464, Unit 1.03, 1851NG Heiloo
                          </Link>
                        </li>
                        <li>
                          <Link href="/service2" className="text-gray-600 hover:text-black">
                            Heideweg 1B, 1132 DA Volendam (in het Dijklander Ziekenhuis)
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
