import React from "react";
import Image from "next/image";
import { Typography } from "@/modules/core/components/typography";

const Hero = ({
  title = "TERMINI E CONDIZIONI",
  bgImgSrc = "/images/tos/hero.webp",
  mobileImgSrc = "/images/tos/tos-mobile.webp",
}) => {
  return (
    <section className="relative flex h-[53vh] w-screen items-end justify-center pb-8 sm:pb-[78px] lg:h-[62vh]">
      <Image
        alt="Hero"
        src={bgImgSrc}
        className="absolute left-0 top-0 hidden h-full w-full lg:block"
        width={1920}
        height={672}
      />
      <div className="absolute inset-0 h-full w-full [background:linear-gradient(0deg,#000_0%,rgba(0,0,0,0.00)_45.31%)]"></div>
      <Image
        alt="Hero"
        src={mobileImgSrc}
        className="absolute left-0 top-0 block h-full w-full lg:hidden"
        width={430}
        height={494}
      />
      <Typography
        Tag="h1"
        variant="title"
        className="urbanist title-shadow z-[1] text-center !text-3xll font-black leading-[47px] tracking-normal shadow-md lg:!text-[96px] lg:!leading-[60px]"
      >
        {title}
      </Typography>
    </section>
  );
};

export default Hero;
