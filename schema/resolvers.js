const Books = require("../data/books");

const resolvers = {
    Query: {
      books: Books.getAllBooks,
    },
  };

module.exports = resolvers;