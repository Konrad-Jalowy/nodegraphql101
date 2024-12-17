const Books = require("../data/books");

const resolvers = {
    Query: {
      books: Books.getAllBooks,
      book: (_, args) => {
        return Books.getBookById(args.id)
      }
    },
  };

module.exports = resolvers;