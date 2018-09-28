const express = require('express');
const app = express();
const db = require('./app/config/db.config.js');
const http = require('http');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const authorization = require('./app/auth/auth.js');
const auth = authorization(app);
app.use(auth.initialize());

this.app = http.createServer(app);

db.sequelize.sync({force: false}).then(() => {
    console.log('Cria, deleta e resincroniza as tabelas');
});

//Cria parser para application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.urlencodedParser = urlencodedParser;
app.auth = auth;

require('./app/router/cliente.route.js')(app);
require('./app/router/venda.route.js')(app);
require('./app/router/usuario.route.js')(app);
require('./app/router/auth.route.js')(app);

app.listen(8081,()=>{
    console.log("App escutando na porta 8081");
});