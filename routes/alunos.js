const express = require('express')
const route = express.Router()

// Importar controller
const alunosController = require('../controllers/alunos')

// Definir rotas
route.get('/listar', alunosController.listar)
route.get('/criar', alunosController.criar)
route.get('/editar', alunosController.editar)
route.get('/remover', alunosController.remover)

module.exports = route