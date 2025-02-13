import Image from "next/image";
import React from "react";
import hero from "@/public/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] max-h-screen w-full overflow-hidden flex justify-center items-center">
      <div className="relative w-[90%] h-full bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Hero Background Image */}
        <Image
          src={hero}
          alt="rTMS behandeling - bewezen therapie voor depressie en neurologische aandoeningen"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 md:px-16 max-w-3xl">
          <p className="flex items-center text-xl">
            <span className="mr-2">🔹 10 000+ </span> Tevreden patiënten met rTMS behandeling
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            rTMS behandeling
          </h1>
          <p className="mt-4 text-lg">
            rTMS behandeling is een veilige, niet-invasieve methode voor de behandeling van depressie en andere neurologische aandoeningen. Onze gespecialiseerde kliniek biedt wetenschappelijk onderbouwde behandelingen om uw mentale gezondheid te verbeteren.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#7ed957] text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition-all">
            rTMS behandeling inplannen
          </button>
          
          {/* Stats */}
          <div className="mt-6 flex space-x-8">
            <div>
              <p className="text-3xl font-bold">4.9</p>
              <p className="text-sm">★★★★★ Gebaseerd op klantbeoordelingen</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm">Jaren ervaring met rTMS therapie</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
