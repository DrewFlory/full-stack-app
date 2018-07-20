const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routineSchema = new Schema ({
    Workout: String,
    Weight: {type: Number},
    Reps: {type: Number},
    Sets: {type: Number},
    Details: {type: String},
    Userid: {type:Schema.Types.ObjectId, ref:"User"},
})

const Routine = mongoose.model("Routine", routineSchema)

module.exports = Routine;