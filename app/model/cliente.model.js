module.exports = (sequelize,Sequelize) => {
    const Cliente = sequelize.define('cliente',{
        id_cliente: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING(60)
        },
        sobrenome: {
            type: Sequelize.STRING(60)
        },
        idade: {
            type: Sequelize.INTEGER
        }
    });
    
    return Cliente;
}