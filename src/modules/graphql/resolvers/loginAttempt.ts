import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { CookieSerializeOptions } from "next/dist/server/web/types";
import { FieldResolver } from "nexus";
import nookies from "nookies";
import { createToken } from "../../utils/jwt";
import { registrationValidation } from "../../utils/registrationValidation";

export const loginAttempt: FieldResolver<
  "Mutation",
  "login"
> = async (_, { credentials }, { prisma, res }) => {
  await registrationValidation.validate(credentials);
  const existingUser = await getExistingUser(credentials, prisma);

  const encodedToken = await createToken(
    { username: existingUser.username },
    {
      expiresIn: "7d",
    }
  );

  nookies.set({ res }, "sid", encodedToken, {
    httpOnly: true,
    domain: process.env.SERVER_DOMAIN || undefined,
    maxAge: 60 * 60 * 24 * 7, // 7d
    sameSite: true,
    path: "/",
  } as CookieSerializeOptions);

  return {
    username: existingUser.username,
  };
};

const getExistingUser = async (
  credentials: {
    username: string;
    email: string;
    password: string;
  },
  prisma: PrismaClient
) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      username: credentials.username,
      email: credentials.email,
    },
    select: {
      username: true,
      passhash: true,
    },
  });

  const passwordsMatch = await compare(
    credentials.password,
    (existingUser?.passhash as string) || ""
  );

  if (!existingUser || !passwordsMatch) {
    throw new Error("Incorrect username or password!");
  }

  return existingUser;
};
