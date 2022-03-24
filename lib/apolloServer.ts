import { ApolloServer } from "apollo-server-micro";
import { schema } from "../modules/graphql/schema";

const server = new ApolloServer({
  schema,
  context: ({ req }) => ({ req }),
});

export { server };
