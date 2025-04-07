import React from "react";
import Image from "next/image";
import { Typography } from "../../typography";

const cardsData = [
  {
    id: 1,
    icon: "price-svgrepo.svg",
    heading: "Prezzi Bassi",
    description: "Il costo di un proxy è di 20€ al mese",
  },
  {
    id: 2,
    icon: "plane-svgrepo.svg",
    heading: "Veloce e semplice",
    description:
      "Grazie alle guide presenti nel sito potrai creare il tuo proxy, in maniera facile e veloce",
  },
  {
    id: 3,
    icon: "maximum-control.svg",
    heading: "Privacy e sicurezza",
    description:
      "A differenza di una VPN, i proxy 4G non saranno rilevati dai siti in cui navighi",
  },
  {
    id: 4,
    icon: "tariffs.svg",
    heading: "Funzionalità Extra",
    description: "Ricevi gli SMS arrivati sulla sim che utilizzi per il proxy",
  },
  {
    id: 5,
    icon: "world.svg",
    heading: "Accesso da ovunque",
    description: "Ovunque tu sia, potrai connetterti ai tuoi proxy 4G",
  },
];

const CustomerChooseSection = () => {
  return (
    <section id="dettagli" className="choose-linear pb-56 pt-20 lg:pb-48">
      <div className="container mx-auto">
        <div className="mx-auto lg:w-9/12">
          <Typography
            Tag="h2"
            variant="sectitle"
            className="mb-14 text-center !text-[#0C0B0C] md:mb-20"
          >
            Perchè scegliere GenProxy?
          </Typography>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="md:max-w-auto mx-auto max-w-64 px-2 text-center xl:px-6"
            >
              <Image
                src={`/images/svg/${card.icon}`}
                alt={card.heading}
                width={80}
                height={80}
                className="mx-auto mb-4 h-20"
              />
              <Typography
                Tag="h3"
                variant="subText"
                className="mb-6 capitalize text-primary-pink-1"
              >
                {card.heading}
              </Typography>
              <Typography Tag="p" variant="infoSubText" className="text-black">
                {card.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerChooseSection;
