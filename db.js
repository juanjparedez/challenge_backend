const Secuelize = require('sequelize')

// const EquipoModel = require('./models/equipo')
const TransactionModel = require('./models/transaction')

const sequelize = new Secuelize('cashflow', 'root', 'Pass.123!', {
	host: 'localhost',
	dialect: 'mysql',
})

// const Equipo = EquipoModel(sequelize, Secuelize)
const Transaction = TransactionModel(sequelize, Secuelize)

sequelize.sync({ force: false }).then(() => {
	console.log('Synced')
})

module.exports = { Transaction }
