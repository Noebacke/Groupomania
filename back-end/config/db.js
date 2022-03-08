const { Sequelize } =require('sequelize')

// selectionner la base de donnée à utiliser
const sequelize = new Sequelize("groupomania","root",process.env.PMYSQL,{
    dialect: "mysql",
    host:"localhost",
    
});
// const db = new Sequelize('sqlite::memory:')


module.exports = sequelize
