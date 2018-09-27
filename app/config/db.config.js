const env = require('./env.js');

const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database,
                                env.username,
                                env.password,{
                                    host: env.host,
                                    dialect: env.dialect
                                });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.clientes = require('../model/cliente.model.js')(db.sequelize, db.Sequelize);
db.vendas = require('../model/venda.model.js')(db.sequelize,db.Sequelize);
db.vendas.belongsTo(db.clientes, {
    foreignKey: 'id_cliente'
});
db.usuarios = require('../model/usuario.model.js')(db.sequelize,db.Sequelize);

module.exports = db;