const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  email: {
    type: String,
    require: true,
    unique: true
  }
});

module.exports = mongoose.model("teacher", TeacherSchema);
