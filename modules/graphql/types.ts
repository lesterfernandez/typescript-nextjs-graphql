import { booleanArg, extendType, nonNull } from "nexus";

export const testQuery = extendType({
  type: "Query",
  definition: t => {
    t.boolean("test", {
      args: { bool: nonNull(booleanArg()) },
      resolve: async (_, { bool }, { prisma }) => {
        // await prisma.user.create({
        //   data: {
        //     email: "alice@gmail.com",
        //     username: "alice",
        //     passhash: "123412",
        //   },
        // });
        const users = await prisma.user.findMany();
        console.log(users);
        return bool;
      },
    });
  },
});
