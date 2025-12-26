# Sauvegarde


Cet extension permet de créer des sauvegardes complètes de votre installation ClientXCMS, incluant les fichiers et la base de données, et de les stocker sur divers fournisseurs de stockage.

## Configuration de l'extension
Après avoir installé l'extension, vous pouvez configurer les fournisseurs de sauvegarde dans le panneau d'administration sous **Paramètres > Sécurité > Fournisseurs de sauvegarde**.

Vous pouvez ajouter plusieurs fournisseurs en cliquant sur le bouton `Créer`. Sélectionnez le type de fournisseur souhaité (Local, FTP/SFTP, S3, Google Drive) et remplissez les informations requises selon le type choisi.

Vous pouvez également définir définir une fréquence en heures pour les sauvegardes automatiques et le nombre maximum de sauvegardes à conserver par fournisseur.

![img](/img/next_gen/extensions/addons/backup/settings.png)

### Détails des sauvegardes par fournisseur
Vous pouvez voir les sauvegardes effectuées pour chaque fournisseur en cliquant sur le bouton `Afficher` à côté de chaque fournisseur dans la liste. Cela affichera la configuration du fournisseur ainsi que la liste des sauvegardes stockées ainsi que les possibles erreurs lors de la tentative de sauvegarde.

![img](/img/next_gen/extensions/addons/backup/history.png)

## Gestion des sauvegardes
Vous pouvez gérer les sauvegardes dans le panneau d'administration sous **Paramètres > Sécurité > Sauvegardes**.
![img](/img/next_gen/extensions/addons/backup/backups.png)

Ici, vous pouvez voir toutes les sauvegardes effectuées, leur taille, la date de création et le fournisseur utilisé. Vous pouvez également télécharger ou supprimer des sauvegardes individuelles.

## Restauration d'une sauvegarde
Pour restaurer une sauvegarde, cliquez sur le bouton `Restaurer` à côté de la sauvegarde souhaitée. Confirmez l'action et la restauration commencera. Notez que la restauration écrasera les données actuelles, il est donc recommandé de faire une sauvegarde avant de procéder.

## Lancer une sauvegarde manuellement
Vous pouvez lancer une sauvegarde manuellement en cliquant sur le bouton `Lancer une sauvegarde` en bas à droite de la page des sauvegardes. Cela créera une nouvelle sauvegarde immédiatement et l'enverra au fournisseur sélectionné.

## Formats de sauvegarde

Les sauvegardes sont créées au format compressé `.zip`, incluant le dump de la base de données ainsi que les fichiers dans le répertoire `storage`.
Un fichier `backup.json` est inclus dans l'archive, contenant les métadonnées de la sauvegarde : 
```json
{
    "uuid": "efa5e9ac-d0db-4c02-81f1-d6f41f9a4902",
    "type": "full",
    "created_at": "2025-12-20T19:51:51+01:00",
    "app_key": "app_XXXXXXXXXXXXXXXX", # utilisé pour la restauration des sauvegardes
    "app_url": "test",
    "includes_database": true,
    "includes_storage": true,
    "database_connection": "mysql",
    "filename": "backup-efa5e9ac-d0db-4c02-81f1-d6f41f9a4902.zip"
}
```

## Vérification des sauvegardes
L'addon ajoute également un widget dans le tableau de bord de l'administration pour vérifier l'état des sauvegardes. Il affiche la date de la dernière sauvegarde réussie et signale si une sauvegarde est en retard par rapport à la fréquence configurée.
![img](/img/next_gen/extensions/addons/backup/healthcheck.png)

## Commandes

Vous pouvez éxecuter la tâche de sauvegarde avec la commande : 
`php artisan backup:run --force`

L'option force permet de forcer l'exécution même si la durée entre deux sauvegardes n'est pas encore écoulée.
### Configuration des fournisseurs de sauvegarde

#### Concepts Importants : Root vs Sub-folder

Avant de configurer un fournisseur, il est crucial de comprendre la différence entre ces deux réglages :

- **Chemin Racine (Root Path) :** C'est le dossier de base sur votre serveur distant (ex: `/` ou `/var/backups`).
- **Dossier de destination (Sub-folder) :** C'est le sous-dossier **à l'intérieur** de la racine où les fichiers seront stockés. Par défaut, il est réglé sur `backups`.
  - *Astuce :* Si vous voulez sauvegarder exactement à l'endroit défini par le "Chemin Racine", laissez le "Sub-folder" vide.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="local" label="Local">
#### Local (Stockage sur le serveur actuel)

