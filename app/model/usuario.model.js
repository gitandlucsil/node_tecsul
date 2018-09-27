const bcrypt = require('bcrypt');

module.exports = (sequelize,Sequelize) => {
    const Usuario = sequelize.define('usuario',{
        id_usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        senha: {
            type: Sequelize.STRING
        }
    },{
        hooks: {
            beforeCreate: usuario => {
                const salt = bcrypt.genSaltSync();
                usuario.set('senha',bcrypt.hashSync(usuario.senha,salt));
            }
        }
    });
    
    Usuario.idPassword = (encodedPassword, senha) => {
        return bcrypt.compareSync(senha,encodedPassword);
    }
    return Usuario;
}