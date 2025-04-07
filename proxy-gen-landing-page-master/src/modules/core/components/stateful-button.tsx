"use client";

import Button from "./Button/button";
import { useModalStore } from "@/modules/stores/modal-store";
import { cn } from "../lib/cn";
import { StatefulButtonProps } from "../types/components-props.types";
const StatefulButton = ({
  text = "SCOPRI DI PIÙ",
  className,
}: StatefulButtonProps) => {
  const { handleSignup } = useModalStore();

  return (
    <Button
      className={cn("mb-8 !bg-primary-lightPurple-1 md:mb-6", className)}
      onClick={() => handleSignup()}
    >
      {text}
    </Button>
  );
};

export default StatefulButton;
