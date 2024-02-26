const express = require('express');
require('dotenv').config();
const cors = require('cors');
const fileUploadProvider = require('./providers/fileUploadProvider.js');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dishRoutes = require('./routes/dishRoutes');
const bcrypt = require('bcrypt');
const knexConfig = require('../knexfile.js'); 
const knex = require('knex')(knexConfig[process.env.NODE_ENV || 'development']);
const UserController = require('./controllers/UserController');

const app = express();

const corsOptions = {
    origin: 'https://main--food-explorer-rocketseat.netlify.app',
    optionsSuccessStatus: 200
  };

  app.use(cors(corsOptions));

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
