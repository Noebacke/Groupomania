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
      },
      {}
    );

Post.associate = models => {
  
  Post.hasOne(models.user, {
    onDelete: 'cascade',
  });

  Post.hasMany(models.comment, {
    onDelete: 'cascade',
  })
}

module.exports = Post


