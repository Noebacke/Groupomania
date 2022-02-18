const bcrypt = require("bcrypt");

bcrypt
    .hash('abcdefgH123456', 10)
    .then((hash) => {
        console.log(hash);
    });

