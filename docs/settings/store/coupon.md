---
sidebar_position: 4
---

# Coupons

Dans **CLIENTXCMS**, un **coupon** correspond à un **code de réduction que vous proposez à vos clients** dans votre boutique. <br/>
L'objectif est clair : **fidéliser votre clientèle, booster vos ventes et proposer des offres promotionnelles ciblées**. Une bonne gestion des coupons permet à vos clients de **bénéficier d'avantages exclusifs** tout en vous donnant un contrôle total sur vos campagnes marketing.

Chaque coupon peut être entièrement personnalisé : code, type de réduction, validité, conditions d'utilisation, produits concernés, etc.

Vous pouvez gérer les coupons depuis :

`Paramètres` > `Paramètres de la boutique` > `Coupons`

![Accès à la configuration des coupons](/img/next_gen/settings/store/coupons/admin_list.png)

:::tip Astuce
Un coupon bien configuré peut considérablement **améliorer votre taux de conversion** et encourager les clients à finaliser leur commande.
Pensez à définir des conditions claires pour éviter les abus.
:::

## Pourquoi utiliser des coupons ?

Les coupons sont un outil marketing puissant pour votre boutique. Ils représentent concrètement des avantages que vous offrez à vos clients — que ce soit une réduction sur un service spécifique, des frais d'installation offerts ou une remise globale.

Créer des coupons efficaces vous permet de :

* Fidéliser vos clients existants avec des offres exclusives
* Attirer de nouveaux clients avec des réductions attractives
* Écouler des stocks ou promouvoir des services spécifiques
* Récompenser les clients fidèles ou les premiers acheteurs

:::tip Astuce
Les coupons sont comme des **tickets d'entrée privilégiés** pour vos services 🎫 — vos clients se sentent valorisés, et vous gardez le contrôle sur vos marges et votre stratégie commerciale.
:::

## Interfaces utilisateur

### Vue côté boutique

Les coupons sont appliqués par les clients directement dans le **panier de commande**.  
Ils saisissent le code du coupon dans un champ dédié lors de la finalisation de leur commande.

