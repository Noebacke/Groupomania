const bcrypt = require("bcrypt");
// saisir le mot de passe que vous voulez hasher pour crée un compte manuellement depuis app.js
bcrypt
    .hash('abcdefgH123456', 10)
    .then((hash) => {
        console.log(hash);
    });

