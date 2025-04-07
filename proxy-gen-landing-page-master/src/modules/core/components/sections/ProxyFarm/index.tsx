import React from "react";
import Image from "next/image";
import { Typography } from "../../typography";
import Button from "../../Button/button";
import Link from "next/link";
import Shadow from "public/images/svg/shadow.svg?icon";

const proxySection = () => {
  return (
    <section className="flex w-screen items-center justify-center px-10 pb-28 lg:pb-44">
      <div className="relative mx-auto -mt-20 flex flex-col items-center rounded-3xl px-8 pb-9 pt-12 lg:flex-row lg:justify-center lg:rounded-[2.5rem] lg:py-7 lg:pl-[71px] lg:pr-6">
        <div className="proxy-linear absolute inset-0 left-0 top-0 !z-20 h-full w-full rounded-3xl lg:rounded-[40px]"></div>
        <div className="!z-20 flex flex-col items-center justify-center lg:items-start">
          <Typography
            Tag="h3"
            variant="subTitle"
            className="!z-10 mb-4 max-w-[257px] text-center !text-xl capitalize lg:mb-6 lg:max-w-[432px] lg:text-left lg:!text-3xll"
          >
            Hai bisogno di molti proxy?
          </Typography>
          <Typography
            Tag="p"
            variant="infoSubText"
            className="!z-10 mb-5 max-w-[227px] text-center !text-2sm lg:mb-8 lg:max-w-[365px] lg:text-left lg:!text-xl"
          >
            Se necessiti di creare almeno 10 proxy, contattaci per ottenere uno
            sconto esclusivo!
          </Typography>
          <Link
            href={"https://t.me/genproxyhelp"}
            rel="noopener noreferrer"
            target="_blank"
            className="!z-10"
          >
            <Button className="mb-12 !bg-primary-lightPurple-1">
              contattaci
            </Button>
          </Link>
        </div>
        <div className="!z-30 hidden w-[49%] min-w-[434px] max-w-[502px] lg:block">
          <Image
            src={"/images/proxyimg.webp"}
            width={502}
            height={376}
            className="w-full rounded-[40px] object-cover"
            alt="image"
            loading="lazy"
          />
        </div>
        <div className="!z-30 mx-auto w-full lg:hidden">
          <Image
            className="w-full rounded-3xl object-cover"
            src={"/images/proxy-mobile-img.webp"}
            width={288}
            height={216}
            alt="Pricing Mobile Img"
            loading="lazy"
          />
        </div>
        <Shadow className="svg-wrapper absolute bottom-0 left-1/2 !z-0 hidden w-[86vw] min-w-[1300px] max-w-[1653px] -translate-x-1/2 transform lg:block" />
      </div>
    </section>
  );
};

export default proxySection;
