module.exports = (app) => {
    const cliente = require('../controller/cliente.controller.js');

    app.post('/api/cliente',cliente.create);
    app.put('/api/cliente/:id',cliente.update);
    app.get('/api/cliente/:id',cliente.findById);
    app.get('/api/clientes',cliente.findAll);
    app.delete('/api/cliente/:id',cliente.delete);
}