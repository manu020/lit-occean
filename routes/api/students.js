const express = require("express");
const router = express.Router();
const Students = require("../../models/StudentModel");
//const {check}

//@route GET api/Students
//desc GET all students
router.get("/", async (req, res) => {
  try {
    const students = await Students.find({});
    res.send(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});
//@route POST api/Students
//desc POST all students
router.post("/", async (req, res) => {
  const { name, age, email } = req.body;
  const newStudent = new Students({
    name: name,
    age: age,
    email: email
  });
  try {
    const students = await newStudent.save();
    res.send(students);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@router PUT api/Student/:id
//desc EDIT student

router.put("/:id", async (req, res) => {
  const { name, age, email } = req.body;
  const updateStudent = {};
  if (name) updatedStudent.name = name;
  if (age) updatedStudent.age = age;
  if (email) updatedStudent.email = email;
  try {
    let student = Students.findById(req.params.id);
    if (!student) {
      return res.status(404).send(`no student found with is${req.params.id}`);
    }
    student = await Students.findByIdAndUpdate(
      req.params.id,
      { $set: updateStudent },
      { new: true }
    );
    res.send(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});
//@router DELETE api/Student/:id
//desc delete student
router.delete("/:id", async (req, res) => {
  try {
    let student = await Students.findById(req.params.id);
    if (!student) {
      return res.status(404).send(`no student found with is ${req.params.id}`);
    }
    await Students.findByIdAndDelete(req.params.id);
    res.json({ msg: "students is deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
