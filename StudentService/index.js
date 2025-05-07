require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const vaccinationRoutes = require('./routes/vaccinationRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected to student-db'))
.catch(err => console.log(err));

app.use('/students', studentRoutes);
app.use('/students', vaccinationRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Auth Service running on http://${HOST}:${PORT}`);
});