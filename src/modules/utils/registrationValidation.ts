import * as Yup from "yup";

export const registrationValidation = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .max(200, "Username too long"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password too short")
    .max(200, "Password too long"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .max(200, "Email too long"),
});
