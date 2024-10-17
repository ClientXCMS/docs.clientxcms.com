---
sidebar_position: 7
---

# Serveurs

Chaque produit/services de vos clients est relié un serveur CLIENTXCMS qui permet de faire la jointure entre votre CLIENTXCMS et votre serveur avec votre application (Proxmox, Plesk, Pterodactyl). Pour ce faire, allez dans le menu `Paramètres` puis dans la section `Approvionement` et enfin dans `Serveurs`.
## Listes des serveurs
Vous pouvez voir les serveurs disponibles dans la page principale.

![img](/img/next_gen/settings/core/servers/admin_list.png)

### Actions
- **Afficher** : Permet de voir les détails du produit et de le modifier

- **Supprimer** : Permet de supprimer un produit

:::danger Danger!
La suppression d'un serveur peut provoquer des problèmes dans le système.
:::
## Création
Pour ajouter un serveur, cliquez sur le bouton "Créer" en haut à gauche de la page.
![img](/img/next_gen/settings/core/servers/create_server.png)

**Nom** : Nom qui sera affiché à titre d'information.

**Type de serveur** : Type de serveur. Sera utilisé pour tester la connexion et se connecter à votre serveur. (Si vide, veuillez ajouter une extension de livraison)

**Nom d'hôte** : Nom d'hote de votre serveur

**Adresse IP** : Adresse IP qui sera utilisé pour se connecter à votre serveur.

**Statut** : Statut du serveur [(Voir ici pour plus d'informations)](./servers#status)

**Port** : Port utilisé pour se connecter à votre serveur

**Utilisateur** : Utilisateur qui sera utilisé pour se connecter à votre serveur

**Mot de passe** : Mot de passe qui sera utilisé pour se connecter à votre serveur

### Status
Les status permettent de définir l'état du serveur.
- Disponible : Visible et disponible à l'installation de services
- Non référencé : Visible uniquement par les administrateurs
- Caché : Invisible

### Gestions des ports
Nous vous laissons le choix de choisir le port que vous souhaitez utiliser pour vous connecter à votre serveur. Voici une liste des ports par conseillé pour chaque extensions.

| Module      | Port sans SSL | Port avec SSL |
|-------------|---------------|---------------|
| Proxmox     | 8806          | 443           |
| Wisp        | 80            | 443           |
| Pterodactyl | 80            | 443           | 
| cPanel      | 2083          | x             |
| Plesk       | 8443          | x             |
| Virtualizor | 4083          | x             |

## Suppression
Vous pouvez supprimer un serveur en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandée, après ceci il supprimera le serveur.

Nous vous conseillons de le mettre en statut caché si vous ne souhaitez plus l'utiliser.

:::danger
La suppression d'un serveur peut provoquer des problèmes dans le système surtout s'il y a des produits/services déjà configurés sur le serveur.
:::
## Edition
Pour éditer un serveur, appuyez sur le bouton "Afficher" dans la colonne "Actions". Vous pouvez modifier les informations du serveur.

## Test de connexion
Pour vérifier que CLIENTXCMS puisse bien se connecter à l'API de votre serveur distant. Un bouton est disponible pour tester la connexion et vous donne un retour.
En cas de succès, vous verrez un message de succès. En cas d'échec, vérifiez les paramètres du serveur que vous avez entrés.
Après avoir testé la connexion, vous pouvez sauvegarder les modifications ou créer votre serveur.

Exemple de message de succès et d'exemple de message d'erreur :

![Test de connexion réussis](/img/next_gen/settings/core/servers/test_connection_sucessfully.png)
![Test de connexion échoué](/img/next_gen/settings/core/servers/test_connection_failed.png)

## Meta données
-------------
| Clé | Valeur | Description |
| --- | ------ | ----------- |
| `proxmox_backup_storage` | string | Nom du stockage PBS de stockage |
| `virtualizor_cloud_url`  | https://exemple.com:4083/ |       URL de connexion des revendeurs             |
| `proxmox_backup_node` | pbs | Nom de la node contenant les sauvegardes |
-------------
