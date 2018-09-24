const express = require('express')
const route = express.Router()

// Importar controller
const indexController = require('../controllers/index')

// Definir rotas
route.get('/', indexController.home)

module.exports = route
