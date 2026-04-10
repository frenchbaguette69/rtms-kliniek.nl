"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function Hero({
  title = "rTMS Behandeling in Nederland",
  subtitle = `rTMS (repetitieve Transcraniële Magnetische Stimulatie) is een 
wetenschappelijk onderbouwde behandeling bij onder andere depressie en OCD. 
De therapie is niet-invasief, veilig en effectief. Ontdek hoe de behandeling werkt, 
welke resultaten mogelijk zijn en of rTMS voor jou geschikt is.`,
  imageSrc = "/images/hero_bg.jpeg",
}: HeroProps) {
  const titleLines = title.split("\n");

  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="rTMS behandeling achtergrond"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/10" />
      </div>

      {/* Content: centered left */}
      <div className="relative z-10 flex h-full container mx-auto items-center px-6 sm:px-8">
        <div className="relative max-w-4xl">
          {/* Decorative Plus */}
          <DecorativePlus />

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-semibold tracking-tight text-white drop-shadow-md [text-wrap:balance]"
          >
            <span className="block text-5xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.05]">
              {titleLines[0]}
            </span>
            {titleLines[1] && (
              <span className="block text-5xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.05]">
                {titleLines[1]}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="mt-6 text-lg text-white/90 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function DecorativePlus() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute top-1/2 -left-[120px] -translate-y-1/2 opacity-40 text-blue-400/40 blur-sm"
    >
      <FiPlus className="h-[300px] w-[300px]" />
    </div>
  );
}
