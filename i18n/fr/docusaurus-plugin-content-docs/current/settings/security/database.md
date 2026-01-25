---
sidebar_position: 2
---
# Base de données

Dans **CLIENTXCMS**, la gestion de la **base de données** est un aspect critique de la maintenance et de la sécurité de votre plateforme.
L'objectif est essentiel : **fournir un accès sécurisé aux données système** et **permettre les opérations de maintenance avancées** tout en **préservant l'intégrité des informations**. Cette section donne aux administrateurs expérimentés les outils nécessaires pour maintenir et mettre à jour leur installation.

Cette page requiert une authentification renforcée et offre des outils de gestion de base de données pour les utilisateurs avancés.

Vous pouvez accéder à la gestion de base de données depuis :

`Paramètres` > `Sécurité` > `Base de données`

![Interface de gestion de la base de données](/img/next_gen/settings/security/database/database.png)

:::warning Accès sécurisé requis
Cette page nécessite une **re-authentification** avec votre mot de passe administrateur pour accéder aux informations sensibles de la base de données.
:::

## Pourquoi gérer la base de données ?

La gestion directe de la base de données est utile pour :

* **Consulter les paramètres de connexion** en cas de problème technique
* **Effectuer des migrations** lors de mises à jour ou d'installations d'extensions
* **Initialiser des données** avec les seeders système
* **Diagnostiquer les problèmes** de structure ou de données

:::tip Astuce
C'est comme avoir accès au moteur de votre voiture 🔧 — puissant, mais nécessite de l'expertise pour éviter les dommages.
:::

## Informations de connexion

### Paramètres d'accès

Cette section affiche les informations de connexion à votre base de données MySQL/MariaDB :

**Serveur de base de données** | (adresse)
L'adresse du serveur hébergeant votre base de données (localhost, IP, ou nom d'hôte).

**Nom de la base** | (nom)
Le nom de la base de données contenant toutes les tables de CLIENTXCMS.

**Nom d'utilisateur** | (utilisateur)
L'identifiant utilisé pour se connecter à la base de données.

**Mot de passe** | (masqué par défaut)
Le mot de passe de connexion, masqué par défaut pour des raisons de sécurité.
Survolez le champ avec votre souris pour révéler temporairement le mot de passe.

### Accès PHPMyAdmin

**Interface web de gestion** | (bouton d'accès)
Accès direct à PHPMyAdmin pour une gestion visuelle de votre base de données.

:::info Disponibilité PHPMyAdmin
L'accès PHPMyAdmin est **uniquement disponible pour les instances cloud** hébergées par ClientXCMS. Pour les installations auto-hébergées, utilisez votre propre interface de gestion.
:::

### Utilisation sécurisée

- **Ne partagez jamais** ces informations de connexion
- **Utilisez un VPN** si vous devez accéder à distance
- **Effectuez des sauvegardes** avant toute opération critique
- **Limitez l'accès** aux seuls administrateurs expérimentés

## Migrations de base de données

### Qu'est-ce qu'une migration ?

Les migrations sont des scripts qui modifient la structure de votre base de données :

- Ajout de nouvelles tables
- Modification de colonnes existantes
- Création d'index pour les performances
- Mise à jour du schéma pour les nouvelles fonctionnalités

### Exécution des migrations

**Sélection du module** | (menu déroulant)
Choisissez le module ou l'extension pour lequel exécuter les migrations :

- **Core** : Migrations du système principal ClientXCMS
- **Extensions** : Migrations spécifiques aux modules installés

**Processus de migration** :

1. Sélectionnez le module approprié
2. Cliquez sur **"Migrer"** pour lancer l'opération
3. Surveillez la sortie pour détecter d'éventuelles erreurs
4. Vérifiez le bon fonctionnement de votre système

![Résultat d'une migration](/img/next_gen/settings/security/database/migrate.png)

:::warning Attention - Opération critique
Les migrations modifient la structure de votre base de données. Cette opération est **irréversible** et peut causer des dysfonctionnements si mal exécutée.

**Prérequis obligatoires** :

- Sauvegarde complète de la base de données
- Environnement de test validé
- Connaissance en administration de base de données
  :::

### Quand utiliser les migrations

- **Mise à jour système** : Après une montée de version de ClientXCMS
- **Installation d'extension** : Pour préparer la base aux nouvelles fonctionnalités
- **Correction de structure** : Pour résoudre des problèmes de schéma
- **Optimisation** : Pour ajouter des index de performance

## Seeders de base de données

### Principe des seeders

Les seeders initialisent votre base de données avec des données par défaut :

- Paramètres système standards
- Données de démonstration
- Valeurs de configuration par défaut
- Données de référence (pays, devises, etc.)

### Exécution des seeders

**Processus de seeding** :

1. Cliquez sur le bouton **"Seeder"**
2. L'opération lance tous les seeders disponibles
3. Les données par défaut sont insérées dans les tables appropriées
4. Vérifiez les logs pour confirmer le succès

![Résultat d'un seeding](/img/next_gen/settings/security/database/seed.png)

:::warning Attention - Données existantes
Les seeders peuvent **écraser ou dupliquer** des données existantes. Utilisez cette fonctionnalité uniquement :

- Sur une installation fraîche
- Après avoir sauvegardé vos données
- Si vous comprenez l'impact sur vos données actuelles
  :::

### Cas d'usage des seeders

- **Installation initiale** : Pour peupler une base vide
- **Réinitialisation** : Pour restaurer les paramètres par défaut
- **Développement** : Pour créer un environnement de test
- **Démonstration** : Pour générer des données d'exemple

:::tip À retenir
La gestion de base de données nécessite expertise et précaution. Ces outils sont puissants mais peuvent endommager votre installation si mal utilisés. En cas de doute, consultez un administrateur expérimenté ou le support technique.
:::
