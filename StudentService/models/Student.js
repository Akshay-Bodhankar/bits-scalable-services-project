const mongoose = require('mongoose');

const vaccinationRecordSchema = new mongoose.Schema({
  driveId: String,
  vaccineName: String,
  date: Date
});

const studentSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  class: String,
  gender: String,
  dob: Date,
  vaccinationRecords: [vaccinationRecordSchema]
});

module.exports = mongoose.model('Student', studentSchema);
