import Image from "next/image";
import { Typography } from "../../typography";
import StatefulButton from "../../stateful-button";

const Work = () => {
  return (
    <section
      id="come-funziona"
      className="funziona-linear-gradient relative py-16 md:py-24"
    >
      <div className="container">
        <div className="mx-auto flex w-[84vw] max-w-[1331px] flex-col gap-24 md:w-[70vw] lg:min-w-[1000px] lg:gap-[77px]">
          <div className="flex flex-col items-center gap-5 lg:gap-9">
            <Typography
              Tag="h2"
              variant="title"
              className="text-center !text-2xl !font-black !leading-[123%] text-primary-lightPurple-2 lg:!text-5xl"
            >
              Come funziona?
            </Typography>
            <Typography
              Tag="p"
              variant="p"
              className="max-w-[245px] text-center !text-2sm !text-[#0C0B0C] lg:max-w-none lg:!text-xl"
            >
              I proxy 4G hanno un funzionamento simile a quello di una VPN, ti
              permettono di navigare con un indirizzo IP diverso da quello della
              rete WiFi con cui sei connesso ad internet. Grazie a GenProxy
              potrai creare il tuo proxy con un telefono ed una SIM
            </Typography>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-16">
            <div className="funziona-linear-gradient-wrapper w-full flex-shrink-0 items-center justify-center lg:px-20 lg:py-10">
              <Image
                className="mx-[22px] mb-[8px] mt-[17px] hidden h-full w-full object-cover md:block"
                width={1172}
                height={432}
                src={"/images/work-img.svg"}
                alt="Work Img"
                loading="lazy"
              />
              <Image
                className="h-full w-full object-cover md:hidden"
                src={"/images/work-mobile.svg"}
                width={329}
                height={736}
                alt="Work Img"
                loading="lazy"
              />
            </div>
            <StatefulButton className="mb-6 !rounded-[77px] !bg-primary-lightPurple-3 px-[38px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
