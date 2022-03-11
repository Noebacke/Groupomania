const { Sequelize } =require('sequelize')
const db = {};
// selectionner la base de donnée à utiliser
const sequelize = new Sequelize("groupomania","root",process.env.PMYSQL,{
    dialect: "mysql",
    host:"localhost",
    
});
// const db = new Sequelize('sqlite::memory:')
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

module.exports = sequelize,db

