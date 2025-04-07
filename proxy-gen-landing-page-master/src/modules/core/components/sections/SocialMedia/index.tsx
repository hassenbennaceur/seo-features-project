import React from "react";
import Image from "next/image";

import { Typography } from "../../typography";
import Link from "next/link";

const listsData = [
  {
    id: 1,
    icon: "teligram.svg",
    item: "Telegram",
    url: "https://t.me/genproxyio",
  },
  {
    id: 2,
    icon: "youtube-round.svg",
    item: "YouTube",
    url: "https://www.youtube.com/channel/UCFIUZUyPoBO0mCd4iK5N7lQ",
  },
  {
    id: 3,
    icon: "suppoer.svg",
    item: "Supporto",
    url: "https://t.me/genproxyhelp",
  },
];

const Hero = () => {
  return (
    <section className="flex items-center justify-center pt-16">
      <div className="mt-1 grid w-[60vw] grid-cols-3 items-start justify-start gap-10 lg:w-[34vw] lg:justify-between">
        {listsData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-start gap-3 lg:gap-6"
          >
            <Link href={card.url} rel="noopener noreferrer" target="_blank">
              <Image
                src={`/images/svg/${card.icon}`}
                alt={card.item}
                width={80}
                height={80}
                className="mx-auto w-[50px] lg:w-[80px]"
                loading="lazy"
              />
            </Link>
            <Typography
              Tag="span"
              variant="infoSubText"
              className="mb-2 text-center !text-sm leading-lg text-black lg:!text-xl"
            >
              {card.item}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
