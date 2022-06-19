const Sequelize = require('sequelize')
const conn = new Sequelize('quizdb','root','',{
    dialect:'mysql',
    host:"localhost",
    // logging: false,
})

module.exports=conn