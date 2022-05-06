import { IncomingMessage } from "http";
import { NextApiRequest } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import nookies from "nookies";
import { verifyToken } from "./jwt";

export const isAuth = async (
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: NextApiRequestCookies;
      })
) => {
  const cookies = nookies.get({ req });
  if (!cookies.sid) {
    throw new Error("not logged in");
  }

  const decodedJWT = await verifyToken(cookies.sid);
  if (!decodedJWT.username) {
    throw new Error("not logged in");
  }

  return decodedJWT;
};
