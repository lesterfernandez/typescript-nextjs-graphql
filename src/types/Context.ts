import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { NextApiResponse } from "next";
import { NextIncomingMessage } from "next/dist/server/request-meta";

export interface Context {
  req: MicroRequest | NextIncomingMessage;
  res: NextApiResponse | ServerResponse;
  prisma: PrismaClient;
}
