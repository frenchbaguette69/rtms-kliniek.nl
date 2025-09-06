"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQWithLinks() {
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
        "rTMS staat voor repetitieve Transcraniële Magnetische Stimulatie. Het is een innovatieve behandeling voor depressie en andere aandoeningen. Lees meer over de <Link href='/rtms-behandeling'><a className='text-[#7ed957]'>rTMS-behandeling</a></Link>.",
    },
    {
      question: "Hoe werkt rTMS?",
      answer:
        "rTMS maakt gebruik van magnetische pulsen om specifieke hersengebieden te stimuleren. Deze behandeling is wetenschappelijk bewezen effectief.",
    },
    {
      question: "Wordt rTMS bij depressie vergoed?",
      answer:
        "Ja, in veel gevallen wordt de behandeling vergoed door de verzekering. Controleer de voorwaarden voor een <Link href='/depressie-behandeling'><a className='text-[#7ed957]'>depressie-behandeling</a></Link>.",
    },
    {
      question: "Is rTMS effectief voor therapieresistente depressie?",
      answer:
        "Ja, rTMS is bewezen effectief voor mensen met een depressie die niet reageren op medicatie of andere therapieën.",
    },
    {
      question: "Hoeveel sessies zijn nodig?",
      answer:
        "Een typische behandeling bestaat uit 20 tot 30 sessies, verspreid over meerdere weken.",
    },
    {
      question: "Wat zijn de bijwerkingen van rTMS?",
      answer:
        "De meest voorkomende bijwerkingen zijn lichte hoofdpijn of vermoeidheid, die meestal snel verdwijnen.",
    },
    {
      question: "Is rTMS geschikt voor iedereen?",
      answer:
        "Niet iedereen komt in aanmerking voor rTMS. Mensen met metalen implantaten in het hoofd kunnen niet worden behandeld.",
    },
    {
      question: "Voor welke aandoeningen wordt rTMS gebruikt?",
      answer:
        "Naast depressie wordt rTMS ook gebruikt voor angststoornissen, PTSS en chronische pijn.",
    },
    {
      question: "Hoe snel merk ik effect?",
      answer:
        "De meeste mensen merken verbetering na 2 tot 3 weken behandeling.",
    },
    {
      question: "Hoe veilig is rTMS?",
      answer:
        "rTMS is een veilige behandeling met weinig risico's. Lees meer over onze locaties via de <Link href='/vestingen'><a className='text-[#7ed957]'>vestingen</a></Link>.",
    },
    {
      question: "Kan rTMS worden gecombineerd met medicatie?",
      answer:
        "Ja, rTMS kan veilig worden gecombineerd met antidepressiva en andere medicatie.",
    },
    {
      question: "Hoe lang duurt een rTMS-sessie?",
      answer:
        "Een rTMS-sessie duurt doorgaans tussen de 20 en 40 minuten, afhankelijk van het behandelprotocol.",
    },
    {
      question: "Is rTMS pijnlijk?",
      answer:
        "Nee, rTMS is niet pijnlijk. Sommige patiënten ervaren een lichte tinteling of kloppend gevoel op de hoofdhuid.",
    },
    {
      question: "Zijn er langetermijneffecten van rTMS?",
      answer:
        "Onderzoek suggereert dat rTMS langdurige voordelen kan bieden, vooral bij depressie. Soms zijn herhalingssessies nodig.",
    },
    {
      question: "Voor welke leeftijdsgroepen is rTMS geschikt?",
      answer:
        "rTMS wordt meestal toegepast bij volwassenen, maar kan in sommige gevallen ook bij adolescenten worden overwogen.",
    },
    {
      question: "Kan ik na een sessie mijn dagelijkse activiteiten hervatten?",
      answer:
        "Ja, na een rTMS-sessie kunt u direct uw dagelijkse activiteiten hervatten. Er is geen hersteltijd nodig.",
    },
    {
      question: "Wat kost een rTMS-behandeling?",
      answer:
        "De kosten variëren per kliniek en land. Neem contact op voor specifieke informatie over prijzen.",
    },
    {
      question: "Is rTMS wetenschappelijk bewezen?",
      answer:
        "Ja, er is uitgebreid onderzoek gedaan dat de effectiviteit en veiligheid van rTMS aantoont.",
    },
    {
      question: "Kan rTMS helpen bij angststoornissen?",
      answer:
        "Ja, rTMS kan effectief zijn bij het reguleren van hersengebieden die betrokken zijn bij angststoornissen.",
    },
    {
      question: "Wat gebeurt er tijdens een intakegesprek?",
      answer:
        "Tijdens het intakegesprek beoordeelt een specialist uw medische geschiedenis en symptomen om te bepalen of rTMS geschikt is.",
    },
    {
      question: "Hoe bereid ik me voor op een rTMS-behandeling?",
      answer:
        "Er is geen speciale voorbereiding nodig. U kunt gewoon uw normale routine volgen voor de sessie.",
    },
    {
      question: "Kan rTMS helpen bij andere aandoeningen dan depressie?",
      answer:
        "Ja, rTMS wordt ook onderzocht en toegepast bij aandoeningen zoals chronische pijn, tinnitus en PTSS.",
    },
    {
      question: "Zijn er contra-indicaties voor rTMS?",
      answer:
        "Ja, bijvoorbeeld bij metalen implantaten in het hoofd of een voorgeschiedenis van epilepsie. Bespreek dit met uw arts.",
    },
    {
      question: "Hoe wordt de effectiviteit van de behandeling gemeten?",
      answer:
        "Tijdens en na de behandeling worden vragenlijsten en gesprekken gebruikt om de voortgang te evalueren.",
    },
    {
      question: "Hoeveel sessies heb ik nodig voor blijvende resultaten?",
      answer:
        "Dit verschilt per persoon. Vaak zijn 20-30 sessies voldoende, maar herhalingssessies kunnen nodig zijn.",
    },
    {
      question: "Wat moet ik meenemen naar mijn eerste afspraak?",
      answer:
        "Neem een geldig identiteitsbewijs en, indien nodig, uw verwijsbrief van de arts mee.",
    },
    {
      question: "Kan rTMS preventief worden ingezet?",
      answer:
        "Momenteel wordt rTMS voornamelijk gebruikt voor de behandeling van bestaande aandoeningen en niet preventief.",
    },
    {
      question: "Welke specialisten voeren rTMS uit?",
      answer:
        "rTMS wordt uitgevoerd door getrainde professionals, zoals neurologen en psychiaters, met expertise in deze techniek.",
    },
    {
      question: "Zijn er alternatieven voor rTMS?",
      answer:
        "Alternatieven kunnen medicatie, psychotherapie of elektroconvulsietherapie (ECT) zijn, afhankelijk van uw situatie.",
    },
    {
      question: "Kan ik stoppen met medicatie na rTMS?",
      answer:
        "Dit hangt af van uw individuele situatie. Bespreek dit altijd met uw behandelend arts.",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-5 mt-16">Veelgestelde Vragen over rtms behandeling</h2>
      <p className="text-lg mb-12">Lees hier vragen die veelgesteld zijn rondom rTMS of onze kliniek. Vraag jij je af of dit vergoed wordt door de zorgverzekering. Bel ons en wij controleren het voor je. Toch eerst zelf info opdoen? bel uw zorgverzekering en refereer naar onze website </p>
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
              <p className="mt-3 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
