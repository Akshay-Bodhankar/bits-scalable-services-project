const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    const formattedStudents = students.map(student => ({
      ...students.toObject(),
      dob: student.dob.toISOString().split('T')[0], // Format DOB
    }));
    res.status(200).json(formattedStudents);
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve students' });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const formattedStudent = {
      ...student.toObject(),
      dob: student.dob.toISOString().split('T')[0], // Format DOB
    };

    res.status(200).json(formattedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student' });
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
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};
