import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Locations from "@/components/Locations";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <NavBar />
        <Hero />
        <InfoCards />
        <div className=" container w-full border-t border-gray-500"></div>
        <Locations/>
        <div className=" container w-full border-t border-gray-500"></div>
    </div>
  );
}
