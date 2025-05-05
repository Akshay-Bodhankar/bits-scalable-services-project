require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');
const vaccinationRoutes = require('./routes/vaccinationRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/students', studentRoutes);
app.use('/students', vaccinationRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(4001, () => console.log('Student Service running on port 4001'));
  })
  .catch(err => console.error(err));
