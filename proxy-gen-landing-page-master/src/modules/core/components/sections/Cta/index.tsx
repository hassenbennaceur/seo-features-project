import { Typography } from "../../typography";
import Button from "../../Button/button";
import Link from "next/link";

const SubscribeSection: React.FC = () => {
  return (
    <section className="joinus-linear-gradient py-10">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-24">
          <div className="text-center md:mb-0 lg:text-left">
            <Typography
              Tag="span"
              className="cousine !lg:text-3md mb-4 !text-sm uppercase leading-xl tracking-[0.625em]"
            >
              HAI ANCORA DELLE DOMANDE?
            </Typography>
            <Typography
              Tag="h2"
              variant="subText"
              className="!text-base !font-semibold text-white"
            >
              Dai un occhiata a queste pagine
            </Typography>
          </div>
          <div className="d-flex gap-8 text-center md:text-left">
            <Link
              href="https://www.youtube.com/playlist?list=PLxuEX-4ZqzGBDoYVAgfC59WUujMI71yc1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="borde-white purple mr-6 border-2 border-solid bg-white uppercase">
                GUIDA SETUP
              </Button>
            </Link>
            <Link href="#faq">
              <Button className="borde-white border-2 border-solid bg-transparent uppercase">
                faq
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
