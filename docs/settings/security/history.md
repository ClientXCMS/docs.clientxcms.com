---
sidebar_position: 3
---
# Historique

Dans **CLIENTXCMS**, l'**historique** et la **surveillance des logs** constituent un pilier essentiel de la sécurité et du diagnostic de votre plateforme.
L'objectif est crucial : **tracer toutes les activités critiques**, **détecter les anomalies rapidement** et **faciliter le diagnostic des problèmes**. Un système de logging robuste vous permet de maintenir la sécurité, optimiser les performances et résoudre efficacement les incidents.

Cette section centralise tous les fichiers de logs système, des tâches planifiées et des erreurs pour une surveillance complète.

Vous pouvez consulter l'historique depuis :

`Paramètres` > `Sécurité` > `Historique`

:::tip Astuce
Les logs sont votre **boîte noire** système.
Consultez-les régulièrement pour anticiper les problèmes avant qu'ils n'impactent vos utilisateurs.
:::

## Pourquoi surveiller l'historique ?

La surveillance des logs est essentielle pour :

* **Détecter les tentatives d'intrusion** et activités suspectes
* **Diagnostiquer les pannes** et dysfonctionnements système
* **Optimiser les performances** en identifiant les goulots d'étranglement
* **Auditer les actions** des administrateurs et utilisateurs
* **Planifier la maintenance** en anticipant les problèmes récurrents

:::tip Astuce
C'est comme avoir un système de vidéosurveillance pour votre plateforme 📹 — vous voyez tout ce qui se passe, même quand vous n'êtes pas là.
:::

## Types de logs

### 📋 Logs des tâches planifiées

Les tâches automatiques génèrent leurs propres fichiers de logs pour tracer leur exécution :

| Fichier de log            | Commande associée             | Description                          |
| ------------------------- | ------------------------------ | ------------------------------------ |
| `services-delivery.log` | `services:delivery`          | Livraison automatique des services   |
| `services-expire.log`   | `services:expire`            | Expiration des services              |
| `services-renewals.log` | `services:renewals`          | Renouvellements automatiques         |
| `helpdesk-close.log`    | `clientxcms:helpdesk-close`  | Fermeture automatique des tickets    |
| `notify-expiration.log` | `services:notify-expiration` | Notifications d'expiration           |
| `invoice-delete.log`    | `clientxcms:invoice-delete`  | Suppression automatique des factures |
| `purge-metadata.log`    | `clientxcms:purge-metadata`  | Nettoyage des métadonnées          |
| `purge-basket.log`      | `clientxcms:purge-basket`    | Vidage des paniers abandonnés       |

#### Contenu des logs de tâches

Chaque fichier contient :
- **Horodatage** précis de l'exécution
- **Statut** de la tâche (succès/échec)
- **Nombre d'éléments traités** (services, factures, etc.)
- **Erreurs rencontrées** et leurs détails
- **Durée d'exécution** de la tâche

### 🚨 Logs d'erreurs système

Les erreurs applicatives sont enregistrées quotidiennement :

**Format des fichiers** : `laravel-{année}-{mois}-{jour}.log`

Exemples :
- `laravel-2024-08-15.log`
- `laravel-2024-08-16.log`

#### Rétention des logs

- **Durée de conservation** : 15 jours automatiquement
- **Rotation quotidienne** : Un nouveau fichier chaque jour
- **Suppression automatique** : Les logs de plus de 15 jours sont effacés

#### Contenu des logs d'erreurs

- **Erreurs PHP** : Exceptions non gérées, erreurs fatales
- **Erreurs SQL** : Problèmes de base de données
- **Erreurs d'authentification** : Tentatives de connexion échouées
- **Erreurs de modules** : Dysfonctionnements des extensions
- **Erreurs de configuration** : Paramètres invalides

## Gestion des fichiers de logs

### Actions disponibles

Pour chaque fichier de log, trois actions sont possibles :

**🔽 Télécharger** | (bouton gris)
Télécharge le fichier de log sur votre ordinateur pour analyse hors ligne.
Utile pour archivage ou analyse avec des outils externes.

### Cas d'usage des actions

#### Téléchargement

- **Analyse approfondie** avec des outils externes
- **Archivage** pour audit ou conformité
- **Partage** avec le support technique
- **Surveillance** des tendances long terme

#### Vidage
- **Nettoyage** d'un fichier devenu trop volumineux
- **Reset** après résolution d'un problème récurrent
- **Optimisation** de l'espace disque

#### Suppression
- **Maintenance** de l'espace disque
- **Conformité** aux politiques de rétention
- **Nettoyage** de logs non pertinents

## Bonnes pratiques de surveillance

### Monitoring régulier

1. **Consultation quotidienne** : Vérifiez les logs récents chaque jour
2. **Alertes critiques** : Surveillez les erreurs récurrentes
3. **Tendances** : Analysez l'évolution des erreurs dans le temps
4. **Corrélations** : Reliez les erreurs aux événements système

### Analyse des logs

#### Logs de tâches planifiées
```
[2024-08-15 02:00:01] INFO: services:delivery started
[2024-08-15 02:00:05] INFO: Processing 15 pending services
[2024-08-15 02:00:12] SUCCESS: 12 services delivered successfully
[2024-08-15 02:00:12] WARNING: 3 services failed delivery
[2024-08-15 02:00:12] INFO: services:delivery completed in 11.2s
```

#### Logs d'erreurs système
```
[2024-08-15 14:23:45] ERROR: PDOException: Connection refused
[2024-08-15 14:23:45] ERROR: Stack trace: /var/www/app/Database.php:42
[2024-08-15 14:24:01] INFO: Database connection restored
```

### Dépannage courant

### Logs trop volumineux

**Symptômes** : Fichiers de plusieurs Mo, lenteurs interface
**Solutions** :
1. Videz les logs anciens
2. Identifiez la source des erreurs répétitives
3. Corrigez les problèmes à l'origine
4. Augmentez la fréquence de rotation

### Logs manquants

**Symptômes** : Aucun fichier récent, tâches silencieuses
**Solutions** :
1. Vérifiez les permissions d'écriture
2. Contrôlez l'espace disque disponible
3. Redémarrez les services si nécessaire
4. Vérifiez la configuration du logging

### Erreurs récurrentes

**Symptômes** : Mêmes erreurs répétées, instabilité
**Solutions** :
1. Analysez le pattern des erreurs
2. Identifiez la cause racine
3. Appliquez un correctif permanent
4. Surveillez la résolution

## Conformité et archivage

### Réglementations

Selon votre secteur d'activité :

- **RGPD** : Logs d'accès aux données personnelles
- **Comptabilité** : Logs des opérations financières
- **Sécurité** : Logs d'authentification et d'accès

### Politique de rétention

Définissez une politique claire :
1. **Durée de conservation** selon les besoins légaux
2. **Format d'archivage** (compression, chiffrement)
3. **Accès contrôlé** aux logs archivés
4. **Destruction sécurisée** en fin de cycle

:::tip À retenir
Les logs sont vos alliés pour maintenir une plateforme stable et sécurisée. Une surveillance proactive vous fait gagner du temps et évite les crises. Prenez l'habitude de les consulter régulièrement.
:::
