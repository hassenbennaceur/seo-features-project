import Image from "next/image";
import { Typography } from "../../typography";
import StatefulButton from "../../stateful-button";

const listsData = [
  {
    id: 1,
    item: "Possibilità di creare ed utilizzare un proxy",
  },
  {
    id: 2,
    item: "Bot Telegram che ti reindirizza gli SMS",
  },
  {
    id: 3,
    item: "Bot Telegram per monitorare e gestire i proxy",
  },
  {
    id: 4,
    item: "Possibilità di cambiare IP, anche da remoto",
  },
  {
    id: 5,
    item: "Assistenza all’utilizzo del servizio",
  },
];

const pricingSection = () => {
  return (
    <section
      id="prezzo"
      className="prezzo-linear flex w-screen flex-col items-center justify-center px-14 pb-56 pt-[72px] lg:pb-44 lg:pt-24"
    >
      <div className="mx-auto mb-12 text-center lg:mb-20">
        <Typography Tag="h2" variant="sectitle" className="">
          PREZZO
        </Typography>
      </div>
      <div className="linear-pricing w-full items-start overflow-hidden rounded-3xl lg:flex lg:w-[54.32vw] lg:min-w-[1033px] lg:rounded-[2.5rem]">
        <div className="hidden h-full w-[52%] lg:block">
          <Image
            className="h-full w-full object-cover"
            height={533}
            width={759}
            src={"/images/pricing-img.webp"}
            alt="partner"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-8 pt-12 md:pt-12 lg:gap-12 lg:px-10">
          <div className="flex flex-col items-center gap-8 px-8 sm:items-start lg:gap-10 lg:pl-0">
            {listsData.map((card) => (
              <div key={card.id} className="flex items-start gap-3">
                <Image
                  src={"/images/svg/light-check.svg"}
                  width={28}
                  height={28}
                  className="h-4 w-4 lg:h-7 lg:w-7"
                  alt=""
                  loading="lazy"
                />
                <Typography
                  Tag="p"
                  variant="p"
                  className="font-feature-settings redhat max-w-[202px] !text-2sm leading-[150%] text-black sm:max-w-[344px] lg:!text-xl"
                >
                  {card.item}
                </Typography>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Typography
              Tag="p"
              variant="sectitle"
              className="!urbanist mb-1 !text-3xll font-black !leading-[150%] text-primary-lightPurple-2 lg:mb-3 lg:!text-3xxl "
            >
              €20
              <span className="text-2sm font-normal leading-[150%] lg:text-xl">
                /Proxy Per 30 Giorni
              </span>
            </Typography>
            <StatefulButton
              text="Inizia ora"
              className="rounded-[70px] !bg-primary-lightPurple-1 !px-6 !py-0 !text-base !leading-[50px] md:mb-6 lg:!px-9 lg:!text-xl"
            />
          </div>
        </div>
        <div className="w-full lg:hidden">
          <Image
            className="h-full w-full"
            height={320}
            width={549}
            src={"/images/pricing-imgmobile.webp"}
            alt="partner"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default pricingSection;
