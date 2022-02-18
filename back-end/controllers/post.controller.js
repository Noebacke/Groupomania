const Post = require("../models/post");


module.exports.getAllPosts = async (req, res, next) => {
  const posts = await Post.findAll();
  res.status(200).json(posts);
};

module.exports.getPost = async ( req, res, next) => {
  const onePost = {}
  await Post.findOne({where : {id: req.params.id}})
  .then(post => {
    onePost.id           = post.id
    onePost.user_id       = post.user_id
    onePost.user_name     = post.user_name
    onePost.description      = post.description
    res.status(200).json(onePost)
  })
  .catch(error => res.status(404).json({ error }))
};

module.exports.deletePost = async ( req, res, next) => {
  
  const deletePost = await Post.destroy({where : {id: req.params.id}})
    .then(() => res.status(200).json({ message: "Post supprimé" }))
    .catch((error) => res.status(404).json({ error, deletePost }));
};

module.exports.createPost = async (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject.id; // on supprime l'id reçu pour y mettre la nôtre
  const createPost = await Post.create({
      ...postObject, 
      imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });

  console.log(createPost);
  createPost
    .save()
    .then(() => res.status(201).json({ message : "Le post a été ajouté" }))
    .catch((error) => res.status(404).json({ message : "Il y a eu une erreur suite à la création du post" }));
};

exports.updatePost = async (req, res, next) => {

  const post = await Post.findOne({where : {id: req.params.id}})
  const postObject = req.file? 
  {
    ...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  }
  : { ...req.body };
  
  post.update(
    { 
      title : postObject.title,
      description: postObject.description,
      imageUrl: postObject.imageUrl
    }
  )
    .then(() => res.status(200).json({ message: "Post modifié" }))
    .catch((error) => res.status(404).json({ error }));
  
};


