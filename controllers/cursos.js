const listar = (req, res) => {
    res.render('cursos/listar')
}

const criar = (req, res) => {
    res.render('cursos/criar')
}

const editar = (req, res) => {
    res.render('cursos/editar')
}

const remover = (req, res) => {
    res.render('cursos/remover')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}