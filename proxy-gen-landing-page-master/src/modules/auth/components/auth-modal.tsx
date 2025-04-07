"use client";
import { Dialog, Transition, Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "@/modules/core/components/Button/button";
import StepOne from "@/modules/auth/components/step-one";
import StepTwo from "@/modules/auth/components/step-two";
import StepThree from "@/modules/auth/components/step-three";
import Signin from "../../core/components/signin";
import { cn } from "../../core/lib/cn";
import { useModalStore } from "@/modules/stores/modal-store";

export default function AuthModal() {
  const { handleSignup, isSignupModalOpen } = useModalStore();

  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabs = [
    {
      id: 1,
      step: (
        <StepOne
          handleToggle={handleSignup}
          handleToggleSingin={() => setLoginOpen(!loginOpen)}
          handleNext={setSelectedIndex}
        />
      ),
    },
    {
      id: 2,
      step: (
        <StepTwo handleToggle={handleSignup} handleNext={setSelectedIndex} />
      ),
    },
    {
      id: 3,
      step: <StepThree handleToggle={handleSignup} />,
    },
  ];

  function handleSignin() {
    setLoginOpen(!loginOpen);
  }

  return (
    <>
      <div className="rounded-full bg-primary-pink-1">
        <Button
          onClick={handleSignup}
          className={`${
            loginOpen
              ? "rounded-full bg-white !px-4 !py-1 !leading-6 text-primary-pink-1 shadow-switch lg:!text-lg xl:!text-4lg 2xl:!px-[22px] 2xl:!py-[2px] 2xl:!text-xl 2xl:!leading-[50px]"
              : "bg-primary-pink-1 !px-4 !py-1 !leading-6 lg:!text-lg xl:!text-4lg 2xl:!px-[22px] 2xl:!py-[2px] 2xl:!text-xl 2xl:!leading-[50px]"
          }`}
        >
          REGISTRATI
        </Button>
        <Button
          onClick={handleSignin}
          className={`${
            !loginOpen
              ? "rounded-full bg-white !px-5 !py-1 !leading-6 text-primary-pink-1 shadow-switch lg:!text-lg xl:!text-4lg 2xl:!px-[27px] 2xl:!py-[2px]  2xl:!text-xl 2xl:!leading-[50px]"
              : "bg-primary-pink-1 !px-5 !py-1 !leading-6 lg:!text-lg xl:!text-4lg 2xl:!px-[27px] 2xl:!py-[2px] 2xl:!text-xl 2xl:!leading-[50px]"
          }`}
        >
          ACCEDI
        </Button>
      </div>
      <Transition appear show={isSignupModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative !z-[99999999]"
          onClose={handleSignup}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[380px] transform rounded-[25px] bg-white px-[50px] py-[45px] align-middle shadow-xl transition-all lg:w-full lg:max-w-[520px] lg:px-[78px] lg:pb-[75px] lg:pt-[60px]">
                  <Tab.Group
                    selectedIndex={selectedIndex}
                    onChange={setSelectedIndex}
                  >
                    <Tab.Panels>
                      {tabs.map((tab, index) => (
                        <Tab.Panel key={index}>{tab.step}</Tab.Panel>
                      ))}
                    </Tab.Panels>
                    <Tab.List className="flex items-center justify-center">
                      {tabs.map((tab, index) => {
                        return (
                          <Fragment key={index}>
                            <Tab
                              key={index}
                              onClick={() => setSelectedIndex(tab.id - 1)}
                              className={({ selected }) =>
                                cn(
                                  "flex h-10 w-10 items-center justify-center rounded-full !text-base font-bold leading-[50px] text-white lg:h-14 lg:w-14 lg:!text-xl",
                                  selected || index < selectedIndex
                                    ? "bg-primary-lightPurple-3"
                                    : "bg-placeHolder",
                                )
                              }
                            >
                              {tab.id}
                            </Tab>
                            {(index === 1 || !index) && (
                              <div
                                className={cn(
                                  "flex-grow border border-b border-solid",
                                  !selectedIndex ||
                                    !(index <= selectedIndex - 1)
                                    ? "border-placeHolder"
                                    : "border-primary-lightPurple-3",
                                )}
                              ></div>
                            )}
                          </Fragment>
                        );
                      })}
                    </Tab.List>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={loginOpen} as={Fragment}>
        <Dialog as="div" className="relative !z-50" onClose={handleSignin}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-[380px] transform rounded-[25px] bg-white px-[50px] py-[45px] align-middle shadow-xl transition-all lg:w-full lg:max-w-[520px] lg:px-[78px] lg:pb-[75px] lg:pt-[60px]">
                  <Signin
                    handleToggleSingin={handleSignup}
                    handleToggle={handleSignin}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
