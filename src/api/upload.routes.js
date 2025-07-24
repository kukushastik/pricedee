const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/upload.controller');
const auth = require('../middlewares/auth');

const upload = multer({ dest: 'uploads/' });
router.post('/upload', auth, upload.single('file'), uploadController.handleUpload);

module.exports = router;
