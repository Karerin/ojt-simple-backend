import { gql } from "graphql-tag"

export default gql`
  type User {
    _id: ID!
    name: String
    username: String
    email: String
    age: Int
  }

  input UserInput {
    name: String
    username: String
    email: String
    age: Int
  }

  type Query {
    user(_id: ID!): User
    users: [User]
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(_id: ID!, input: UserInput): User
    deleteUser(_id: ID!): User
  }
`
