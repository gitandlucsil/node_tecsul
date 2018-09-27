module.exports = (app) => {
    const usuario = require('../controller/usuario.controller.js');

    app.post('/api/usuario',app.urlencodedParser,usuario.create);

}