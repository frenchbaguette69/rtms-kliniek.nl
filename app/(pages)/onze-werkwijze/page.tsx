import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RTMSInfo from "@/components/RTMSInfo";

export const metadata: Metadata = {
  title: "Onze Werkwijze | rTMS Behandeling voor Depressie en Angst | rTMS Kliniek",
  description:
    "Ontdek de stapsgewijze aanpak van onze rTMS behandelingen voor depressie, angst en andere aandoeningen. Van intake tot nazorg bieden wij persoonlijke begeleiding met geavanceerde rTMS technologie.",
  openGraph: {
    title: "Onze Werkwijze | rTMS Behandeling voor Depressie en Angst | rTMS Kliniek",
    description: 
      "Ontdek hoe onze rTMS behandelingen verlopen: een persoonlijke intake, een op maat gemaakt behandelplan, en zorgvuldige begeleiding tijdens het hele traject.",
    url: "https://rtms-kliniek.nl/onze-werkwijze",
    siteName: "rTMS kliniek",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
        width: 1200,
        height: 630,
        alt: "rTMS behandelproces"
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onze Werkwijze | rTMS Behandeling voor Depressie en Angst | rTMS Kliniek",
    description:
      "Ontdek de stapsgewijze aanpak van onze rTMS behandelingen en hoe we u van intake tot nazorg persoonlijk begeleiden.",
    images: ["https://images.unsplash.com/photo-1576091160550-2173dba999ef"],
  },
};

