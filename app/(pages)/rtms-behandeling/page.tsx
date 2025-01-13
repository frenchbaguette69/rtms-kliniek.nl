import Image from "next/image";
import React from "react";
import rTMS from "@/public/rTMS.png";
import type { Metadata } from "next";
import RTMSInfo from "@/components/RTMSInfo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "rTMS Repetitieve Transcraniële Magnetische Stimulatie | rTMS kliniek",
  description:
    "repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een niet-invasieve behandeling die magnetische pulsen gebruikt om de activiteit in specifieke hersengebieden te beïnvloeden. Het wordt vaak ingezet bij depressie, angststoornissen, PTSS en chronische pijn.",
};

const page = () => {
  return (
    <div className="container mt-5 md:mt-20">
      <h1 className="text-center font-semibold text-2xl md:text-6xl">
        rTMS Repetitieve Transcraniële Magnetische Stimulatie behandeling
      </h1>
      <div className="mt-5 text-center">
        <p>
          <strong>rTMS</strong> (repetitieve Transcraniële Magnetische
          Stimulatie) is een niet-invasieve behandeling die magnetische pulsen
          gebruikt om de activiteit in specifieke hersengebieden te beïnvloeden.
          Het wordt vaak ingezet bij depressie, angststoornissen, PTSS en
          chronische pijn. De behandeling is veilig, heeft weinig bijwerkingen
          en kan effectief zijn wanneer medicatie onvoldoende helpt. rTMS wordt
          uitgevoerd in gespecialiseerde klinieken en biedt een hoopvolle optie
          voor veel patiënten.
        </p>
        <Link href="/contact">
          <Button className="mt-5">Afspraak maken</Button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Image src={rTMS} alt="rTMS" height={600} width={600} />
      </div>
      <div className=" container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">Wat is rTMS?</h2>
        <p>
          rTMS staat voor repetitieve Transcraniële Magnetische Stimulatie, een
          innovatieve en niet-invasieve medische behandeling die gebruikmaakt
          van magnetische velden om specifieke gebieden in de hersenen te
          stimuleren. Het wordt voornamelijk toegepast voor het behandelen van
          psychische en neurologische aandoeningen, zoals depressie,
          angststoornissen, PTSS, en chronische pijn. De behandeling werkt door
          elektrische activiteit in bepaalde hersengebieden te beïnvloeden, vaak
          in de prefrontale cortex, die betrokken is bij stemmingsregulatie.
          Door het sturen van herhaalde magnetische pulsen kan de activiteit in
          deze gebieden worden verhoogd of verlaagd, afhankelijk van de
          specifieke aandoening.
        </p>
      </div>
      <div className=" container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">Hoe werkt rTMS?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Het apparaat: rTMS maakt gebruik van een apparaat met een
            elektromagnetische spoel die op de hoofdhuid wordt geplaatst. Deze
            spoel genereert korte, krachtige magnetische pulsen.
          </li>
          <li>
            Magnetische pulsen: De magnetische pulsen dringen door de schedel en
            wekken kleine elektrische stromen op in de onderliggende
            hersengebieden. Deze stroom beïnvloedt de hersencellen (neuronen),
            waardoor hun activiteit verandert.
          </li>
          <li>
            Specifiek doelgebied: Voor de behandeling van depressie wordt
            bijvoorbeeld vaak de linker dorsolaterale prefrontale cortex
            gestimuleerd. Dit gebied is betrokken bij stemming en emotie, en
            blijkt bij mensen met een depressie vaak minder actief te zijn.
          </li>
          <li>
            Repetitieve stimulatie: Door herhaaldelijk te stimuleren over
            meerdere sessies, kan rTMS langdurige veranderingen teweegbrengen in
            de hersenactiviteit, wat leidt tot een verbeterde stemming en
            vermindering van symptomen.
          </li>
        </ul>
      </div>
      <div className=" container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">Behandelingsproces rTMS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Intake en planning:</strong> Voor de start van de
            behandeling wordt eerst een uitgebreide intake gedaan om de
            geschiktheid van rTMS te bepalen. Dit omvat vaak een medische
            geschiedenis, diagnose en doelbepaling.
          </li>
          <li>
            <strong>Behandelsessies:</strong> Een typische rTMS-behandeling
            bestaat uit meerdere sessies, vaak dagelijks over een periode van
            enkele weken. Elke sessie duurt gemiddeld 20 tot 40 minuten.
          </li>
          <li>
            <strong>Tijdens de sessie:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li>De patiënt zit comfortabel in een stoel.</li>
              <li>
                De spoel wordt nauwkeurig gepositioneerd boven het doelgebied.
              </li>
              <li>
                Magnetische pulsen worden toegediend, wat kan aanvoelen als
                lichte tikjes of een kloppend gevoel op de hoofdhuid.
              </li>
            </ul>
          </li>
          <li>
            <strong>Na de sessie:</strong> Patiënten kunnen meteen hun
            dagelijkse activiteiten hervatten, aangezien de behandeling geen
            hersteltijd vereist.
          </li>
        </ul>
      </div>
      <div className="container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">
          Indicaties en Toepassingen
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Ernstige depressie:</strong> Vooral effectief bij patiënten
            met een depressie die niet goed reageren op medicatie (zogenaamde
            therapieresistente depressie).
          </li>
          <li>
            <strong>Angststoornissen:</strong> Helpt bij het reguleren van
            hersenactiviteit die overactief is bij angststoornissen.
          </li>
          <li>
            <strong>PTSS:</strong> Vermindert symptomen door hersengebieden te
            beïnvloeden die betrokken zijn bij herinneringen en emoties.
          </li>
          <li>
            <strong>Chronische pijn:</strong> Bij aandoeningen zoals
            fibromyalgie en neuropathische pijn.
          </li>
          <li>
            <strong>Tinnitus:</strong> Kan symptomen van oorsuizen verlichten
            door specifieke hersengebieden te beïnvloeden.
          </li>
        </ul>
      </div>
      <div className="container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">Voordelen van rTMS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Niet-invasief:</strong> Geen operatie of verdoving nodig, in
            tegenstelling tot bijvoorbeeld diepe hersenstimulatie (DBS).
          </li>
          <li>
            <strong>Weinig bijwerkingen:</strong> De meest voorkomende
            bijwerkingen zijn lichte hoofdpijn of een tintelend gevoel op de
            hoofdhuid. Ernstige bijwerkingen, zoals toevallen, komen zeer zelden
            voor.
          </li>
          <li>
            <strong>Geen systemische effecten:</strong> In tegenstelling tot
            medicatie heeft rTMS geen invloed op andere organen of systemen in
            het lichaam.
          </li>
          <li>
            <strong>Effectief:</strong> Veel patiënten ervaren een aanzienlijke
            vermindering van symptomen, vooral bij depressie.
          </li>
        </ul>
      </div>
      <div className="container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">
          Mogelijke Nadelen en Beperkingen
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Tijdsinvestering:</strong> Behandelingen vereisen meerdere
            sessies over enkele weken, wat voor sommige patiënten lastig kan
            zijn.
          </li>
          <li>
            <strong>Kosten:</strong> rTMS is niet altijd volledig vergoed door
            verzekeraars, afhankelijk van de aandoening en het land.
          </li>
          <li>
            <strong>Niet effectief voor iedereen:</strong> Hoewel rTMS voor veel
            patiënten effectief is, kan het zijn dat sommige mensen geen of
            weinig baat hebben bij de behandeling.
          </li>
        </ul>
      </div>
      <div className="container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">
          Voor wie is rTMS geschikt?
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Niet goed reageren op medicatie of therapieën:</strong> rTMS
            wordt aanbevolen voor patiënten met therapieresistente aandoeningen.
          </li>
          <li>
            <strong>Geen ernstige medische contra-indicaties:</strong> Zoals een
            metalen implantaat in de schedel of een voorgeschiedenis van
            epilepsie.
          </li>
          <li>
            <strong>Op zoek naar een alternatief:</strong> Voor patiënten die
            medicatie vermijden vanwege bijwerkingen of persoonlijke voorkeuren.
          </li>
        </ul>
      </div>
      <div className="container w-full border-t border-gray-500"></div>
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-5">Conclusie</h2>
        <p>
          rTMS is een veelbelovende behandeling voor verschillende aandoeningen,
          met name therapieresistente depressie. Het biedt een veilige en
          effectieve manier om de hersenactiviteit te moduleren zonder invasieve
          ingrepen of langdurige bijwerkingen. Door voortdurende
          wetenschappelijke ontwikkelingen blijft rTMS een belangrijk hulpmiddel
          in de geestelijke gezondheidszorg en neurologie.
        </p>
      </div>
      <div className="bg-[#7ed957] p-16 rounded-3xl text-white flex-col justify-between items-center text-center">
          <h3 className="font-semibold text-3xl md:text-5xl">Contact opnemen voor een afspraak?</h3>
          <Link href="/contact">
          <Button className="mt-5">Afspraak maken</Button>
        </Link>
        </div>        

      <RTMSInfo />
    </div>
  );
};

export default page;
