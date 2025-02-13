import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Locations from "@/components/Locations";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoCards />

      {/* rTMS Behandeling Sectie */}
      <div className="relative flex flex-col md:flex-row items-stretch mx-auto rounded-3xl overflow-hidden mt-12 w-[90%] gap-4 md:gap-16">
        {/* Linkerkant: Afbeelding */}
        <div className="w-full md:w-1/2 flex justify-center items-stretch">
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="rTMS behandeling"
            width={2000}
            height={2000}
            className="h-full w-full object-cover rounded-3xl"
            title="rTMS behandeling bij rTMS kliniel"
          />
        </div>

        {/* Rechterkant: Content */}
        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-4xl font-bold text-gray-900">
            Wat is een rTMS Behandeling en Hoe Werkt Het?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            <strong>Repetitieve Transcraniële Magnetische Stimulatie (rTMS)</strong> is een innovatieve en niet-invasieve behandelmethode voor aandoeningen zoals depressie, angststoornissen en OCD. Door middel van magnetische pulsen stimuleert rTMS specifieke hersengebieden die verantwoordelijk zijn voor stemming en emoties.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Hoe Werkt rTMS?</h3>
          <p className="mt-4 text-lg text-gray-600">
            Tijdens een rTMS behandeling wordt een elektromagnetische spoel op de hoofdhuid geplaatst. Deze spoel zendt gecontroleerde magnetische pulsen uit die de hersenactiviteit stimuleren en de communicatie tussen neuronen verbeteren. Dit helpt om symptomen van depressie en andere psychische aandoeningen te verminderen.
          </p>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Voordelen van rTMS Therapie</h3>
          <ul className="mt-4 text-lg text-gray-600 list-disc list-inside">
            <li><strong>Klinisch bewezen effectiviteit</strong> bij depressie en angst</li>
            <li><strong>Geen medicatie nodig</strong> en geen ernstige bijwerkingen</li>
            <li><strong>Pijnloos en niet-invasief</strong>, geen verdoving vereist</li>
            <li><strong>Sessies van slechts 20-30 minuten</strong>, geen lange hersteltijd</li>
          </ul>
          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Is rTMS Geschikt Voor Jou?</h3>
          <p className="mt-4 text-lg text-gray-600">
            rTMS is een ideale behandelmethode voor mensen met een **therapieresistente depressie, angststoornis of OCD**, die niet goed reageren op medicatie of last hebben van bijwerkingen van antidepressiva.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Wil je weten of rTMS therapie jou kan helpen? Lees meer over de behandeling en plan een intake.
          </p>
          <Link href="/rtms-behandeling">
            <span className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
              rTMS behandeling inplannen
            </span>
          </Link>
        </div>
      </div>

<div className="bg-green-950 rounded-[4rem] md:rounded-[6rem] mt-8 md:mt-24 py-10 md:py-16 w-[90%] mx-auto">
  <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
    {/* Linkerkant: Tekst (1/2 van het scherm) */}
    <div className="w-full md:w-1/2 pr-6">
      <h2 className="text-4xl font-bold text-white">
        rTMS Behandeling: Effectieve Therapie bij Depressie en Angst
      </h2>
      <p className="mt-2 text-lg text-gray-200">
        <strong>Repetitieve Transcraniële Magnetische Stimulatie (rTMS)</strong> 
        is een innovatieve, niet-invasieve behandelmethode voor **depressie, angststoornissen en OCD**. 
        Deze wetenschappelijk bewezen therapie gebruikt magnetische pulsen om de hersenactiviteit te verbeteren 
        en helpt bij **therapieresistente depressie**, zonder de bijwerkingen van medicatie.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-white">Hoe Werkt een rTMS Behandeling?</h2>
      <p className="mt-2 text-lg text-gray-200">
        Tijdens een <strong>rTMS behandeling</strong> wordt een elektromagnetische spoel op de hoofdhuid geplaatst. 
        Deze spoel genereert precieze magnetische pulsen die de neurale activiteit stimuleren in hersengebieden 
        die betrokken zijn bij stemming en emotie. Dit bevordert herstel en vermindert klachten bij psychische aandoeningen.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-white">Voordelen van rTMS Therapie</h2>
      <ul className="mt-2 text-lg text-gray-200 list-disc list-inside">
        <li><strong>Klinisch bewezen effectiviteit</strong> bij depressie en angststoornissen</li>
        <li><strong>Geen medicatie nodig</strong> en dus geen bijwerkingen zoals gewichtstoename of vermoeidheid</li>
        <li><strong>Pijnloos en niet-invasief</strong>, geen verdoving of hersteltijd nodig</li>
        <li><strong>Sessies van slechts 20-30 minuten</strong> met langdurige resultaten</li>
        <li><strong>Snelle verbetering</strong>: Veel patiënten merken al na enkele sessies effect</li>
      </ul>

      <div className="mt-12">
        <a href="/rtms-behandeling" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
          meer over rTMS behandeling
        </a>
      </div>
    </div>

    {/* Rechterkant: Afbeelding (1/2 van het scherm) */}
    <div className="w-full md:w-1/2 flex justify-center items-stretch">
      <Image
        src="/rtmsbehandeling.png"
        alt="rTMS Behandeling bij rTMS kliniek"
        width={2000}
        height={2000}
        className="rounded-[3rem] md:rounded-[5rem] object-cover w-full h-full"
        title="rTMS behandeling"
      />
    </div>
  </div>
</div>





      <Locations />
    </div>
  );
}
