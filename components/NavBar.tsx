"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/rTMS kliniek.png";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (linkName: string) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
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

      {/* Witte navigatiebalk met hover-menu's */}
      <div
        className={`bg-white relative transition-all duration-300 ${
          hoveredLink ? "h-80" : "h-20"
        } border-b`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-between items-center container h-20 mx-auto px-4">
          <Link href="/">
          <Image
            src={Logo}
            width={2000}
            height={800}
            alt="logo"
            className="h-14 w-auto object-contain"
          /></Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center text-lg">
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
              <Link href="/vestigingen" className="text-black hover:underline">
                Locaties
              </Link>
            </div>
          </div>
          <Link href="/afspraak-maken">
          <Button className="hidden md:block" variant="outline">
            Afspraak inplannen
          </Button>
          </Link>
          {/* Burger Menu voor Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <FaBars size={24} />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  <Link href="/behandelingen" className="text-lg text-gray-800 hover:text-black">
                    Wat bieden wij
                  </Link>
                  <Link href="/ons-team" className="text-lg text-gray-800 hover:text-black">
                    Over ons
                  </Link>
                  <Link href="/afspraak-maken" className="text-lg text-gray-800 hover:text-black">
                    Ik ben op zoek naar hulp
                  </Link>
                  <Link href="/vestigingen" className="text-lg text-gray-800 hover:text-black">
                    Locaties
                  </Link>
                  <Link href="/afspraak-maken">
                  <Button variant="outline" className="mt-4">
                    Afspraak inplannen
                  </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Hover Menu */}
        {hoveredLink && (
          <div className="absolute left-0 w-full transition-all duration-300">
            <div className="container mx-auto py-4 px-4">
              {/* Wat bieden wij */}
              {hoveredLink === "watBiedenWij" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-20">
                    <h2 className="text-6xl font-bold text-center">Wat bieden wij</h2>
                    <ul className="flex gap-8 font-semibold text-2xl">
                      <li>
                        <Link href="/rtms-behandeling" className="text-gray-600 hover:text-black">
                          rTMS behandelingen
                        </Link>
                      </li>
                      <li>
                        <Link href="/depressie-behandeling" className="text-gray-600 hover:text-black">
                          Depressie behandelingen
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {/* Over ons */}
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
                          <Link href="/blog" className="text-gray-600 hover:text-black">
                            Nieuws
                          </Link>
                        </li>
                        <li>
                          <Link href="/vestigingen" className="text-gray-600 hover:text-black">
                            Onze locaties
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
              {/* Ik ben op zoek naar hulp */}
              {hoveredLink === "hulp" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-16">
                    <h2 className="text-6xl font-bold text-center">Wij bieden hulp bij</h2>
                    <ul className="flex gap-16 font-semibold text-2xl">
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/rtms-behandeling" className="text-gray-600 hover:text-black">
                            rTMS behandelingen
                          </Link>
                        </li>
                        <li>
                          <Link href="/depressie-behandeling" className="text-gray-600 hover:text-black">
                            Depressie behandelingen
                          </Link>
                        </li>
                      </div>
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/neurofeedback" className="text-gray-600 hover:text-black">
                            Neurofeedback
                          </Link>
                        </li>
                        <li>
                          <Link href="/eeg-scan" className="text-gray-600 hover:text-black">
                            Eeg scan
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              )}
              {/* Locaties */}
              {hoveredLink === "locaties" && (
                <div className="flex justify-center items-center w-full">
                  <div className="flex justify-between items-center max-w-[85%] w-full mt-16">
                    <h2 className="text-6xl font-bold text-center">Onze locaties</h2>
                    <ul className="flex gap-8 font-semibold text-2xl">
                      <div className="flex flex-col gap-4">
                        <li>
                          <Link href="/service1" className="text-gray-600 hover:text-black">
                            Kennemerstraatweg 464, Heiloo
                          </Link>
                        </li>
                        <li>
                          <Link href="/service2" className="text-gray-600 hover:text-black">
                            Heideweg 1B, Volendam
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
