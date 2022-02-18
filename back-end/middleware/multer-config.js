const multer = require('multer');

const mime_types = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
}


// ici le 'images' concerne bien le dossier images, filname sert à rendre les noms de fichier uniques
const storage = multer.diskStorage({
    destination: (req, file, callback) =>{
        callback(null, 'images')
    },
    filename: (req, file, callback) =>{
        const name = file.originalname.split(' ').join('_')// Pour éliminer les espaces
        const extension = mime_types[file.mimetype];//
        callback(null, name + Date.now() + '.' + extension)
    }
});

module.exports = multer({storage}).single('file');