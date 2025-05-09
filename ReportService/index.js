require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const reportRoutes = require('./routes/reportRoutes');
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to report-db'))
  .catch(err => console.error(err));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/reports', reportRoutes);
const port = process.env.PORT || 4004;
app.listen(port, () => console.log(`Report Service running on port ${port}`));
