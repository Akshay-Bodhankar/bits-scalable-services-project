const express = require('express');
const router = express.Router();
const controller = require('../controllers/vaccinationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.patch('/:studentId/vaccinate',authMiddleware,controller.markVaccinated);

module.exports = router;
