const listar = (req, res) => {
    res.send('Listando alunos')
}

const criar = (req, res) => {
    res.send('Criando aluno')
}

const editar = (req, res) => {
    res.send('Editando aluno')
}

const remover = (req, res) => {
    res.send('Removendo aluno')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}