import { model, Schema } from "mongoose"

const User = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
})
export default model("User", User)