![Ajout d'un coupon dans le panier](/img/next_gen/settings/store/coupons/add_coupon.png)

Une fois le coupon validé, la réduction s'applique automatiquement et le client peut voir :
- Le montant de la réduction
- Le nouveau total après réduction
- Les conditions du coupon appliqué

![Coupon appliqué avec succès](/img/next_gen/settings/store/coupons/applied_coupon.png)

## Vue administrateur

Dans l'interface d'administration, vous disposez d'une liste complète des coupons créés. Vous pouvez :
- **Rechercher** un coupon par son code
- **Filtrer** par statut ou période de validité
- **Effectuer des actions** comme modifier, consulter les utilisations ou supprimer un coupon

![Vue de la liste des coupons en administration](/img/next_gen/settings/store/coupons/admin_list.png)

### Actions disponibles

| Action        | Description                                  |
|---------------|----------------------------------------------|
| **Afficher**  | Consulte et édite les détails du coupon     |
| **Supprimer** | Supprime définitivement le coupon           |

:::danger Attention
La suppression d'un coupon peut provoquer des erreurs si celui-ci est lié à des commandes existantes.  
Procédez avec prudence, nous recommandons de désactiver le coupon plutôt que de le supprimer.
:::

### Types de réduction

CLIENTXCMS propose deux types de réduction pour les coupons :

- **Pourcentage** : Réduction calculée en pourcentage du montant de la commande
- **Montant fixe** : Réduction d'un montant défini en devise

Ces types permettent une flexibilité totale dans vos stratégies de réduction.

## Créer un nouveau coupon

Pour ajouter un coupon à votre boutique, cliquez sur le bouton **« Créer »** en haut à droite de la page.

![Création d'un coupon](/img/next_gen/settings/store/coupons/create_coupon.png)

### Paramètres essentiels à définir

Voici les champs principaux à compléter lors de la création d'un coupon :

**Code** | (texte)<br />

Le code que les clients devront saisir pour bénéficier de la réduction. Choisissez un code mémorable et unique.

**Type de réduction** | (menu déroulant)<br />

Sélectionnez entre "Pourcentage" ou "Montant fixe" selon le type de réduction souhaité.

**Date de début** | (date)<br />

Date à partir de laquelle le coupon devient utilisable par les clients.

**Date de fin** | (date)<br />

Date limite d'utilisation du coupon. Laissez vide pour un coupon sans expiration.

**Nombre maximum d'utilisations** | (champ numérique)<br />

Limite globale du nombre de fois que le coupon peut être utilisé. Laissez vide pour un usage illimité.

**Nombre d'utilisations par client** | (champ numérique)<br />

Limite le nombre de fois qu'un même client peut utiliser ce coupon.

**Montant minimum de la commande** | (montant)<br />

Montant minimum que doit atteindre la commande pour pouvoir appliquer le coupon.

:::tip Astuce
Définissez des **codes courts et mémorables** comme "BIENVENUE10" ou "NOEL2024". Évitez les codes trop complexes qui pourraient décourager vos clients.
:::

## Configuration avancée

### Options de ciblage

Vous pouvez configurer des options avancées pour chaque coupon :

**Produits autorisés** | (sélection multiple)<br />
Restreint l'utilisation du coupon à des produits spécifiques.

**Groupes autorisés** | (sélection multiple)<br />
Limite le coupon à certains groupes de produits uniquement.

**Produits requis** | (sélection multiple)<br />
Exige la présence de certains produits dans le panier pour utiliser le coupon.

**Réduction globale** | (case à cocher)<br />
Applique la réduction sur l'ensemble de la commande au lieu de produits spécifiques.

**Offrir les frais d'installation** | (case à cocher)<br />
Annule les frais d'installation en plus de la réduction.

**Première commande uniquement** | (case à cocher)<br />
Limite l'utilisation aux nouveaux clients pour leur première commande.

**Récurrence de la réduction** | (champ numérique)<br />
Définit sur combien de renouvellements la réduction s'applique. `-1` pour illimité, `0` pour le premier paiement uniquement.

## Configuration des réductions

### Utiliser la calculatrice intégrée

![Interface de la calculatrice de réduction](/img/next_gen/settings/store/coupons/create_pricing2.png)

CLIENTXCMS propose une **calculatrice de réduction intégrée**.  
Elle vous aide à :
- calculer rapidement des **réductions dégressives**
- appliquer des **pourcentages variables** selon la durée

Cette fonction est idéale pour créer des coupons cohérents et attractifs.

:::tip Astuce
Utilisez la calculatrice pour créer des **offres dégressives** : plus le client s'engage longtemps, plus la réduction est importante.
Cela encourage les abonnements de longue durée.
:::

## Édition d'un coupon

L'édition d'un coupon vous permet de **modifier ses caractéristiques** tout en conservant son historique d'utilisation.

### Accéder à l'édition

Pour éditer un coupon :

1. Rendez-vous dans la liste des coupons.
2. Cliquez sur le bouton **« Afficher »** dans la colonne **Actions** du coupon concerné.

### Modifier les informations

Une fois dans l'interface d'édition, vous pouvez modifier :
- Le **code du coupon** (attention aux utilisations en cours)
- Les **conditions d'utilisation**
- Les **dates de validité**
- Les **montants et pourcentages**

:::warning Important
Si le coupon est déjà utilisé dans des commandes actives, certaines modifications peuvent ne pas s'appliquer rétroactivement.
:::

## Suivi des utilisations

### Affichage détaillé des utilisations

Vous pouvez consulter l'historique complet d'utilisation de chaque coupon :

![Historique des utilisations](/img/next_gen/settings/store/coupons/show_usages.png)

Le tableau affiche :
- **Client** : Qui a utilisé le coupon
- **Montant de la réduction** : Économies réalisées
- **Date d'utilisation** : Quand le coupon a été appliqué
- **Commande associée** : Référence de la commande

### Gestion des utilisations

Vous pouvez **annuler une utilisation** en cliquant sur le bouton **« Supprimer »** correspondant.  
Cela permet au client de réutiliser le coupon si nécessaire.

## Supprimer un coupon

:::danger Avertissement
La suppression d'un coupon peut provoquer des dysfonctionnements dans le système, notamment si le coupon est lié à des commandes existantes. Nous recommandons de **désactiver** le coupon plutôt que de le supprimer définitivement.
:::

Pour supprimer un coupon :
1. Cliquez sur le bouton rouge **« Supprimer »** dans la colonne **Actions**.
2. Confirmez l'opération.

## Stratégies de coupons efficaces

### Types de coupons recommandés

| Type de coupon           | Usage recommandé                                    |
|--------------------------|-----------------------------------------------------|
| **Bienvenue**            | Pour les nouveaux clients (première commande)      |
| **Fidélité**             | Pour récompenser les clients réguliers             |
| **Saisonnier**           | Pour les périodes promotionnelles                  |
| **Produit spécifique**   | Pour écouler un stock ou promouvoir une nouveauté  |

### Bonnes pratiques

* **Codes clairs** : Utilisez des codes explicites comme "BIENVENUE20" ou "PAQUES2024"
* **Durée limitée** : Créez un sentiment d'urgence avec des dates d'expiration
* **Conditions justes** : Évitez les conditions trop restrictives qui frustrent les clients
* **Suivi régulier** : Analysez les utilisations pour optimiser vos futures campagnes

:::tip À retenir
Un coupon bien conçu est un **outil de fidélisation puissant**. Utilisez-les stratégiquement pour booster vos ventes tout en maintenant vos marges.
:::