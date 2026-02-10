import mongoose from "mongoose"

const URI =
  "mongodb+srv://princenagac4work_db_user:1zJvJo3UNmAOWd9l@form.pldqfgj.mongodb.net/form?retryWrites=true&w=majority"
const connectDB = async () => {
  if (!URI) {
    throw new Error("MONGODB_URL not defined sa .env")
  }

  try {
    await mongoose.connect(URI, {
      dbName: "dbtest",
      appName: "ojtSimpleApp",
    })
    console.log("MongoDB connected!")
  } catch (error) {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  }
}

export default connectDB
