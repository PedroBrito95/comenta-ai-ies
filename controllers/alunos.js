const listar = (req, res) => {
    res.render('alunos/listar')
}

const criar = (req, res) => {
    res.render('alunos/criar')
}

const editar = (req, res) => {
    res.render('alunos/editar')
}

const remover = (req, res) => {
    res.render('alunos/remover')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}