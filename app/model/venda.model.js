module.exports = (sequelize,Sequelize) => {
    const Venda = sequelize.define('venda',{
        id_venda: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: Sequelize.DATE
        },
        valor: {
            type: Sequelize.INTEGER
        }
    });
    
    return Venda;
}