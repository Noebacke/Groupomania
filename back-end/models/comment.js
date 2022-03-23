'use strict';
const { DataTypes, STRING } = require('sequelize');
const db = require('../config/db');



const Comment = db.define(
  'Comment', {

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_name: {
    type: DataTypes.STRING
  }
}, {
  
});


module.exports = Comment;