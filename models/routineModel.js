const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema ({
    Workout: String,
    Weight: {type: Number},
    Reps: {type: Number},
    Sets: {type: Number},
})

const Routine = mongoose.model("Routine", routineSchema)

module.exports = Routine;