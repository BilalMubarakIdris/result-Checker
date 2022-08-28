//importing mongoose
const mongoose = require("mongoose")
// schema represents the structure of a particular document
// Each schema maps to a MongoDB collection
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
  name: {
    type : String,
    unique : true
  } ,
  dob:{
    type:Date
  } ,
  roll: {
    type: String,
    unique: true
  },
  com113 :   String,
  stat111: String,
  com112: String,
  comm_skills: String,
  intro_computer: String,
  citizen_edu: String,
  elemt_prob: String,
  status : String
});

//exporting the model
// A model defines a programming interface for interacting with the database (read, insert, update, etc).
module.exports = mongoose.model("Student", studentSchema)