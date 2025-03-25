'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Is rTMS pijnlijk?",
      answer: "rTMS is over het algemeen niet pijnlijk. De meeste patiënten beschrijven de sensatie als een licht tikkend of kloppend gevoel op de hoofdhuid. Sommigen ervaren tijdens de eerste sessies enig ongemak, maar dit vermindert meestal naarmate men aan de behandeling went."
    },
    {
      question: "Hoe lang duurt het voordat rTMS werkt?",
      answer: "Het effect van rTMS is cumulatief en bouwt zich op in de loop van de behandeling. Sommige patiënten merken al na enkele sessies verbetering, maar voor de meesten wordt significante verbetering pas zichtbaar na 2-3 weken behandeling. Het volledige effect wordt vaak pas bereikt na afronding van het gehele behandeltraject."
    },
    {
      question: "Is rTMS vergoed door zorgverzekeraars?",
      answer: "De vergoeding van rTMS-behandeling varieert per zorgverzekeraar en type polis. In Nederland wordt rTMS voor therapieresistente depressie inmiddels door de meeste zorgverzekeraars vergoed vanuit de basisverzekering, mits er aan bepaalde voorwaarden is voldaan. Voor andere aandoeningen kan vergoeding verschillen. We raden aan om vóór de start van de behandeling contact op te nemen met uw zorgverzekeraar om uw specifieke dekking te bespreken. Onze administratie kan u hierbij ondersteunen."
    },
    {
      question: "Wat zijn de mogelijke bijwerkingen van rTMS?",
      answer: "Bijwerkingen van rTMS zijn over het algemeen mild en tijdelijk. De meest voorkomende bijwerkingen zijn lichte hoofdpijn na de behandeling en ongemak op de stimulatieplaats. Deze verdwijnen meestal binnen enkele uren. Ernstige bijwerkingen zoals epileptische aanvallen zijn zeer zeldzaam (minder dan 0,1% kans)."
    },
    {
      question: "Kan ik na een rTMS sessie autorijden?",
      answer: "Ja, u kunt gewoon autorijden na een rTMS sessie. De behandeling heeft geen effect op uw bewustzijn of coördinatie. U kunt direct na de behandeling al uw dagelijkse activiteiten hervatten, inclusief autorijden en werken."
    }
  ];

  return (
    <div className="w-[90%] mx-auto mt-8 rounded-3xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-5">Veelgestelde Vragen over rTMS</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - All FAQs stacked vertically with CTA */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 gap-4">
            {/* All FAQs in one column */}
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-3 text-left flex items-center justify-between bg-white hover:bg-gray-50"
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-3 bg-gray-50">
                    <p className="text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}

            {/* CTA at the bottom of left column */}
            <div className="bg-green-950 p-5 rounded-xl text-white mt-4">
              <h3 className="font-bold text-lg mb-2">Heeft u nog andere vragen?</h3>
              <p className="mb-3 text-base">Neem contact met ons op voor meer informatie over rTMS behandelingen.</p>
              <Link href="/contact">
                <span className="inline-block px-4 py-2 bg-white text-green-900 rounded-lg font-semibold hover:bg-gray-200 transition">
                  Contact opnemen
                </span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image that matches left column height */}
        <div className="md:w-1/3 mt-8 md:mt-0 flex">
          <Image 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=350&h=600&auto=format&fit=crop" 
            alt="rTMS behandeling informatie" 
            width={350} 
            height={600}
            className="rounded-2xl shadow-lg w-full object-cover"
            style={{ maxHeight: "517px" }}
            unoptimized
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default FaqSection;