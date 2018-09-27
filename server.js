const express = require('express');
const app = express();
const db = require('./app/config/db.config.js');
const http = require('http');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
this.app = http.createServer(app);

db.sequelize.sync({force: true}).then(() => {
    console.log('Cria, deleta e resincroniza as tabelas');
});

//Cria parser para application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.urlencodedParser = urlencodedParser;

require('./app/router/cliente.route.js')(app);
require('./app/router/venda.route.js')(app);
require('./app/router/usuario.route.js')(app);

app.listen(8081,()=>{
    console.log("App escutando na porta 8081");
});