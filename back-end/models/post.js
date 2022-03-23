'use strict';
const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('../models/user')


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
        imageUrl: {
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

module.exports = Post


