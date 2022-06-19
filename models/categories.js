const Sequelize=require("sequelize")
const conn=require('../util/database')
const quiz=require('./quiz')

const category=conn.define("category",{
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

quiz.belongsTo(category, {
    onDelete: 'cascade' ,
    foreignKey: {
        name: 'categoryId',
        allowNull: false
    }
});

category.hasMany(quiz);

module.exports=category