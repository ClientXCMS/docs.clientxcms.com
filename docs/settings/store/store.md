---
sidebar_position: 0
---

# Boutique

La **boutique** est le cœur commercial de **CLIENTXCMS**. C'est ici que vos clients découvrent vos services, comparent vos offres et passent commande. <br/>
L'objectif est clair : **créer une expérience d'achat fluide et professionnelle** qui transforme vos visiteurs en clients satisfaits.

La boutique est un écosystème complet qui regroupe plusieurs éléments essentiels : les produits, les groupes, les coupons, les moyens de paiement et la facturation.

Vous pouvez gérer votre boutique depuis :

`Paramètres` > `Paramètres de la boutique`

![Accès aux paramètres de la boutique](/img/next_gen/settings/store/products/settings.png)

:::tip Astuce
Une boutique bien organisée est une boutique qui convertit. Prenez le temps de structurer vos offres, de rédiger des descriptions claires et de configurer des moyens de paiement adaptés à votre clientèle.
:::

## Vue d'ensemble de la boutique

### Architecture de la boutique

La boutique ClientXCMS s'articule autour de plusieurs composants clés :

* **[Produits](./products)** : Les services que vous proposez à la vente (hébergement, VPS, licences, etc.)
* **[Groupes](./groupes)** : Les catégories qui organisent vos produits de manière logique
* **[Coupons](./coupon)** : Les codes promotionnels pour stimuler vos ventes
* **[Moyens de paiement](./payment_gateways/payment_gateways.md)** : Les passerelles pour recevoir les paiements
* **[Facturation](../billing/billing.md)**gestion des factures et des paramètres comptables

### Parcours client type

1. **Découverte** : Le client visite votre boutique à l'adresse `/store`
2. **Navigation** : Il explore les différents groupes de produits
3. **Sélection** : Il choisit un produit et configure ses options
4. **Panier** : Il ajoute le produit au panier et applique éventuellement un coupon
5. **Paiement** : Il règle sa commande via le moyen de paiement de son choix
6. **Livraison** : Le service est automatiquement provisionné après validation du paiement

## Interface utilisateur

### Vue côté client

La boutique est accessible publiquement à l'adresse :

`https://votre-site.com/store`

L'interface présente :
- Une vue d'ensemble des groupes de produits disponibles
- Un système de navigation intuitif par catégories
- Des fiches produits détaillées avec prix et options
- Un panier persistent durant la session
- Un processus de commande simplifié

![Vue de la boutique côté client](/img/next_gen/settings/store/groups/view_group.png)

### Vue administrateur

L'interface d'administration vous permet de :
- Gérer l'ensemble des produits et groupes
- Suivre les commandes et les paiements
- Configurer les promotions et réductions
- Analyser les performances commerciales
- Personnaliser l'apparence de la boutique

## Configuration initiale

### Étapes de mise en place

Pour configurer votre boutique, suivez ces étapes dans l'ordre :

1. **Configurer la facturation**
   - Définir les informations légales
   - Paramétrer le préfixe des factures
   - Configurer les CGV

2. **Créer les groupes de produits**
   - Organiser la structure de votre catalogue
   - Définir les catégories principales
   - Ajouter les descriptions et images

3. **Ajouter les produits**
   - Créer vos offres de services
   - Définir les prix et cycles de facturation
   - Configurer les options techniques

4. **Activer les moyens de paiement**
   - Configurer au minimum une passerelle
   - Tester les transactions
   - Vérifier les webhooks

5. **Créer des promotions (optionnel)**
   - Définir des coupons de réduction
   - Planifier des campagnes commerciales

:::warning Important
Assurez-vous d'avoir configuré au moins un moyen de paiement actif avant d'ouvrir votre boutique au public. Sans cela, vos clients ne pourront pas finaliser leurs commandes.
:::

## Gestion des commandes

### Cycle de vie d'une commande

Une commande passe par plusieurs états :

| État | Description |
|------|-------------|
| **En attente** | Commande créée, paiement non reçu |
| **Payée** | Paiement validé, service en cours de livraison |
| **Active** | Service livré et opérationnel |
| **Suspendue** | Service temporairement désactivé |
| **Expirée** | Service arrivé à échéance |
| **Annulée** | Commande annulée avant paiement |

### Automatisation

ClientXCMS automatise plusieurs processus :
- Création des services après paiement
- Envoi des emails de confirmation
- Génération des factures
- Rappels de renouvellement
- Suspension en cas de non-paiement

## Personnalisation de la boutique

### Options d'affichage

Vous pouvez personnaliser :
- L'ordre d'affichage des groupes et produits
- Les produits mis en avant (épinglés)
- Les descriptions avec l'éditeur HTML
- Les images et arrière-plans des groupes

### SEO et marketing

Pour optimiser votre boutique :
- Rédigez des descriptions détaillées et uniques
- Utilisez des URLs personnalisées (slugs)
- Ajoutez des images de qualité
- Créez des offres promotionnelles régulières

## Bonnes pratiques

### Organisation des produits

- **Groupez logiquement** : Créez des catégories cohérentes
- **Nommez clairement** : Utilisez des titres explicites
- **Décrivez précisément** : Détaillez les caractéristiques et avantages
- **Tarifez stratégiquement** : Proposez plusieurs cycles de facturation

### Expérience client

- **Simplifiez la navigation** : Limitez le nombre de clics nécessaires
- **Soyez transparent** : Affichez clairement les prix et conditions
- **Facilitez le paiement** : Proposez plusieurs moyens de paiement
- **Communiquez** : Informez sur l'état des commandes

### Sécurité

- **Protégez les données** : Utilisez HTTPS systématiquement
- **Validez les paiements** : Configurez correctement les webhooks
- **Surveillez** : Vérifiez régulièrement les logs de transactions
- **Sauvegardez** : Conservez des copies de vos configurations

:::tip Conseil
La réussite de votre boutique repose sur trois piliers : une offre claire, un parcours d'achat simple et un service client réactif. Investissez du temps dans chacun de ces aspects pour maximiser vos conversions.
:::

## Intégrations et extensions

### Modules de provisioning

La boutique s'intègre avec de nombreux modules :
- **Pterodactyl** : Hébergement de serveurs de jeux
- **Proxmox** : Création de VPS
- **Plesk** : Hébergement web managé
- **ProxmoxVE** : Virtualisation avancée
- Et bien d'autres...

### Passerelles de paiement

Plusieurs options sont disponibles :
- **PayPal** : Standard et Express Checkout
- **Stripe** : Cartes bancaires et wallets
- **Virement bancaire** : Paiements manuels
- **Solde client** : Crédit prépayé
- **Stancer** : Solution européenne

### Extensions tierces

Enrichissez votre boutique avec :
- Systèmes de tickets
- Analyses avancées
- Intégrations comptables
- Outils marketing

## Maintenance et optimisation

### Surveillance régulière

- Vérifiez les stocks de produits
- Contrôlez les taux de conversion
- Analysez les abandons de panier
- Suivez les retours clients

### Améliorations continues

- Testez de nouvelles offres
- Optimisez les descriptions
- Ajustez les prix selon la demande
- Innovez dans vos services

:::info À retenir
La boutique ClientXCMS est conçue pour évoluer avec votre activité. Commencez simple, puis enrichissez progressivement votre catalogue et vos fonctionnalités selon les besoins de vos clients.
:::

## Ressources complémentaires

Pour approfondir la configuration de votre boutique, consultez :

import DocCardList from '@theme/DocCardList';

<DocCardList />