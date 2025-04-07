import React from "react";

interface ButtonProps {
  onClick?: () => void | void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label="generic button"
      className={`inline-block rounded-[2.5rem] bg-primary-lightPurple-3 px-7 py-3 text-3md font-bold uppercase leading-sm text-white outline-none xl:text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
