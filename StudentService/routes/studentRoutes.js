const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');


router.get('/', authMiddleware, controller.getStudents);
router.get('/:studentId',authMiddleware, controller.getStudentById);
router.post('/',authMiddleware, controller.createStudent);
router.put('/:studentId', authMiddleware,controller.updateStudent);
module.exports = router;
