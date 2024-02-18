const express = require('express');
const cors = require('cors');

const app = express();

app.use('/uploads', express.static('uploads'));

const uploadRoutes = require('./routes/uploadRoutes.js'); 
app.use(uploadRoutes); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API rodando...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
