import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Nederland from "@/public/nederland.png"

const Locations = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col md:flex-row items-center gap-8">
      {/* Left Section: Text and Button */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Locaties van onze klinieken voor het behandelen van depressie en rTMS.
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Momenteel heeft rTMS kliniek 2 verschillende vestigingen in
          Nederland.
        </p>
        <a
          href="/vestigingen"
          className="mt-6 inline-flex items-center gap-3 font-semibold hover:underline text-lg"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7ed957]">
            <FiArrowUpRight className="w-6 h-6" />
          </div>
          Vind een vestiging
        </a>
      </div>

      {/* Right Section: Map */}
      <div className="flex-1 relative">
        {/* Map */}
        <Image
          src={Nederland} // Pas dit pad aan naar jouw kaartafbeelding
          alt="Netherlands Map"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </div>
  );
};


export default Locations;
