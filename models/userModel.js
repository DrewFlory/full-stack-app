const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String },
    img: { type: String, default: '/images/Default-Img.png' },
    favorites: [String], 
    quote: String,
    routine: [{type: Schema.Types.ObjectId, ref: "Routine"}]
})

const User = mongoose.model("User", userSchema)

module.exports = User;