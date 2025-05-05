const Student = require('../models/Student');

exports.markVaccinated = async (req, res, next) => {
  try {
    const { driveId, vaccineName, date } = req.body;
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const duplicate = student.vaccinationRecords.find(r => r.driveId === driveId);
    if (duplicate) return res.status(400).json({ message: 'Already vaccinated in this drive' });

    student.vaccinationRecords.push({ driveId, vaccineName, date });
    await student.save();
    res.json(student);
  } catch (err) {
    next(err);
  }
};
