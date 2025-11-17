// Em backend/models/Mensagem.js

const mongoose = require('mongoose');

// Define a "estrutura" da nossa coleção de mensagens
const mensagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true // O campo é obrigatório
  },
  email: {
    type: String,
    required: true
  },
  mensagem: {
    type: String,
    required: true
  },
  dataEnvio: {
    type: Date,
    default: Date.now // Define a data automaticamente
  }
});

// Cria e exporta o modelo baseado no schema
// "Mensagem" será o nome da nossa "tabela" (coleção) no MongoDB
module.exports = mongoose.model('Mensagem', mensagemSchema);