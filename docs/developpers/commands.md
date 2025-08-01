# Commandes
### **ClientXCMS**

| Commande                                | Description                                                                 | Paramètres                                                                                                      |
|:----------------------------------------|:----------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
| `clientxcms:admin-autologin`            | Crée un lien de connexion automatique pour un administrateur.               | `--email`, `--expire`, `--unique`                                                                               |
| `clientxcms:check-renew`                | Vérifie le renouvellement de la licence.                                    | -                                                                                                               |
| `clientxcms:create-api-key`             | Crée une clé API.                                                           | `name`, `email`, `--type`, `--permissions`                                                                      |
| `clientxcms:create-extension`           | Crée une nouvelle extension.                                                | -                                                                                                               |
| `clientxcms:create-migration-extension` | Crée une nouvelle migration pour une extension.                             | `--model`                                                                                                       |
| `clientxcms:create-swagger`             | Crée un fichier de documentation Swagger.                                   | -                                                                                                               |
| `clientxcms:create-theme`               | Crée un nouveau thème.                                                      | -                                                                                                               |
| `clientxcms:db-extension`               | Exécute les migrations pour une extension.                                  | `--action`, `--extension`, `--all`                                                                              |
| `clientxcms:helpdesk-close`             | Ferme les tickets de support.                                               | -                                                                                                               |
| `clientxcms:index-invoice`              | Réindexe les factures.                                                      | -                                                                                                               |
| `clientxcms:install-admin`              | Crée un utilisateur administrateur.                                         | `--email`, `--password`, `--firstname`, `--lastname`                                                            |
| `clientxcms:install-db`                 | Installe la base de données (supprime les tables existantes).               | `--username`, `--password`, `--database`, `--host`, `--port`                                                    |
| `clientxcms:install-oauth-client`       | Installe le client OAuth.                                                   | `--client_id`, `--client_secret`                                                                                |
| `clientxcms:invoice-delete`             | Supprime les factures en attente lors qu'il y a une facturation pro-format. | -                                                                                                               |
| `clientxcms:last-logged-admin`          | Affiche un tableau des dernières connexions administrateur.                 | -                                                                                                               |
| `clientxcms:on-update`                  | Commande à exécuter lors d'une mise à jour.                                 | -                                                                                                               |
| `clientxcms:purge-basket`               | Purge les paniers non utilisés de la base de données.                       | `batchSize`                                                                                                     |
| `clientxcms:purge-metadata`             | Corrige les caractères spéciaux dans la base de données.                    | `batchSize`                                                                                                     |
| `clientxcms:telemetry`                  | Envoie des données de télémétrie anonymisées.                               | -                                                                                                               |
| `clientxcms:update-admin`               | Met à jour un utilisateur administrateur.                                   | `id`, `--email`, `--password`, `--firstname`, `--lastname`                                                      |
| `clientxcms:update-version`             | Commande à effectuer lors d'une mise à jour                                 | -                                                                                                               |
| `clientxcms:v1-migrate`                 | Migre les données de ClientXCMS v1.                                         | `--dbname`, `--host`, `--username`, `--password`, `--port`, `--force`, `--all`, `--products`, `--support`, etc. |
| `clientxcms:whmcs-migrate`              | Migre les données depuis WHMCS.                                             | `--dbname`, `--host`, `--username`, `--password`, `--port`, `--force`, `--key`, `--all`, `--products`, etc.     |

### **Services**

| Commande                     | Description                                                           | Paramètres |
|:-----------------------------|:----------------------------------------------------------------------|:-----------|
| `services:expire`            | Fait expirer les services arrivés à échéance.                         | -          |
| `services:notify-expiration` | Notifie les utilisateurs de l'expiration imminente de leurs services. | -          |
| `services:renewals`          | Crée les factures pour les services à renouveler.                     | -          |

### **Traductions**

| Commande                    | Description                                              | Paramètres |
|:----------------------------|:---------------------------------------------------------|:-----------|
| `translations:export`       | Exporte les traductions françaises vers un fichier JSON. | `--path`   |
| `translations:import-file`  | Importe les traductions depuis un fichier JSON.          | `--path`   |
| `translations:import-files` | Importe les traductions depuis un fichier ZIP.           | `--path`   |