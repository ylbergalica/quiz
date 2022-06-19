const Sequelize = require('sequelize')
const conn = require('../util/database')
const option = require('./options')

const question = conn.define('question', {
	id : {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	text : {
		type: Sequelize.STRING,
		allowNull: true
	}
})

option.belongsTo(question, {
	onDelete: 'cascade',
	foreignKey: {
		name: 'questionId',
		allowNull: false
	}
})

question.hasMany(option)

module.exports = question