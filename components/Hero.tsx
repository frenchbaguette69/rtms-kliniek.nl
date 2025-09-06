import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header
      aria-labelledby="hero-title"
      className="relative w-full overflow-hidden flex justify-center items-center scroll-mt-24"
    >
      {/* Gebruik dynamische hoogte: op mobiel 60svh (stabieler op iOS), op desktop 60vh - header */}
      <div className="relative h-[60svh] md:h-[calc(60vh-80px)] max-h-screen w-[95%] md:w-[90%] bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Achtergrondafbeelding */}
        <Image
          src="/rTMS.jpg"
          alt="rTMS behandeling bij depressie en angst"
          fill
          priority
          sizes="(max-width: 768px) 95vw, 90vw"
          className="object-cover object-center"
        />

        {/* Donkere (gradient) overlay voor leesbaarheid */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 via-black/40 to-black/30" />

        {/* Tekstcontent */}
        <div className="absolute inset-0 flex flex-col justify-center text-white px-5 sm:px-8 md:px-16">
          <div className="max-w-xl sm:max-w-2xl">
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              rTMS Behandeling in Nederland
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed line-clamp-6 sm:line-clamp-none">
              rTMS (repetitieve Transcraniële Magnetische Stimulatie) is een
              <strong>
                niet-invasieve en wetenschappelijk onderbouwde therapie
              </strong>
              bij onder meer depressie en dwangklachten (OCD). De behandeling is
              <strong>veilig, effectief en pijnloos</strong>, en wordt
              uitgevoerd volgens internationale richtlijnen. Ontdek hoe rTMS
              werkt, wat je kunt verwachten qua{" "}

              , en welke mogelijkheden er zijn voor{" "}
              .
            </p>

            <a
              href="/"
              className="mt-5 sm:mt-6 inline-flex items-center justify-center px-5 sm:px-6 py-3 sm:py-3.5 bg-[#7ed957] text-black font-semibold rounded-xl shadow-md hover:bg-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7ed957] focus:ring-offset-black/20 w-full sm:w-auto"
            >
              Plan een intakegesprek
            </a>

            {/* Statistieken */}
            <div className="mt-5 sm:mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <div className="min-w-[140px]">
                <p className="text-2xl sm:text-3xl font-bold">4.9</p>
                <p className="text-xs sm:text-sm opacity-90">
                  ★★★★★ Gebaseerd op 100+ klantreviews
                </p>
              </div>
              <div className="min-w-[140px]">
                <p className="text-2xl sm:text-3xl font-bold">20+</p>
                <p className="text-xs sm:text-sm opacity-90">
                  Jaren ervaring met rTMS therapie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
