import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import InfoCards from "@/components/InfoCards";
import Locations from "@/components/Locations";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Metadata geoptimaliseerd voor SEO: de domeinnaam bevat al het hoofdzoekwoord,
// dus focus op longtails en brede dekking.
export const metadata: Metadata = {
  title:
    "rTMS Behandeling in Nederland | Veilig & Effectief bij Depressie en Angst",
  description:
    "Ontdek alles over rTMS behandeling: een veilige, pijnloze en wetenschappelijk bewezen therapie bij depressie, angst en OCD. Lees hoe rTMS werkt, de resultaten, kosten en ervaringen.",
  authors: [{ name: "Ruud Kortekaas" }],
  robots: { index: true, follow: true },
  metadataBase: new URL("https://rtms-behandeling.nl"),
  alternates: {
    canonical: "https://rtms-behandeling.nl",
  },
  openGraph: {
    title:
      "rTMS Behandeling in Nederland – Uitleg, Werking, Effectiviteit & Kosten",
    description:
      "Lees alles over rTMS behandeling: niet-invasief, veilig en effectief bij depressie, angst en OCD. Inclusief informatie over werking, effectiviteit, kosten, bijwerkingen en ervaringen.",
    url: "https://rtms-behandeling.nl",
    siteName: "rTMS behandeling Nederland",
    type: "article",         
    authors: ["Ruud Kortekaas"],
    images: [
      {
        url: "https://rtms-behandeling.nl/rtms.jpg",
        width: 1200,
        height: 630,
        alt: "rTMS behandeling zonder medicatie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "rTMS Behandeling: effectiviteit, werking & kosten | rTMS behandeling NL",
    description:
      "Ontdek hoe rTMS werkt, voor wie het geschikt is en wat de effectiviteit, kosten, bijwerkingen en ervaringen zijn. Veilig en medicatievrij.",
    images: ["https://rtms-behandeling.nl/rtms.jpg"],
  },
};


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero bevat de enige H1 van deze pagina */}
      <Hero />
      {/* Navigatiekaarten of USP-kaarten (als aanwezig) */}
      <InfoCards />

      {/* WAT IS RTMS */}
      <section
        aria-labelledby="wat-is-rtms"
        className="relative flex flex-col md:flex-row items-stretch mx-auto rounded-3xl overflow-hidden mt-12 w-[90%] gap-4 md:gap-16 scroll-mt-24"
      >
        {/* Afbeelding links */}
        <div className="w-full md:w-1/2 flex justify-center items-stretch">
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
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
            Wat is rTMS behandeling?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            rTMS staat voor{" "}
            <strong>repetitieve Transcraniële Magnetische Stimulatie</strong>.
            Het is een geavanceerde, niet-invasieve behandelmethode waarbij
            specifieke hersengebieden die betrokken zijn bij stemming en
            emoties worden gestimuleerd met magnetische pulsen. Deze methode
            wordt wereldwijd toegepast bij{" "}
            <strong>
              therapieresistente depressie, angststoornissen en
              obsessief-compulsieve stoornis (OCD)
            </strong>
            .
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Anders dan bij medicatie wordt er <strong>geen verdoving</strong>{" "}
            toegepast en er is geen hersteltijd nodig. De sessies zijn
            volledig <strong>pijnloos</strong> en u kunt daarna direct uw
            dagelijkse activiteiten hervatten. Voor meer diepgaande uitleg kunt
            u ook terecht op de pagina{" "}
            <Link
              href="/wat-is-rtms-behandeling"
              className="underline underline-offset-4 font-semibold"
            >
              wat is rTMS?
            </Link>
            .
          </p>
          <Link href="/afspraak-maken">
            <span className="inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
              Intake inplannen
            </span>
          </Link>
        </div>
      </section>

     <section
  aria-labelledby="ruud-kortekaas"
  className="relative flex flex-col md:flex-row-reverse items-center mx-auto rounded-3xl overflow-hidden mt-12 w-[90%] gap-8 md:gap-16 scroll-mt-24"
>
  {/* Afbeelding rechts (kleiner formaat) */}
  <div className="w-full md:w-1/2 flex justify-center items-center">
    <Image
      src="/ruudkortekaas.jpg"
      alt="Dr. Ruud Kortekaas neurowetenschapper"
      width={450}
      height={450}
      className="rounded-2xl object-contain shadow-lg"
      title="Dr. Ruud Kortekaas - onderzoek naar rTMS"
    />
  </div>

  {/* Tekst links */}
  <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
    <h2
      id="ruud-kortekaas"
      className="text-4xl font-bold text-gray-900 mb-4"
    >
      Over dr. Ruud Kortekaas
    </h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Dr. Ruud Kortekaas (PhD) is neurowetenschapper en expert op het gebied
      van <strong>neuromodulatie en rTMS</strong>. Na zijn promotieonderzoek
      aan de Universiteit Leiden werkte hij onder meer aan het
      <strong> Leids Universitair Medisch Centrum (LUMC)</strong> en de
      <strong> University of Oxford</strong>. Zijn werk richt zich op de
      wisselwerking tussen hersenactiviteit, stemming en gedrag.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-4">
      Binnen Neo Clinics is hij verantwoordelijk voor de wetenschappelijke
      onderbouwing en innovatie van de rTMS-behandelingen. Met zijn
      achtergrond in fundamenteel en klinisch onderzoek vertaalt hij
      <strong> nieuwste inzichten in neuroplasticiteit</strong> naar
      praktische behandelprotocollen die patiënten daadwerkelijk verder
      helpen.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Zijn missie is helder: <em>
        evidence-based zorg toegankelijk maken voor mensen met
        therapieresistente psychische klachten
      </em>. Daarmee draagt hij bij aan de doorontwikkeling van rTMS als
      veilige en effectieve behandelmethode.
    </p>
    <Link href="/ons-team">
      <span className="inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
        Meer over ons team
      </span>
    </Link>
  </div>
</section>



      {/* HOE WERKT RTMS */}
      <section
        aria-labelledby="hoe-werkt-rtms"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="hoe-werkt-rtms"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Hoe werkt rTMS?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Tijdens een rTMS behandeling wordt een magnetische spoel op het
          hoofd geplaatst. Deze spoel zendt korte magnetische pulsen naar
          specifieke hersengebieden, zoals de{" "}
          <strong>prefrontale cortex</strong>, die vaak onderactief is bij
          depressie. De pulsen wekken kleine elektrische stromen op die de
          communicatie tussen hersencellen verbeteren en{" "}
          <strong>neuroplasticiteit</strong> bevorderen. In tegenstelling tot
          Electroconvulsietherapie (ECT) is rTMS mild, pijnloos en vereist het
          geen verdoving.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een sessie duurt gemiddeld 20 tot 40 minuten. De behandelaar stelt de
          optimale intensiteit in, gebaseerd op uw individuele{" "}
          <em>motorische drempel</em>. Wilt u stap voor stap weten wat er
          tijdens een sessie gebeurt? Lees dan ook{" "}
          <Link
            href="/hoe-werkt-rtms"
            className="underline underline-offset-4 font-semibold"
          >
            hoe werkt rTMS?
          </Link>{" "}
          of bekijk ons{" "}
          <Link
            href="/protocol-en-sessies"
            className="underline underline-offset-4 font-semibold"
          >
            protocol en sessie-overzicht
          </Link>
          .
        </p>
      </section>

      {/* EFFECTIVITEIT & VOORDELEN */}
      <section
        aria-labelledby="rtms-effectiviteit"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="rtms-effectiviteit"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Effectiviteit en voordelen van rTMS
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          rTMS is een{" "}
          <strong>wetenschappelijk onderbouwde behandeling</strong> bij
          therapieresistente depressie, angst en OCS. Diverse internationale
          studies en meta-analyses tonen aan dat rTMS bij een aanzienlijk deel
          van de patiënten leidt tot vermindering van klachten, zelfs als
          eerdere behandelingen onvoldoende effect hadden. Het wordt sinds 2024
          officieel aanbevolen in de vernieuwde{" "}
          <em>multidisciplinaire richtlijn Depressie</em>.
        </p>

        <ul className="list-disc pl-6 text-gray-800 text-lg space-y-4">
          <li>
            <strong>Bewezen effectiviteit:</strong> rTMS laat hoge{" "}
            <em>respons- en remissiepercentages</em> zien bij depressie en
            angst, vooral bij mensen die niet op medicatie reageren:contentReference[oaicite:0].
          </li>
          <li>
            <strong>Geen systemische bijwerkingen:</strong> In tegenstelling tot
            antidepressiva veroorzaakt rTMS géén gewichtstoename, vermoeidheid,
            misselijkheid of seksuele disfunctie.
          </li>
          <li>
            <strong>Niet-invasief en pijnloos:</strong> De behandeling vereist
            geen verdoving en u bent direct na elke sessie mobiel.
          </li>
          <li>
            <strong>Korte sessies:</strong> U hoeft slechts 20–40 minuten per
            keer in de stoel te zitten; vaak merkt u binnen enkele weken al
            verbetering.
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Meer weten over de wetenschappelijke onderbouwing? Bezoek onze pagina{" "}
          <Link
            href="/effectiviteit-rtms"
            className="underline underline-offset-4 font-semibold"
          >
            effectiviteit van rTMS
          </Link>
          .
        </p>
      </section>

      {/* VOOR WIE IS RTMS GESCHIKT & TRAJECT */}
      <section
        aria-labelledby="rtms-doelgroep"
        className="bg-green-950 rounded-[4rem] md:rounded-[6rem] mt-20 md:mt-24 py-12 md:py-20 w-[90%] mx-auto scroll-mt-24 text-white"
      >
        <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-16">
          <div className="w-full md:w-1/2 pr-6">
            <h2
              id="rtms-doelgroep"
              className="text-4xl font-bold text-white"
            >
              Voor wie is rTMS geschikt?
            </h2>
            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              rTMS therapie is met name geschikt voor volwassenen met een{" "}
              <strong>therapieresistente depressie</strong>,{" "}
              <strong>angststoornis</strong> of{" "}
              <strong>obsessief-compulsieve stoornis (OCS)</strong>. Het biedt
              uitkomst voor mensen die onvoldoende baat hebben gehad bij
              antidepressiva of gesprekstherapie, of hinder ondervinden van
              medicatie.
            </p>

            <p className="mt-4 text-lg text-gray-200 leading-relaxed">
              Ook als u zoekt naar een meer{" "}
              <strong>natuurlijke en medicatievrije behandeling</strong> is
              rTMS een aantrekkelijke optie. Vaak wordt de therapie gecombineerd
              met{" "}
              <Link
                href="/onze-werkwijze"
                className="underline underline-offset-4 text-[#7ed957] font-semibold"
              >
                cognitieve gedragstherapie (CGT)
              </Link>{" "}
              voor een optimaal resultaat.
            </p>

            <div className="mt-10">
              <h3 className="font-semibold text-3xl text-white">
                Behandeltraject van intake tot nazorg
              </h3>
              <ul className="mt-4 list-disc pl-6 text-lg text-gray-200 space-y-2">
                <li>
                  <strong>Intake & diagnostiek:</strong> Uitgebreide screening
                  om te bepalen of rTMS geschikt is.
                </li>
                <li>
                  <strong>Startfase:</strong> Bepaling van uw individuele
                  motorische drempel en stimulusintensiteit.
                </li>
                <li>
                  <strong>Therapieperiode:</strong> 20–30 sessies verspreid over
                  4–6 weken (vaak 5× per week).
                </li>
                <li>
                  <strong>Evaluatie & nazorg:</strong> Monitoring van uw
                  vooruitgang met eventuele onderhoudssessies of CGT.
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <Link href="/afspraak-maken">
                <span className="inline-block px-6 py-3 text-lg font-semibold text-black bg-[#7ed957] rounded-lg hover:bg-green-600 transition">
                  Intake aanvragen
                </span>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-stretch">
            <Image
              src="/rtmsbehandeling.png"
              alt="rTMS therapie"
              width={2000}
              height={2000}
              className="rounded-[3rem] md:rounded-[5rem] object-cover w-full h-full"
              title="rTMS behandeling in Nederland"
            />
          </div>
        </div>
      </section>

      {/* rTMS EN COGNITIEVE GEDRAGSTHERAPIE */}
      <section
        aria-labelledby="rtms-cgt"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="rtms-cgt"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          rTMS in combinatie met Cognitieve Gedragstherapie (CGT)
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De combinatie van rTMS en{" "}
          <Link
            href="/onze-werkwijze"
            className="underline underline-offset-4 font-semibold"
          >
            cognitieve gedragstherapie
          </Link>{" "}
          biedt een krachtig traject. rTMS herstelt de{" "}
          <strong>biologische balans</strong> in de hersenen, terwijl CGT helpt
          om <strong>negatieve denkpatronen</strong> en gedrag te doorbreken.
          Volgens de nieuwste richtlijnen (meivernieuwing 2024) wordt deze
          combinatie aanbevolen voor een duurzaam herstel:contentReference[oaicite:1].
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
          Biologisch én psychologisch herstel
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          rTMS activeert hersengebieden die bij depressie onderactief zijn, wat
          leidt tot verbetering van stemming, motivatie en energie. CGT richt
          zich op het herkennen en doorbreken van hardnekkige denkpatronen. De
          synergie tussen deze twee behandelingen vergroot de kans op blijvend
          herstel.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-4 mb-2">
          Onderbouwd door richtlijnen
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          De vernieuwde multidisciplinaire richtlijn Depressie (mei 2024)
          benoemt rTMS als effectieve behandeling, vooral in combinatie met
          psychotherapie. Dit officiële advies onderstreept de waarde van
          rTMS&nbsp;in combinatie met CGT voor therapieresistente depressie en
          dwangstoornissen.
        </p>
      </section>

      {/* KOSTEN & VERGOEDING */}
      <section
        aria-labelledby="rtms-kosten"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="rtms-kosten"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Kosten & vergoeding van rTMS
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          De kosten van een rTMS behandelingstraject kunnen variëren, afhankelijk
          van het aantal sessies en de intensiteit. Veel zorgverzekeraars
          vergoeden rTMS gedeeltelijk of volledig bij therapieresistente
          depressie of angst. Controleer uw polisvoorwaarden of neem contact op
          met uw verzekeraar.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Wij informeren u graag persoonlijk over de tarieven en mogelijkheden
          voor vergoeding. Bezoek ook onze pagina{" "}
          <Link
            href="/kosten"
            className="underline underline-offset-4 font-semibold"
          >
            kosten rTMS
          </Link>{" "}
          en{" "}
          <Link
            href="/vergoeding"
            className="underline underline-offset-4 font-semibold"
          >
            vergoeding rTMS
          </Link>{" "}
          voor meer details.
        </p>
      </section>

      {/* BIJWERKINGEN & VEILIGHEID */}
      <section
        aria-labelledby="rtms-bijwerkingen"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="rtms-bijwerkingen"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Bijwerkingen en veiligheid
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een rTMS behandeling is in de meeste gevallen veilig en goed te
          verdragen. Omdat er geen medicatie wordt gebruikt, komen veel
          bijwerkingen van antidepressiva zoals gewichtstoename, vermoeidheid of
          maag-darmklachten niet voor. De meest voorkomende bijwerkingen zijn
          tijdelijk en mild.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
          Meest voorkomende bijwerkingen
        </h3>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>
            <strong>Lichte hoofdpijn:</strong> Trekt meestal binnen enkele uren
            weg; een paracetamol kan voldoende zijn.
          </li>
          <li>
            <strong>Tintelend gevoel of tikkend geluid:</strong> Door de
            magnetische pulsen kunt u een tikje of kloppend gevoel ervaren op
            de huid.
          </li>
          <li>
            <strong>Kleine spiertrekkingen:</strong> Soms in het gezicht of
            ooglid; verdwijnen na de sessie.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-2">
          Ernstige bijwerkingen zijn zeer zeldzaam
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Er is een klein risico op een epileptische aanval (minder dan 0,1%).
          Dit risico wordt geminimaliseerd via een voorafgaande{" "}
          <strong>medische screening</strong>. Contra-indicaties zoals recente
          epilepsie of metalen implantaten worden altijd besproken voor de
          start.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          Tijdens elke sessie is er een rTMS-specialist aanwezig en wordt de
          stimulatie aangepast aan uw persoonlijke drempel. Uw veiligheid staat
          voorop. Lees meer op onze pagina{" "}
          <Link
            href="/bijwerkingen-en-veiligheid"
            className="underline underline-offset-4 font-semibold"
          >
            bijwerkingen & veiligheid
          </Link>
          .
        </p>
      </section>

      {/* ERVARINGEN */}
      <section
        aria-labelledby="rtms-ervaringen"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="rtms-ervaringen"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Ervaringen van patiënten
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Veel mensen hebben dankzij rTMS hun leven teruggevonden: meer
          energie, een betere stemming en een hernieuwde zin in het dagelijks
          leven. Lees op onze pagina{" "}
          <Link
            href="/ervaringen"
            className="underline underline-offset-4 font-semibold"
          >
            ervaringen
          </Link>{" "}
          persoonlijke verhalen van cliënten die u zijn voorgegaan. Hoewel
          resultaten per persoon verschillen, geeft het een goed beeld van wat
          u kunt verwachten.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bent u benieuwd of rTMS ook voor u de oplossing kan zijn? Neem
          vrijblijvend contact met ons op voor een intakegesprek.
        </p>
      </section>

      {/* PRAKTISCHE INFORMATIE */}
      <section
        aria-labelledby="praktische-info"
        className="w-[90%] mx-auto mt-20 scroll-mt-24"
      >
        <h2
          id="praktische-info"
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Praktische informatie
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Een standaard rTMS traject omvat gemiddeld 20–30 sessies over 4–6
          weken (meestal 5 sessies per week). Een sessie duurt 20–40 minuten.
          Na de intake kunt u vaak binnen enkele dagen starten. U hoeft in de
          meeste gevallen niet te stoppen met uw huidige medicatie; overleg dit
          altijd met uw arts of psychiater.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Heeft u vragen over de praktische kant van rTMS, vergoeding of
          planning? Neem dan gerust{" "}
          <Link
            href="/afspraak-maken"
            className="underline underline-offset-4 font-semibold"
          >
            contact
          </Link>{" "}
          met ons op of bekijk onze pagina{" "}
          <Link
            href="/faq"
            className="underline underline-offset-4 font-semibold"
          >
            FAQ
          </Link>{" "}
          voor veelgestelde vragen.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <div className="w-[90%] mt-20 mx-auto md:mt-32 rounded-3xl scroll-mt-24">
        <div className="py-16 bg-green-950 my-12 w-full mx-auto rounded-[4rem] text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Klaar om de volgende stap te zetten?
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
            Onze gespecialiseerde behandelaars staan klaar om samen met u te kijken
            of rTMS voor u geschikt is. Neem vandaag nog contact op voor een
            intakegesprek of meer informatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken">
              <Button className="mt-6 px-6 py-3 bg-[#7ed957] text-black text-lg rounded-lg shadow-md hover:bg-green-500 transition-all">
                Intakegesprek plannen
              </Button>
            </Link>
            <Link href="/vestigingen">
              <Button className="mt-6 px-6 py-3 bg-[#7ed957] text-lg text-black rounded-lg shadow-md hover:bg-green-500 transition-all">
                Locaties bekijken
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Veelgestelde vragen */}
      <FaqSection />

      {/* Locaties / vestigingen */}
      <Locations />
    </div>
  );
}