Utile pour les sauvegardes temporaires ou si vous synchronisez ensuite le dossier manuellement.


- **Root Path :** Le chemin absolu sur votre serveur (ex: `/var/www/clientxcms/storage/backups`). Par défaut : `storage/backups`.
- **Sub-folder :** Le sous-dossier dans ce chemin (ex: `storage`).
</TabItem>
<TabItem value="ftp_sftp" label="FTP / SFTP">
#### FTP / SFTP (Stockage sur un serveur distant)

Pour envoyer vos sauvegardes vers un serveur externe.


- **Hôte (Host) :** L'adresse IP ou le nom de domaine du serveur.
- **Utilisateur / Mot de passe :** Vos identifiants de connexion.
- **Port :** 21 pour le FTP, 22 pour le SFTP.
- **Chemin Racine (Root Path) :** Le dossier de départ sur le serveur distant (ex: `/backups`).
- **SSL :** À cocher pour le FTP explicite (FTPS).
- **Sub-folder :** Le sous-dossier utilisé pour ranger les fichiers.

:::info
Le **SFTP** nécessite l'installation du package `league/flysystem-sftp-v3`.
:::
</TabItem>
<TabItem value="s3" label="S3 (Amazon S3, Minio, DigitalOcean Spaces)">
#### S3 (Amazon S3, Minio, DigitalOcean Spaces)
Pour le stockage objet cloud compatible S3.
- **Clé d'accès (Access Key) :** Votre identifiant d'API.
- **Clé Secrète (Secret Key) :** Votre clé secrète d'API.
- **Région :** La région de votre bucket (ex: `us-east-1`, `fr-par`).
- **Bucket :** Le nom de votre bucket.
- **Endpoint (Facultatif) :** À remplir si vous n'utilisez pas Amazon (ex: `https://s3.fr-par.scw.cloud` pour Scaleway).
- **Sub-folder :** Le préfixe (dossier) dans le bucket S3.

</TabItem>
<TabItem value="google_drive" label="Google Drive">
#### Google Drive

Pour sauvegarder sur votre espace Google Drive personnel ou partagé.

- **Client ID / Client Secret :** Obtenus via la Google Cloud Console.
- **Refresh Token :** Jeton permettant l'accès longue durée sans reconnexion.
- **Folder ID (Facultatif) :** L'ID du dossier Google Drive où ranger les fichiers (visible dans l'URL du dossier sur Drive).

:::info
> Ce driver nécessite les packages `masbug/flysystem-google-drive-ext` et `google/apiclient`.
:::

### Obtention des identifiants Google Drive

#### Étape 1 — Créer un projet Google Cloud

1. Accédez à la **Google Cloud Console** [https://console.cloud.google.com/](https://console.cloud.google.com/)
2. Cliquez sur **Sélectionner un projet** → **Nouveau projet**
3. Donnez-lui un nom explicite (ex. `backup-drive-prod`)
4. Validez la création


#### Étape 2 — Activer l’API Google Drive

1. Dans le menu **API et services** → **Bibliothèque**
2. Recherchez **Google Drive API**
3. Cliquez sur **Activer**

#### Étape 3 — Configurer l’écran de consentement OAuth

1. Menu **API et services** → **Écran de consentement OAuth**
2. Type d’utilisateur : **Externe**
3. Renseignez au minimum :

   * Nom de l’application
   * Adresse email de support
4. **Scopes** :
   * Ajoutez uniquement :`https://www.googleapis.com/auth/drive.file`
5. Enregistrez

#### Étape 4 — Créer les identifiants OAuth 2.0

1. Menu **Identifiants** → **Créer des identifiants**
2. Type : **ID client OAuth**
3. Type d’application : **Application Web**
4. URI de redirection autorisé :

   ```
   http://localhost
   ```
5. Validez et **copiez** :

   * Client ID
   * Client Secret

#### Étape 5 — Obtenir le Refresh Token avec OAuth 2.0 Playground

1. Ouvrez :
   👉 [https://developers.google.com/oauthplayground/](https://developers.google.com/oauthplayground/)
2. Cliquez sur **Settings**
3. Cochez : *Use your own OAuth credentials*
4. Renseignez :

   * Client ID
   * Client Secret
5. Dans la liste des scopes, sélectionnez :

   ```
   https://www.googleapis.com/auth/drive.file
   ```
6. Cliquez sur **Authorize APIs**
7. Autorisez l’accès à votre compte Google
8. Cliquez sur **Exchange authorization code for tokens**
9. Copiez le **Refresh Token**


</TabItem>
</Tabs>
