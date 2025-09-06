import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RTMSInfo from "@/components/RTMSInfo";

export const metadata: Metadata = {
  title: "EEG-Scan | Gedetailleerde Hersenanalyse voor Nauwkeurige Behandeling | rtms behandeling",
  description:
    "Een EEG-scan (elektro-encefalogram) brengt uw hersenactiviteit in kaart voor een gepersonaliseerde behandeling van depressie, angst, ADHD en meer. Ontdek hoe onze geavanceerde EEG-analyse de basis vormt voor effectieve rTMS en neurofeedback behandelingen.",
  openGraph: {
    title: "EEG-Scan | Gedetailleerde Hersenanalyse voor Nauwkeurige Behandeling | rtms behandeling",
    description: 
      "Een EEG-scan geeft inzicht in uw unieke hersenactiviteit en vormt de basis voor gepersonaliseerde behandelingen zoals rTMS en neurofeedback bij psychische klachten.",
    url: "https://rtms-behandeling.nl/eeg-scan",
    siteName: "rtms behandeling",
    images: [
      {
        url: "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe",
        width: 1200,
        height: 630,
        alt: "EEG-scan hersenanalyse"
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EEG-Scan | Gedetailleerde Hersenanalyse voor Nauwkeurige Behandeling | rtms behandeling",
    description:
      "Een EEG-scan brengt uw hersenactiviteit in kaart voor gerichte behandeling van psychische klachten. De basis voor effectieve rTMS en neurofeedback therapie.",
    images: ["https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe"],
  },
};

const EEGScanPage = () => {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "EEG-Scan",
    "alternateName": "Elektro-encefalografie",
    "url": "https://rtms-behandeling.nl/eeg-scan",
    "image": "https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe",
    "description": "Een EEG-scan (elektro-encefalogram) is een niet-invasieve procedure die elektrische activiteit in de hersenen meet via elektrodes die op de hoofdhuid worden geplaatst. Deze gedetailleerde hersenanalyse wordt gebruikt als diagnostisch hulpmiddel en om gepersonaliseerde behandelplannen op te stellen voor rTMS en neurofeedback.",
    "medicalSpecialty": "Neurologie, Psychiatrie",
    "procedureType": "Diagnostic",
    "bodyLocation": "Hersenen",
    "preparation": "Geen speciale voorbereiding nodig, schoon haar zonder producten aanbevolen",
    "followup": "Bespreking van de resultaten met een specialist voor het opstellen van een behandelplan",
    "howPerformed": "Elektrodes worden op de hoofdhuid geplaatst in een specifiek patroon volgens het internationaal erkende 10-20 systeem. Deze elektrodes meten de elektrische activiteit van de hersenen, die wordt geregistreerd en geanalyseerd met geavanceerde software.",
    "status": "EventScheduled",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "rtms behandeling",
      "url": "https://rtms-behandeling.nl",
      "logo": "https://rtms-behandeling.nl/logo.png",
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
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31 6 12345678",
        "contactType": "customer service",
        "availableLanguage": ["Dutch", "English"]
      }
    },
    "usedToTreat": [
      {
        "@type": "MedicalIndication",
        "name": "Depressie"
      },
      {
        "@type": "MedicalIndication",
        "name": "Angststoornissen"
      },
      {
        "@type": "MedicalIndication",
        "name": "ADHD"
      },
      {
        "@type": "MedicalIndication",
        "name": "Slaapstoornissen"
      },
      {
        "@type": "MedicalIndication",
        "name": "Trauma en PTSS"
      }
    ]
  };

  // EEG applications and insights
  const eegApplications = [
    {
      title: "Gepersonaliseerde rTMS Behandeling",
      description: "EEG-resultaten helpen bij het nauwkeurig bepalen welke hersengebieden gestimuleerd moeten worden tijdens rTMS behandelingen. Dit verhoogt de effectiviteit van de behandeling aanzienlijk door de magnetische pulsen precies daar te richten waar uw hersenen het nodig hebben.",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Optimale Neurofeedback Protocollen",
      description: "Op basis van uw EEG-scan kunnen we zeer specifieke neurofeedback protocollen ontwikkelen die gericht zijn op uw unieke hersenpatronen. Dit maakt de training efficiënter en effectiever, wat leidt tot betere en snellere resultaten.",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Diepgaande Diagnose",
      description: "Een EEG-scan kan biomarkers voor verschillende aandoeningen identificeren, zoals depressie, angst, ADHD en traumagerelateerde stoornissen. Deze objectieve metingen helpen bij het bevestigen van diagnoses en het beter begrijpen van de onderliggende oorzaken van symptomen.",
      image: "https://images.unsplash.com/photo-1576671414121-aa2d60f1d5f2?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Voortgangsmeting",
      description: "Door EEG-scans te herhalen tijdens en na de behandeling, kunnen we objectief meten hoe uw hersenactiviteit verandert. Dit biedt niet alleen inzicht in de effectiviteit van de behandeling, maar helpt ook bij het maken van weloverwogen aanpassingen aan uw behandelplan.",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=500&h=300&auto=format&fit=crop"
    }
  ];

  // EEG brain wave types
  const brainWaves = [
    {
      name: "Delta Golven (0.5-4 Hz)",
      description: "Domineren tijdens diepe slaap en zijn betrokken bij herstel en regeneratie. Overmatige delta-activiteit tijdens wakkere toestand kan wijzen op hersendisfunctie of aandoeningen zoals ADHD.",
      color: "#3B82F6" // blue
    },
    {
      name: "Theta Golven (4-8 Hz)",
      description: "Geassocieerd met een lichte slaap, diepe meditatie en creatieve processen. Overmatige theta kan bijdragen aan aandachtsproblemen, terwijl te weinig theta creativiteit kan belemmeren.",
      color: "#8B5CF6" // purple
    },
    {
      name: "Alpha Golven (8-12 Hz)",
      description: "Duiden op een ontspannen, alerte toestand. Verminderde alpha-activiteit kan gerelateerd zijn aan angst en stress, terwijl te veel alpha kan wijzen op bepaalde vormen van depressie.",
      color: "#10B981" // green
    },
    {
      name: "Beta Golven (12-30 Hz)",
      description: "Domineren tijdens waakzame, actieve denkprocessen. Verhoogde beta is geassocieerd met angst en rusteloosheid, terwijl verminderde beta-activiteit kan wijzen op aandachtsproblemen.",
      color: "#F59E0B" // amber
    },
    {
      name: "Gamma Golven (30-100 Hz)",
      description: "Gelinkt aan hogere cognitieve functies, bewustzijn en informatieverwerking. Afwijkingen in gamma-activiteit kunnen gerelateerd zijn aan cognitieve stoornissen en neurologische aandoeningen.",
      color: "#EF4444" // red
    }
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mt-5 md:mt-20">
        <h1 className="text-center font-semibold text-2xl md:text-6xl">
          EEG-Scan: De Blauwdruk van Uw Hersenen
        </h1>
        
        <div className="mt-5 text-center">
          <p>
            Een EEG-scan brengt de elektrische activiteit van uw hersenen in kaart en biedt waardevolle 
            inzichten voor een nauwkeurige diagnose en een gepersonaliseerd behandelplan. Bij rtms behandeling 
            gebruiken we geavanceerde EEG-technologie als basis voor onze op maat gemaakte rTMS en 
            neurofeedback behandelingen, voor optimale resultaten.
          </p>
          <Link href="/afspraak-maken">
            <Button className="mt-5">Afspraak maken</Button>
          </Link>
        </div>
        
        <div className="flex justify-center mt-10">
          <Image 
            src="https://images.unsplash.com/photo-1583911860205-72f8ac8ddcbe?w=1000&h=600&auto=format&fit=crop" 
            alt="EEG-scan hersenanalyse" 
            height={600} 
            width={1000} 
            title="eeg-scan-hersenanalyse"
            priority
          />
        </div>
        
        <div className="container w-full border-t border-gray-500 mt-10"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Wat is een EEG-Scan?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="mb-4">
                Een EEG-scan (elektro-encefalogram) is een niet-invasieve procedure die de elektrische activiteit 
                van uw hersenen registreert via elektrodes die op uw hoofdhuid worden geplaatst. Deze elektrodes 
                detecteren zeer kleine elektrische impulsen die worden gegenereerd door uw hersencellen wanneer ze 
                communiceren.
              </p>
              <p>
                Bij rtms behandeling gebruiken we zowel standaard EEG als kwantitatieve EEG (qEEG) analyses. Een qEEG 
                verwerkt de ruwe EEG-gegevens met geavanceerde software en vergelijkt deze met normatieve databases, 
                waardoor we een gedetailleerd beeld krijgen van hoe uw hersenactiviteit afwijkt van het gemiddelde. 
                Dit vormt de basis voor een gepersonaliseerde behandelstrategie.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&h=400&auto=format&fit=crop" 
                alt="EEG elektroden op het hoofd" 
                width={600} 
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Hoe Verloopt een EEG-Scan?</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">1. Voorbereiding</h3>
              <p>
                Voor een EEG-scan is weinig voorbereiding nodig. Het is aan te raden uw haar de dag van het 
                onderzoek te wassen, maar zonder conditioner of styling producten te gebruiken. Consumeer geen 
                cafeïne of andere stimulerende middelen enkele uren voor het onderzoek. Onze medewerker zal u 
                vooraf alle specifieke instructies geven.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">2. Plaatsing van Elektrodes</h3>
              <p>
                Tijdens de procedure plaatst een gespecialiseerde technicus kleine elektrodes op uw hoofdhuid 
                in een specifiek patroon volgens het internationaal erkende 10-20 systeem. Om goed contact te 
                maken, wordt een geleidende pasta of gel gebruikt. Het aantal elektrodes varieert, maar voor 
                een uitgebreide qEEG-analyse worden doorgaans 19 tot 32 elektrodes gebruikt.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">3. De Opname</h3>
              <p>
                Tijdens de opname zit u ontspannen in een comfortabele stoel. De procedure duurt ongeveer 30-45 
                minuten. U zult gevraagd worden om in verschillende staten te verkeren: met ogen open, ogen 
                gesloten, en mogelijk tijdens eenvoudige cognitieve taken. Dit helpt ons om een volledig beeld 
                te krijgen van uw hersenactiviteit onder verschillende omstandigheden.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">4. Analyse en Interpretatie</h3>
              <p>
                Na de opname worden de EEG-gegevens verwerkt met geavanceerde analytische software. Bij een 
                qEEG worden de resultaten vergeleken met een database van leeftijdsgenoten om afwijkingen te 
                identificeren. Onze neurologen en psychiaters interpreteren deze gegevens in de context van 
                uw klachten en medische geschiedenis.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">5. Bespreking van Resultaten</h3>
              <p>
                In een vervolgafspraak bespreken we de resultaten van uw EEG-scan uitgebreid met u. We leggen 
                uit wat de bevindingen betekenen voor uw specifieke situatie en hoe deze informatie gebruikt 
                wordt om een effectief behandelplan op te stellen, of dit nu rTMS, neurofeedback of een 
                combinatie betreft.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-8">Hoe Gebruiken We EEG-Resultaten?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eegApplications.map((app, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm overflow-hidden">
                <div className="mb-4">
                  <Image 
                    src={app.image} 
                    alt={app.title} 
                    width={500} 
                    height={300}
                    className="rounded-lg w-full h-48 object-cover"
                    unoptimized={true}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">{app.title}</h3>
                <p className="text-gray-700">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Hersengolven: De Taal van Uw Hersenen</h2>
          <p className="mb-6">
            Uw hersenen produceren verschillende types elektrische activiteit, bekend als hersengolven. 
            Elk type hersengolf heeft een specifieke frequentie en is geassocieerd met verschillende mentale 
            toestanden en cognitieve functies. Een EEG-scan meet deze hersengolven en helpt ons te begrijpen 
            hoe uw hersenen functioneren.
          </p>
          
          <div className="space-y-6">
            {brainWaves.map((wave, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm border-l-4" style={{ borderColor: wave.color }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: wave.color }}>{wave.name}</h3>
                <p>{wave.description}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-6">
            Bij verschillende psychische en neurologische aandoeningen zijn vaak specifieke patronen van 
            hersengolven te zien. Door deze patronen in kaart te brengen, kunnen we niet alleen een beter 
            begrip krijgen van uw conditie, maar ook een meer gerichte behandeling bieden die specifiek is 
            afgestemd op uw unieke hersenactiviteit.
          </p>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Voordelen van een EEG-Scan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Objectieve Meting</h3>
              <p>
                In tegenstelling tot subjectieve vragenlijsten biedt een EEG-scan objectieve, meetbare gegevens 
                over uw hersenactiviteit, wat leidt tot nauwkeurigere diagnoses.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Gepersonaliseerde Aanpak</h3>
              <p>
                EEG-resultaten maken het mogelijk om behandelingen zoals rTMS en neurofeedback precies af te 
                stemmen op uw unieke hersenpatronen, wat de effectiviteit verhoogt.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Niet-invasief</h3>
              <p>
                Een EEG-scan is volledig pijnloos en niet-invasief. Er worden geen injecties of medicijnen 
                gebruikt en er is geen blootstelling aan straling.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Vroege Detectie</h3>
              <p>
                EEG kan subtiele veranderingen in hersenactiviteit detecteren voordat deze zich manifesteren 
                als ernstige symptomen, wat vroege interventie mogelijk maakt.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Meetbare Voortgang</h3>
              <p>
                Door EEG-scans te herhalen tijdens de behandeling, kunnen we objectief meten hoe uw hersenen 
                veranderen en de behandeling daarop aanpassen.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Breed Toepassingsgebied</h3>
              <p>
                EEG is waardevol bij een breed scala aan aandoeningen, van depressie en angst tot ADHD, 
                slaapstoornissen en cognitieve problemen.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is een EEG-scan pijnlijk?</h3>
              <p>
                Nee, een EEG-scan is volledig pijnloos. U voelt mogelijk een lichte druk van de elektrodes 
                op uw hoofdhuid, maar er is geen sprake van pijn of ongemak. De gehele procedure is 
                ontspannen en niet-invasief.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Hoe lang duurt een EEG-scan?</h3>
              <p>
                Een standaard EEG-scan duurt ongeveer 30-45 minuten. De voorbereiding, waaronder het plaatsen 
                van de elektrodes, neemt ongeveer 15-20 minuten in beslag. In totaal duurt uw afspraak 
                ongeveer een uur.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Wordt een EEG-scan vergoed?</h3>
              <p>
                In veel gevallen wordt een EEG-scan vergoed door zorgverzekeraars, vooral wanneer deze wordt 
                gebruikt als diagnostisch hulpmiddel of als onderdeel van een behandeltraject. De exacte vergoeding 
                is afhankelijk van uw verzekeringspakket en indicatie. Tijdens het intakegesprek bespreken we 
                de mogelijkheden voor vergoeding in uw specifieke situatie.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Moet ik iets voorbereiden voor een EEG-scan?</h3>
              <p>
                We raden aan om uw haar te wassen op de dag van het onderzoek, maar zonder conditioner of styling 
                producten te gebruiken. Vermijd cafeïne en andere stimulerende middelen enkele uren voor het onderzoek. 
                Blijf uw voorgeschreven medicatie innemen tenzij uw arts anders adviseert. We geven u vooraf 
                alle specifieke instructies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#7ed957] p-16 rounded-3xl text-white flex-col justify-between items-center text-center">
          <h3 className="font-semibold text-3xl md:text-5xl">Klaar om uw hersenactiviteit in kaart te brengen?</h3>
          <Link href="/afspraak-maken">
            <Button className="mt-5">EEG-scan afspraak maken</Button>
          </Link>
        </div>  
        
        {/* <RTMSInfo /> */}
      </div>
    </div>
  );
};

export default EEGScanPage;