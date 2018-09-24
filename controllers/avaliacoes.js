const listar = (req, res) => {
    res.send('Listando avaliações')
}

const criar = (req, res) => {
    res.send('Criando avaliação')
}

const editar = (req, res) => {
    res.send('Editando avaliação')
}

const remover = (req, res) => {
    res.send('Removendo avaliação')
}

module.exports = {
    listar,
    criar,
    editar,
    remover
}