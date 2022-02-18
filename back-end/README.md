Pour démarrer le serv Mysql depuis le terminal de vs code : 
    -Utiliser un terminal prompt
    -cd back-end
    -set PATH=%PATH%;C:\"Program Files"\MySQL\"MySQL Server 8.0"\bin
    -mysql -u root -p
    -rentrer le mot de passe 

Quelques commandes My SQL : 
    -DROP TABLE nom_table;
    -SHOW TABLES;
    -USE nom_database;
    -SHOW DATABASES;
    -DELETE FROM `nom_table` WHERE `l'élément du genre name` = 'la valeur de cet élément';
    -SHOW COLUMNS FROM `nom_table`;
    -UPDATE `nom_table` SET `colonne` = 'valeur de la colone' ( WHERE `table` = 'valeur' ) Pour y ajouter une conddition par exemple changer le mail de tout ceux qui ont un b dans leur nom 
    -SELECT * FROM nom_table ( le * est pour sélectionner tout les colonnes d'une table)
    -INSERT INTO `nom_table` (`nom_colonne`,`nom_colonne`....)
        VALUES
     ('valeur_colonne','valeur_colonne')