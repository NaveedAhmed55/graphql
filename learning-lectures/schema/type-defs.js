const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User!]
    favoriteMovies:[Movie]
    
  }
  type Movie 
  {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
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

    movies:[Movie!]!
    movie(name:String!): Movie!
  }
  type User{
    favoriteMovies:[Movie!]!
  }
  enum Nationality{
    USA
    CANADA
    UK
    AUSTRALIA
    SPAIN
  }
`;

module.exports = { typeDefs, };
