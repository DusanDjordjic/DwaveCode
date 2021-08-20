import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
if (!mongoose.models["User"]) {
  mongoose.model("User", userSchema, "Users");
}

const User = mongoose.models["User"];
export default User;
