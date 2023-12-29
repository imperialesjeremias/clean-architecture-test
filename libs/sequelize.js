const Sequelize = require('sequelize')
const { config } = require('../config/config')

const sequelize = new Sequelize(
    config.dbName, 
    config.dbUser,
    encodeURIComponent(config.dbPassword), {
    host: config.dbHost,
    port: config.dbPort,
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
})

module.exports = { sequelize }