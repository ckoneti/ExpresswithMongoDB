import mongoose, { Mongoose } from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the username"]
    },
    email: {
        type: String,
        require: [true, "please add the user email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        require: [true, "please add the user password"]
    },
},
    {
        timestamps: true
    }
)
export default mongoose.model("users", userSchema);