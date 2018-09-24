const listar = (req, res) => {
    res.render('avaliacoes/listar')
}

const criar = (req, res) => {
    res.render('avaliacoes/criar')
}

const editar = (req, res) => {
    res.render('avaliacoes/editar')
}

const remover = (req, res) => {
    res.render('avaliacoes/remover')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}