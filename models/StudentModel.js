const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = Schema({
  name: {
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

module.exports = mongoose.model("student", StudentSchema);
