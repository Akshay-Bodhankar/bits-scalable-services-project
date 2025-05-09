const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
// GET /reports
router.get('/', async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
});
// GET /reports/paginated?page=1&limit=10
router.get('/paginated', async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const reports = await Report.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(reports);
});
module.exports = router;
