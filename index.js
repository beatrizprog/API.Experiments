const express = require('express');
const app = express();

const conf = require('dotenv').config().parsed;

const port = conf.HTTPPORT;


// Objeto que será executado quando houver uma requisição.
const thing = {
   // resJson: async (req, res) => {}

    getAll: async (req, res) =>{
        res.json({"req": req.method, "status":"ok"});
     },
    getOne: async (req, res) =>{
        const id = req.params.id;
        res.json({"req": req.method, "id": req.params.id, "status":"ok"});
    },
    Post: async (req, res) =>{
         res.json({"req": req.method, "id": req.params.id, "status":"ok"});
    },
    Put: async ( req, res) =>{
         res.json({"req": req.method, "id": req.params.id, "status":"ok"});
    },
    Delete: async (req, res) =>{
        const id = req.params.id;
        res.json({"req": req.method, "id": req.params.id, "status":"ok"});
    }
    
}
//objeto que trata requisições para o "user"

const user = {

     getAll: async (req, res) =>{},
     getOne: async (req, res) =>{},
     Post: async (req, res) =>{},
     Put: async ( req, res) =>{},
     Delete: async (req, res) =>{}
    
}

// Recebe os dados do body HTTP e valida em JSON.
const bodyParser = require('body-parser').json();

// Rota para GET -> getAll() -> Recebe, por exemplo, todos os registros.
app.get('/', thing.getAll)

// Rota para GET -> get(id) -> Recebe apenas o registro identificado.
app.get('/:id', thing.getOne);

// Rota para POST -> post() -> Cria um registro -> bodyParser é usado para garantir a chegada de um JSON. Cria um registro 
app.post('/', bodyParser, thing.Post);

// Rota para PUT -> put() -> Modifica apenas o registro especifico
app.put('/:id', bodyParser, thing.Put);

// Rota para DELETE -> delete(id) -> Deleta apenas o registro identificado.
app.delete('/:id', thing.Delete);

//rotas para od usuário
app.get('/user/:id', user.getOne);
app.put('/user/:id', user.Put);
app.delete('/user/:id', user.Delete);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
