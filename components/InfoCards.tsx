import React from "react";
import { FiCpu, FiSmile, FiSearch } from "react-icons/fi"; // Import van iconen
import { FaBrain } from "react-icons/fa6";

const InfoCards = () => {
  const cards = [
    {
      icon: <FaBrain className=" w-10 h-10" />, // rTMS icon
      title: "rTMS",
      description:
        "Psychotherapie gecombineerd met rTMS biedt een snelle, effectieve en veilige behandeling van depressie en dwang (OCS).",
      link: "/rtms-behandeling",
    },
    {
      icon: <FiSmile className=" w-10 h-10" />, // Psychotherapie icon
      title: "Depressie behandeling",
      description:
        "Een bewezen effectieve manier voor het behandelen van verschillende depressieve problemen.",
      link: "/depressie-behandeling",
    },
    {
      icon: <FiSearch className=" w-10 h-10" />, // Intake en Diagnostiek icon
      title: "Intake en Diagnostiek",
      description:
        "Neuropsychologisch onderzoek brengt het cognitieve, emotionele en gedragsmatige functioneren in kaart.",
      link: "/onze-werkwijze",
    },
  ];

  return (
    <div className="container  py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col"
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7ed957]">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>

            {/* Description */}
            <p className="mt-2 text-gray-600">{card.description}</p>

            {/* Link */}
            <a
              href={card.link}
              className="mt-4 text-[#7ed957] font-semibold hover:underline"
            >
              Lees verder
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
