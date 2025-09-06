"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoblack.png";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { FaBars } from "react-icons/fa";

type MenuKey = "bieden" | "over" | "hulp" | "locaties" | null;

const NavBar = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // sluit megamenu bij Escape of klik buiten
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const LinkItem = ({
    href,
    children,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <Link
      href={href}
      prefetch
      onClick={onClick}
      className="text-gray-800 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69a8d9] rounded-md"
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 left-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b">
      <div className="mx-auto w-[90%] h-20 flex items-center justify-between">
        <Link href="/" aria-label="rtms-behandeling.nl – naar home" className="flex items-center">
          <Image src={Logo} width={2000} height={800} alt="RTMS behandeling logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" role="navigation" aria-label="Hoofdmenu">
          <ul className="flex items-center gap-8 text-lg">
            <li className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "bieden"}
                onMouseEnter={() => setOpenMenu("bieden")}
                onFocus={() => setOpenMenu("bieden")}
                onClick={() => setOpenMenu(openMenu === "bieden" ? null : "bieden")}
                className="px-1 py-2 text-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69a8d9] rounded-md"
              >
                Wat bieden wij
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "over"}
                onMouseEnter={() => setOpenMenu("over")}
                onFocus={() => setOpenMenu("over")}
                onClick={() => setOpenMenu(openMenu === "over" ? null : "over")}
                className="px-1 py-2 text-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69a8d9] rounded-md"
              >
                Over ons
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "hulp"}
                onMouseEnter={() => setOpenMenu("hulp")}
                onFocus={() => setOpenMenu("hulp")}
                onClick={() => setOpenMenu(openMenu === "hulp" ? null : "hulp")}
                className="px-1 py-2 text-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69a8d9] rounded-md"
              >
                Ik zoek hulp
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={openMenu === "locaties"}
                onMouseEnter={() => setOpenMenu("locaties")}
                onFocus={() => setOpenMenu("locaties")}
                onClick={() => setOpenMenu(openMenu === "locaties" ? null : "locaties")}
                className="px-1 py-2 text-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#69a8d9] rounded-md"
              >
                Locaties
              </button>
            </li>
          </ul>
        </nav>

        <Link href="/afspraak-maken" className="hidden md:block">
          <Button className="bg-black hover:bg-[#1e385b] text-white">Afspraak inplannen</Button>
        </Link>

        {/* Mobile burger */}
        <div className="md:hidden">
          <Sheet open={openSheet} onOpenChange={setOpenSheet}>
            <SheetTrigger asChild>
              <Button variant="ghost" aria-label="Open menu">
                <FaBars size={28} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-3 flex flex-col" aria-label="Mobiel menu">
                <LinkItem href="/" onClick={() => setOpenSheet(false)}>rTMS behandeling</LinkItem>
                <LinkItem href="/depressie-behandeling" onClick={() => setOpenSheet(false)}>Depressie behandeling (rTMS)</LinkItem>
                <LinkItem href="/onze-werkwijze" onClick={() => setOpenSheet(false)}>Onze werkwijze (protocol & sessies)</LinkItem>
                <LinkItem href="/neurofeedback" onClick={() => setOpenSheet(false)}>Neurofeedback</LinkItem>
                <LinkItem href="/eeg-scan" onClick={() => setOpenSheet(false)}>EEG-scan</LinkItem>
                <LinkItem href="/vestigingen" onClick={() => setOpenSheet(false)}>Locaties Heiloo & Volendam</LinkItem>
                <LinkItem href="/ons-team" onClick={() => setOpenSheet(false)}>Ons team</LinkItem>
                <LinkItem href="/faq" onClick={() => setOpenSheet(false)}>FAQ</LinkItem>
                <Link href="/afspraak-maken" onClick={() => setOpenSheet(false)}>
                  <Button className="mt-4 w-full bg-black hover:bg-[#1e385b] text-white">Afspraak inplannen</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Megamenu layer */}
      <div ref={menuRef} onMouseLeave={() => setOpenMenu(null)}>
        {/* Wat bieden wij */}
        {openMenu === "bieden" && (
          <div className="absolute inset-x-0 top-20 bg-white shadow-xl border-t">
            <div className="mx-auto w-[90%] py-8 grid grid-cols-2 gap-8">
              <div aria-hidden className="text-2xl font-semibold text-[#274760]">Wat bieden wij</div>
              <ul className="grid gap-3 text-lg">
                <li><LinkItem href="/">rTMS behandeling (uitleg & werking)</LinkItem></li>
                <li><LinkItem href="/depressie-behandeling">rTMS bij depressie</LinkItem></li>
                <li><LinkItem href="/onze-werkwijze">Protocol & sessies</LinkItem></li>
                <li><LinkItem href="/eeg-scan">EEG-scan</LinkItem></li>
                <li><LinkItem href="/neurofeedback">Neurofeedback</LinkItem></li>
              </ul>
            </div>
          </div>
        )}

        {/* Over ons */}
        {openMenu === "over" && (
          <div className="absolute inset-x-0 top-20 bg-white shadow-xl border-t">
            <div className="mx-auto w-[90%] py-8 grid grid-cols-2 gap-8">
              <div aria-hidden className="text-2xl font-semibold text-[#274760]">Over ons</div>
              <ul className="grid gap-3 text-lg">
                <li><LinkItem href="/ons-team">Ons team</LinkItem></li>
                <li><LinkItem href="/onze-werkwijze">Onze werkwijze</LinkItem></li>
                <li><LinkItem href="/blog">Nieuws & blog</LinkItem></li>
                <li><LinkItem href="/vestigingen">Locaties Heiloo & Volendam</LinkItem></li>
              </ul>
            </div>
          </div>
        )}

        {/* Hulp */}
        {openMenu === "hulp" && (
          <div className="absolute inset-x-0 top-20 bg-white shadow-xl border-t">
            <div className="mx-auto w-[90%] py-8 grid grid-cols-2 gap-8">
              <div aria-hidden className="text-2xl font-semibold text-[#274760]">Hulp nodig?</div>
              <ul className="grid gap-3 text-lg">
                <li><LinkItem href="/">rTMS behandeling (overzicht)</LinkItem></li>
                <li><LinkItem href="/depressie-behandeling">Behandeling bij depressie</LinkItem></li>
                <li><LinkItem href="/faq">Veelgestelde vragen</LinkItem></li>
                <li><LinkItem href="/afspraak-maken">Afspraak inplannen</LinkItem></li>
              </ul>
            </div>
          </div>
        )}

        {/* Locaties */}
        {openMenu === "locaties" && (
          <div className="absolute inset-x-0 top-20 bg-white shadow-xl border-t">
            <div className="mx-auto w-[90%] py-8 grid grid-cols-2 gap-8">
              <div aria-hidden className="text-2xl font-semibold text-[#274760]">Locaties</div>
              <ul className="grid gap-3 text-lg">
                <li><LinkItem href="/vestigingen">Heiloo — Kennemerstraatweg 464 (unit 1.03)</LinkItem></li>
                <li><LinkItem href="/vestigingen">Volendam — Heideweg 1B (Gezondheidscentrum)</LinkItem></li>
                <li><LinkItem href="/afspraak-maken">Intake plannen</LinkItem></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
