import User from "../../models/user.model.js"

export default {
  Query: {
    user: async (_, args) => {
      try {
        const user = await User.findById(args._id)
        if (!user) {
          throw new Error("error sa find a user")
        }
        return user
      } catch (error) {
        throw error
      }
    },
    users: async () => {
      try {
        const users = await User.find()
        if (!users) {
          throw new Error("error sa find users")
        }
        return users
      } catch (error) {
        throw error
      }
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      try {
        const createdUser = await User.create(args.input)
        if (!createdUser) {
          throw new Error("error sa createdUser")
        }
        return createdUser
      } catch (error) {
        throw error
      }
    },
    updateUser: async (_, args) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(args._id, args.input, {
          new: true,
        })
        if (!updatedUser) {
          throw new Error("error sa updated user")
        }
        return updatedUser
      } catch (error) {
        throw error
      }
    },
    deleteUser: async (_, args) => {
      try {
        const deletedUser = await User.findByIdAndDelete(args._id)
        if (!deletedUser) {
          throw new Error("error sa updated user")
        }
        return deletedUser
      } catch (error) {
        throw error
      }
    },
  },
}
