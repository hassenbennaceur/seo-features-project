import Image from "next/image";
import { Typography } from "@/modules/core/components/typography";
import Button from "@/modules/core/components/Button/button";
import Link from "next/link";

type HandleToggle = () => void;
export default function Signin({
  handleToggle,
  handleToggleSingin,
}: {
  handleToggle: HandleToggle;
  handleToggleSingin: HandleToggle;
}) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <Typography
          Tag="h2"
          variant={"h2"}
          className="urbanist text-center !text-2xl font-black !leading-[60px] text-primary-lightPurple-3"
        >
          Accedi
        </Typography>
        <Typography
          Tag="p"
          variant={"text"}
          className="redhat mb-7 !text-base !leading-6 text-black"
        >
          Non hai ancora un account?{" "}
          <Typography
            Tag="span"
            role="button"
            variant={"subTitle"}
            className="redhat !text-base font-bold !leading-6 text-black"
            onClick={() => {
              handleToggleSingin();
              handleToggle();
            }}
          >
            Registrati
          </Typography>
        </Typography>
        <div className="mb-7 flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <Image
              src={"/images/svg/email.svg"}
              width={19.5}
              height={15.5}
              className="h-5 w-5"
              alt="email"
            />
            <input
              className="border-none pl-2 text-black outline-none"
              type="text"
              name=""
              id=""
              placeholder="Indirizzo Email"
            />
          </div>
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <Image
              src={"/images/svg/password.svg"}
              width={19.5}
              height={20.5}
              className="h-5 w-5"
              alt="password"
            />
            <input
              className="border-none pl-2 text-black outline-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
        </div>
        <Typography
          Tag="p"
          variant={"text"}
          className="redhat mb-7 text-center !text-2sm !leading-[150%] text-black"
        >
          Password dimenticata?
        </Typography>
        <div className="mb-9 flex flex-col gap-[15px]">
          <Link href={"https://proxy-gen-client-dashboard.vercel.app/"}>
            <Button className="urbanist rounded-[70px] !bg-primary-pink-1 px-4 py-3 text-base font-bold uppercase leading-[50px] text-white sm:px-8 sm:text-xl">
              Accedi
            </Button>
          </Link>
        </div>
      </div>
      <div
        className="absolute -top-[60px] right-0 !z-[9999] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white sm:-right-[60px] sm:top-0"
        onClick={handleToggle}
      >
        <Image
          src={"/images/svg/close.svg"}
          alt={"close"}
          width={28}
          height={28}
          className="h-5 w-5"
        />
      </div>
    </>
  );
}
