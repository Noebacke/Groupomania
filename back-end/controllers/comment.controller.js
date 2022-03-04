const Comment = require('../models/comment')

module.exports.getAllComments = async (req, res, next) => {
    const comment = await Comment.findAll();
    res.status(200).json(comment);
};

module.exports.deleteComment = async ( req, res, next) => {
    await Comment.destroy({where : {id: req.params.id}})
      .then(() => res.status(200).json({ message: "Commentaire supprimé" }))
      .catch((error) => res.status(404).json({ error }));
};

module.exports.createComment = async (req, res, next) => {

    const commentObject = JSON.parse(req.body.comment);

    const createComment = await Comment.create({
        ...commentObject
    });
  
    console.log(createComment);
    createComment
      .save()
      .then(() => res.status(201).json({ message : "Le commentaire a été ajouté" }))
      .catch((error) => res.status(404).json({ error }));
}
