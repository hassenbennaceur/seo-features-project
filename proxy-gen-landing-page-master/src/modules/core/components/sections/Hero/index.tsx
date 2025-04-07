import React from "react";
import trustpilot from "public/images/trustpilot.png";
import Image from "next/image";

import { Typography } from "../../typography";
import Link from "next/link";
import StatefulButton from "../../stateful-button";

const Hero = () => {
  return (
    <section className="hero-banner  relative flex h-screen  bg-[url('/images/mobile/mobile-hero-banner.webp')] bg-cover  bg-center object-cover object-center pb-16 pt-60 md:h-full md:bg-[url('/images/hero-banner.webp')] md:pb-28 md:pt-80 lg:pb-48 xl:pb-60">
      <div className="container flex items-end md:px-10 lg:px-32">
        <div className="md:w-8/12 xl:w-5/12">
          <Typography
            Tag="h1"
            variant="title"
            className="mb-8 max-w-[295px] !font-black leading-[120%] md:mb-6 lg:max-w-[520px]"
          >
            Crea i tuoi proxy 4G/5G utilizzando un telefono
          </Typography>
          <Typography
            Tag="p"
            variant="p"
            className="mb-8 max-w-[366px] leading-xl md:mb-9 lg:max-w-[511px]"
          >
            Ti basta un telefono Android e una SIM per creare il tuo proxy, cosa
            stai aspettando?
          </Typography>
          <StatefulButton />
          <Link
            href="https://it.trustpilot.com/review/genproxy.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={trustpilot}
              className="w-24 lg:w-32"
              alt="Trustpilot Logo"
              placeholder="blur"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
