const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/upload', upload.single('file'), (req, res) => {
    res.send('Arquivo recebido');
});

module.exports = router;
