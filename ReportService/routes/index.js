const express = require('express');
const router = express.Router();

const dataRoutes = require('./dataRoutes');

router.use('/', dataRoutes);

module.exports = router;
