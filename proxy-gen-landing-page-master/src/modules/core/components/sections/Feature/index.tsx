import React from "react";
import Image from "next/image";
import { Typography } from "../../typography";
import FeatureImg from "public/images/offer-img.webp";
import Button from "../../Button/button";
import Link from "next/link";

const listsData = [
  {
    item: "Possibilità di creare un proxy usando un telefono android e una sim",
  },
  {
    item: "Un bot Telegram con i comandi principali per velocizzare l’esperienza da mobile",
  },
  {
    item: "Connessione tramite DNS, per semplificare la tua operatività",
  },
  {
    item: "Un bot Telegram che reinderizza gli SMS in arrivo sul tuo telefono",
  },
  {
    item: "Cambio IP da remoto",
  },
  {
    item: "Traffico illimitato",
  },
  {
    item: "Connessione alla massima velocità",
  },
  {
    item: "Protezione dei dati tramite crittografia",
  },
  {
    item: "Assistenza dedicata, specializzata in ambito informatico e di operatività di Matched Betting",
  },
];

const OfferSection = () => {
  return (
    <section className="relative pb-10 pt-20 md:pb-20">
      <div className="container mx-auto">
        <div className="mb-10 text-center md:mb-[74px]">
          <Typography
            Tag="h2"
            variant="sectitle"
            className="purple text-center !text-xxl !font-black capitalize !leading-9 lg:!text-3xxl lg:!leading-[60px]"
          >
            Cosa offriamo
          </Typography>
        </div>
        <div className="mb-10 flex flex-col items-end gap-x-4 md:mb-14 lg:flex-row lg:items-center">
          <div className="offer-linear relative row-end-5 grid max-w-[1146px] gap-x-16 gap-y-8 rounded-[2.5rem] px-[50px] py-12 md:grid-cols-2 lg:w-9/12 lg:py-16 lg:pl-16 lg:pr-8">
            <div className="absolute left-1/2 top-1/2 hidden h-[80%] w-[1px] -translate-x-1/2 -translate-y-1/2 transform border-r-[1px] bg-neutral-borders-gray md:block"></div>
            {listsData.map((card, index) => (
              <div key={index} className="flex items-start gap-4">
                <Image
                  src={`/images/svg/light-check.svg`}
                  alt={card.item}
                  width={28}
                  height={28}
                  className="mx-auto mt-1 h-4 w-4 flex-shrink-0 md:mt-2 md:h-7 md:w-7"
                  loading="lazy"
                />
                <Typography
                  Tag="span"
                  variant="text"
                  className="w-full max-w-[433px] text-black"
                >
                  {card.item}
                </Typography>
              </div>
            ))}
          </div>
          <div className="z-10 -ml-20 -mt-20 w-[45vw] max-w-[458px] lg:-mt-10 lg:w-[24vw] lg:min-w-[452px] ">
            <Image
              className="h-full w-full"
              src={FeatureImg}
              alt="Offer Img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="text-center">
          <Link href="/#prezzo">
            <Button className="get-period mb-4 md:mb-6">VEDI IL PREZZO</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
