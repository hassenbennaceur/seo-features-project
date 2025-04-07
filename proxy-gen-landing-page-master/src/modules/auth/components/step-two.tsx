import React from "react";
import Image from "next/image";
import { Typography } from "@/modules/core/components/typography";
import Button from "@/modules/core/components/Button/button";

type HandleToggle = () => void | void;
type HandleNext = (id: number) => void;
export default function StepTwo({
  handleToggle,
  handleNext,
}: {
  handleToggle: HandleToggle;
  handleNext: HandleNext;
}) {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <Typography
          Tag="h2"
          variant={"h2"}
          className="urbanist mb-6 text-center !text-2xl font-black capitalize !leading-9 text-primary-lightPurple-3"
        >
          Raccontaci Di Più
        </Typography>
        <div className="mb-7 flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <Image
              src={"/images/svg/persona.svg"}
              width={19.5}
              height={15.5}
              className="h-5 w-5"
              alt="Nome"
            />
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="Nome"
              id=""
              placeholder="Nome"
            />
          </div>
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <Image
              src={"/images/svg/persona.svg"}
              width={19.5}
              height={20.5}
              className="h-5 w-5"
              alt="Cognome"
            />
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="Cognome"
              id=""
              placeholder="Cognome"
            />
          </div>
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <Image
              src={"/images/svg/telegram.svg"}
              width={19.5}
              height={20.5}
              className="h-5 w-5"
              alt="ID Telegram "
            />
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="ID-Telegram"
              id=""
              placeholder="ID Telegram "
            />
          </div>
        </div>
        <div className="mb-9 flex flex-col gap-[15px]">
          <Button
            className="rounded-[70px] bg-primary-pink-1 px-[39px] py-5 text-xl font-bold leading-[50px] text-white"
            onClick={() => handleNext(2)}
          >
            AVANTI
          </Button>
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
