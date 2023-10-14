const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User!]
    
  }
  type friends{
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
  }
  type Query {
    users: [User!]!
    user(id:ID!): User!
  }
  enum Nationality{
    USA
    CANADA
    UK
    AUSTRALIA
    SPAIN
  }
`;

module.exports = { typeDefs };
