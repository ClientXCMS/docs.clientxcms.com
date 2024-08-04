---
sidebar_position: 4
---

# Plesk

Cette page vous guidera dans l'installation de ClientXCMS Next Gen pour les versions autohébergées sur plesk. Les offres Cloud sont installées automatiquement sur les serveurs de CLIENTXCMS. L'installation est disponible [ici](../cloud).

## Demander le téléchargement
:::info
L'accès aux licences autohébergées est restreint. Pour demander une licence à héberger sur vos propres serveurs, rendez-vous sur l'espace client de ClientXCMS via l'URL : [https://clientxcms.com/client/services](https://clientxcms.com/client/services).
:::
1. Cliquez sur le bouton "Gérer le service" de la licence en question.
2. Cliquez sur le bouton "Télécharger" en bas à droite pour ouvrir le formulaire de demande.
3. Remplissez les informations de votre hébergeur. Vous serez recontacté par e-mail dans les 72 heures.

![Formulaire demande de téléchargement](/img/next_gen/Installation/formulaire_download.png)

Si la page de téléchargement apparaît, la demande a été acceptée et vous pouvez cliquer sur le bouton "Télécharger" pour obtenir l'archive du CMS.

![Page de téléchargement](/img/next_gen/Installation/page_download.png)


## Mise en place de l'abonnement et du domaine

1. Créez un nom de domaine correspondant à votre licence.
2. Si vous avez déjà un espace client, enregistrez le fichier `.env` dans la racine de votre site (pour une migration) et sauvegardez tous les fichiers de ClientXCMS ou de WHMCS.
   :::warning
   Ne supprimez ni ne modifiez la base de données de l'ancien espace client si vous souhaitez réimporter les données de vos clients, factures, services, configurations des produits, etc.
   :::
3. Si vous avez un accès Administrateur Plesk, dans le menu latéral, cliquez sur "Extensions" sous "Gestion des serveurs".
   ![Menu "Extensions" - Plesk](/img/next_gen/Installation/Plesk/Plesk_extensions_menu.png)
4. Recherchez et installez l'extension "Laravel Toolkit" si ce n'est pas déjà fait.
   ![Extension "Laravel ToolKit" - Plesk](/img/next_gen/Installation/Plesk/Plesk_extension_LaravelTK.png)
5. Générez un certificat SSL gratuitement via Let's Encrypt.
   ![Certificat SSL - Plesk](/img/next_gen/Installation/Plesk/Plesk_ssl.png)
6. Dans le tableau de bord de votre domaine, cliquez sur "PHP" sous les outils de développement. Utilisez la version **8.2** de PHP pour une compatibilité optimale.
   ![PHP version - Plesk](/img/next_gen/Installation/Plesk/Plesk_PHP82.png)

## Installation de l'environnement Laravel

1. Revenez à la gestion de votre domaine. Sous le menu "Démarrer", sélectionnez "Laravel".
   ![Laravel env - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_env.png)
2. Cliquez sur "Installer l'application", choisissez "installer le squelette" et confirmez.
   ![Laravel install - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_install.png)
   ![Laravel install 2 - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_install2.png)
3. Attendez la fin du déploiement de votre projet Laravel.

## Importation des fichiers de ClientXCMS

1. Supprimez tous les fichiers de la racine du site web correspondant à votre espace client dans "Fichiers" (par défaut "httpdocs").
2. Importez l'archive du CMS via le bouton "+" puis "Téléverser le fichier".

   ![Téléverser fichiers - Plesk](/img/next_gen/Installation/Plesk/Plesk_televerser.png)

3. Extrayez l'archive en cliquant sur "Extraire les fichiers".

   ![Extraction archive - Plesk](/img/next_gen/Installation/Plesk/Plesk_outil_fichier.png)

4. Un répertoire nommé "DarkIncognito85-clientxcms-v2-xxx" devrait apparaître. Cliquez dessus et sélectionnez tous les fichiers.

   ![Sélectionner tout - Plesk](/img/next_gen/Installation/Plesk/Plesk_select_all.png)

5. Cliquez sur "Déplacer" et migrez tous les fichiers et répertoires vers la racine de votre site d'espace client (par défaut "httpdocs").

   ![Déplacer fichiers - Plesk](/img/next_gen/Installation/Plesk/Plesk_deplacer_fichiers.png)

