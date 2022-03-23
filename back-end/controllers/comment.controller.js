const db = require('../config/db')
const Comment = require('../models/comment')
const Post = require("../models/post");
const User = require('../models/user');


module.exports.getAllComments = async (req, res, next) => {

    await Comment.findAll({
      include: [ Post, User ],
      order: [["createdAt", "DESC",]],
    })
      .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
    
};

module.exports.deleteComment = async ( req, res, next) => {
    const comment = await Comment.findOne({where: { id: req.params.id} });
    const user = await User.findOne({where: { id: req.auth} });

    if (comment.userId != req.auth && user.admin != true) {
      return res.status(400).json({
        error: new Error("Requête non autorisée"),
      }),console.log('Vous navez pas les droits nécéssaires');
    }
    await Comment.destroy({where : {id: req.params.id}})
      .then(() => res.status(200).json({ message: "Commentaire supprimé" }))
      .catch((error) => res.status(404).json({ error }));
};

module.exports.createComment = async (req, res, next) => {
    const user = await User.findOne({where: { id: req.auth} });
    delete req.body.id;
    
    console.log("req.body.id",req.body);
    const createComment = await Comment.create({
        ... req.body,
        description: req.body.description,
        UserId: req.auth,
        postId: req.body.postId,
        user_name: req.body.user_name
        
    });
  
    console.log(createComment);
    createComment
      .save()
      .then(() => res.status(201).json({ message : "Le commentaire a été ajouté" }))
      .catch((error) => res.status(404).json({ error }));
}
