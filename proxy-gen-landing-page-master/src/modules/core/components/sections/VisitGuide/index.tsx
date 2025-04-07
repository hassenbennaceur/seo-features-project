import { Typography } from "../../typography";
import Image from "next/image";
import StatefulButton from "../../stateful-button";

const VisitGuide = () => {
  return (
    <section className="relative flex w-screen items-end justify-end pb-8 pl-8 pt-80 md:py-48 lg:pl-0 lg:pr-[328px]">
      <div className="guide-linear-gradient absolute inset-0 left-0 top-0 z-10 h-full w-full"></div>
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          className=" hidden h-full w-full object-cover sm:block"
          src={"/images/visit-banner.webp"}
          width={1920}
          height={800}
          alt="hero"
          loading="lazy"
        />
        <Image
          className="h-full w-full object-cover sm:hidden"
          src={"/images/guide-mobile.webp"}
          width={430}
          height={674}
          loading="lazy"
          alt="hero"
        />
      </div>
      <div className="z-30">
        <div className="flex max-w-[568px] flex-col lg:ml-auto">
          <Typography
            Tag="h2"
            variant="sectitleWhite"
            className="sectitleWhite mb-6 max-w-[250px] capitalize lg:max-w-[520px]"
          >
            Dai un occhiata alle nostre guide
          </Typography>
          <Typography
            Tag="span"
            className="cousine mb-8 w-full max-w-[350px] text-sm uppercase !leading-[1.8rem] tracking-[6px] md:max-w-none lg:!text-3md lg:tracking-[8px]"
          >
            Crea passo passo il tuo proxy mobile
          </Typography>
          <Typography
            Tag="p"
            variant="text"
            className="mb-10 w-full max-w-[367px] leading-xl lg:max-w-[568px]"
          >
            Grazie alle nostre guide potrai creare il tuo proxy 4G velocemente e
            senza sforzi, ti basterà ripetere la procedura illustrata nel video.
          </Typography>
          <StatefulButton className="mb-6 !max-w-[230px] !bg-primary-lightPurple-1 lg:!px-8" />
        </div>
      </div>
    </section>
  );
};

export default VisitGuide;
