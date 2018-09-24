const listar = (req, res) => {
    res.send('Listando ies')
}

const criar = (req, res) => {
    res.send('Criando ies')
}

const editar = (req, res) => {
    res.send('Editando ies')
}

const remover = (req, res) => {
    res.send('Removendo ies')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}