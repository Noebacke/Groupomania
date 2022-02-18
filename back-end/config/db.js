const { Sequelize } =require('sequelize')

// selectionner la base de donnée à utiliser
const db = new Sequelize("groupomania","root",process.env.PMYSQL,{
    dialect: "mysql",
    host:"localhost",
    define: {
        timestamps: false
    }
});
// const db = new Sequelize('sqlite::memory:')

module.exports = db
