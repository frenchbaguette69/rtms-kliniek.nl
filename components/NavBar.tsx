"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    label: "Uitleg",
    href: "/wat-is-rtms-behandeling",
    subLinks: [
      { href: "/wat-is-rtms-behandeling", label: "Wat is rTMS?" },
      { href: "/hoe-werkt-rtms", label: "Hoe werkt rTMS?" },
      { href: "/effectiviteit-rtms", label: "Effectiviteit" },
      { href: "/bijwerkingen-en-veiligheid", label: "Bijwerkingen & veiligheid" },
      { href: "/protocol-en-sessies", label: "Protocol & sessies" },
    ],
  },
  {
    label: "Indicaties",
    href: "/rtms-bij-depressie",
    subLinks: [
      { href: "/rtms-bij-depressie", label: "Depressie" },
      { href: "/rtms-bij-ocd", label: "OCD" },
      { href: "/rtms-bij-tinnitus", label: "Tinnitus" },
    ],
  },
  { href: "/kosten", label: "Kosten" },
  { href: "/vergoeding", label: "Vergoeding" },
  { href: "/ervaringen", label: "Ervaringen" },
  { href: "/faq", label: "FAQ" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Switch background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClasses =
    "text-white hover:text-gray-200 text-[17px] leading-tight";

  return (
    <nav
      className={[
        "fixed top-0 left-0 w-full z-50 px-2 transition-colors duration-300",
        scrolled ? "bg-[#274760] shadow-md" : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 py-2 lg:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/images/logoblack.png"
              alt="rtms-behandeling.nl"
              width={180}
              height={44}
              className="h-9 sm:h-11 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((item) =>
              (item as any).subLinks ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Button
                    variant="ghost"
                    className={`font-medium flex items-center gap-1.5 transition-colors ${desktopLinkClasses} hover:bg-white/20`}
                    asChild
                  >
                    <Link href={item.href}>
                      {item.label}
                      <ChevronDown className="w-5 h-5" />
                    </Link>
                  </Button>

                  {/* Hover dropdown (wit houden voor leesbaarheid) */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-md shadow-lg transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-1">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
                      >
                        Alle {item.label.toLowerCase()}
                      </Link>
                      <div className="my-1" />
                      {(item as any).subLinks.map((sub: any) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-[15px] text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={(item as any).href}
                  href={(item as any).href}
                  className={`font-semibold transition-colors ${desktopLinkClasses}`}
                >
                  {(item as any).label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Button
            asChild
            className="hidden lg:flex bg-white text-black font-semibold text-[17px] hover:bg-gray-200 transition-colors rounded-full px-10 py-7"
          >
            <Link href="/contact">Afspraak maken</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                className="lg:hidden"
                variant="ghost"
                size="icon"
                aria-label="Menu"
              >
                <Menu className="h-8 w-8 text-white" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-80 p-0 bg-[#274760] text-white"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 sm:p-6">
                  <Image
                    src="/images/logoblack.png"
                    alt="rtms-behandeling.nl"
                    width={140}
                    height={36}
                    className="h-9 w-auto brightness-0 invert"
                  />
                </div>

                {/* Mobile Links */}
                <div className="flex-1 overflow-y-auto py-2">
                  {navLinks.map((item) =>
                    (item as any).subLinks ? (
                      <div key={item.label} className="px-4 sm:px-6 py-3">
                        <Link
                          href={item.href}
                          className="block font-semibold text-white mb-3 hover:text-gray-200 text-[17px]"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <div className="space-y-2 pl-4 border-l border-white/30">
                          {(item as any).subLinks.map((sub: any) => (
                            <Link
                              href={sub.href}
                              key={sub.href}
                              className="block py-2 text-white/80 hover:text-white transition-colors text-[15px]"
                              onClick={() => setOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={(item as any).href}
                        key={(item as any).href}
                        className="block px-4 sm:px-6 py-4 font-medium text-white hover:text-gray-200 hover:bg-white/10 transition-colors text-[17px]"
                        onClick={() => setOpen(false)}
                      >
                        {(item as any).label}
                      </Link>
                    )
                  )}
                </div>

                {/* Mobile CTA */}
                <div className="p-4 sm:p-6 bg-white">
                  <Button
                    asChild
                    className="w-full bg-white text-black hover:bg-gray-200 h-12 text-base"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Afspraak maken
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
