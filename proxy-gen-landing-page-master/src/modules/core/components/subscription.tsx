import { Typography } from "./typography";
import Button from "./button";
import Link from "next/link";

const SubscribeSection: React.FC = () => {
  return (
    <section className="container relative mx-auto -mb-24 p-11 pt-16 sm:-mb-32 sm:p-16">
      <div className="subsCription-liniar mx-auto rounded-[2.5rem] px-10 py-14 lg:w-10/12">
        <Typography
          Tag="h3"
          variant="subText"
          className="mb-5 text-center !text-4lg !leading-6 text-white sm:!text-[36px] sm:leading-9 md:mb-8 "
        >
          Rimani aggiornato sulle novità di GenProxy
        </Typography>
        <div className="mx-auto items-center justify-center gap-6 text-center md:flex md:w-10/12 xl:w-7/12">
          <Link
            href="https://t.me/genproxyio"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="bg-primary-pink shrink-0">
              canale telegram news
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
