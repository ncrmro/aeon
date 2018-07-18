import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // get the user token from the headers
      const token = req.headers.authorization || "";

      // try to retrieve a user with the token
      // const user = getUser (token);

      // add the user to the context
      return { user: { username: "Nic" } };
    },
  });

  server.listen().then(({ url }: { url: string }) => {
    console.log(`apollo server listening at ${url}`);
  });
};

startServer().catch((error: Error) => {
  console.error(error);
});
