const express = require('express');

const app = express();

app.use(express.json());

/** 
 * Rota / Recuso
 * 
*/
// Metodo Http
// GET = buscar  ou listar qualquer tipo de retorno ou de usuário ou do backend
//POST: Criar uma informação no backend
//PUT: Alterar uma informação no back-end
//DELETE: deletar alguma informação no back-end
//
//
/** END-HERE */

/**
 * Query Params: enviados na rota / nomeados enviados a rota após o simbolo de "?" (Filtros,Paginação,)
 * page=2&name=Helena&age=25
 * 
 *Route Parms: Parametros para indentificar recursos
 * Request Body : Corpo da requisição, ultilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL, MongoDB, CouchDB etc
  * 
  * 
  */

  /**
   * Driver: SELECT * FROM Users
   * Query Builder: table('users').select('*').where()
   */
app.post('/users/', (request, response) => {

    const body = request.body;
    
    console.log(body);

    return response.json({
        event: 'Omni Stack Week 11',
        Student: 'Helena C0ldheart'
    });
});

app.listen(3333)