import Image from "next/image";
import { Typography } from "../../typography";
import StatefulButton from "../../stateful-button";

const listsData = [
  {
    id: 1,
    icon: "warn.svg",
    item: "Facilmente rilevabili",
  },
  {
    id: 2,
    icon: "warn.svg",
    item: "Gli utenti normali non navigano con dei proxy da datacenter",
  },
  {
    id: 3,
    icon: "warn.svg",
    item: "Affidabilità dell’IP bassa",
  },
  {
    id: 4,
    icon: "warn.svg",
    item: "Account trust score bassi",
  },
  {
    id: 5,
    icon: "warn.svg",
    item: "Non puoi cambiare IP da remoto",
  },
];

const GenProxyList = [
  {
    id: 1,
    icon: "check.svg",
    item: "Non è rilevabile",
  },
  {
    id: 2,
    icon: "check.svg",
    item: "Gli utenti normali navigano da IP mobili",
  },
  {
    id: 3,
    icon: "check.svg",
    item: "IP altamente affidabili",
  },
  {
    id: 4,
    icon: "check.svg",
    item: "Puoi cambiare IP quando vuoi",
  },
  {
    id: 5,
    icon: "check.svg",
    item: "Aumentano l’account trust score",
  },
];

const compareSection = () => {
  return (
    <section className="hero-banner relative bg-cover bg-center object-cover object-center py-24">
      <div className="checklist-blend-gradient absolute inset-0 left-0 top-0 z-[1] h-full w-full"></div>
      <div className="absolute inset-0 left-0 top-0 h-full w-full">
        <Image
          src="/images/compare-bg.webp"
          className="h-full w-full object-cover"
          width={1920}
          height={1071}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="container">
        <div className="mb-24 flex flex-col gap-7 lg:mb-32 lg:gap-9">
          <Typography
            Tag="h1"
            variant="title"
            className="!z-10 mx-auto flex text-center"
          >
            Gli atri proxy o GenProxy?
          </Typography>
          <Typography
            Tag="p"
            variant="infoSubText"
            className="!z-10 text-center"
          >
            Che differenza c’è tra proxy normali e proxy 4G?
          </Typography>
        </div>

        <div className="mx-auto flex flex-col md:w-10/12">
          <div className="items-stretch justify-between lg:flex">
            <div className="object-cente relative mb-8 rounded-[2.5rem] bg-cover bg-center object-cover px-10 py-16 md:px-16 lg:mb-0 lg:w-5/12">
              <div className="genProxy-checklist-linear-gradient-red absolute left-0 top-0 z-20 h-full w-full rounded-[2.5rem]" />
              <div className="flex max-w-[344px] flex-col">
                <Typography
                  Tag="h3"
                  variant="navTitle"
                  className="z-20 mb-4 text-center !text-4lg font-black md:mb-6 lg:!text-2xl"
                >
                  Gli Altri Proxy
                </Typography>
                <div className="flex flex-col">
                  {listsData.map((card) => (
                    <div key={card.id} className="mb-4 flex items-start gap-4">
                      <Image
                        src={`/images/svg/${card.icon}`}
                        alt={card.item}
                        width={20}
                        height={16}
                        className="z-20 mx-auto mt-1 h-4 w-5 flex-shrink-0 md:h-5 md:w-7"
                      />
                      <Typography
                        Tag="span"
                        variant="infoSubText"
                        className="z-20 w-full"
                      >
                        {card.item}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Typography
              Tag="span"
              variant="title"
              className="z-50 m-auto text-center text-3xl md:text-5xxl"
            >
              VS
            </Typography>
            <div className="relative flex flex-col rounded-[2.5rem] px-10 py-16 md:px-16 lg:w-5/12">
              <div className="genProxy-checklist-linear-gradient-purple absolute inset-0 left-0 top-0 !z-20 h-full w-full rounded-[2.5rem]" />
              <Typography
                Tag="h3"
                variant="navTitle"
                className="!z-20 mb-4 text-center !text-4lg font-black md:mb-6 lg:!text-2xl"
              >
                GenProxy
              </Typography>
              <div className="flex max-w-[344px] flex-col">
                {GenProxyList.map((card) => (
                  <div key={card.id} className="mb-4 flex items-start gap-4">
                    <Image
                      src={`/images/svg/${card.icon}`}
                      alt={card.item}
                      width={20}
                      height={16}
                      className="z-20 mx-auto mt-1 h-4 w-5 flex-shrink-0 md:h-5 md:w-7"
                    />
                    <Typography
                      Tag="span"
                      variant="infoSubText"
                      className="z-20 w-full"
                    >
                      {card.item}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="!z-20 mt-10 text-center lg:ml-auto lg:w-5/12">
            <StatefulButton
              text="INIZIA ORA"
              className="bg-purple mb-4 md:mb-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default compareSection;
