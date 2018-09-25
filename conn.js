const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '192.168.64.2',
    user: 'root',
    password: '',
    database: 'comenta-ai'
})

connection.connect((err) => {
    if(err){
        console.log('Erro ao se conectar')
        console.log(err)
    }else{
        console.log('Conectado com sucesso!')
        connection.query('Select * from alunos', (err, res) => {
            console.log(err, res)
        })
        connection.end()
    }
})