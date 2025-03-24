import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RTMSInfo from "@/components/RTMSInfo";

export const metadata: Metadata = {
  title: "Ons Professionele Team | Experts in rTMS Behandelingen | rTMS Kliniek",
  description:
    "Maak kennis met ons ervaren team van specialisten in rTMS behandelingen. Onze deskundige artsen, psychologen en verpleegkundigen staan klaar om u te begeleiden bij uw rTMS behandeltraject voor depressie, angststoornissen en meer.",
  openGraph: {
    title: "Ons Professionele Team | Experts in rTMS Behandelingen | rTMS Kliniek",
    description: 
      "Maak kennis met ons ervaren team van rTMS specialisten. Onze deskundige artsen, psychologen en verpleegkundigen staan klaar om u te begeleiden met persoonlijke aandacht en expertise.",
    url: "https://rtms-kliniek.nl/ons-team",
    siteName: "rTMS kliniek",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
        width: 1200,
        height: 630,
        alt: "rTMS kliniek team"
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ons Professionele Team | Experts in rTMS Behandelingen | rTMS Kliniek",
    description:
      "Maak kennis met de specialisten van rTMS Kliniek die zich inzetten voor uw welzijn met innovatieve rTMS behandelingen.",
    images: ["https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"],
  },
};

const OnsTeamPage = () => {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "rTMS Kliniek",
    "url": "https://rtms-kliniek.nl/ons-team",
    "image": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
    "description": "Ons ervaren team van specialisten in rTMS behandelingen bestaat uit psychiaters, neurologen, psychologen en ondersteunend personeel die samen zorgen voor de beste behandeling en persoonlijke begeleiding.",
    "medicalSpecialty": "rTMS behandelingen, Psychiatrie, Neurologie",
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
    },
    "member": [
      {
        "@type": "Person",
        "name": "Dr. Emma de Vries",
        "jobTitle": "Hoofdpsychiater",
        "description": "Specialist in rTMS behandelingen voor depressie en angststoornissen",
        "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
      },
      {
        "@type": "Person",
        "name": "Dr. Bart Jansen",
        "jobTitle": "Neuroloog",
        "description": "Gespecialiseerd in neurologische toepassingen van rTMS behandelingen",
        "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
      },
      {
        "@type": "Person",
        "name": "Sophie Bakker",
        "jobTitle": "Klinisch Psycholoog",
        "description": "Expert in cognitieve gedragstherapie in combinatie met rTMS behandelingen",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "86"
    }
  };

  // Team members data with Unsplash images
  const teamMembers = [
    {
      name: "Dr. Emma de Vries",
      role: "Hoofdpsychiater",
      bio: "Dr. Emma de Vries heeft meer dan 15 jaar ervaring in de psychiatrie met een specialisatie in rTMS behandelingen voor depressie en angststoornissen. Ze heeft bijgedragen aan verschillende wetenschappelijke publicaties over de effectiviteit van rTMS en is een autoriteit op dit gebied in Nederland.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Dr. Bart Jansen",
      role: "Neuroloog",
      bio: "Als neuroloog brengt Dr. Bart Jansen diepgaande kennis van hersenfuncties en neurologische aandoeningen in ons team. Hij is gespecialiseerd in de toepassing van rTMS bij zowel psychische als neurologische aandoeningen, waaronder chronische pijn en tinnitus.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Sophie Bakker",
      role: "Klinisch Psycholoog",
      bio: "Sophie Bakker combineert haar expertise in cognitieve gedragstherapie met rTMS behandelingen voor een holistische aanpak. Ze begeleidt patiënten gedurende het hele behandeltraject en helpt hen om het maximale uit hun rTMS behandeling te halen.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Mark Koning",
      role: "rTMS Technicus",
      bio: "Mark zorgt voor de technische aspecten van de rTMS behandelingen. Hij is gespecialiseerd in het nauwkeurig positioneren van de magnetische spoelen en het aanpassen van de behandelprotocollen aan individuele patiënten voor optimale resultaten.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop"
    },
    {
      name: "Anna Visser",
      role: "Verpleegkundige",
      bio: "Anna heeft ruime ervaring in de psychiatrische verpleging en is gespecialiseerd in de zorg voor patiënten die rTMS behandelingen ondergaan. Ze staat bekend om haar warme, empathische benadering die patiënten op hun gemak stelt.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&h=400&auto=format&fit=crop"
    }
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mt-5 md:mt-20">
        <h1 className="text-center font-semibold text-2xl md:text-6xl">
          Ons Deskundige Team
        </h1>
        
        <div className="mt-5 text-center">
          <p>
            Bij rTMS Kliniek staat een team van toegewijde professionals voor u klaar, elk met hun eigen
            expertise op het gebied van rTMS behandelingen en geestelijke gezondheidszorg. Samen zetten wij 
            ons in voor uw welzijn met persoonlijke aandacht, vakkennis en inzet.
          </p>
          <Link href="/contact">
            <Button className="mt-5">Afspraak maken</Button>
          </Link>
        </div>
        
        <div className="flex justify-center mt-10">
          <Image 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1000&h=600&auto=format&fit=crop" 
            alt="rTMS Kliniek Team" 
            height={600} 
            width={1000} 
            title="ons-professionele-team" 
          />
        </div>
        
        <div className="container w-full border-t border-gray-500 mt-10"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Ontmoet Ons Team</h2>
          <p className="mb-10">
            Ons multidisciplinaire team bestaat uit psychiaters, neurologen, psychologen, verpleegkundigen 
            en technisch specialisten die samenwerken om de beste zorg te bieden. Elk teamlid brengt 
            unieke expertise en ervaring, die samen een holistische benadering van rTMS behandelingen mogelijk maken.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={128} 
                      height={128} 
                      className="object-cover w-full h-full" 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-[#7ed957] font-medium">{member.role}</p>
                    <p className="mt-2 text-gray-700">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Onze Expertise</h2>
          <p>
            Ons team heeft uitgebreide ervaring met rTMS behandelingen voor verschillende aandoeningen:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Depressie:</strong> Specialistische kennis in de behandeling van therapieresistente depressie met rTMS.</li>
            <li><strong>Angststoornissen:</strong> Gerichte behandelprotocollen voor verschillende angststoornissen.</li>
            <li><strong>PTSS:</strong> Expertise in het aanpakken van traumagerelateerde klachten met rTMS.</li>
            <li><strong>Chronische pijn:</strong> Innovatieve toepassingen van rTMS bij pijnsyndromen.</li>
            <li><strong>OCD:</strong> Gespecialiseerde behandeltrajecten voor obsessief-compulsieve stoornis.</li>
          </ul>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Onze Aanpak</h2>
          <p className="mb-4">
            Bij rTMS Kliniek geloven we in een persoonlijke en holistische benadering van zorg:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Persoonlijk behandelplan:</strong> We ontwikkelen een op maat gemaakt behandelplan dat aansluit bij uw specifieke behoeften en omstandigheden.</li>
            <li><strong>Multidisciplinaire samenwerking:</strong> Ons team werkt nauw samen om alle aspecten van uw gezondheid te ondersteunen.</li>
            <li><strong>Voortdurende evaluatie:</strong> We monitoren uw voortgang zorgvuldig en passen de behandeling aan waar nodig.</li>
            <li><strong>Nazorg en ondersteuning:</strong> Onze zorg stopt niet na de behandelsessies, we bieden ook ondersteuning tijdens het herstelproces.</li>
          </ul>
        </div>
        
        <div className="container w-full border-t border-gray-500"></div>
        
        <div className="p-8">
          <h2 className="text-3xl font-semibold mb-5">Opleiding en Ervaring</h2>
          <p>
            Alle professionals in ons team hebben een uitgebreide opleiding gevolgd en beschikken over relevante certificeringen in hun vakgebied. 
            Onze artsen zijn BIG-geregistreerd en hebben aanvullende specialisaties in rTMS behandelingen. 
            We blijven op de hoogte van de nieuwste ontwikkelingen door regelmatige bijscholing en deelname aan wetenschappelijke congressen.
          </p>
        </div>
        
        <div className="bg-[#7ed957] p-16 rounded-3xl text-white flex-col justify-between items-center text-center">
          <h3 className="font-semibold text-3xl md:text-5xl">Wilt u kennismaken met ons team?</h3>
          <Link href="/contact">
            <Button className="mt-5">Afspraak inplannen</Button>
          </Link>
        </div>  
        
        {/* <RTMSInfo /> */}
      </div>
    </div>
  );
};

export default OnsTeamPage;