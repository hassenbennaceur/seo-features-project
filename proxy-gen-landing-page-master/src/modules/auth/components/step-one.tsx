import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import { Typography } from "@/modules/core/components/typography";
import Button from "@/modules/core/components/Button/button";
import Link from "next/link";
import { stepOneSchema } from "@/modules/auth/schemas/step-one-form.schema";
import { FormTextField } from "@/modules/core/components/form-text-field";
import { StepOneFormValues } from "../types/form-step-one-data.types";
import { initialStepOneFormData } from "../data/step-one-form-initial-data";
import EmailIcon from "public/images/svg/email.svg?icon";
import PasswordIcon from "public/images/svg/password.svg?icon";

type HandleToggle = () => void | void;
type HandleNext = (id: number) => void;
export default function StepOne({
  handleToggle,
  handleNext,
  handleToggleSingin,
}: {
  handleToggle: HandleToggle;
  handleToggleSingin: HandleToggle;
  handleNext: HandleNext;
}) {
  const methods = useForm<StepOneFormValues>({
    defaultValues: initialStepOneFormData,
    resolver: yupResolver(stepOneSchema),
  });
  useEffect(() => {
    if (methods) {
      methods.reset(initialStepOneFormData);
    }
  }, [methods]);

  const { handleSubmit, control } = methods;

  const onSubmit = () => {
    console.log("submited");
    handleNext(1);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-start">
        <Typography
          Tag="h2"
          variant={"h2"}
          className="urbanist text-center !text-2xl font-black !leading-[60px] text-primary-lightPurple-3"
        >
          Registrati
        </Typography>
        <Typography
          Tag="p"
          variant={"text"}
          className="redhat mb-7 !text-base !leading-6 text-black"
        >
          Hai già un account?{" "}
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
            Accedi
          </Typography>
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-7 flex w-full flex-col gap-4">
              <FormTextField
                Icon={(error) => {
                  return (
                    <EmailIcon
                      width={19.5}
                      height={15.5}
                      className={
                        error?.error?.message
                          ? "text-[#E60479]"
                          : "text-[#949394]"
                      }
                    />
                  );
                }}
                className="w-full border-none pl-2 text-black outline-none"
                type="text"
                name="email"
                id="step one email id"
                placeholder="Il Tuo Indirizzo Email"
                control={control}
              />
              <FormTextField
                Icon={(error) => (
                  <PasswordIcon
                    width={19.5}
                    height={20.5}
                    className={
                      error?.error?.message
                        ? "text-[#E60479]"
                        : "text-[#949394]"
                    }
                  />
                )}
                className="w-full border-none pl-2 text-black outline-none"
                type="password"
                name="password"
                id="step one password id"
                placeholder="Password"
                control={control}
              />
              <FormTextField
                Icon={(error) => (
                  <PasswordIcon
                    width={19.5}
                    height={20.5}
                    className={
                      error?.error?.message
                        ? "text-[#E60479]"
                        : "text-[#949394]"
                    }
                  />
                )}
                className="w-full border-none pl-2 text-black outline-none"
                type="password"
                name="confirmPassword"
                id="step one Conferma Password id"
                placeholder="Conferma Password"
                control={control}
              />
            </div>
            <div className="mb-9 flex flex-col items-center gap-[15px]">
              <Button
                type="submit"
                className="urbanist !w-[207px] rounded-[70px] bg-primary-pink-1 !px-4 !text-xl font-bold uppercase leading-[50px] text-white"
              >
                REGISTRATI
              </Button>
              <Button className="flex items-center gap-4 rounded-[70px] !bg-black p-4 leading-6 text-white">
                <Image
                  src={"/images/svg/google.svg"}
                  width={27}
                  height={27}
                  className="h-7 w-7"
                  alt="password"
                />
                <Typography
                  Tag="span"
                  variant={"text"}
                  className="!sm:text-4lg !text-3sm font-bold !leading-6 text-white"
                >
                  Sign up with google
                </Typography>
              </Button>
            </div>
          </form>
        </FormProvider>
        <hr className="mb-9 h-1 w-2/3 border-t border-gray-300" />
        <Typography
          Tag="p"
          variant={"text"}
          className="redhat mb-9 max-w-[287px] text-center !text-sm !leading-5 text-placeHolder lg:mb-[73px]"
        >
          Premendo su «registrati», accetti i nostri <br />
          <Link href={"/tos"} rel="noopener noreferrer" target="_blank">
            <Typography
              Tag="span"
              variant={"text"}
              className="redhat !text-sm !font-bold !leading-5"
            >
              Termini e condizioni{" "}
            </Typography>
          </Link>
          e la{" "}
          <Link href={"/privacy"} rel="noopener noreferrer" target="_blank">
            <Typography
              Tag="span"
              variant={"text"}
              className="redhat !text-sm !font-bold !leading-5"
            >
              Privacy policy
            </Typography>
          </Link>
        </Typography>
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
