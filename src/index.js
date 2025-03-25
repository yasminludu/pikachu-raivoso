const express = require('express');
const cors = require('cors');
const path = require('path');
const createUser = require('./usecases/createUser.usecase');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
    const pagePath = path.resolve(__dirname, '../index.html');
    res.sendFile(pagePath);
});

app.post('/api/usuarios', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

app.listen(3000, () => console.log('Escutando na porta 3000'));