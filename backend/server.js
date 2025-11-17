// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Importar Rotas e Modelos
const cursosRouter = require('./routes/cursos');
const Mensagem = require('./Models/Mensagem');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// --- 4. Conexão com o MongoDB Atlas ---
const uri = process.env.MONGO_URI; // Pega a string do .env

mongoose.connect(uri)
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch(err => console.error("Erro ao conectar MongoDB:", err));
// -------------------------------------

// --- Rotas ---
app.use('/api/cursos', cursosRouter); // Rota de Cursos

// Rota de Contato (AGORA SALVANDO NO BANCO)
app.post('/api/contact', async (req, res) => { // 5. Transformamos em 'async'
  console.log('--- NOVA MENSAGEM RECEBIDA ---');

  const { nome, email, mensagem } = req.body;

  // 6. Criar uma nova instância do Modelo
  const novaMensagem = new Mensagem({
    nome: nome,
    email: email,
    mensagem: mensagem
  });

  try {
    // 7. Salvar no Banco de Dados
    await novaMensagem.save(); // Espera o salvamento ser concluído

    console.log('Mensagem salva no MongoDB!');
    console.log('---------------------------------');

    res.status(200).json({ message: 'Mensagem recebida com sucesso!' });

  } catch (error) {
    console.error('Erro ao salvar mensagem:', error);
    console.log('---------------------------------');
    res.status(500).json({ message: 'Erro ao salvar a mensagem no banco de dados.' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});