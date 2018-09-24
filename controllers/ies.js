const listar = (req, res) => {
    res.render('ies/listar')
}

const criar = (req, res) => {
    res.render('ies/criar')
}

const editar = (req, res) => {
    res.render('ies/editar')
}

const remover = (req, res) => {
    res.render('ies/remover')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}