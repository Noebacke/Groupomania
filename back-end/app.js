const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const db = require('../back-end/config/db')
const helmet = require("helmet");
const User = require('./models/user');
const Post = require('./models/post');
const Comment = require('./models/comment')
const postRoutes = require("./routes/post.routes");
const commentRoutes = require("./routes/comment.routes");
const userRoutes = require('./routes/user.routes');


//Se connecter à la base de donnée choisie
try {
    db.authenticate();
    console.log('connecté à la base de donnée MySQL !');
} catch (err) {
    console.error('impossible de se connecter, erreur suivante :', error);
}

//Associations

Post.hasMany(Comment)
Comment.hasOne(Post)
User.hasMany(Post)
Post.hasOne(User)
Comment.hasOne(User)
User.hasMany(Comment)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin',  `${process.env.CLIENT_URL}`);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use('/images', express.static('images'));


//routes
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/user" , userRoutes);

module.exports = app;