const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    name: String,
    category: String,
    muscle: String,
    equipment: String,
    description: String,
    image1: String,
    image2: String
})

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise;