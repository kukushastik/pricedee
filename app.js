require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');
const authRoutes = require('./src/api/auth.routes');

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

sequelize.sync().then(() => console.log('DB synced'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

const uploadRoutes = require('./src/api/upload.routes');
const path = require('path');

app.use('/upload', uploadRoutes);
app.use('/admin', express.static(path.join(__dirname, 'src/views')));
