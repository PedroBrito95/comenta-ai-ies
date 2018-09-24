const express = require('express')
const route = express.Router()

// Importar controller
const avaliacoesController = require('../controllers/avaliacoes')

// Definir rotas
route.get('/listar', avaliacoesController.listar)
route.get('/criar', avaliacoesController.criar)
route.get('/editar', avaliacoesController.editar)
route.get('/remover', avaliacoesController.remover)

module.exports = route