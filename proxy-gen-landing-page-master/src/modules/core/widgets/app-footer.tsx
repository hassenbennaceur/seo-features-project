import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/modules/core/components/typography";

const Footer: React.FC = () => {
  const menuItems = [
    {
      title: "Principale",
      links: [
        { text: "Come Funziona?", url: "/#come-funziona" },
        { text: "Dettagli", url: "/#dettagli" },
        { text: "Prezzo", url: "/#prezzo" },
      ],
    },
    {
      title: "Assistenza",
      links: [
        { text: "Contattaci", url: "https://t.me/genproxyhelp" },
        { text: "FAQ", url: "/#faq" },
      ],
    },
    {
      title: "Legali",
      links: [
        { text: "Termini e Condizioni", url: "/tos" },
        { text: "Privacy Policy", url: "/privacy" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Telegram", url: "https://t.me/genproxyio" },
        {
          text: "Youtube",
          url: "https://www.youtube.com/channel/UCFIUZUyPoBO0mCd4iK5N7lQ",
        },
      ],
    },
  ];

  return (
    <footer className="w-screen bg-neutral-secheadlines px-8 pb-8 pt-40 lg:px-48 lg:pb-20">
      <div className="container px-0 py-0">
        <Link href={"/"}>
          <Image
            className="mb-14 w-36 xl:w-[280px]"
            src={"/images/logo.png"}
            width={282}
            height={89}
            alt="logo"
          />
        </Link>
        <div className="mb-20 grid w-full grid-cols-2 items-start justify-between gap-8 md:mb-16 md:grid-cols-3 lg:mb-8 lg:grid-cols-4">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="col-span-1 mb-14 lg:mb-4">
              <Typography
                Tag="h3"
                variant="navTitle"
                className="mb-4 !text-base !font-semibold leading-[60px] lg:mb-6 lg:!text-2xl"
              >
                {menuItem.title}
              </Typography>
              <ul className="flex flex-col gap-4 lg:gap-6">
                {menuItem.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-2sm font-normal leading-xl text-white lg:text-xl lg:leading-xl"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="z-30 flex flex-col items-center justify-start lg:flex-row lg:justify-between">
          <div className="mb-10 md:w-6/12 lg:mb-0">
            <Typography
              Tag="p"
              variant="infoSubText"
              className="text-center lg:mb-6 lg:text-left"
            >
              LUCA ALBERTI <br />
              P.IVA:04472210246
              <br />
              REA: VI - 406652
            </Typography>
            <Typography
              Tag="p"
              variant="text"
              className="hidden text-center font-semibold md:text-left lg:block"
            >
              Copyright 2024
            </Typography>
          </div>
          <Image
            className="z-30 mb-8 w-[139px] lg:ml-auto lg:mr-[100px] lg:w-[290px]"
            src={"/images/payment.png"}
            width={383}
            height={59}
            alt="visa"
          />
          <Typography
            Tag="p"
            variant="text"
            className="text-center font-semibold md:text-left lg:hidden"
          >
            Copyright 2024
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
