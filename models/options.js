const Sequelize = require('sequelize')
const conn = require('../util/database')

const option = conn.define('option', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	text: {
		type: Sequelize.STRING,
		allowNull: true
	},
	status: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	}
})

module.exports = option