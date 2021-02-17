module.exports = (sequelize, Secuelize) => {
	return sequelize.define('transaction', {
		id: {
			type: Secuelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Secuelize.STRING,
		},
		description: {
			type: Secuelize.STRING,
		},
		amount: {
			type: Secuelize.INTEGER,
		},
	})
}
