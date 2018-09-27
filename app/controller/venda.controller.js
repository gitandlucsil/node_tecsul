const db = require('../config/db.config.js');

const Venda = db.vendas;

exports.create = (req, res) => {
    Venda.create({
        data: req.body.data,
        valor: req.body.valor,
        id_cliente: req.body.id_cliente
    }).then(venda => {
        res.send(venda);
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Venda.update({
        data: req.body.data,
        valor: req.body.valor   
    },{where: {id_venda : id}}).then(()=> {
        res.status(200).send('Venda atualizada com sucesso');
    });
};

exports.findAll = (req, res) => {
    Venda.findAll().then(vendas => {
        res.send(vendas);
    });
};

exports.findById = (req,res) => {
    Venda.findById(req.params.id).then(venda => {
        res.send(venda);
    });
};

exports.delete = (req, res) => {
    Venda.destroy({where : {id_venda: req.params.id}}).then(() => {
        res.status(200).send('Venda deletada com sucesso');
    });
};