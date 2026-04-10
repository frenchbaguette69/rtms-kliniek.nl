// components/QuickNav.tsx
"use client";

import Link from "next/link";
import {
  FiBookOpen,
  FiActivity,
  FiCreditCard,
  FiShield,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";

type NavItem = {
  label: string;
  href: string;
  subLinks?: { href: string; label: string }[];
};

const NAV_ITEMS: NavItem[] = [
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
];

const iconFor = (label: string) => {
  switch (label) {
    case "Uitleg":
      return FiBookOpen;
    case "Indicaties":
      return FiActivity;
    case "Kosten":
      return FiCreditCard;
    case "Vergoeding":
      return FiShield;
    case "Ervaringen":
      return FiMessageSquare;
    case "FAQ":
      return FiHelpCircle;
    default:
      return FiBookOpen;
  }
};

export default function QuickNav() {
  const items = NAV_ITEMS.slice(0, 6);

  return (
    <section aria-labelledby="quicknav-heading" className="border-t">
      <div className="mx-auto container px-4 md:px-6 py-10">
        <h2 id="quicknav-heading" className="text-2xl md:text-3xl font-semibold">
          Snel naar
        </h2>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item) => {
            const Icon = iconFor(item.label);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border p-5 md:p-6 hover:shadow-md transition
                           min-h-[120px] flex"  // ⟵ kaart wordt flex met vaste hoogte
              >
                <div className="flex items-center"> {/* ⟵ items-center ipv items-start */}
                  <div
                    aria-hidden
                    className="rounded-xl p-3 md:p-3.5 text-[#274760] shrink-0"
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold leading-tight">
                      {item.label}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
