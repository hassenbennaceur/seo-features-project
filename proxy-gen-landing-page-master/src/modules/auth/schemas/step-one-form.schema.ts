import { StepOneFormValues } from "../types/form-step-one-data.types";
import { ObjectSchema, string, object, ref } from "yup";
export const stepOneSchema: ObjectSchema<StepOneFormValues> = object().shape({
  email: string().email("Invalid email").required("Field is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/\d/, "Password must contain a number")
    .matches(/[^a-zA-Z\d\s]/, "Password must contain a symbol"),
  confirmPassword: string()
    .required("Confirm password is required")
    .oneOf([ref("password")], "Passwords must match"),
});
