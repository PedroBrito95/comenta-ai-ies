const express = require('express')
const route = express.Router()

// Importar controller
const cursossController = require('../controllers/cursos')

// Definir rotas
route.get('/listar', cursossController.listar)
route.get('/criar', cursossController.criar)
route.get('/editar', cursossController.editar)
route.get('/remover', cursossController.remover)

module.exports = route