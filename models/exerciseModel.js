const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    Category: String,
    Equipment: String,
    Description: String,
    Muscles: [String],
    Image: String
})

const Exercise = mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise;