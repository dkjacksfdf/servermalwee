const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('subgrupo', {

        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        descrição : {
            type : Sequelize.STRING(200),
            allowNull : false
        },
        fkgrupo :{
            type:Sequelize.INTEGER.UNSIGNED,
            references: 'grupo',
            referenceKey: 'idgrupo'
        }
    })
    grupo.hasMany(subgrupo, {foreignKey: 'fkgrupo'})
}