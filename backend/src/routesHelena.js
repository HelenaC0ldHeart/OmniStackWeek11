const express = require('express');

const routes = express.Router();

routes.post('/users/', (request, response) => {

    const body = request.body;
    
    console.log(body);

    return response.json({
        event: 'Omni Stack Week 11',
        Student: 'Helena C0ldheart'
    });
});

module.exports = routes;