6. Supprimez le dossier précédent vide et l'archive ZIP de ClientXCMS pour faire propre.

## Installation des composants PHP

1. Installez les composants PHP dans Outils Développement → "**PHP Composer**" et cliquez sur "Rechercher".
   ![PHP Composer (rechercher) - Plesk](/img/next_gen/Installation/Plesk/Plesk_PHPComposer_search.png)
2. Changez le mode de "Production" à "Développement".
   ![PHP Composer (environnement) - Plesk](/img/next_gen/Installation/Plesk/Plesk_PHPComposer_env.png)
3. Cliquez sur "Installer" pour installer toutes les dépendances nécessaires.
   ![PHP Composer (installer) - Plesk](/img/next_gen/Installation/Plesk/Plesk_PHPComposer_install.png)

## Configuration de la base de données

1. Créez une base de données dans le tableau de bord de gestion du domaine, sous "Fichiers et bases de données" → "Bases de données".
   ![Bases de données - Plesk](/img/next_gen/Installation/Plesk/Plesk_BDDs.png)

2. Utilisez un mot de passe robuste pour des raisons de sécurité et notez bien les informations de connexion avant de confirmer.
   ![Bases de données (création) - Plesk](/img/next_gen/Installation/Plesk/Plesk_DB_create.png)

3. Dans le gestionnaire de fichiers de Plesk, allez dans la racine du projet Laravel (par défaut "httpdocs").
4. Renommez le fichier `.env.example` en `.env`.
   ![Fichier .env.example (renommage) - Plesk](/img/next_gen/Installation/Plesk/Plesk_envexample_rename.png)

5. Cliquez sur le fichier `.env` et modifiez les valeurs :
    - `APP_ENV=production` → `APP_ENV=dev`
    - `APP_URL=http://localhost` → `APP_URL=https://votre.domaine.com` (mettez bien le domaine de votre espace client)
    - `DB_DATABASE=laravel` → Nom de votre base de données
    - `DB_USERNAME=root` → Nom d'utilisateur de la base de données
    - `DB_PASSWORD=""` → Mot de passe de l'utilisateur de la base de données (entre "guillemets" afin d'éviter les erreurs de syntaxe)

## Commandes d'initialisation de l'environnement

1. Revenez dans l'onglet "Démarrer" puis cliquez sur "Laravel".
   ![Laravel env - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_env.png)
2. Cliquez sur la section "Artisan".
   ![Laravel env (gestion) - Plesk](/img/next_gen/Installation/Plesk/Plesk_Laravel_env_manage.png)
3. Exécutez les commandes suivantes dans cet ordre :
    - `key:generate`
    - `db:seed`
    - `migrate`
    - `storage:link`
      ![Laravel env (commandes Artisan)](/img/next_gen/Installation/Plesk/Plesk_Laravel_ArtisanCMD.png)
4. Cliquez sur la section "Node.js".
5. Sélectionnez la version de NodeJS la plus récente installée sur votre serveur Plesk (ex : NodeJS 21).
6. Exécutez les commandes suivantes dans cet ordre :
    - `install`
    - `run build`
      ![Laravel env (commandes NodeJS)](/img/next_gen/Installation/Plesk/Plesk_Laravel_NodejsCMD.png)

## Configuration de ClientXCMS

1. Rendez-vous sur l'adresse de votre espace client. Vous devriez voir une page d'installation similaire à celle-ci :
   ![Page installation - ClientXCMS](/img/next_gen/Installation/ClientX_Install_page.png)

2. Remplacez "CLIENTXCMS" par votre nom commercial d'hébergeur.

3. Pour trouver l'**ID client** et le **Secret client**, allez sur l'espace client ClientXCMS : [https://clientxcms.com/client/services/](https://clientxcms.com/client/services/), dans la gestion de la licence NextGen concernée.
   ![Gestion licence - Plesk](/img/next_gen/Installation/ClientX_panel_gestion_licence.png)
   Les identifiants "**OAuth Client ID**" et "**OAuth Secret**" sont nécessaires pour connecter la licence ClientXCMS à votre site. Cliquez ensuite sur le bouton "Se connecter" sur votre instance.


## Terminé
👏 Bravo, ClientXCMS NextGen est maintenant installé sur votre serveur !
➡️ La documentation continuera de vous aider pour migrer, ou encore configurer les différentes extensions présentes.

😊 Merci de votre confiance.