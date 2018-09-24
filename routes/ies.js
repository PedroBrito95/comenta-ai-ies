const express = require('express')
const route = express.Router()

// Importar controller
const iesController = require('../controllers/ies')

// Definir rotas
route.get('/listar', iesController.listar)
route.get('/criar', iesController.criar)
route.get('/editar', iesController.editar)
route.get('/remover', iesController.remover)

module.exports = route