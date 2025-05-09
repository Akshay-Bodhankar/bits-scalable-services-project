const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  vaccineName: String,
  date: Date,
  exportedAt: Date
});
module.exports = mongoose.model('Report', reportSchema);
