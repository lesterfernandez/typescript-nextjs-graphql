import { MicroRequest } from "apollo-server-micro/dist/types";

export interface Context {
  req: MicroRequest;
}
