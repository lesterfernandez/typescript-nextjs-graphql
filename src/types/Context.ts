import { PrismaClient } from "@prisma/client";
import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

export interface Context {
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: NextApiRequestCookies;
      });
  res: NextApiResponse | ServerResponse;
  prisma: PrismaClient;
}
