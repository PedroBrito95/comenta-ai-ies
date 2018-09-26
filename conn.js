const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'comenta-ai'
})

connection.connect(err => {
    if(err){
        console.log('Erro ao conectar no Banco de dados.')
        console.log(err)
    }else{
        console.log('Conexão com o Banco de Dados realizada com sucesso!')

        const query = connection.query('SELECT * FROM alunos')
        query.on('result', (row) => {
            console.log(row)
        })
        query.on('end', () => {
            connection.end()
        })
    }
})