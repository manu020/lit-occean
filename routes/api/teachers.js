const express = require("express");
const router = express.Router();
const Teachers = require("../../models/TeachersModel");
//const {check}

//@route GET api/Teachers
//desc GET all teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teachers.find({});
    res.send(teachers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});
//@route POST api/Teachers
//desc POST all teachers
router.post("/", async (req, res) => {
  const { name, department, age, email } = req.body;
  const newTeacher = new Teachers({
    name: name,
    department: department,
    age: age,
    email: email
  });
  try {
    const teachers = await newTeacher.save();
    res.send(teachers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

//@router PUT api/Teacher/:id
//desc EDIT teacher

router.put("/:id", async (req, res) => {
  const { name, age, email } = req.body;
  const updateTeacher = {};
  if (name) updatedTeacher.name = name;
  if (department) updatedTeacher.department = department;
  if (age) updatedTeacher.age = age;
  if (email) updatedTeacher.email = email;
  try {
    let teacher = Teachers.findById(req.params.id);
    if (!teacher) {
      return res.status(404).send(`no teacher found with is${req.params.id}`);
    }
    teacher = await Teachers.findByIdAndUpdate(
      req.params.id,
      { $set: updateTeacher },
      { new: true }
    );
    res.send(teacher);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});
//@router DELETE api/Teacher/:id
//desc delete teacher
router.delete("/:index", async (req, res) => {
  try {
    let teacher = await Teachers.findById(req.params.id);
    if (!teacher) {
      return res.status(404).send(`no teacher found with is ${req.params.id}`);
    }
    await Teachers.findByIdAndDelete(req.params.id);
    res.json({ msg: "teacher is deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
