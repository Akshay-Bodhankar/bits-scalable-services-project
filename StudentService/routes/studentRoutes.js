const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentById);
router.post('/', controller.createStudent);
router.put('/:id', controller.updateStudent);

module.exports = router;
