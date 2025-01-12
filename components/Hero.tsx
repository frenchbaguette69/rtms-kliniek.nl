import Image from "next/image";
import React from "react";
import hero from "@/public/hero.jpg";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] max-h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <Image
        src={hero}
        alt="Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      {/* Text Content */}
      <div className="absolute inset-y-0 left-0 flex flex-col justify-center text-white w-full">
        <div className="container mx-auto text-left">
          <div className="max-w-[800px]">
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
            Repetitieve Transcraniële Magnetische Stimulatie (rTMS) behandeling
            </h1>
            <p className="mt-4 text-lg md:text-xl drop-shadow-md">
              Maak een einde aan uw stoornissen of depressie. Met een rTMS behandeling van rTMS kliniek
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
