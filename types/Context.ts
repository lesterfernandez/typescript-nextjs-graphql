import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";

export interface Context {
  req: MicroRequest;
  prisma: PrismaClient;
}
