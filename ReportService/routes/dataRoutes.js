const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/data', dataController.getData); // For filtering/pagination
router.get('/data/export/:format', dataController.exportData); // For CSV, PDF, XLS

module.exports = router;
