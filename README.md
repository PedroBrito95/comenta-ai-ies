# Comenta-ai-ies

## Sobre
Back-end para servir app de avaliação de Instituições de Ensino Superior, realizada por alunos, para alunos.

# Pre-requisites:
- nodejs -> Versão v8.0.0
- npm -> Versão v5.0.0
- ejs ->  Versão 2.6.1
- express -> Versão 4.16.3
- nodemon -> Versão 1.18.4
- MySQL -> Versão 10.1.35-MariaDB Source distribution

## Getting Started

- Baixar projeto
- Instalar Nodejs + NPM(versões descritas nos pré-requisitos).
- Instalar o MYSQL. A instalação pode ser nativa, através de máquina virtual (vagrant por exemplo) ou com o xammp. No meu caso, usei o xammp, mas é opcional.
- Crie o Banco de dados acessando o mysql através do terminal:
```
  mysql -u root -p
```
- Execute o script "Script_BD.sql" para criar o banco de dados com o nome "comenta-ai"
- Em alguns casos, após criar o banco de dados, será necessário dar permissões para o usuário root poder executar as queries no BD. Execute os comandos abaixo:
```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
```
```
FLUSH PRIVILEGES;
```
- Lembrando que as opções acima podem mudar, pois no meu teste estou aplicando os privilégios para todos os BDs, para o usuário root, e em qualquer domínio. Não estou considerando um ambiente de produção. 
- No arquivo .js responsável pela conexão com o banco de dados, estou apontando para o host, usuário e senha da minha instalação do MySQL, corrija esse arquivo de acordo com a sua instalação.

- Acessar pasta do projeto e executar:
```
npm install
```
- Após o NPM instalar as dependências, execute o comando abaixo para iniciar o projeto:
```
npm start
```

As rotas podem ser testadas através dos links abaixo:

- Alunos:
```
http://localhost:3000/alunos/listar
```
```
http://localhost:3000/alunos/criar
```
```
http://localhost:3000/alunos/editar
```
```
http://localhost:3000/alunos/remover
```
- IES
```
http://localhost:3000/ies/listar
```
```
http://localhost:3000/ies/criar
```
```
http://localhost:3000/ies/editar
```
```
http://localhost:3000/ies/remover
```
- Avaliações
```
http://localhost:3000/avaliacoes/listar
```
```
http://localhost:3000/avaliacoes/criar
```
```
http://localhost:3000/avaliacoes/editar
```
```
http://localhost:3000/avaliacoes/remover
```

### Improvements:
Projeto em início de desenvolvimento, acompanhar commits para verificar o andamento.

## Running the tests
```
npm test
```

## Deployment
N/A

## Built With

* [NodeJS](https://nodejs.org/) - A linguagem e plataforma utilizada.


## Contributing
Please read [CONTRIBUTING.md](https://gist.github.com/techCarlosEduardo/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Versioning
We use [GitHub](https://github.com) for versioning. For the versions available, see the [tags on this repository](https://github.com/techCarlosEduardo/comenta-ai-ies/tags). 


## Authors

* **Carlos Eduardo da Silva** - *Initial work* - [techcarloseduardo](https://github.com/techCarlosEduardo)

See also the list of [contributors](https://github.com/techCarlosEduardo/comenta-ai-ies/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Este projeto destina-se ao trabalho de conclusão de curso