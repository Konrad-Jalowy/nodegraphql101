const books = require("../data/books");

const resolvers = {
    Query: {
      books: () => books,
    },
  };

module.exports = resolvers;