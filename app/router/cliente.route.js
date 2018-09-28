module.exports = (app) => {
    const cliente = require('../controller/cliente.controller.js');

    app.post('/api/cliente',[app.auth.authenticate()],cliente.create);
    app.put('/api/cliente/:id',cliente.update);
    app.get('/api/cliente/:id',[app.auth.authenticate()],cliente.findById);
    app.get('/api/clientes',cliente.findAll);
    app.delete('/api/cliente/:id',cliente.delete);
}