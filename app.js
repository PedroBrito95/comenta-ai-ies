const express = require('express')
const app = express()
const port = process.env.port || 3000

// Importar rotas
const alunosRouter = require('./routes/alunos')
const iesRouter = require('./routes/ies')
const avaliacoesRouter = require('./routes/avaliacoes')

// Usar rotas
app.use('/alunos', alunosRouter)
app.use('/ies', iesRouter)
app.use('/avaliacoes', avaliacoesRouter)

// Iniciar app

app.listen(port, () => {
    console.log('A mágica acontece na porta: ' + port)
})