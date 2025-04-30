'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FaqSection = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Doet een rTMS behandeling pijn?",
      answer: "Nee, een rTMS behandeling doet meestal geen pijn. U voelt tijdens de stimulatie een tikkend of kloppend gevoel op uw hoofdhuid, dat soms wat ongemakkelijk kan zijn bij de eerste sessies. Dit gevoel neemt meestal snel af naarmate u aan de behandeling gewend raakt."
    },
    {
      question: "Wanneer merk ik effect van rTMS?",
      answer: "De meeste mensen merken na 2 tot 3 weken verbetering van hun klachten. Sommige patiënten voelen al eerder effect, terwijl anderen pas na afronding van de volledige behandelreeks verschil ervaren. Het resultaat bouwt zich op met elke sessie."
    },
    {
      question: "Wordt rTMS vergoed door mijn zorgverzekeraar?",
      answer: "Ja, voor therapieresistente depressie wordt rTMS doorgaans vergoed vanuit de basisverzekering, mits u aan de voorwaarden voldoet (zoals eerdere behandeling met medicatie en gesprekstherapie). Voor andere aandoeningen zoals OCS kan vergoeding verschillen. Neem vooraf contact op met uw zorgverzekeraar, of vraag ons om hulp bij het controleren van uw dekking."
    },
    {
      question: "Welke bijwerkingen kan rTMS hebben?",
      answer: "rTMS heeft weinig bijwerkingen. De meest voorkomende zijn lichte hoofdpijn of een tintelend gevoel op de plek van stimulatie. Deze klachten verdwijnen meestal binnen enkele uren. Ernstige bijwerkingen, zoals een epileptische aanval, zijn uiterst zeldzaam en treden op bij minder dan 0,1% van de patiënten."
    },
    {
      question: "Mag ik autorijden na een rTMS sessie?",
      answer: "Ja, u mag na de behandeling direct autorijden of andere dagelijkse activiteiten uitvoeren. rTMS heeft geen invloed op uw reactievermogen of concentratie, dus u kunt veilig verder met uw dag."
    },
    {
      question: "Hoeveel sessies zijn er nodig voor een goed resultaat?",
      answer: "Een standaardtraject bestaat uit 20 tot 30 sessies, verspreid over 4 tot 6 weken. In sommige gevallen is daarna een onderhoudsbehandeling nodig om het effect langdurig te behouden."
    },
    {
      question: "Kan ik mijn medicatie blijven gebruiken tijdens rTMS?",
      answer: "Ja, u hoeft niet te stoppen met uw antidepressiva of andere medicatie. rTMS kan veilig worden toegepast naast bestaande medicatie. Veranderingen in uw medicijngebruik dient u altijd met uw behandelend arts te bespreken."
    }
  ];

  return (
    <div className="w-[90%] max-w-4xl mx-auto mt-12 md:mt-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Veelgestelde Vragen over rTMS</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-green-50 transition"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="ml-4 text-green-700">
                {activeFaq === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <AnimatePresence>
              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-4 text-gray-700"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
