const Sequelize=require("sequelize")
const conn=require('../util/database')
const question = require('./questions')

const quiz=conn.define("quiz",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

question.belongsTo(quiz, {
    onDelete: 'cascade',
    foreignKey: {
        name: 'quizId',
        allowNull: false
    }
})

quiz.hasMany(question)

module.exports=quiz