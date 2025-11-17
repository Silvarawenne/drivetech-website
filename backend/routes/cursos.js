const express = require('express');
const router = express.Router();

const cursosDisponiveis = [
   {
        id: 1,
        nome: 'Habilitação Carro (Categoria B)',
        duracao: '3 meses',
        preco: 'R$ 1.500,00'
   },
   {
        id:2,
        nome: 'Habilitação Moto (Categoria A)',
        duracao: '2 meses',
        preco: 'R$ 1.000,00'
   },
   {
        id: 3,
        nome: 'Habilitação Carro + Moto (A+B)',
        duracao: '4 meses',
        preco: 'R$ 2.500,00'
   }
];

router.get('/', (req, res) =>{
    res.json(cursosDisponiveis);
});

module.exports = router;