const OnzeWerkwijzePage = () => {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Onze Werkwijze - rTMS Behandelingen",
    "url": "https://rtms-kliniek.nl/onze-werkwijze",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    "description": "Gedetailleerde uitleg over hoe onze rTMS behandelingen verlopen: van de eerste intake en diagnose tot het behandeltraject en nazorg.",
    "about": {
      "@type": "MedicalProcedure",
      "name": "rTMS Behandeling",
      "procedureType": "Noninvasive",
      "bodyLocation": "Hersenen",
      "preparation": "Intake en diagnose",
      "followup": "Nazorg en evaluatie"
    },
    "provider": {
      "@type": "MedicalOrganization",
      "name": "rTMS Kliniek",
      "url": "https://rtms-kliniek.nl",
      "logo": "https://rtms-kliniek.nl/logo.png",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Kennemerstraatweg 464",
          "addressLocality": "Heiloo",
          "addressRegion": "Noord-Holland",
          "postalCode": "1851NG",
          "addressCountry": "NL"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Heideweg 1B",
          "addressLocality": "Volendam",
          "addressRegion": "Noord-Holland",
          "postalCode": "1132DA",
          "addressCountry": "NL"
        }
      ]
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Intake",
        "text": "Uitgebreide kennismaking en bespreking van uw klachten en medische geschiedenis",
        "url": "https://rtms-kliniek.nl/onze-werkwijze#intake"
      },
      {
        "@type": "HowToStep",
        "name": "Diagnose",
        "text": "Grondige evaluatie van uw situatie om te bepalen of rTMS behandeling geschikt is",
        "url": "https://rtms-kliniek.nl/onze-werkwijze#diagnose"
      },
      {
        "@type": "HowToStep",
        "name": "Behandelplan",
        "text": "Opstellen van een gepersonaliseerd behandelplan met frequentie en duur van de sessies",
        "url": "https://rtms-kliniek.nl/onze-werkwijze#behandelplan"
      },
      {
        "@type": "HowToStep",
        "name": "Behandeling",
        "text": "Reeks van rTMS sessies volgens het behandelplan, inclusief regelmatige evaluaties",
        "url": "https://rtms-kliniek.nl/onze-werkwijze#behandeling"
      },
      {
        "@type": "HowToStep",
        "name": "Nazorg",
        "text": "Follow-up gesprekken en ondersteuning na afloop van de behandeling",
        "url": "https://rtms-kliniek.nl/onze-werkwijze#nazorg"
      }
    ]
  };

  // Steps in the treatment process
  const treatmentSteps = [
    {
      id: "intake",
      title: "1. Intake en Kennismaking",
      description: "De eerste stap in ons behandeltraject is een uitgebreide intake. Tijdens dit gesprek maken we kennis, bespreken we uw klachten, medische geschiedenis en eventuele eerdere behandelingen. We nemen de tijd om uw specifieke situatie te begrijpen en te luisteren naar uw verwachtingen en doelen.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      id: "diagnose",
      title: "2. Diagnose en Evaluatie",
      description: "Na de intake volgt een grondige evaluatie om te bepalen of rTMS behandeling geschikt is voor uw situatie. We beoordelen uw symptomen, bekijken eventuele contra-indicaties en bespreken mogelijke alternatieven. Indien nodig, werken we samen met uw huisarts of andere behandelaars voor een volledige evaluatie.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      id: "behandelplan",
      title: "3. Behandelplan op Maat",
      description: "Als rTMS geschikt blijkt, stellen we samen een gepersonaliseerd behandelplan op. Hierin bepalen we de frequentie en duur van de sessies, de specifieke hersengebieden die gestimuleerd worden, en de intensiteit van de stimulatie. We bespreken ook wat u kunt verwachten tijdens en na de behandeling.",
      image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      id: "behandeling",
      title: "4. De rTMS Behandelsessies",
      description: "De behandeling bestaat uit meerdere sessies, meestal verspreid over enkele weken. Tijdens elke sessie zit u comfortabel in een stoel terwijl de rTMS-spoel op uw hoofd wordt geplaatst. De sessies duren ongeveer 20-40 minuten, waarbij u lichte tikjes op uw hoofdhuid kunt voelen. Na de sessie kunt u direct uw dagelijkse activiteiten hervatten.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      id: "monitoring",
      title: "5. Voortgangsbewaking",
      description: "Gedurende het behandeltraject monitoren we zorgvuldig uw voortgang. We evalueren regelmatig of uw symptomen verbeteren en passen indien nodig het behandelplan aan. Uw feedback is hierbij essentieel en we moedigen u aan om veranderingen in uw stemming of andere effecten te melden.",
      image: "https://images.unsplash.com/photo-1494599948593-3dafe8338d71?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      id: "nazorg",
      title: "6. Nazorg en Follow-up",
      description: "Na afronding van het behandeltraject bieden we nazorg om de behaalde resultaten te behouden. Dit kan bestaan uit periodieke follow-up gesprekken, ondersteuning bij het integreren van de verbeteringen in uw dagelijks leven, en advies over aanvullende therapieën of leefstijlaanpassingen die uw herstel verder kunnen ondersteunen.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=500&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mt-5 md:mt-20">
        <h1 className="text-center font-semibold text-2xl md:text-6xl">
          Onze Werkwijze bij rTMS Behandelingen
        </h1>
        
        <div className="mt-5 text-center">
          <p>
            Bij rTMS Kliniek volgen we een zorgvuldig opgebouwd traject voor elke patiënt. 
            Onze aanpak combineert wetenschappelijke precisie met persoonlijke aandacht, 
            waarbij uw welzijn en herstel centraal staan. Van de eerste kennismaking tot de 
            nazorg na uw behandeling, wij begeleiden u stap voor stap.
          </p>
          <Link href="/contact">
            <Button className="mt-5">Afspraak maken</Button>
          </Link>
        </div>
        
        <div className="flex justify-center mt-10">
          <Image 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&h=600&auto=format&fit=crop" 
            alt="rTMS Behandelproces" 
            height={600} 
            width={1000} 
            title="onze-werkwijze-rtms" 
          />
        </div>
        
        <div className="container w-full border-t border-gray-500 mt-10"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Het rTMS Behandeltraject</h2>
          <p className="mb-10">
            Onze rTMS behandelingen volgen een gestructureerd proces dat is ontworpen om maximale effectiviteit 
            en comfort te bieden. Elk stadium is zorgvuldig opgezet om u de beste zorg te bieden, met aandacht 
            voor uw individuele behoeften en omstandigheden.
          </p>
          
          {treatmentSteps.map((step, index) => (
            <div key={index} id={step.id} className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-3 text-[#7ed957]">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    width={500} 
                    height={300} 
                    className="rounded-lg shadow-md" 
                  />
                </div>
              </div>
              {index < treatmentSteps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-16 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Wat Maakt Onze Aanpak Uniek</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#7ed957]">Persoonlijke Aandacht</h3>
              <p>
                Wij geloven dat elke patiënt uniek is en daarom bieden we een gepersonaliseerde aanpak. 
                We nemen de tijd om naar uw verhaal te luisteren en uw behandeling daarop af te stemmen.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#7ed957]">Wetenschappelijke Basis</h3>
              <p>
                Onze behandelingen zijn gebaseerd op de nieuwste wetenschappelijke inzichten en onderzoek. 
                We blijven op de hoogte van ontwikkelingen in het rTMS-veld om u de beste zorg te bieden.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#7ed957]">Multidisciplinaire Samenwerking</h3>
              <p>
                Ons team van psychiaters, neurologen en psychologen werkt nauw samen om een holistische 
                benadering van uw gezondheid te bieden. We stemmen ook af met uw andere zorgverleners.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#7ed957]">Transparante Communicatie</h3>
              <p>
                We hechten waarde aan duidelijke communicatie over wat u kunt verwachten, mogelijke 
                bijwerkingen en behandelresultaten. U wordt volledig geïnformeerd in elke fase.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Praktische Informatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Duur van de Behandeling</h3>
              <p>
                Een standaard rTMS behandeltraject bestaat uit 20-30 sessies, verspreid over 4-6 weken. 
                Elke sessie duurt ongeveer 20-40 minuten. De exacte duur hangt af van uw specifieke 
                aandoening en behandelplan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Voorbereiding</h3>
              <p>
                Voor uw eerste afspraak is geen speciale voorbereiding nodig. U kunt gewoon eten, 
                drinken en medicatie innemen zoals gebruikelijk. Wij raden aan om comfortabele kleding 
                te dragen en eventuele medische gegevens en verwijzingen mee te nemen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Vergoeding</h3>
              <p>
                rTMS behandelingen worden voor bepaalde indicaties, zoals therapieresistente depressie, 
                vergoed door zorgverzekeraars. Tijdens het intakegesprek bespreken we de mogelijkheden 
                voor vergoeding in uw specifieke situatie.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Locaties</h3>
              <p>
                Wij bieden rTMS behandelingen aan in onze klinieken in Heiloo en Volendam. Beide locaties 
                zijn voorzien van moderne apparatuur en bieden een rustige, comfortabele omgeving voor 
                uw behandeling.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is rTMS pijnlijk?</h3>
              <p>
                rTMS is doorgaans niet pijnlijk. De meeste patiënten ervaren een tikkend of kloppend gevoel 
                op de hoofdhuid tijdens de behandeling. Sommigen kunnen lichte ongemakken ervaren, maar 
                dit vermindert meestal na de eerste paar sessies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hoe snel kan ik resultaat verwachten?</h3>
              <p>
                De reactie op rTMS varieert per persoon. Sommige patiënten merken al na een week verbetering, 
                terwijl anderen pas later in het behandeltraject effect ervaren. Volledige effecten worden 
                meestal waargenomen na voltooiing van het volledige behandeltraject.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Kan ik na een sessie autorijden?</h3>
              <p>
                Ja, u kunt na een rTMS sessie gewoon autorijden en uw normale activiteiten hervatten. 
                De behandeling heeft geen invloed op uw cognitieve functies of motorische vaardigheden.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Is een verwijzing nodig?</h3>
              <p>
                Voor vergoede zorg is meestal een verwijzing van uw huisarts of psychiater nodig. 
                Als u twijfelt, neem dan contact met ons op en we adviseren u graag over de beste 
                route voor uw situatie.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#7ed957] p-16 rounded-3xl text-white flex-col justify-between items-center text-center">
          <h3 className="font-semibold text-3xl md:text-5xl">Klaar om uw rTMS behandeltraject te starten?</h3>
          <Link href="/contact">
            <Button className="mt-5">Afspraak inplannen</Button>
          </Link>
        </div>  
        
        {/* <RTMSInfo /> */}
      </div>
    </div>
  );
};

export default OnzeWerkwijzePage;