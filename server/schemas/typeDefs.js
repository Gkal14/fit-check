const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  reviews: [Review]
}
type Review {
  _id: ID
  reviewText: String
  username: String
}
type Auth {
  token: ID!
  user: User
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
  reviews(username: String): [Review]
  review(_id: ID!): Review
}
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addReview( reviewText: String!): Review
}
`;

module.exports = typeDefs;
