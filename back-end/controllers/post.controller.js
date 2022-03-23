const Post = require("../models/post");
const User = require('../models/user');
const Comment = require('../models/comment')

module.exports.getAllPosts = async (req, res, next) => {
  await Post.findAll({
    include: [ Comment, User ],
    order: [["createdAt", "DESC",]],
  })
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(500).json({ error }));
};

module.exports.getPost = async ( req, res, next) => {
  const onePost = {}
  await Post.findOne({where : {id: req.params.id}})
  .then(post => {
    onePost.id = post.id
    onePost.title = post.title
    onePost.user_id = post.user_id
    onePost.user_name = post.user_name
    onePost.description = post.description
    onePost.imageUrl = post.imageUrl
    res.status(200).json(onePost)
    console.log(onePost);
  })
  .catch(error => res.status(404).json({ error }))
};

module.exports.deletePost = async ( req, res, next) => {
  const post = await Post.findOne({where: { id: req.params.id} });
  const user = await User.findOne({where: { id: req.auth} });

  if (post.userId != req.auth && user.admin != true) {
    return res.status(400).json({
      error: new Error("Requête non autorisée"),
    }),console.log('Vous navez pas les droits nécéssaires');
  }
  Post.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Post supprimé" }))
    .catch((error) => res.status(404).json({ error }));
  
  
};

module.exports.createPost = async (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  const user = await User.findOne({where: { id: req.auth} });

  delete postObject.id;
  const userId = req.auth
  let imagePost = "";
    if (req.file) { 
        imagePost = `${req.protocol}://${req.get("host")}/images/${req.file.filename}` 
    }
    console.log("userId",userId);
  const createPost = await Post.create({
      ...postObject, 
      imageUrl: imagePost,
      UserId: userId,
      postId: postObject.id
      
  });

  console.log(createPost);
  createPost.save()
    .then(() => res.status(201).json({ message : "Le post a été ajouté" }))
    .catch((error) => res.status(404).json({ message : "Il y a eu une erreur suite à la création du post" }));
};

module.exports.updatePost = async (req, res, next) => {
  const post = await Post.findOne({where: { id: req.params.id} });
  const user = await User.findOne({where: { id: req.auth} });
  

  if (post.userId != req.auth && user.admin != true) {
    return res.status(400).json({
      error: new Error("Requête non autorisée"),
    }),console.log('Vous navez pas les droits nécéssaires');
  }
  
  const postObject = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    }
    : { ...req.body };

  post.update({
    ...postObject,
      title: postObject.title ? postObject.title : undefined,
      description: postObject.description ? postObject.description : undefined,
      imageUrl: postObject.imageUrl,
    })
    .then(() => res.status(200).json({ message: "Post modifié" }))
    .catch((error) =>
      res.status(404).json({ error: "erreur lors de l'update" })
    );
};





