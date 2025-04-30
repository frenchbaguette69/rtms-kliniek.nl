import React from "react";
import Link from "next/link";
import { FiCpu, FiSmile, FiSearch } from "react-icons/fi";
import { FaBrain } from "react-icons/fa6";

const InfoCards = () => {
  const cards = [
    {
      icon: <FaBrain className="w-10 h-10 text-white" />,
      title: "rTMS Behandeling",
      description:
        "Effectieve rTMS therapie bij depressie en obsessieve-compulsieve stoornis (OCS), volledig zonder medicatie. Wetenschappelijk bewezen resultaat.",
      link: "/rtms-behandeling",
    },
    {
      icon: <FiSmile className="w-10 h-10 text-white" />,
      title: "Depressie Therapie",
      description:
        "Cognitieve gedragstherapie en neuromodulatie voor mensen met lichte tot ernstige depressieve klachten.",
      link: "/depressie-behandeling",
    },
    {
      icon: <FiSearch className="w-10 h-10 text-white" />,
      title: "Intake en Diagnostiek",
      description:
        "Ons psychologisch onderzoek brengt cognitieve, emotionele en gedragsmatige factoren helder in kaart. Basis voor een persoonlijk behandelplan.",
      link: "/onze-werkwijze",
    },
  ];

  return (
    <section
      aria-labelledby="behandelingen-overzicht"
      className="w-[90%] py-12 mx-auto scroll-mt-24"
    >
      <h2 id="behandelingen-overzicht" className="text-3xl font-bold mb-10 text-center text-gray-900">
        Behandelingen en Diagnostiek
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col p-6 bg-white rounded-2xl  hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7ed957]">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold text-gray-900">{card.title}</h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 leading-relaxed">{card.description}</p>

            {/* Link */}
            <Link
              href={card.link}
              className="mt-4 text-[#7ed957] font-semibold hover:underline"
            >
              Lees meer over {card.title.toLowerCase()}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
