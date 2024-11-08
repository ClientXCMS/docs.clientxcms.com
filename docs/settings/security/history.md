---
sidebar_position: 4
---

# Historique

Des fichiers de logs permettent de garder une trace des erreurs ou des actions effectuées par les tâches planifiées. Vous pouvez consulter ces logs depuis la page **Historique** accèsible depuis les `Paramètres` > `Sécurité` > `Historique`.
## Tâches planifiées
Les résultats de chaque planifiées sont enregistrés dans les logs à partir d'un fichier journal souvent appeler comme le nom de la commande. Par exemple : 
- `services-delivery.log` pour la commande `services:delivery`
- `services-expire.log` pour la commande `services:expire`
- `services-renewals.log` pour la commande `services:renewals`
- `helpdesk-close.log` pour la commande `clientxcms:helpdesk-close`
- `notify-expiration.log` pour la commande `services:notify-expiration`
- `invoice-delete.log` pour la commande `clientxcms:invoice-delete`
- `purge-metadata.log` pour la commande `clientxcms:purge-metadata`
- `purge-basket.log` pour la commande `clientxcms:purge-basket`

A chaque execution de ces commandes, le fichier journal est mis à jour avec les informations de l'action effectuée.
## Logs
Les erreurs sont stockées dans des fichiers quoditiennement comme ceci : `laravel-{annee}-{month}-{day}` qui se garde **15 jours**.
## Actions disponibles
**Bouton gris** : Permet de télécharger le fichier de log

**Bouton vert** : Permet de vider le fichier de log

**Bouton rouge** : Permet de supprimer le fichier de log