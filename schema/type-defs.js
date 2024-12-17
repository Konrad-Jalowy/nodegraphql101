const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
  }
`;

module.exports = typeDefs;