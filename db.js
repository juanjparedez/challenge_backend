const Secuelize = require('sequelize')
require('dotenv/config')

// const EquipoModel = require('./models/equipo')
const TransactionModel = require('./models/transaction')

const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const db_host = process.env.DB_HOST

const sequelize = new Secuelize(db_name, db_user, db_pass, {
	host: db_host,
	dialect: 'mysql',
})

// const Equipo = EquipoModel(sequelize, Secuelize)
const Transaction = TransactionModel(sequelize, Secuelize)

sequelize.sync({ force: false }).then(() => {
	console.log('Synced')
})

module.exports = { Transaction }
