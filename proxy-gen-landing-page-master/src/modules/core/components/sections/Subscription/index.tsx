import { Typography } from "../../typography";
import Button from "../../Button/button";
import Link from "next/link";

const SubscribeSection: React.FC = () => {
  return (
    <section>
      <div className="container relative mx-auto -mb-16 pt-16">
        <div className="subsCription-liniar mx-auto flex max-w-[1174px] flex-col items-center justify-center rounded-[2.5rem] px-10 py-14 md:w-10/12">
          <Typography
            Tag="h3"
            variant="subText"
            className="mb-3 max-w-[247px] text-center !text-4lg font-black !leading-6 text-white sm:max-w-none sm:!text-[36px] sm:leading-9 lg:mb-5"
          >
            Rimani aggiornato sulle novità di GenProxy
          </Typography>
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
