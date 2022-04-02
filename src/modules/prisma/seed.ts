import { prisma } from "../../lib/prisma";

(async () => {
  await prisma.user.deleteMany();
})();

export {};
