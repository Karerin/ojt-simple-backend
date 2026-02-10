import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge"
import { makeExecutableSchema } from "@graphql-tools/schema"
//Schemas
import userTypeDefs from "./schemas/user.typeDefs.js"
//Resolvers
import userResolver from "./resolvers/user.resolver.js"

const typeDefs = mergeTypeDefs([userTypeDefs])
const resolvers = mergeResolvers([userResolver])

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
