import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header
      aria-labelledby="hero-title"
      className="relative h-[calc(60vh-80px)] max-h-screen w-full overflow-hidden flex justify-center items-center scroll-mt-24"
    >
      <div className="relative w-[90%] h-full bg-white rounded-3xl overflow-hidden shadow-lg">
        {/* Achtergrondafbeelding */}
        <Image
          src="/rTMS.jpg"
          alt="rTMS behandeling bij depressie en angst"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />

        {/* Donkere overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

        {/* Tekstcontent */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-8 md:px-16 max-w-3xl">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            rTMS Behandeling bij Depressie, Angst of OCD
          </h1>

          <p className="mt-4 text-lg leading-relaxed">
            Ervaar hoe repetitieve transcraniële magnetische stimulatie (rTMS)
            zonder medicatie zorgt voor herstel bij therapieresistente
            depressie, angststoornissen of obsessieve-compulsieve stoornis.
            Wetenschappelijk bewezen, veilig en uitgevoerd door ervaren
            behandelaars.
          </p>

          <a
            href="/rtms-behandeling"
            className="mt-6 inline-block px-6 py-3 bg-[#7ed957] text-black font-semibold rounded-lg shadow-md hover:bg-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            Plan een intakegesprek
          </a>

          {/* Statistieken */}
          <div className="mt-6 flex space-x-8">
            <div>
              <p className="text-3xl font-bold">4.9</p>
              <p className="text-sm">★★★★★ Gebaseerd op 100+ klantreviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm">Jaren ervaring met rTMS therapie</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
