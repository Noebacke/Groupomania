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

// const initApp = async function (){
//     await db.sync({ force: true})
//     console.log('Database synced');
//     const user1 = User.build({ email: "email quelquonque", password:'$2b$10$/rbyKq49T.RziNTGbmI9YeNE.TiFuWpd7stLgYZgr4DQcqPvAPozq', user_name: "Noé", userId: 1});
//     user1.save();
//     const user2 = User.build({ email: 'email quelquonque différent celui ci seta le modérateur', password:'$2b$10$/rbyKq49T.RziNTGbmI9YeNE.TiFuWpd7stLgYZgr4DQcqPvAPozq', user_name:"Nono", admin: true, userId: 2});
//     user2.save();
//     const post1 = Posts.build({ title: 'post13',description: 'Hello depuis un faux post', user_name: `${user1.user_name}`});
//     post1.save();
//     const post2 = Posts.build({ title: 'post23',description: 'Hello depuis le 2ème faux post', user_name: `${user2.user_name}`});
//     post2.save();
// } 

// Rajouter une route pour afficher les images dans le cour

// initApp();
module.exports = app;