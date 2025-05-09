const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    const formattedStudents = students.map(student => ({
      ...student.toObject(),  // ✅ Fix: use each "student", not the full "students" array
      dob: student.dob.toISOString().split('T')[0], // Format DOB
    }));
    res.status(200).json(formattedStudents);
  } catch (err) {
    console.error('Error retrieving students:', err);
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
};

exports.getStudentById = async (req, res) => {
  const studentId = req.params.studentId;
  try {
      const student = await Student.findOne({ studentId: studentId });
      if (!student) {
          return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json(student);
  } catch (err) {
      console.error("Error retrieving student:", err); // Add this line
      res.status(500).json({ error: "Failed to retrieve student" });
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    next(err);
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const updated = await Student.findOneAndUpdate(
      { studentId: req.params.studentId }, // use custom studentId
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};
