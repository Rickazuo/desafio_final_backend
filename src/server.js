const express = require('express');
const cors = require('cors');
const fileUploadProvider = require('./providers/fileUploadProvider.js');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dishRoutes = require('./routes/dishRoutes');
const bcrypt = require('bcrypt');
const knex = require('../knexfile'); 
const UserController = require('./controllers/UserController'); 

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(fileUploadProvider);
app.use(cors());
app.use(express.json());

app.post('/auth/register', UserController.create);

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/dish', dishRoutes);

app.get('/', (req, res) => {
    res.send('API rodando...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
