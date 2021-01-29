import { ApolloServer } from "apollo-server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import RandomJokesAPI from "./datasources/randomJokes";


// create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    randomJokesAPI: new RandomJokesAPI(),
  }),
});

// run server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
