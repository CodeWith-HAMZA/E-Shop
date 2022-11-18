import { models, model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
     
    password: {
      type: String,
      required: true, 
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema); // agar already model hua wa he? then select the collection, but if not? then, create one..!

export default User;
