Bonjour, voici mon dernier projet effetué dans la formation Openclassroom.

Quel était le projet : 

    -Crée un réseau social d'entreprise
    -Utilisation obligatoire d'un framework pour le front-end
    -Utilisation obligatoire de MySQL pour la partie base de donnée
    -Version V1 du site 

Le contenu du site : 

    -La présentation des fonctionnalités doit être simple
    -La création d'un compte doit être simple et possible depuis un téléphonne mobile
    -Le profil doit contenir peu d'informations pour que sa complétion soit rapide
    -La suppression du compte doit être possible
    -L'accès à un forum où les salariés publient des contenus multimédias doit être présent
    -L'accès à un forum où les salairés publient des textes doit être présent
    -Les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés
    -Le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre salariés

Pour installer le code source : 

    - cliquez sur " code " puis télécharger le fichier zip puis extraire ce dernier pour l'ouvrir dans un logiciel de code comme Visual Studio Code
    - renommez le fichier ".env.exemple" en ".env", puis jouter votre mot de passe root de data base. 
    - Si vous voulez des données test décommentez .
    -Installez MySQL
    -Créez une database "groupomania"
    -Il est important de vérifier que dans "config.json" vos information soient en adéquation avec ce que vous avez saisi à savoir le nom de la database et le mot de passe.


Pour la partie back-end: 
    https://sequelize.org/ ( doc de sequelize un framework MySQL )
    - Installez les nodes modules
    - rentrez dans un terminal, cd back-end puis 'nodemon server'
    - Allez dans app.js 
    - Pour les mots de passe allez dans le dossier "hash" puis le fichier hash.js pour hasher le mot de passe de votre choix, celui ci sera affiché dans votre terminal vous n'aurez plu qu'a 
    le copier pour en avoir le résultat hashé et correct pour la base de donnée.
   

Pour la partie front-end: 
    https://fr.reactjs.org/ ( doc de React framework javascript )
    - J'ai choisi le framework React pour développer ma partie front-end
    - Installez aussi la partie node module
    - faites cd front-end dans un nouveau terminal
    - rentrez 'npm start'
    
    - Vous serez sur la page de connexion, vous pouvez sois crée un compte, sois en utiliser un qui existe déjà
    - Pour le mail je n'ai pas mis de regExp, en d'autre terme vous n'avez pas d'obligation de caractères
    - Pour le mot de passe il doit faire au moins une majuscule, un chiffre et une minuscule le tout en 10 caractères au minimum
    - Une fois connecté, vous avez les posts qui s'affichent devant vous, vous pouvez si vous êtes admin ou propriétaire de ce post le supprimer ou le modifier
    - Pour afficher les commentaires cliquez sur le logo au milieu du post, vous aurez une croix pour en crée un
    - Pour crée un nouveau post la même croix que pour les commentaires est affiché, pour un post il y a obligation d'un titre et d'une description pour qu'il soit crée, les images sont facultatives

    - Plus haut vous pouvez voir deux bouton, un bouton pour se déconnecter et un pour accéder à son profil
    - Le premier permettra de vous deconnecter du site
    - Le 2ème vous permettra d'accéder aux données de votre profil et d'en faire des modifications si tel est votre souhait
    - Un bouton supprimer le profil est également tout en bas

    - Cliquez sur un des boutons de modifications pour afficher un petit formulaire dans lequel vous pourrez rentrer vos modifications
    - Si vous cliquez sur la partie description d'un post vous serez rediriger vers le post en question, je n'ai pas beaucoup développé cette fonctionnalité car sans réel intérêt pour notre cas, il n'y a aucun plus par rapport à la page d'acceuil mais selon les exigeances clients on peut être ammenné à devoir faire cette fonctionnalité

    - j'ai choisi de donner la possibilité aux utilisateur d'exprimer leurs avis via les commentaires et non un système de likes/Dislikes


    