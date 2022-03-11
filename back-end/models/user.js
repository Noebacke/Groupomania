'use strict';
const { DataTypes } = require('sequelize/dist');
const db = require('../config/db');



  const User = db.define('User', {
    
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    
  });

  User.associate = models => {

    // Post
    User.hasMany(models.Post, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      hooks: true,
    });

    // Comment
    User.hasMany(models.Comment, {
      foreignKey: "userId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      hooks: true,
    });

  }

module.exports = User;






