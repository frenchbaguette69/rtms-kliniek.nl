import Locations from "@/components/Locations";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Onze vestigingen | rtms behandeling",
  description: "",
};

const page = () => {
  return (
    <div>
      <div className=" container mt-16">
        <h1 className="text-5xl font-bold">Onze vestigingen</h1>
        <div className="mt-5 text-lg">
          <p>
            Hieronder staan de vestigingen waar wij jouw kunnen ontvangen voor
            meerdere
          </p>
          <Link href="/behandelingen">
            <p className="font-bold">behandelingen</p>
          </Link>
        </div>
        <Locations />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-5">
        <Link href="https://maps.app.goo.gl/RpZ6n1CTXm9wRCoaA">
        <div className="py-8 px-4 bg-black rounded-2xl text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">
              Kennemerstraatweg 464, <br /> Heiloo
              </h2>

              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7ed957] text-black">
                <FiArrowUpRight className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-white">klik hierop voor navigatie</p>
            </div>
          </div>
          </Link>
          <Link href="https://maps.app.goo.gl/FqvuXcg3x5kFrjmG6">
          <div className="py-8 px-4 bg-black rounded-2xl text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-semibold">
                Heideweg 1B, Volendam Dijklander ziekenhuis
              </h2>

              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#7ed957] text-black">
                <FiArrowUpRight className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-white">klik hierop voor navigatie</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
