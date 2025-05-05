const express = require('express');
const router = express.Router();
const controller = require('../controllers/vaccinationController');

router.patch('/:id/vaccinate', controller.markVaccinated);

module.exports = router;
