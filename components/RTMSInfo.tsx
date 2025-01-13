"use client"

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FAQ {
  question: string;
  answer: string;
}

export default function RTMSInfo() {
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqs: FAQ[] = [
    {
      question: "Wat is rTMS?",
      answer:
        "rTMS staat voor repetitieve Transcraniële Magnetische Stimulatie, een innovatieve en niet-invasieve medische behandeling die gebruikmaakt van magnetische velden om specifieke hersengebieden te stimuleren.",
    },
    {
      question: "Hoe werkt rTMS?",
      answer:
        "rTMS maakt gebruik van een elektromagnetische spoel die herhaalde magnetische pulsen afgeeft. Deze pulsen wekken kleine elektrische stromen op in specifieke hersengebieden om de activiteit daar te veranderen.",
    },
    {
      question: "Wordt rTMS bij depressie vergoed?",
      answer:
        "Ja, in 99% van de gevallen wordt rTMS bij depressie vergoed. Neem contact op met je zorgverzekering om de specifieke voorwaarden te controleren.",
    },
    {
      question: "Is rTMS effectief voor therapieresistente depressie?",
      answer:
        "Ja, rTMS is bewezen effectief voor mensen met een depressie die niet goed reageren op medicatie of andere therapieën.",
    },
    {
      question: "Hoeveel sessies zijn nodig?",
      answer:
        "Een typische rTMS-behandeling bestaat uit 20 tot 30 sessies, meestal verspreid over 4 tot 6 weken.",
    },
    {
      question: "Is rTMS pijnlijk?",
      answer:
        "rTMS is niet pijnlijk. Sommige patiënten ervaren een licht kloppend gevoel of tintelingen op de hoofdhuid tijdens de sessies.",
    },
    {
      question: "Zijn er bijwerkingen?",
      answer:
        "De meest voorkomende bijwerkingen zijn lichte hoofdpijn of een tintelend gevoel op de hoofdhuid. Ernstige bijwerkingen, zoals toevallen, komen zeer zelden voor.",
    },
    {
      question: "Is rTMS veilig?",
      answer:
        "Ja, rTMS is een veilige behandeling die al vele jaren wordt gebruikt in de klinische praktijk.",
    },
    {
      question: "Kan iedereen rTMS krijgen?",
      answer:
        "Niet iedereen komt in aanmerking voor rTMS. Mensen met metalen implantaten in het hoofd of een voorgeschiedenis van epilepsie zijn mogelijk niet geschikt.",
    },
    {
      question: "Voor welke aandoeningen wordt rTMS gebruikt?",
      answer:
        "rTMS wordt gebruikt voor depressie, angststoornissen, PTSS, chronische pijn en tinnitus.",
    },
    {
      question: "Hoe lang duurt een sessie?",
      answer:
        "Een typische sessie duurt tussen de 20 en 40 minuten, afhankelijk van het behandelprotocol.",
    },
    {
      question: "Hoe snel zie ik resultaat?",
      answer:
        "Veel patiënten merken na 2 tot 3 weken verbetering, maar dit kan variëren afhankelijk van de persoon.",
    },
    {
      question: "Wordt rTMS ook gebruikt voor angststoornissen?",
      answer:
        "Ja, rTMS kan effectief zijn bij de behandeling van angststoornissen door hersengebieden te reguleren die betrokken zijn bij angst.",
    },
    {
      question: "Is rTMS geschikt voor kinderen?",
      answer:
        "rTMS wordt meestal toegepast bij volwassenen. Het gebruik bij kinderen vereist extra voorzichtigheid en wordt minder vaak uitgevoerd.",
    },
    {
      question: "Kan ik mijn dagelijkse activiteiten hervatten na rTMS?",
      answer:
        "Ja, je kunt direct na een rTMS-sessie je dagelijkse activiteiten hervatten. Er is geen hersteltijd nodig.",
    },
    {
      question: "Wat kost een rTMS-behandeling?",
      answer:
        "De kosten variëren afhankelijk van de kliniek en het land. Veel behandelingen worden vergoed door de zorgverzekering.",
    },
    {
      question: "Kan rTMS worden gecombineerd met medicatie?",
      answer:
        "Ja, rTMS kan veilig worden gecombineerd met antidepressiva en andere medicatie.",
    },
    {
      question: "Wat gebeurt er tijdens een rTMS-sessie?",
      answer:
        "Tijdens de sessie zit je in een comfortabele stoel, terwijl een elektromagnetische spoel op je hoofd wordt geplaatst om magnetische pulsen af te geven.",
    },
    {
      question: "Zijn er lange termijn effecten van rTMS?",
      answer:
        "Onderzoek suggereert dat rTMS langdurige voordelen kan bieden, vooral bij depressie. Soms zijn herhalingssessies nodig.",
    },
    {
      question: "Hoe weet ik of rTMS geschikt is voor mij?",
      answer:
        "Dit wordt bepaald tijdens een intakegesprek met een specialist, die je medische geschiedenis en symptomen zal evalueren.",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-5">Veelgestelde Vragen over rTMS</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <p className="text-lg font-medium">{faq.question}</p>
              {faqOpen[index] ? (
                <FiChevronUp className="text-xl" />
              ) : (
                <FiChevronDown className="text-xl" />
              )}
            </div>
            {faqOpen[index] && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
