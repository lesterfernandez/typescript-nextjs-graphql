import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { NextIncomingMessage } from "next/dist/server/request-meta";

export interface Context {
  req: MicroRequest | NextIncomingMessage;
  prisma: PrismaClient;
}
