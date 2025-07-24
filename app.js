require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');
const authRoutes = require('./src/api/auth.routes');

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/auth', authRoutes);

sequelize.sync().then(() => console.log('DB synced'));

const uploadRoutes = require('./src/api/upload.routes');
const path = require('path');

app.use('/upload', uploadRoutes);
app.use('/admin', express.static(path.join(__dirname, 'src/views')));
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
