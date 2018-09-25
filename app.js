const express = require('express')
const app = express()
const path = require('path')
const port = process.env.port || 3000

// Definir caminho das views e view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Importar rotas
const homeRouter = require('./routes/index')
const alunosRouter = require('./routes/alunos')
const iesRouter = require('./routes/ies')
const avaliacoesRouter = require('./routes/avaliacoes')
const cursosRouter = require('./routes/cursos')

// Usar rotas
app.use('', homeRouter)
app.use('/alunos', alunosRouter)
app.use('/ies', iesRouter)
app.use('/avaliacoes', avaliacoesRouter)
app.use('/cursos', cursosRouter)

// Iniciar app

app.listen(port, () => {
    console.log('A mágica acontece na porta: ' + port)
})