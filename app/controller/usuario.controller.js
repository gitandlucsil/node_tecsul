const db = require('../config/db.config.js');

const Usuario = db.usuarios;

exports.create = (req, res) => {
    Usuario.create(
        req.body
    ).then(usuario => {
        res.send(usuario);
        }, err => res.send(err))
};