const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: './uploads/', 
    filename: function(req, file, cb) {
        cb(null, 'image-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Rota para upload de imagem
router.post('/upload', upload.single('image'), (req, res) => {
    res.json({ success: true, filePath: req.file.path });
});

module.exports = router;
