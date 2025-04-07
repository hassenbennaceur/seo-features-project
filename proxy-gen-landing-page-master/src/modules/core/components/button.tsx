import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      aria-label="generic button"
      className={`inline-block rounded-[2.5rem] bg-primary-lightPurple-1 px-7 py-3 text-3md font-bold uppercase leading-sm text-white outline-none xl:text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
