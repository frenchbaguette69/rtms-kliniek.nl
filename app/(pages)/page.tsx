import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Locations from "@/components/Locations";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "rTMS Behandeling bij Depressie en Angst | rTMS Kliniek Nederland",
  description:
    "Effectieve rTMS behandeling voor depressie, angst en OCD. Geen medicatie nodig, wetenschappelijk bewezen. Plan direct een intake bij onze gespecialiseerde kliniek.",
  keywords: [
    "rTMS behandeling",
    "rTMS therapie",
    "therapieresistente depressie",
    "alternatief voor antidepressiva",
    "depressie zonder medicatie",
    "OCD behandeling",
    "angststoornis therapie"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false
  },
  metadataBase: new URL("https://rtms-kliniek.nl"),
  alternates: {
    canonical: "https://rtms-kliniek.nl/rtms-behandeling"
  },
  openGraph: {
    title: "rTMS Behandeling bij Depressie en Angst | rTMS Kliniek Nederland",
    description:
      "rTMS is een bewezen effectieve behandeling bij depressie en angst. Medicatievrij en zonder bijwerkingen. Plan nu een intake.",
    url: "https://rtms-kliniek.nl/rtms-behandeling",
    siteName: "rTMS Kliniek Nederland",
    type: "website",
    images: [
      {
        url: "https://rtms-kliniek.nl/rtms.jpg",
        width: 1200,
        height: 630,
        alt: "rTMS behandeling zonder medicatie"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "rTMS Behandeling bij Depressie | rTMS Kliniek Nederland",
    description:
      "Effectieve, medicatievrije behandeling voor depressie en angst. Zonder bijwerkingen. Bekijk of rTMS iets voor u is.",
    images: ["https://rtms-kliniek.nl/rtms.jpg"]
  }
};


export default function Home() {
  return (
    <div>
      <Hero />
      <InfoCards />

      {/* rTMS Behandeling Introductie */}
      <section
  aria-labelledby="wat-is-rtms"
  className="relative flex flex-col md:flex-row items-stretch mx-auto rounded-3xl overflow-hidden mt-12 w-[90%] gap-4 md:gap-16 scroll-mt-24"
>
  {/* Afbeelding links */}
  <div className="w-full md:w-1/2 flex justify-center items-stretch">
    <Image
      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="rTMS therapie bij depressie"
      width={2000}
      height={2000}
      className="h-full w-full object-cover rounded-3xl"
      title="rTMS behandeling zonder medicatie"
    />
  </div>

  {/* Tekst rechts */}
  <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
    <h2
      id="wat-is-rtms"
      className="text-4xl font-bold text-gray-900 mb-4"
    >
      Wat is een rTMS Behandeling?
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      rTMS staat voor <strong>repetitieve Transcraniële Magnetische Stimulatie</strong>,
      een geavanceerde, niet-invasieve behandelmethode voor mentale aandoeningen zoals
      <strong> depressie, angststoornissen en obsessief-compulsieve stoornis (OCD)</strong>.
      Tijdens de behandeling worden met behulp van een magnetische spoel specifieke
      hersengebieden geactiveerd die betrokken zijn bij stemming en emoties.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Deze therapie is ideaal voor mensen die niet of onvoldoende reageren op medicatie,
      of die juist hinder ondervinden van de bijwerkingen van antidepressiva. rTMS is
      volledig <strong>pijnloos</strong>, vereist geen verdoving en laat u na de sessie
      direct uw dagelijkse activiteiten hervatten.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Dankzij tientallen wetenschappelijke studies is rTMS wereldwijd erkend als een
      <strong> veilige en effectieve behandeling bij therapieresistente psychische klachten</strong>.
      Ook in Nederland wordt rTMS steeds vaker voorgeschreven door psychiaters en
      toegepast in gespecialiseerde klinieken.
    </p>
    <Link href="/rtms-behandeling">
      <span className="inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
        rTMS behandeling inplannen
      </span>
    </Link>
  </div>
</section>


      {/* Voor Wie */}
      <section
  aria-labelledby="rtms-doelgroep"
  className="bg-green-950 rounded-[4rem] md:rounded-[6rem] mt-8 md:mt-24 py-10 md:py-16 w-[90%] mx-auto scroll-mt-24"
>
  <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
    <div className="w-full md:w-1/2 pr-6">
      <h2 id="rtms-doelgroep" className="text-4xl font-bold text-white">
        Voor Wie is rTMS Geschikt?
      </h2>
      <p className="mt-4 text-lg text-gray-200 leading-relaxed">
        rTMS therapie is met name geschikt voor volwassenen met een{" "}
        <strong>therapieresistente depressie</strong>,{" "}
        <strong>angststoornis</strong> of{" "}
        <strong>obsessief-compulsieve stoornis (OCS)</strong>. Het biedt een
        oplossing voor mensen die onvoldoende baat hebben gehad bij traditionele
        behandelingen zoals antidepressiva of gesprekstherapie, of die te maken
        hebben gehad met bijwerkingen van medicatie zoals vermoeidheid,
        gewichtstoename of emotionele vlakheid.
      </p>

      <p className="mt-4 text-lg text-gray-200 leading-relaxed">
        Ook voor cliënten die op zoek zijn naar een meer{" "}
        <strong>natuurlijke en medicatievrije behandeling</strong> vormt rTMS
        een waardevolle optie. Onze ervaring leert dat juist deze doelgroep
        vaak snel baat heeft bij de biologische hersenstimulatie in combinatie
        met cognitieve gedragstherapie.
      </p>

      <div className="mt-10">
        <h3 className="font-semibold text-3xl text-white">
          Behandeltraject in Stappen
        </h3>
        <ul className="mt-4 list-disc pl-6 text-lg text-gray-200 space-y-2">
          <li>
            <strong>Intake & diagnostiek:</strong> Een uitgebreide screening om te
            bepalen of rTMS bij uw klachten past
          </li>
          <li>
            <strong>Startfase:</strong> Bepaling van de juiste intensiteit van
            stimulatie op basis van uw individuele drempelwaarde
          </li>
          <li>
            <strong>Therapieperiode:</strong> 20 tot 30 sessies verspreid over 4
            tot 6 weken (meestal 5 keer per week)
          </li>
          <li>
            <strong>Evaluatie & nazorg:</strong> We monitoren uw vooruitgang en
            plannen eventueel onderhoudsbehandelingen of CGT-sessies
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <Link href="/rtms-behandeling">
          <span className="inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
            Meer over rTMS behandeling
          </span>
        </Link>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-stretch">
      <Image
        src="/rtmsbehandeling.png"
        alt="rTMS therapie bij depressie of angst"
        width={2000}
        height={2000}
        className="rounded-[3rem] md:rounded-[5rem] object-cover w-full h-full"
        title="rTMS behandeling in Nederland"
      />
    </div>
  </div>
</section>


      {/* Voordelen */}
      <section
  aria-labelledby="rtms-voordelen"
  className="w-[90%] mx-auto mt-20 scroll-mt-24"
>
  <h2
    id="rtms-voordelen"
    className="text-4xl font-bold text-gray-900 mb-6"
  >
    Voordelen van rTMS Therapie
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    Repetitieve Transcraniële Magnetische Stimulatie (rTMS) is een innovatieve,
    wetenschappelijk onderbouwde behandelmethode bij therapieresistente
    depressie, angst en obsessieve-compulsieve stoornis (OCD). Voor veel
    patiënten biedt rTMS een effectief en duurzaam alternatief voor traditionele
    behandelingen zoals antidepressiva en langdurige gesprekstherapie.
  </p>

  <ul className="list-disc pl-6 text-gray-800 text-lg space-y-4">
    <li>
      <strong>Bewezen effectiviteit bij depressie en angststoornissen:</strong>{" "}
      Talrijke klinische studies en meta-analyses tonen aan dat rTMS bij een
      aanzienlijk deel van de patiënten leidt tot vermindering van klachten,
      zelfs als eerdere behandelingen onvoldoende effect hadden.
    </li>
    <li>
      <strong>Geen systemische bijwerkingen:</strong> In tegenstelling tot
      medicatie veroorzaakt rTMS géén gewichtstoename, vermoeidheid, misselijkheid
      of seksuele disfunctie. Het is daardoor zeer geschikt voor mensen die gevoelig
      zijn voor medicamenteuze behandelingen.
    </li>
    <li>
      <strong>Niet-invasief en zonder verdoving:</strong> De behandeling is volledig
      pijnloos, vereist geen verdoving of opname, en kan plaatsvinden in een
      poliklinische setting. U blijft volledig bij bewustzijn.
    </li>
    <li>
      <strong>Korte behandelsessies:</strong> Een typische sessie duurt slechts 20 tot
      40 minuten. U kunt direct daarna weer aan het werk of andere dagelijkse
      activiteiten hervatten.
    </li>
    <li>
      <strong>Snelle merkbare resultaten:</strong> Veel cliënten ervaren al binnen
      twee tot drie weken een duidelijke verbetering van hun stemming,
      concentratie en energie. Bij sommige patiënten ontstaat zelfs al na
      enkele sessies verlichting.
    </li>
  </ul>

  <p className="mt-6 text-lg text-gray-700 leading-relaxed">
    Door deze unieke voordelen wint rTMS snel aan populariteit als eersteklas
    behandeloptie voor mensen met therapieresistente psychische klachten. Het is
    veilig, effectief én gericht op blijvend herstel.
  </p>
</section>


      {/* CGT */}
      <section
  aria-labelledby="rtms-cgt"
  className="w-[90%] mx-auto mt-20 scroll-mt-24"
>
  <h2
    id="rtms-cgt"
    className="text-4xl font-bold text-gray-900 mb-6"
  >
    rTMS in Combinatie met Cognitieve Gedragstherapie (CGT)
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    De combinatie van repetitieve Transcraniële Magnetische Stimulatie (rTMS) met
    Cognitieve Gedragstherapie (CGT) biedt een krachtig en wetenschappelijk onderbouwd
    behandeltraject voor mensen met een therapieresistente depressie of
    obsessief-compulsieve stoornis (OCS). Waar rTMS zich richt op het herstellen van
    de biologische balans in de hersenen, helpt CGT om negatieve denkpatronen en
    gedragingen blijvend te doorbreken.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
    Biologisch én psychologisch herstel
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    rTMS activeert specifieke hersengebieden die bij depressie onderactief zijn,
    wat zorgt voor verbetering van stemming, motivatie en energie. Tegelijkertijd
    helpt CGT cliënten om bewuster te worden van negatieve gedachten en hier
    actief mee om te gaan. De combinatie van deze twee methoden versterkt het effect
    en vergroot de kans op langdurig herstel.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
    Ondersteund door richtlijnen
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Sinds mei 2024 wordt rTMS, in combinatie met psychotherapie, officieel
    aanbevolen in de vernieuwde multidisciplinaire richtlijn Depressie.
    De richtlijn erkent de effectiviteit van CGT bij het duurzaam verbeteren van
    copingmechanismen, terwijl rTMS een biologisch startpunt biedt om uit een
    depressieve of dwangmatige toestand te komen.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Onze ervaring leert dat cliënten die beide behandelingen parallel volgen,
    sneller én dieper herstellen. De synergie tussen rTMS en CGT biedt niet alleen
    verlichting van symptomen, maar ook handvatten om terugval te voorkomen en weer
    grip te krijgen op het dagelijks leven.
  </p>
</section>


      {/* Bijwerkingen */}
      <section
  aria-labelledby="rtms-bijwerkingen"
  className="w-[90%] mx-auto mt-20 scroll-mt-24"
>
  <h2 id="rtms-bijwerkingen" className="text-4xl font-bold text-gray-900 mb-6">
    Bijwerkingen van rTMS Therapie
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Een behandeling met repetitieve Transcraniële Magnetische Stimulatie (rTMS)
    is in de meeste gevallen veilig en goed te verdragen. Omdat rTMS geen
    medicijnen vereist, ontbreken veel van de klassieke bijwerkingen van
    antidepressiva zoals gewichtstoename, vermoeidheid of seksuele disfunctie.
    Toch is het belangrijk om transparant te zijn over mogelijke reacties van
    het lichaam op de behandeling.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
    Meest voorkomende bijwerkingen
  </h3>
  <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
    <li>
      <strong>Lichte hoofdpijn:</strong> Vaak ervaren na de eerste sessies. Deze
      trekt meestal binnen een paar uur vanzelf weg. Indien gewenst, kan een
      paracetamol voldoende zijn.
    </li>
    <li>
      <strong>Tintelend gevoel op de hoofdhuid:</strong> Door de magnetische
      stimulatie kunt u een licht tikkend of kloppend gevoel ervaren op de
      huid. Dit is normaal en onschadelijk.
    </li>
    <li>
      <strong>Spierschokjes:</strong> Sommige mensen merken kleine spiertrekkingen
      in het gezicht of een ooglid. Dit stopt direct na de sessie.
    </li>
    <li>
      <strong>Gevoeligheid van de huid:</strong> De plek waar de spoel wordt geplaatst
      kan wat gevoelig zijn bij aanraking, vooral bij intensieve schema's.
    </li>
  </ul>

  <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
    Ernstige bijwerkingen: zeer zeldzaam
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    In uitzonderlijke gevallen (minder dan 0,1%) kan rTMS een epileptische aanval
    opwekken. Dit risico is het hoogst bij mensen met een epilepsiegeschiedenis,
    hersenletsel of specifieke neurologische aandoeningen. Om uw veiligheid te
    garanderen, voeren wij vooraf een medische screening uit en volgen wij de
    internationale richtlijnen van onder meer de <em>Clinical TMS Society</em>.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
    Geen systemische bijwerkingen
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Omdat rTMS een lokale hersenstimulatie is, zijn er geen bijwerkingen zoals
    maag-darmklachten, hormonale schommelingen of sufheid. Hierdoor is rTMS
    met name geschikt voor mensen die gevoelig zijn voor medicatie, of die
    eerder negatieve reacties hebben gehad op antidepressiva.
  </p>

  <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
    Begeleiding en veiligheid staan voorop
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed">
    Tijdens elke sessie wordt u begeleid door een ervaren behandelaar. De
    stimulatie wordt individueel afgestemd en gecontroleerd op basis van uw
    drempelwaarde en reactie. We werken volgens vastgestelde medische protocollen
    en registreren alle reacties nauwkeurig. Uw veiligheid is bij ons altijd de
    hoogste prioriteit.
  </p>
</section>


      {/* Ervaringen */}
      <section
  aria-labelledby="rtms-ervaringen"
  className="w-[90%] mx-auto mt-20 scroll-mt-24"
>
  <h2
    id="rtms-ervaringen"
    className="text-4xl font-bold text-gray-900 mb-6"
  >
    Ervaringen van Patiënten met rTMS Behandeling
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Al duizenden mensen in Nederland hebben gekozen voor een rTMS behandeling
    als oplossing voor hun therapieresistente depressie, angststoornis of
    obsessief-compulsieve stoornis (OCS). De resultaten zijn vaak
    levensveranderend: van meer energie en levenslust tot het hervinden van
    structuur, werkvermogen en sociale connectie.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Hieronder leest u een selectie van persoonlijke verhalen van cliënten die
    het traject hebben doorlopen. Deze ervaringsverhalen bieden waardevolle
    inzichten voor wie overweegt een rTMS therapie te starten. Want hoewel
    iedereen uniek is, delen veel cliënten hetzelfde gevoel: “Ik heb mijn leven
    terug.”
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Wilt u weten of rTMS ook voor u geschikt is? Neem contact met ons op voor
    een vrijblijvende intake of bekijk de <a href="/ervaringen" className="text-[#7ed957] font-semibold hover:underline">patiëntverhalen</a>.
  </p>
</section>

      {/* Praktisch */}
      <section
  aria-labelledby="praktische-info"
  className="w-[90%] mx-auto mt-20 scroll-mt-24"
>
  <h2
    id="praktische-info"
    className="text-4xl font-bold text-gray-900 mb-6"
  >
    Praktische Informatie over het rTMS Behandelingstraject
  </h2>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Een volledig <strong>rTMS behandeltraject</strong> bestaat uit gemiddeld 20
    tot 30 sessies, verspreid over een periode van 4 tot 6 weken. De meeste
    cliënten komen 5 dagen per week naar onze kliniek. Elke sessie duurt circa{" "}
    <strong>20 tot 40 minuten</strong> en is volledig pijnloos en
    medicatievrij.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    Na een korte intake en diagnostische screening kunt u vaak{" "}
    <strong>binnen enkele dagen starten</strong>. Wij stemmen het behandelplan
    af op uw klachten, voorgeschiedenis en voorkeuren. De behandeling wordt
    altijd uitgevoerd door een gecertificeerd rTMS-specialist.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    U hoeft in de meeste gevallen <strong>niet te stoppen met uw medicatie</strong>.
    rTMS kan veilig gecombineerd worden met antidepressiva of andere
    psychofarmaca. Overleg dit altijd met uw behandelend arts of psychiater.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Heeft u vragen over de praktische kant van de behandeling, vergoeding of
    planning? Ons team staat voor u klaar. Of plan direct een{" "}
    <a
      href="/contact"
      className="text-[#7ed957] font-semibold hover:underline"
    >
      vrijblijvend intakegesprek
    </a>{" "}
    bij een van onze vestigingen.
  </p>
</section>


      {/* Afspraak CTA */}
      <div className="w-[90%] mt-16 mx-auto md:mt-32 rounded-3xl">
        <div className="py-16 bg-green-950 my-12 w-full mx-auto rounded-[4rem]">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Klaar om de volgende stap te zetten?
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
              Onze ervaren specialisten staan klaar om u te helpen met een gepersonaliseerd behandelplan. Neem vandaag nog contact op voor een intakegesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="mt-6 px-6 py-3 bg-[#7ed957] text-black text-lg rounded-lg shadow-md hover:bg-green-500 transition-all">
                  Afspraak maken
                </Button>
              </Link>
              <Link href="/locaties">
                <Button className="mt-6 px-6 py-3 bg-[#7ed957] text-lg text-black rounded-lg shadow-md hover:bg-green-500 transition-all">
                  Onze locaties bekijken
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FaqSection />
      <Locations />
    </div>
  );
}
