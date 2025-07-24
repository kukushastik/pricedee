require('dotenv').config();
const express = require('express');
//const { sequelize } = require('./src/models');
const authRoutes = require('./src/api/auth.routes');
const uploadRoutes = require('./src/api/upload.routes');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);
app.use('/admin', express.static(path.join(__dirname, 'src/views')));

//sequelize.sync().then(() => console.log('DB synced'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
