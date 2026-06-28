---
sidebar_position: 6
---

# Docker

Cette page vous guide pour installer ClientXCMS avec Docker Compose. Cette méthode prépare les services nécessaires dans des conteneurs et conserve les données après un redémarrage du serveur.

:::info
L'exemple ci-dessous est basé sur Ubuntu/Debian. Les commandes peuvent varier selon votre distribution.
:::

## Prérequis

Avant de commencer, vérifiez que vous disposez des éléments suivants :

- Un serveur Linux propre, avec un accès SSH et un utilisateur pouvant exécuter `sudo`.
- Les ports `80` et `443` ouverts si vous utilisez un nom de domaine et HTTPS.
- Un nom de domaine pointant vers votre serveur pour une installation en production.
- Vos identifiants OAuth ClientXCMS, disponibles dans la gestion de votre licence sur [l'espace client](https://clientxcms.com/client/services/).

## Installation de Docker

Mettez d'abord le serveur à jour et installez les outils de base :

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install git nano curl -y
```

Installez ensuite Docker avec le script officiel :

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Vérifiez que Docker Compose est disponible :

```bash
docker compose version
```

## Récupération de ClientXCMS

Créez le dossier d'installation puis clonez le dépôt officiel :

```bash
sudo mkdir -p /var/www
cd /var/www
sudo git clone https://github.com/ClientXCMS/ClientXCMS.git clientxcms
cd clientxcms
```

Préparez les fichiers de configuration à partir des exemples fournis :

```bash
sudo cp docker-compose.example.yml docker-compose.yml
sudo cp .env.example .env
```

## Configuration de l'environnement

Ouvrez le fichier `.env` :

```bash
sudo nano .env
```

Renseignez au minimum l'URL de votre installation et les identifiants OAuth de votre licence :

```env
APP_ENV=production
APP_URL=https://votre-domaine.com

OAUTH_CLIENT_ID=votre_client_id
OAUTH_CLIENT_SECRET=votre_secret_client
```

Conservez les valeurs de base de données prévues pour Docker, car le service applicatif se connecte au conteneur MySQL via le réseau interne Docker :

```env
DB_CONNECTION=mysql
DB_HOST=database
DB_PORT=3306
DB_DATABASE=clientxcms
DB_USERNAME=clientxcms
DB_PASSWORD=clientxcms
```

:::tip
Dans `nano`, utilisez `Ctrl + X`, puis `Y` ou `O`, puis `Entrée` pour sauvegarder et quitter.
:::

## Vérification du fichier Docker Compose

Avant de lancer les conteneurs, ouvrez le fichier `docker-compose.yml` :

```bash
sudo nano docker-compose.yml
```

Vérifiez que `APP_URL` est injectée depuis le fichier `.env`, sans valeur par défaut codée en dur :

```yaml
environment:
  APP_URL: "${APP_URL}"
  APP_ENV: "${APP_ENV:-production}"
```

:::warning
Ne définissez pas `APP_URL` à deux endroits différents. La valeur utilisée par ClientXCMS doit venir du fichier `.env`, sinon vous risquez des erreurs de licence, de session ou d'authentification OAuth.
:::

Si vous utilisez des modules ou extensions personnalisés, vérifiez aussi que le volume des modules pointe vers le bon dossier dans le conteneur :

```yaml
services:
  app:
    volumes:
      - ./modules:/app/modules
      - ./storage:/var/www/html/storage
```

Si votre installation rencontre des problèmes de permissions sur les modules après un redémarrage, vous pouvez ajouter un `entrypoint` qui corrige les droits avant de lancer l'application :

```yaml
services:
  app:
    entrypoint: ["/bin/sh", "-c", "chmod -R 777 /app/modules && chown -R www-data:www-data /app/modules && exec /bin/ash .github/docker/entrypoint.sh supervisord -n -c /etc/supervisord.conf"]
```

:::info
Le dossier de l'application dans le conteneur est `/app` pour les modules. Le volume doit donc pointer vers `/app/modules`, et non vers `/var/www/html/modules`.
:::

## Configuration du domaine et du SSL

Si le fichier `docker-compose.yml` contient une configuration Let's Encrypt, renseignez votre adresse email dans les variables d'environnement du proxy :

```yaml
- LETSENCRYPT_EMAIL=admin@votre-domaine.com
```

Votre `APP_URL` doit correspondre au domaine utilisé par le proxy, par exemple :

```env
APP_URL=https://votre-domaine.com
```

:::warning
Pour une installation en production, évitez d'utiliser une adresse IP directe. Utilisez un nom de domaine avec HTTPS afin que les cookies de session fonctionnent correctement.
:::

## Lancement des conteneurs

Démarrez ClientXCMS et les services associés en arrière-plan :

```bash
sudo docker compose up -d
```

Lors du premier lancement, patientez environ 30 secondes afin que la base de données s'initialise correctement. Vous pouvez vérifier l'état des conteneurs avec :

```bash
sudo docker compose ps
```

## Initialisation de ClientXCMS

Exécutez ensuite les commandes Laravel dans le conteneur `app` :

```bash
sudo docker compose exec app php artisan key:generate
sudo docker compose exec app php artisan optimize:clear
sudo docker compose exec app php artisan clientxcms:install-admin
```

La dernière commande permet de créer le compte administrateur. Suivez les instructions affichées dans votre terminal.

Si la clé d'application n'est pas écrite automatiquement dans `.env`, affichez-la puis ajoutez-la manuellement à la variable `APP_KEY` :

```bash
sudo docker compose exec app php artisan key:generate --show
```

:::info
Si votre fichier `docker-compose.yml` utilise un autre nom de service que `app`, remplacez `app` par le nom affiché dans `sudo docker compose ps`.
:::

## Accès au panel

Une fois l'installation terminée, ouvrez l'adresse configurée dans `APP_URL` puis accédez au panel administrateur :

```text
https://votre-domaine.com/admin/login
```

Connectez-vous avec le compte administrateur créé précédemment. Les identifiants OAuth renseignés dans le fichier `.env` permettent à ClientXCMS de valider votre licence.

## Installer un module personnalisé

Copiez le dossier du module dans le dossier `modules` de votre installation :

```bash
cd /var/www/clientxcms
sudo mkdir -p modules
```

Vérifiez ensuite que le module est visible depuis le conteneur :

```bash
sudo docker compose exec app ls /app/modules
```

Régénérez ensuite l'autoload et videz les caches :

```bash
sudo docker compose exec app composer dump-autoload
sudo docker compose exec app php artisan optimize:clear
```

Vous pouvez maintenant l'activer depuis le panel d'administration de ClientXCMS.
## Mettre à jour l'installation

Pour mettre à jour le code et redémarrer les conteneurs :

```bash
cd /var/www/clientxcms
sudo git pull
sudo docker compose pull
sudo docker compose up -d --build
sudo docker compose exec app php artisan optimize:clear
```

## Dépannage

### Connexion en local ou avec une adresse IP

Si vous installez ClientXCMS sans nom de domaine, par exemple avec une URL en `http://`, votre navigateur peut bloquer les cookies de session. Cela peut provoquer une erreur `419 Page Expired` à la connexion.

Dans ce cas, utilisez une configuration locale dans `.env` :

```env
APP_ENV=local
APP_URL=http://votre-ip
SESSION_DRIVER=cookie
SESSION_SECURE_COOKIE=false
SESSION_SECURE=false
```

Si ces variables ne sont pas transmises au conteneur, ajoutez-les dans la section `environment` du service `app` de `docker-compose.yml` :

```yaml
environment:
  APP_URL: "${APP_URL}"
  SESSION_DRIVER: "${SESSION_DRIVER:-file}"
  SESSION_SECURE_COOKIE: "${SESSION_SECURE_COOKIE:-false}"
  SESSION_SECURE: "${SESSION_SECURE:-false}"
```

Redémarrez ensuite les conteneurs :

```bash
sudo docker compose up -d
```

Si vous avez modifié `.env` après le démarrage du conteneur et que les changements ne sont pas pris en compte, copiez le fichier dans le conteneur puis videz la configuration Laravel :

```bash
sudo docker compose cp .env app:/var/www/html/.env
sudo docker compose exec app php artisan optimize:clear
```

### Erreur "Token has been revoked"

Cette erreur indique généralement que les identifiants OAuth sont absents, invalides ou que la configuration Laravel utilise encore d'anciennes valeurs.

Vérifiez d'abord le fichier `.env` :

```env
OAUTH_CLIENT_ID=votre_client_id
OAUTH_CLIENT_SECRET=votre_secret_client
```

Rechargez ensuite la configuration :

```bash
sudo docker compose exec app php artisan config:clear
sudo docker compose exec app php artisan cache:clear
```

### Consulter les logs

En cas de problème au lancement ou pendant l'installation, consultez les logs :

```bash
sudo docker compose logs -f
```
