"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Typography } from "./typography";
import { countries } from "../constants/countries";

export default function Select() {
  const [selected, setSelected] = useState({ name: "Italy" });

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-[70px] border border-solid border-[#94939480] px-5 py-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <Typography
            Tag="span"
            variant="text"
            className="block truncate !text-base !leading-5 text-[#949394]"
          >
            {selected.name}
          </Typography>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Image
              src={"/images/svg/chevron-bottom.svg"}
              width={20}
              height={20}
              className="h-5 w-5 text-gray-400"
              alt={"chevron"}
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {countries.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <Image
                          src={"/images/svg/chevron-bottom.svg"}
                          width={20}
                          height={20}
                          className="h-5 w-5 text-gray-400"
                          alt={"chevron"}
                        />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
