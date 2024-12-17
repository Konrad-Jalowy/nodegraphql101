const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/type-defs");
const books = require("./data/books");


  const resolvers = {
    Query: {
      books: () => books,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});