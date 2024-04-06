// importing mongoose library which is  MongoDB ODM for Node.js
const {model,Schema} = require("mongoose")

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isChecked:Boolean,
},{timestamps:true})

// creating a model
const User = model("User",userSchema);

module.exports = User;
