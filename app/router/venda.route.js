module.exports = (app) => {
    const venda = require('../controller/venda.controller.js');

    app.post('/api/venda',app.urlencodedParser,venda.create);
    //app.post('/api/venda',venda.create);
    app.put('/api/venda/:id',app.urlencodedParser,venda.update);
    //app.put('/api/venda/:id',venda.update);
    app.get('/api/venda/:id',venda.findById);
    app.get('/api/vendas',venda.findAll);
    app.delete('/api/venda/:id',venda.delete);
}