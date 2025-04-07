"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Typography } from "../../typography";
import Partnaricon1 from "/public/images/partnaricon.png";
import Partnaricon2 from "/public/images/partnaricon2.png";
import Partnaricon3 from "/public/images/partnaricon3.png";

// Custom styles for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const PartnerSection: React.FC = () => {
  // Configure the settings for the slider
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="liniar-partnar pb-32 pt-20">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <Typography Tag="h1" variant="title" className="text-center">
            I nostri partners
          </Typography>
        </div>
        <Slider {...sliderSettings}>
          <Link
            href="https://ildiariodelreseller.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="partner-linear-gradiant max-auto !flex h-full w-full max-w-[446px] flex-col items-center justify-end rounded-[2.5rem] border-2 px-8 py-9 text-center lg:w-[23.22vw]"
          >
            <Image
              className="mx-auto mb-4 w-[37%]"
              src={Partnaricon1}
              alt="partnar"
              loading="lazy"
            />
            <Typography
              Tag="p"
              variant="infoSubText"
              className="max-w-[232px] lg:max-w-none"
            >
              COMMUNITY ITALIANA che ti permette di GUADAGNARE con la rivendita
              di scarpe
            </Typography>
          </Link>
          <Link
            href="https://www.ildiariodellimprenditoredigitale.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="partner-linear-gradiant max-auto !flex h-full w-full max-w-[446px] flex-col items-center justify-end rounded-[2.5rem] border-2 px-8 py-9 text-center lg:w-[23.22vw]"
          >
            <Image
              className="mx-auto mb-2 w-[34%]"
              src={Partnaricon2}
              alt="partnar"
              loading="lazy"
            />
            <Typography Tag="p" variant="infoSubText">
              COMMUNITY ITALIANA in ambito matched betting professionale
            </Typography>
          </Link>
          <Link
            href="https://genrdp.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="partner-linear-gradiant max-auto  !flex h-full w-full max-w-[446px] flex-col items-center  justify-end rounded-[2.5rem] border-2 px-8 py-9 text-center lg:w-[23.22vw]"
          >
            <Image
              className="mx-auto mb-14 w-[71%]"
              src={Partnaricon3}
              alt="partnar"
            />
            <Typography Tag="p" variant="infoSubText">
              I migliori server al miglior prezzo, per i professionisti
            </Typography>
          </Link>
        </Slider>
      </div>
    </section>
  );
};

export default PartnerSection;
