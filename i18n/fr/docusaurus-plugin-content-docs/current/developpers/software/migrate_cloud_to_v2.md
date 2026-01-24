# Migrer cloud vers self-hosted
:::info
CLIENTXCMS devient un logiciel open source, auto-hébergé et gratuit à partir du 1er septembre 2025. Pour les clients actuels, nous offrons une période de transition pour migrer vers la version auto-hébergée. Cette page vous guide à travers le processus de migration depuis CLIENTXCMS Cloud vers une instance auto-hébergée. Plus d'informations sur la transition [ici](/blog/mise-en-opensource).
:::

1. **Récupérer une sauvegarde de l’instance CLIENTXCMS Cloud**

   * Connectez-vous à l’interface CLIENTXCMS Cloud et allez dans la section **Base de données** (par exemple, via `https://mondomain.fr/admin/database`).
   * Notez les informations suivantes (exemple) :

     * **Hôte (DB\_HOST)** : `ctx-01-pma.clientxcms.com`
     * **Nom de la base (DB\_DATABASE)** : `123456789_DB`
     * **Utilisateur (DB\_USERNAME)** : `123456789_User`
     * **Mot de passe (DB\_PASSWORD)** : `P@ssw0rdExemple`
   * Pour exporter la base de données, vous pouvez utiliser phpMyAdmin  :
        * Ouvrez phpMyAdmin à l’adresse fournie (ex. `https://ctx-01-pma.clientxcms.com/`).
        * Sélectionnez la base `123456789_DB`.
        * Cliquez sur **Exporter**, choisissez le format « SQL » et cliquez sur **OK** pour télécharger `123456789_DB.sql`.

2. **Récupérer la clé d’application Laravel (APP\_KEY) de l’instance Cloud**

   * Ouvrez une demande auprès de notre support technique pour obtenir la clé d’application Laravel (APP\_KEY) de votre instance Cloud.
   * Cette clé est essentielle pour assurer la compatibilité des sessions, des cookies chiffrés et des données sensibles entre votre instance Cloud et l’instance auto-hébergée.
    * La clé ressemble à ceci : `base64:8fGtY7Qk3hlV6uJd5zR2wT1xYpB9aZfS3eHlCk7mNo=`.
    * Conservez cette clé en lieu sûr, car elle sera utilisée lors de la configuration de votre instance auto-hébergée.

3. **Installer CLIENTXCMS v2 sur votre serveur local**

   * Suivez les instructions d’installation de CLIENTXCMS v2 sur votre serveur local, comme décrit dans la documentation [Installation self-hosted](/docs/installation/selfhosted.md).
   * Assurez-vous que votre serveur répond aux prérequis (PHP, MySQL, etc.).
4. **Importer votre base de données** :

    __Via phpMyAdmin__ :
     1. Connectez-vous à phpMyAdmin de votre serveur local (par exemple `https://votre-serveur/phpmyadmin`).
     2. Sélectionnez la base `clientxcms_local`.
     3. Cliquez sur **Importer** → **Choisir un fichier** → sélectionnez `sauvegarde_clientxcms_12345.sql` → cliquez sur **Exécuter**.
    1. Attendez que l’importation soit terminée (cela peut prendre quelques minutes selon la taille de la base).
    2. Vérifiez que toutes les tables sont présentes (ex. `customers`, etc.).

    __Via la ligne de commande__ :
    3. Connectez-vous à votre serveur via SSH.
    4. Exécutez les commandes suivantes pour créer la base de données et importer la sauvegarde :
     ```bash
     mysql -u root -p clientxcms_local < /chemin/vers/sauvegarde_clientxcms_12345.sql
     # Saisissez MotDePasseLocal quand demandé
     ```
     5. Vérifiez que l’importation s’est bien déroulée en listant les tables :
     ```bash
     mysql -u root -p -e "USE clientxcms_local; SHOW TABLES;"
     # Vous devriez voir toutes les tables de CLIENTXCMS Cloud (ex. customers, settings.)

5. **Remplacer la clé Laravel dans `.env` par celle du Cloud**

   * Éditez votre fichier `.env` (situé par exemple dans `/var/www/clientxcms/.env`) et remplacez la valeur de `APP_KEY` (clé temporaire) par celle fournie par le support. Exemple :

     ```diff
     - APP_KEY=base64:ABC123ExampleTmpKeyGeneratedByArtisan=
     + APP_KEY=base64:8fGtY7Qk3hlV6uJd5zR2wT1xYpB9aZfS3eHlCk7mNo=
     ```
   * Enregistrez le fichier. Laravel utilisera désormais la même clé que votre instance Cloud, garantissant la compatibilité des sessions, des cookies chiffrés et des données sensibles (par exemple, les mots de passe hashing).

6. **Vérifier la configuration supplémentaire (cache, stockage, etc.)**

   * **Permissions sur les dossiers** :

     ```bash
     # S’assurer que l’utilisateur web (www-data ou apache) a les droits
     sudo chown -R www-data:www-data /var/www/clientxcms/storage
     sudo chown -R www-data:www-data /var/www/clientxcms/bootstrap/cache
     sudo chmod -R 775 /var/www/clientxcms/storage
     sudo chmod -R 775 /var/www/clientxcms/bootstrap/cache
     ```
   * **Réinstaller / rafraîchir le cache Laravel** :

     ```bash
     cd /var/www/clientxcms
     # Recrée les caches de configuration, de routes et de vues
     php artisan config:cache
     php artisan route:cache
     php artisan view:cache
     ```
7. **Tester l’accès à l’instance auto-hébergée**

   * Ouvrez votre navigateur à l’adresse `https://clientxcms.votredomaine.com` (ou `http://` si SSL non configuré).
   * La page de connexion CLIENTXCMS devrait apparaître.
   * **Connexion** : utilisez vos identifiants exacts de l’instance Cloud (exemple) :

     * **Email** : `jean.dupont@example.com`
     * **Mot de passe** : celui que vous aviez défini sur Cloud.
   * Si vous êtes connecté·e avec succès, la migration a fonctionné.