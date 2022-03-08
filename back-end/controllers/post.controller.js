const Post = require("../models/post");
const User = require('../models/user');

module.exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.findAll();
  res.status(200).json(posts);
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
  
  if (post.userId != req.auth ) {
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

  const createPost = await Post.create({
      ...postObject, 
      imageUrl: imagePost,
      userId: userId,
      user_name: user.user_name
      
  });

  console.log(createPost);
  createPost.save()
    .then(() => res.status(201).json({ message : "Le post a été ajouté" }))
    .catch((error) => res.status(404).json({ message : "Il y a eu une erreur suite à la création du post" }));
};

exports.updatePost = async (req, res, next) => {
  const post = await Post.findOne({where: { id: req.params.id} });
  console.log("post.user_name", post.userId);
  console.log("req.auth", req.auth);

  if (post.userId != req.auth ) {
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
      title: postObject.title,
      description: postObject.description,
      imageUrl: postObject.imageUrl,
    })
    .then(() => res.status(200).json({ message: "Post modifié" }))
    .catch((error) =>
      res.status(404).json({ error: "erreur lors de l'update" })
    );
};


