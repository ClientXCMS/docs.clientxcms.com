---
sidebar_position: 1
---

# Produits

Pour vendre vos services un système de produits est disponible pour gérer l'automatisation de la livraison, gestion des stocks et configuration.

Pour y accéder : `Espace Administration` > `Boutique` > `Produits`

## Liste des produits
![img](/img/next_gen/Store/Produit/image_1.png)
### Boutons

**Premier bouton** : Permet de clonner le produit

**Second bouton** : Permet d'éditer la configuration du produit

**Troisième bouton** : Permet de supprimer le produit

## Création
![img](/img/next_gen/Store/Produit/image_2.png)
**Nom du produit**(texte) : Nom de vente qui sera affiché aux clients

**Groupe**(select) : Groupe associé - Ne peut pas être dans aucun groupe [(Si vide créez en un ici)](./groupes#Création)

**Order**(texte) : Ordre d'apparition - [Gérer nativement par la Réorganisation des produits](./groupes#Réorganisation-des-produits)

**Type**(select) : Type de produit - [(Si vide activez un module d'approvisionnement ici)](../modules#Activation-dun-module)

**Type de paiement**(select) : Type de paiement pour le produit

**Description**(texte) : Texte avec la description du produit

**Offre sur demande**(checkbox) : Votre client sera redirigé vers la création d'une demande d'aide pour commander

**Créer automatiquement le service**(checkbox) : Activez ou non la création automatique d'un service

**Caché**(checkbox) : Permet de cacher le produit ou non. [se référer ici pour plus d'informations](./produits#Produit-caché)


### Types de paiement disponibles
#### Gratuit
Le client ne devra rien payer pour avoir son service. Une facture sera quand même émise. Idéale pour des essais gratuits sur une courte durée.

Pour cela il faut mettre la valeur 0 pour le prix !

#### A vie
Le client paye une fois son service et ne devra pas payer pour le renouveler.

Vous pouvez y ajouter un prix et des frais d'installation potentiel à faire facturer à votre client lors de l'achat.

#### Récurrent
Le client doit renouveler son service à son expiration pour le garder en ligne.

Vous devez ajouter un prix et des frais d'installation potentiel à faire facturer à votre client lors de l'achat pour chaque cycle de facturation et proposer des réductions pour des cycles longs.

Vous pouvez également laisser ZÉRO en valeur pour désactiver le cycle de facturation.


:::info
Conseil de pro : Pour désactiver un cicle de facturation il vous sufis de laiser la case vide.
:::
## Edition
### Edition de la configuration
Vous pouvez modifier la configuration spécifique à chaque module en cliquant sur le troisième bouton ou sur le bouton "Configuration du produit" depuis la page d'édition.
:::info
Veuillez-vous référez à la page du module pour plus d'information en termes de configuration du produit.
:::
## Suppression
:::danger
La suppression d'un produit peut provoquer des problèmes dans le système.
:::
Vous pouvez supprimer un produit en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandé puis le produit sera supprimé.


## Produit caché
Cette option permet de décider si le produit ne doit pas être disponible à l'achat. Il affichera plus le produit dans la boutique en un click. Pour cacher un produit, allez dans la configuration du produit et mettez dans Statut : Caché.

## Autres 
### Lien pour ajouter un produit

Lors de l'édition d'un produit vous pouvez avoir les deux liens pour ajouter le produit

`https://votreDomaine.fr/basket/add/[id]` - Ajoute le produit au panier

`https://votreDomaine.fr/store/[id]/checkout` - Affiche le Checkout pour commander le produit
