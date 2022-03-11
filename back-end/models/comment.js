'use strict';
const { DataTypes, STRING } = require('sequelize');
const db = require('../config/db');
const User = require('./user');


const Comment = db.define(
  'Comment', {

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_name:{
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },

  postId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  
});

Comment.associate = (models) => {
  
  Comment.belongsTo(models.post,{
    foreignKey: "postId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  Comment.belongsTo(models.user, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate:"CASCADE"
  })
}

module.exports = Comment;