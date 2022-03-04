const UserModel = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.signUp = async (req, res, next) => {
  const { email, password: password, user_name } = req.body;
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);
  const user = UserModel.create({
    email,
    password: encryptedPassword,
    user_name,
  });

  await user
    .then(() => res.status(201).json({ message: "Utilisateur crée" }))
    .catch((error) => {
      console.log("creation user failed", error);
      res
        .status(400)
        .json({ message: "la création de l'utilisateur à échoué" });
    });
};

module.exports.login = (req, res, next) => {
  
  const { email, password } = req.body;
  
  UserModel.findOne({ where: { email: email}})
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, process.env.SECRET_TOKEN, {
              expiresIn: "10h",
            }),
            admin: user.admin,
            user_name: user.user_name,
            
          });
          
        })
        
        .catch(error => res.status(500).json({message: "la connexion à l'utilisateur à échoué"}));
    })
    .catch(error => res.status(500).json({error}));
};

module.exports.update = async (req,res, next) => {
  const user = await UserModel.findOne({where : {id: req.params.id}})
  const { email, password: password, user_name } = req.body;
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  user.update(
    { 
      email,
      password : encryptedPassword,
      user_name
    }
  )
    .then(() => res.status(200).json({ message: "User modifié" }))
    .catch((error) => res.status(404).json({ error }));
}

module.exports.getUser = async ( req, res, next) => {
  const userProfil = {}
  await UserModel.findOne({where : {id: req.params.id}})
  .then(user => {
    userProfil.id = user.id
    userProfil.user_name = user.user_name
    
    res.status(200).json(userProfil)
  })
  .catch(error => res.status(404).json({ error }))
}