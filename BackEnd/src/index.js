const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas e recursos
 */
/**
 * Método HTTP
 * 
 * GET: buscar/listar informações no backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de paramentros:
  * 
  * Query Params: Paramentros nomeados enviados na rota apos"?" (filtros, paginação (/Users))
  * Route Params: Paramentros utilizados para identificar recursos (/users/:id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */
/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, MicroSoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
  */


app.listen(3333);

