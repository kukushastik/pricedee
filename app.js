require('dotenv').config();
console.log(env.PORT);
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Временно убрали роуты с БД
// const authRoutes = require('./src/api/auth.routes');
// const uploadRoutes = require('./src/api/upload.routes');
// app.use('/auth', authRoutes);
// app.use('/upload', uploadRoutes);

// app.use('/admin', express.static(path.join(__dirname, 'src/views')));

app.get('/', (req, res) => {
  res.send('Server is working!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
