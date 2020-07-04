//# Rota/Recurso

//# Métodos HTTP:
//# GET: Buscar uma informação no BackEnd.
//# POST: Criar uma informação no BackEnd.
//# PUT: Alterar uma informação no BackEnd.
//# DELETE: Deletar uma informação no BackEnd.

//# Tipos de Parâmetros:
//# Query Params: Parâmetros nomeados enviados na rota após '?' (filtros, páginas).
//# Route Params: Parâmetros utilizados para identificar recursos.
//# Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.

const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors} = require('celebrate');

const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(3333);