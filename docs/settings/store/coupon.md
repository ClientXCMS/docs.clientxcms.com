---
sidebar_position: 4
---
# Coupons
Vous pouvez créer des coupons pour offrir des réductions à vos clients. Les coupons peuvent être utilisés pour des produits spécifiques ou pour l'ensemble de la boutique. Vous pouvez y accéder depuis `Espace d'administration` > `Paramètres boutique` > `Coupons`.
## Types de réduction
ClientXCMS propose plusieurs types de réduction pour les coupons :
- **Pourcentage** : Réduction en pourcentage
- **Montant fixe** : Réduction en montant fixe

## Options disponibles
Vous pouvez configurer les options suivantes pour chaque coupon :
- Produits/groupes autorisés
- Produits requis
- Réduction globale sur la boutique
- Offrir les frais d'installation
- Première commande uniquement
- Montant minimum de la commande
- Nombre maximum d'utilisations
- Date de début et de fin
- Récurrence de la réduction
- Nombre d'utilisations par client
# Ajouter un coupon
Les clients ajouter le coupon lors de la commande depuis le panier avec ce formulaire disponible sur la page panier : 
![Ajouter un coupon](/img/next_gen/settings/store/coupons/add_coupon.png)
# Application d'un coupon
Les clients peuvent appliquer un coupon lors de la commande depuis le panier. Ils peuvent voir le montant de la réduction et le montant total de la commande après la réduction.

![Appliquer un coupon](/img/next_gen/settings/store/coupons/applied_coupon.png)
## Administration
### Liste des coupons
Vous pouvez voir la liste des coupons disponibles dans votre boutique. Vous pouvez les filtrer par groupe ou rechercher un coupon en particulier.
![Vision administrateur](/img/next_gen/settings/store/coupons/admin_list.png)
#### Actions
- **Afficher** : Permet de voir les détails du coupon et de le modifier
- **Supprimer** : Permet de supprimer un coupon
:::danger Danger!
- La suppression d'un coupon peut provoquer des problèmes dans le système.
:::

### Création
![Création d'un coupon](/img/next_gen/settings/store/coupons/create_coupon.png)
**Code** : Code du coupon

**Type** : Type de réduction

**Date de début** : Date de début de validité du coupon

**Date de fin** : Date de fin de validité du coupon

**Récurrence de la réduction** : Nombre de renouvellements de la réduction sur le service

**Nombre maximum d'utilisations** : Nombre maximum d'utilisation du coupon

**Nombre d'utilisations par client** : Nombre maximum d'utilisation du coupon par client

**Nombre d'utilisations** : Nombre d'utilisations du coupon, par default toujours 0

**Montant minimum de la commande** : Montant minimum de la commande pour utiliser le coupon

**Produits autorisés** : Produits autorisés pour utiliser le coupon

**Groupes autorisés** : Groupes autorisés pour utiliser le coupon

**Produits requis** : Produits requis pour utiliser le coupon

**Réduction globale** : Réduction globale sur la commande

**Offrir les frais installation** : Offrir les frais d'installation

**Première commande uniquement** : Utilisable uniquement pour la première commande

### Configuration des réductions
Vous pouvez définir le prix du coupon ainsi que les frais d'installation. Vous pouvez définir un pourcentage ou un montant fixe pour la réduction selon le type de la réduction
#### Calculatrice
![img](/img/next_gen/settings/store/coupons/create_pricing2.png)

Nous avons ajouté une calculatrice intégrée pour vous aider à calculer le prix du coupon avec une réduction possible sur la durée. Vous pouvez définir la réduction en pourcentage si vous voulez faire des réductions sur la durée et le nombre de mois pour le cycle de facturation.

![img](/img/next_gen/settings/store/products/config_pricing.png)

Cela vous fait gain de temps pour calculer le prix de la réduction.
## Edition
Vous pouvez éditer un coupon en cliquant sur le bouton `Afficher` de la liste des coupons. Vous pouvez modifier les informations du coupon et les réductions associées. Attention, si le coupon est déjà utilisé, les modifications ne seront pas prises en compte pour les commandes déjà effectuées.
## Suppression
Vous pouvez supprimer un coupon en cliquant sur le bouton `Supprimer` de la liste des coupons. Attention, si le coupon est déjà utilisé, les commandes déjà effectuées ne seront pas modifiées.
### Affichage des utilisations
Vous pouvez voir les utilisations du coupon avec le tableau des utilisations. Vous pouvez voir le client, le montant de la réduction et la date de l'utilisation.

![Vision des utilisations](/img/next_gen/settings/store/coupons/show_usages.png)

Vous pouvez retirer l'utilisation du coupon en cliquant sur le bouton `Supprimer` pour permettre au client de réutiliser le coupon.