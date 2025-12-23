---
sidebar_position: 1
---

# Pelican

Le module **Pelican** permet d’intégrer le panel **Pelican** directement à **ClientXCMS** afin de vendre et gérer automatiquement des serveurs (jeux ou applicatifs) depuis votre boutique.

Il s’adresse aux hébergeurs souhaitant une **automatisation complète**, une **expérience client premium**, et une **gestion avancée côté administrateur**.

---

## 1) Présentation générale

Avec le module Pelican :

- Les serveurs sont **créés automatiquement** à la commande
- Les clients gèrent leurs serveurs **sans quitter ClientXCMS**
- L’administrateur garde un **contrôle total** sur les ressources, eggs et fonctionnalités
- L’intégration repose sur les **API officielles Pelican**

### Fonctionnalités clés

- Provisioning automatique des serveurs
- Gestion complète côté client (start / stop / restart / kill)
- Réinstallation contrôlée (avec ou sans changement d’egg)
- Import et synchronisation des eggs Pelican
- Gestion avancée des variables (env vars)
- Support des options payantes (RAM, CPU, disque, DB, backups…)
- Actions administrateur avancées
- Cache et optimisation des appels API

:::info Module requis
Pour utiliser toutes les fonctionnalités décrites ci-dessous, le module **Pelican** doit être activé dans votre ClientXCMS.
:::

---

## 2) Activation du module

Une fois le module installé dans votre ClientXCMS, vous devez l’activer depuis l’interface d’administration.

Chemin :
`Admin → Extensions / Modules → Pelican`

![Activation du module Pelican](/img/next_gen/extensions/modules/pelican/activation_module.png)

> Tant que le module n’est pas activé, aucune fonctionnalité Pelican ne sera disponible.

---

## 3) Prérequis techniques

### Côté ClientXCMS

- ClientXCMS à jour
- PHP **8.1 ou supérieur**
- Accès administrateur

### Côté Pelican

- Un panel Pelican fonctionnel et accessible en HTTP(S)
- Une **Application API Key** (obligatoire)
- Une **Client API Key** (optionnelle mais recommandée)

---

## 4) Création des clés API Pelican

### 4.1 Application API Key

Cette clé permet à ClientXCMS de **créer et gérer les serveurs**.

![Permissions Application API Pelican](/img/next_gen/extensions/modules/pelican/pelican_app_key_permissions.png)

⚠️ Assurez-vous que la clé dispose bien des permissions nécessaires (serveurs, users, nodes, eggs, allocations…).

---

### 4.2 Client API Key (optionnelle)

Cette clé améliore l’expérience client (statut, actions serveur, etc.).

![Création d'une Client API Key Pelican](/img/next_gen/extensions/modules/pelican/pelican_client_key_creation.png)

---

## 5) Ajouter un serveur Pelican dans ClientXCMS

Le module Pelican s’appuie sur le système de **serveurs de provisioning** de ClientXCMS.

Chemin :
`Admin → Paramètres → Approvisionnement → Serveurs → Nouveau`

Type de serveur : **Pelican**

![Connexion au serveur Pelican](/img/next_gen/extensions/modules/pelican/connexion_serveur.png)

### Champs à renseigner

| Champ | Description |
|------|------------|
| Adresse | URL complète du panel Pelican |
| Username | **Application API Key** |
| Password | **Client API Key** (optionnel) |

Une fois configuré, utilisez le bouton **Tester la connexion** pour valider l’accès à l’API.

---

## 6) Importer et gérer les Eggs

Les eggs Pelican doivent être importés afin d’être utilisés dans les produits.

### 6.1 Import des eggs

Chemin :
`Admin → Extensions → Pelican → Eggs → Importer`

![Import des eggs Pelican](/img/next_gen/extensions/modules/pelican/import_eggs.png)

Cette action :
- Récupère les eggs depuis Pelican
- Les stocke localement
- Permet leur sélection dans les produits

---

### 6.2 Liste des eggs

![Liste des eggs Pelican](/img/next_gen/extensions/modules/pelican/liste_eggs.png)

Depuis cette page, vous pouvez :
- Activer / désactiver un egg
- Synchroniser un egg
- Accéder à ses détails

---

### 6.3 Détail d’un egg et variables

![Détail d'un egg Pelican](/img/next_gen/extensions/modules/pelican/detail_egg.png)

Chaque egg contient :
- Son image Docker
- Sa commande de démarrage
- Ses variables d’environnement
- Les options `user_editable`, `required`, etc.

Ces variables peuvent ensuite être rendues modifiables côté client.

---

## 7) Configuration d’un produit Pelican

Chaque produit ClientXCMS peut livrer **un serveur Pelican**.

Chemin :
`Admin → Boutique → Produits → (Produit) → Configuration → Pelican`

![Configuration produit Pelican](/img/next_gen/extensions/modules/pelican/config_produit.png)

### Vous pouvez définir :

- Le serveur Pelican utilisé
- L’egg par défaut ou les eggs autorisées
- Les nodes autorisées
- Les ressources (RAM, CPU, disque…)
- Les fonctionnalités (DB, backups, allocations)
- Les options de déploiement (ports, IP dédiée, tags)
- Les permissions client (réinstallation, variables, egg)

---

## 8) Expérience client – Commande et gestion

### 8.1 Choix de l’egg et des variables à l’achat

![Sélection des eggs et variables à l'achat](/img/next_gen/extensions/modules/pelican/achat_service_selection_eggs_variables.png)

Selon la configuration :
- Le client peut choisir son egg
- Renseigner certaines variables
- Ajouter des options payantes

---

### 8.2 Panel client – Gestion du serveur

![Panel client Pelican](/img/next_gen/extensions/modules/pelican/panel_client_service.png)

Le client peut :
- Démarrer / arrêter / redémarrer son serveur
- Voir le statut en temps réel
- Réinstaller le serveur
- Modifier les variables autorisées

---

### 8.3 Réinstallation du serveur

![Réinstallation d'un serveur Pelican](/img/next_gen/extensions/modules/pelican/reinstaller_serveur.png)

La réinstallation peut :
- Réutiliser le même egg
- Ou permettre un changement d’egg (si autorisé)

---

## 9) Administration des services

### 9.1 Tableau de bord Pelican

![Tableau de bord Pelican](/img/next_gen/extensions/modules/pelican/tableaudebord.png)

Depuis ce dashboard, l’administrateur accède rapidement à :
- L’état des serveurs Pelican
- La gestion des eggs
- Les outils de maintenance

---

### 9.2 Gestion d’un service côté admin

![Panel admin service Pelican](/img/next_gen/extensions/modules/pelican/panel_admin_service.png)

Actions disponibles :
- Suspendre / réactiver
- Réinstaller
- Supprimer
- Mettre à jour les ressources
- Synchroniser avec Pelican

---

## 10) Paramètres et cache

![Paramètres du module Pelican](/img/next_gen/extensions/modules/pelican/parametres.png)

Le module utilise un système de cache pour :
- Accélérer l’interface admin
- Réduire les appels API Pelican

Un bouton permet de **vider le cache** à tout moment.

---

## 11) Conclusion

Le module **Pelican pour ClientXCMS** est une solution **clé en main**, pensée pour :

- Les hébergeurs professionnels
- La vente automatisée de serveurs
- Une expérience client moderne
- Une administration simple et puissante

Il permet de passer d’un simple panel Pelican à une **véritable offre commerciale prête à vendre**.