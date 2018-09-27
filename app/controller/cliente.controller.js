const db = require('../config/db.config.js');

const Cliente = db.clientes;

exports.create = (req, res) => {
    Cliente.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade
    }).then(cliente => {
        res.send(cliente);
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Cliente.update({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade     
    },{where: {id_cliente : id}}).then(()=> {
        res.status(200).send('Cliente atualizado com sucesso');
    });
};

exports.findAll = (req, res) => {
    Cliente.findAll().then(clientes => {
        res.send(clientes);
    });
};

exports.findById = (req,res) => {
    Cliente.findById(req.params.id).then(cliente => {
        res.send(cliente);
    });
};

exports.delete = (req, res) => {
    Cliente.destroy({where : {id_cliente: req.params.id}}).then(() => {
        res.status(200).send('Cliente deletado com sucesso');
    });
};