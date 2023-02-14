// Essa linha de código importa o módulo "express" para uso em um aplicativo Node.js.
const express = require('express')

//Essa linha de código cria uma instância do aplicativo Express para uso na definição de rotas e manipuladores 
const app = express()

const conf = require('dotenv').config().parsed;

//armazena o número da porta que será usada para inicia, Nesse caso, a porta é definida como 3000.
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})