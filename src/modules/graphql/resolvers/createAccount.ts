import { FieldResolver } from "nexus";
import * as Yup from "yup";
import { registrationValidation } from "../../utils/registrationValidation";

export const createAccount: FieldResolver<
  "Mutation",
  "createAccount"
> = async (_, { credentials }) => {
  try {
    await registrationValidation.validate(credentials);
    return {
      message:
        "Thanks for registering! Check your email to validate your account.",
      error: false,
    };
  } catch (err) {
    const message =
      (err as Yup.ValidationError).message || "Invalid Input";
    return {
      message,
      error: true,
    };
  }
};
