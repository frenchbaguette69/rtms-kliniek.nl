import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RTMSInfo from "@/components/RTMSInfo";

export const metadata: Metadata = {
  title: "Neurofeedback Behandeling | Hersentraining voor Mentale Gezondheid | rTMS Kliniek",
  description:
    "Ontdek hoe neurofeedback uw hersenactiviteit kan optimaliseren voor de behandeling van ADHD, angst, depressie en slaapproblemen. Een niet-invasieve methode om uw hersenen te trainen voor betere mentale gezondheid.",
  openGraph: {
    title: "Neurofeedback Behandeling | Hersentraining voor Mentale Gezondheid | rTMS Kliniek",
    description: 
      "Neurofeedback is een geavanceerde, niet-invasieve techniek die u helpt controle te krijgen over uw hersenactiviteit. Ideaal bij ADHD, angst, depressie en slaapproblemen.",
    url: "https://rtms-kliniek.nl/neurofeedback",
    siteName: "rTMS kliniek",
    images: [
      {
        url: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
        width: 1200,
        height: 630,
        alt: "Neurofeedback behandeling"
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurofeedback Behandeling | Hersentraining voor Mentale Gezondheid | rTMS Kliniek",
    description:
      "Leer uw hersenen opnieuw te programmeren met neurofeedback, een effectieve behandelmethode voor diverse psychische klachten en cognitieve uitdagingen.",
    images: ["https://images.unsplash.com/photo-1580130379624-3a069adbfbb5"],
  },
};

const NeurofeedbackPage = () => {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Neurofeedback Behandeling",
    "alternateName": "EEG Biofeedback",
    "url": "https://rtms-kliniek.nl/neurofeedback",
    "image": "https://images.unsplash.com/photo-1580130379624-3a069adbfbb5",
    "description": "Neurofeedback is een vorm van biofeedback die specifiek gericht is op de hersenen. Het is een niet-invasieve techniek waarbij sensoren op de hoofdhuid de hersenactiviteit meten en deze informatie direct terugkoppelen aan de patiënt, die vervolgens leert om zijn of haar hersenactiviteit bewust te reguleren.",
    "medicalSpecialty": "Neurologie, Psychiatrie",
    "procedureType": "Noninvasive",
    "bodyLocation": "Hersenen",
    "preparation": "Geen speciale voorbereiding nodig",
    "followup": "Reguliere evaluaties om voortgang te monitoren",
    "howPerformed": "De patiënt krijgt sensoren op het hoofd geplaatst die hersenactiviteit meten via EEG. Deze activiteit wordt omgezet in audio of visuele feedback (zoals een videospel of muziek). Door te reageren op deze feedback, leert de patiënt bepaalde hersenpatronen te versterken of te verminderen.",
    "status": "EventScheduled",
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
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31 6 12345678",
        "contactType": "customer service",
        "availableLanguage": ["Dutch", "English"]
      }
    },
    "indication": [
      {
        "@type": "MedicalIndication",
        "name": "ADHD"
      },
      {
        "@type": "MedicalIndication",
        "name": "Angststoornissen"
      },
      {
        "@type": "MedicalIndication",
        "name": "Depressie"
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

  // Neurofeedback applications
  const applications = [
    {
      title: "ADHD en Concentratieproblemen",
      description: "Neurofeedback kan de hersenactiviteit helpen reguleren die betrokken is bij aandacht en concentratie. Door regelmatige training kunnen patiënten met ADHD leren om hun focus te verbeteren en impulsiviteit te verminderen zonder bijwerkingen die medicatie vaak heeft.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Angst en Stress",
      description: "Voor mensen met angststoornissen of chronische stress kan neurofeedback helpen om overactieve hersenpatronen te kalmeren. Patiënten leren een ontspannen maar alerte toestand te bereiken, wat kan leiden tot verminderde angstsymptomen en een betere stressbestendigheid.",
      image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Depressie",
      description: "Bij depressie kan neurofeedback worden ingezet om de activiteit in specifieke hersengebieden te normaliseren. Door het trainen van gezondere hersenpatronen kunnen stemmingsstoornissen verbeteren en emotionele stabiliteit worden bevorderd.",
      image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Slaapstoornissen",
      description: "Neurofeedback kan helpen bij het reguleren van hersenactiviteit die slaap bevordert. Door het trainen van bepaalde hersengolven kunnen patiënten leren om gemakkelijker in slaap te vallen, langer te slapen en een betere slaapkwaliteit te ervaren.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Trauma en PTSS",
      description: "Voor mensen die lijden aan trauma of PTSS kan neurofeedback helpen om overactieve stressreacties in de hersenen te kalmeren. De training kan bijdragen aan het verminderen van hyperwaakzaamheid, flashbacks en emotionele reactiviteit.",
      image: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?q=80&w=500&h=300&auto=format&fit=crop"
    },
    {
      title: "Cognitieve Prestaties",
      description: "Ook mensen zonder specifieke klachten kunnen baat hebben bij neurofeedback om hun cognitieve prestaties te verbeteren. De training kan helpen bij het optimaliseren van concentratie, geheugen, creativiteit en mentale helderheid.",
      image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=500&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mt-5 md:mt-20">
        <h1 className="text-center font-semibold text-2xl md:text-6xl">
          Neurofeedback: Train Uw Hersenen voor Optimale Gezondheid
        </h1>
        
        <div className="mt-5 text-center">
          <p>
            Neurofeedback is een geavanceerde, niet-invasieve techniek die u helpt controle te krijgen 
            over uw hersenactiviteit. Bij rTMS Kliniek bieden we state-of-the-art neurofeedbackbehandelingen 
            die u kunnen helpen bij het verbeteren van concentratie, het verminderen van angst en stress, 
            het reguleren van uw stemming en het verbeteren van uw algemene cognitieve prestaties.
          </p>
          <Link href="/contact">
            <Button className="mt-5">Afspraak maken</Button>
          </Link>
        </div>
        
        <div className="flex justify-center mt-10">
          <Image 
            src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1000&h=600&auto=format&fit=crop" 
            alt="Neurofeedback Behandeling" 
            height={600} 
            width={1000} 
            title="neurofeedback-behandeling" 
          />
        </div>
        
        <div className="container w-full border-t border-gray-500 mt-10"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Wat is Neurofeedback?</h2>
          <p className="mb-4">
            Neurofeedback is een vorm van biofeedback die specifiek gericht is op de hersenen. Het is een 
            trainingsmethode waarbij de hersenactiviteit in real-time wordt gemeten en teruggekoppeld aan 
            de patiënt, die vervolgens leert om deze activiteit bewust te reguleren.
          </p>
          <p>
            Tijdens een neurofeedbacksessie worden sensoren op het hoofd geplaatst die de elektrische 
            activiteit van de hersenen (EEG) meten. Deze hersenactiviteit wordt omgezet in visuele of 
            auditieve feedback, zoals een videospel of muziek. Door te reageren op deze feedback, leert 
            de patiënt bepaalde hersenpatronen te versterken of te verminderen, wat kan leiden tot 
            verbeteringen in cognitieve functies, emotionele regulatie en gedrag.
          </p>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Hoe Werkt Neurofeedback?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="mb-4">
                De basis van neurofeedback is het principe van operante conditionering: het versterken van 
                gewenst gedrag door middel van beloning. In dit geval is het "gedrag" de hersenactiviteit, 
                en de "beloning" is de feedback die de patiënt krijgt.
              </p>
              <p>
                Onze hersenen produceren verschillende soorten golven of frequenties, zoals delta, theta, alpha, 
                beta en gamma golven. Elk type golven heeft specifieke eigenschappen en is geassocieerd met 
                verschillende mentale toestanden. Bij bepaalde aandoeningen kunnen deze hersenpatronen uit 
                balans zijn. Neurofeedback richt zich op het normaliseren van deze patronen door:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Het meten van uw huidige hersenactiviteit via EEG</li>
                <li>Het omzetten van deze metingen in begrijpelijke feedback</li>
                <li>Het belonen van gewenste hersenpatronen door positieve feedback</li>
                <li>Het trainen van uw hersenen om deze patronen vaker te produceren</li>
                <li>Het consolideren van deze veranderingen door herhaalde sessies</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=600&h=400&auto=format&fit=crop" 
                alt="Neurofeedback proces" 
                width={600} 
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-8">Toepassingsgebieden van Neurofeedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm overflow-hidden">
                <div className="mb-4">
                  <Image 
                    src={app.image} 
                    alt={app.title} 
                    width={500} 
                    height={300}
                    className="rounded-lg w-full h-48 object-cover" 
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
          <h2 className="text-3xl font-semibold mb-5">Het Neurofeedback Behandeltraject</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">1. Intake en Assessment</h3>
              <p>
                We beginnen met een uitgebreide intake om uw klachten, geschiedenis en doelen te bespreken. 
                Vervolgens voeren we een qEEG (kwantitatieve elektro-encefalografie) uit, een gedetailleerde 
                scan van uw hersenactiviteit die dient als baseline en helpt bij het bepalen van een 
                gepersonaliseerd behandelplan.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">2. Behandelplan op Maat</h3>
              <p>
                Op basis van uw qEEG en intake stellen we een individueel behandelplan op. Hierin bepalen we 
                welke hersengebieden we gaan trainen, welke protocollen we gebruiken en hoeveel sessies 
                waarschijnlijk nodig zijn om uw doelen te bereiken.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">3. Neurofeedback Sessies</h3>
              <p>
                Een typische neurofeedbacksessie duurt ongeveer 45 minuten. U zit comfortabel terwijl sensoren 
                op uw hoofdhuid worden geplaatst. U krijgt visuele of auditieve feedback, vaak in de vorm van 
                een spel of film die reageert op uw hersenactiviteit. Doordat u leert de feedback te beïnvloeden, 
                traint u uw hersenen om optimaler te functioneren.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">4. Monitoring en Aanpassing</h3>
              <p>
                Gedurende het behandeltraject monitoren we uw voortgang zorgvuldig. We evalueren regelmatig 
                de resultaten en passen indien nodig het behandelprotocol aan. We bespreken ook hoe u zich 
                voelt en welke veranderingen u opmerkt in uw dagelijks leven.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#7ed957]">5. Afronding en Consolidatie</h3>
              <p>
                Aan het einde van het behandeltraject voeren we een follow-up qEEG uit om de veranderingen in 
                uw hersenactiviteit objectief te meten. We bespreken de resultaten en geven advies over hoe u 
                de behaalde vooruitgang kunt behouden en verder kunt optimaliseren.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Voordelen van Neurofeedback</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Niet-invasief</h3>
              <p>
                Neurofeedback is volledig niet-invasief. Er worden geen medicijnen gebruikt en er zijn geen 
                chirurgische ingrepen nodig.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Duurzame Resultaten</h3>
              <p>
                De effecten van neurofeedback zijn vaak langdurig omdat u uw hersenen daadwerkelijk traint 
                om anders te functioneren, in plaats van symptomen tijdelijk te onderdrukken.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Geen Bijwerkingen</h3>
              <p>
                In tegenstelling tot medicatie heeft neurofeedback vrijwel geen bijwerkingen. Sommige mensen 
                ervaren lichte vermoeidheid na een sessie, maar dit is tijdelijk.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Complementair</h3>
              <p>
                Neurofeedback kan worden gecombineerd met andere behandelingen zoals psychotherapie of rTMS 
                voor een synergetisch effect en betere resultaten.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Wetenschappelijk Onderbouwd</h3>
              <p>
                Er is een groeiend aantal wetenschappelijke studies dat de effectiviteit van neurofeedback 
                aantoont voor verschillende aandoeningen.
              </p>
            </div>
            
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-[#7ed957]">Zelfregulatie</h3>
              <p>
                Neurofeedback bevordert zelfbewustzijn en zelfregulatie, vaardigheden die u ook buiten de 
                behandeling kunt toepassen in uw dagelijks leven.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Veelgestelde Vragen</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Hoeveel sessies heb ik nodig?</h3>
              <p>
                Het aantal benodigde sessies varieert per persoon en per aandoening. Meestal zijn 20-40 sessies 
                nodig voor duurzame resultaten. Sommige mensen merken al na 5-10 sessies verbetering, maar voor 
                langdurige veranderingen is een volledig behandeltraject aan te raden.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Is neurofeedback geschikt voor kinderen?</h3>
              <p>
                Ja, neurofeedback is zeer geschikt voor kinderen, vooral bij aandoeningen zoals ADHD, leerproblemen 
                en angst. De training wordt vaak gepresenteerd als een spel, wat het voor kinderen gemakkelijk maakt 
                om betrokken en gemotiveerd te blijven.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Kan ik doorgaan met mijn medicatie?</h3>
              <p>
                In de meeste gevallen kunt u uw medicatie blijven gebruiken tijdens neurofeedback. Naarmate u 
                vordert in de behandeling, kan het mogelijk zijn om in overleg met uw arts de medicatie geleidelijk 
                af te bouwen. Stop nooit zelf met medicatie zonder overleg met uw behandelend arts.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Wordt neurofeedback vergoed?</h3>
              <p>
                De vergoeding voor neurofeedback varieert per zorgverzekeraar en per verzekeringspakket. In sommige 
                gevallen wordt het vergoed binnen de aanvullende verzekering. Tijdens het intakegesprek bespreken 
                we de mogelijkheden voor vergoeding in uw specifieke situatie.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#7ed957] p-16 rounded-3xl text-white flex-col justify-between items-center text-center">
          <h3 className="font-semibold text-3xl md:text-5xl">Klaar om uw hersenen te trainen met neurofeedback?</h3>
          <Link href="/contact">
            <Button className="mt-5">Afspraak inplannen</Button>
          </Link>
        </div>  
        
        {/* <RTMSInfo /> */}
      </div>
    </div>
  );
};

export default NeurofeedbackPage;