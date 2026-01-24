# Docker

Vous pouvez installer ClientXCMS via Docker en suivant les étapes ci-dessous.
## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants :
- Un serveur avec Docker et Docker Compose installés. Vous pouvez suivre les instructions d'installation de
    - [Docker](https://docs.docker.com/get-docker/)
    - [Docker Compose](https://docs.docker.com/compose/install/)
- Un nom de domaine pointant vers votre serveur.

Lancer les commandes suivantes pour installer Docker et Docker Compose sur un serveur Ubuntu :
```bash
docker compose build
```
```bash
docker compose up -d
```
## Installation

1. Créez un répertoire pour ClientXCMS et accédez-y :
```bash
mkdir /var/www
cd /var/www
```
2. Clonez le dépôt Git de ClientXCMS :
```bash
git clone https://github.com/ClientXCMS/clientxcms.git
cd clientxcms
```
3. Copiez le fichier d'exemple de configuration Docker Compose :
```bash
cp docker-compose.example.yml docker-compose.yml
```
4. Modifiez le fichier d'environnement pour configurer les variables nécessaires, notamment la connexion à la base de données et le nom de domaine :
```bash
cp .env.example .env
nano .env
```
Vous pouvez modifier les variables comme le domaine : 
```env
APP_URL=https://votre-domaine.com
OAUTH_CLIENT_ID="XX"
OAUTH_CLIENT_SECRET="XX"
```
Ainsi que vos clés API, la connexion à la base de données, etc.

Le docker se chargera de générer le certificat SSL via Let's Encrypt automatiquement en rajoutant l'email dans le fichier docker-compose.yml :
```yaml
- LETSENCRYPT_EMAIL=your_email@example.com
```
5. Lancez les conteneurs Docker :
```bash
docker-compose up --build -d
```
6. Ajouter un compte administrateur :
```bash
docker exec -it clientxcms_app-1 php artisan clientxcms:install-admin
```
7. Accédez à votre nom de domaine dans un navigateur web pour terminer l'installation en confirmation l'accès à la licence
