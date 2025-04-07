"use client";
import React from "react";
import Image from "next/image";
import { Typography } from "@/modules/core/components/typography";
import Button from "@/modules/core/components/Button/button";
import Select from "@/modules/core/components/select";
import { useRouter } from "next/navigation";

type HandleToggle = () => void | void;
export default function StepThree({
  handleToggle,
}: {
  handleToggle: HandleToggle;
}) {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <Typography
          Tag="h2"
          variant={"h2"}
          className="urbanist mb-6 text-center !text-2xl font-black capitalize !leading-9 text-primary-lightPurple-3"
        >
          Dove Abiti?
        </Typography>
        <div className="mb-7 flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="Indirizzo"
              id=""
              placeholder="Indirizzo"
            />
          </div>
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="Città"
              id=""
              placeholder="Città"
            />
          </div>
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="CAP"
              id=""
              placeholder="CAP"
            />
          </div>
          <Select />
          <hr className="mx-auto my-5 h-1 w-2/3 border-t border-gray-300" />
          <div className="flex w-full items-center justify-start rounded-[70px] border border-solid border-[#94939480] px-5 py-2">
            <input
              className="w-full border-none pl-2 text-black outline-none"
              type="text"
              name="Codice Fiscale (Se risiedi in EU)"
              id=""
              placeholder="Codice Fiscale (Se risiedi in EU)"
            />
          </div>
        </div>
        <div className="mb-9 flex flex-col gap-[15px]">
          <Button
            className="rounded-[70px] bg-primary-pink-1 px-[39px] py-5 text-xl font-bold leading-[50px] text-white"
            onClick={() =>
              router.push("https://proxy-gen-client-dashboard.vercel.app/")
            }
          >
            CONFERMA
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
