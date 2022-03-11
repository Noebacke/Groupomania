'use strict';
const { DataTypes } = require('sequelize');
const db = require('../config/db');

    const Post = db.define(
      "post",
      {
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_name: {
          type: DataTypes.STRING,
        },
        imageUrl: {
          type: DataTypes.STRING,
        },
        userId: {
          type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
          
        },
        updatedAt: {
          type: DataTypes.DATE,
          
        }
      },
      {}
    );

Post.associate = models => {
  
  //  User
  Post.belongsTo(models.User, {
    foreignKey: "userId",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    hooks: true,
  });

  // Comment
  Post.hasMany(models.Comment, {
    foreignKey: "postId",
  });

}

module.exports = Post


