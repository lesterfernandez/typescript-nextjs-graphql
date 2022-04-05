import { FieldResolver } from "nexus";
import nodemailer from "nodemailer";
import * as Yup from "yup";
import { getTransport } from "../../mail/transport";
import { generateVerificationEmail } from "../../mail/verifyAccount";
import { registrationValidation } from "../../utils/registrationValidation";

export const createAccount: FieldResolver<
  "Mutation",
  "createAccount"
> = async (_, { credentials }) => {
  try {
    await registrationValidation.validate(credentials);
    const transport = await getTransport();
    transport
      .sendMail(generateVerificationEmail(credentials))
      .then(info => {
        console.log(`Message id: ${info.messageId}`);
        console.log(`URL: ${nodemailer.getTestMessageUrl(info)}`);
      });

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
