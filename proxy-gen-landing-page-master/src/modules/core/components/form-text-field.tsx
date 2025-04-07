import { FC, ReactNode } from "react";
import { Controller, FieldError, Control } from "react-hook-form";
import { StepOneFormValues } from "@/modules/auth/types/form-step-one-data.types";
type FormTextFieldProps = {
  Icon: ({ error }: { error: FieldError }) => ReactNode;
  id?: string;
  placeholder: string;
  name: "email" | "password" | "confirmPassword";
  className?: string;
  type?: string;
  control: Control<StepOneFormValues>;
};

export const FormTextField: FC<FormTextFieldProps> = ({
  Icon,
  type,
  name,
  className,
  placeholder,
  control,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <div className="flex flex-col">
            <div
              className={`flex w-full items-center justify-start rounded-[70px] border border-solid ${
                !!error
                  ? "border-[#E6047980] border-opacity-50"
                  : "border-[#94939480]"
              } px-5 py-2`}
            >
              {<Icon error={error as FieldError} />}
              <input
                {...props}
                className={`${className} ${!!error ? "!text-[#E60479]" : ""}`}
                type={type}
                name={name}
                value={value || ""}
                onChange={onChange}
                placeholder={placeholder}
              />
            </div>
            {!!error && (
              <span className="mt-2 text-center text-2xs font-normal leading-4 text-[#E60479]">
                {error?.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
