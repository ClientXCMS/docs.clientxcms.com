---
sidebar_position: 1
---

# Produits

Dans CLIENTXCMS, vous pouvez vendre des services à vos clients depuis la boutique. Vous pouvez gérer les produits en configurant le prix, la description, son type ou son nom depuis la section `Paramètres de boutique` des paramètres puis `produits`.

![img](/img/next_gen/settings/store/products/settings.png)

## Affichage des produits
Vous pouvez voir les produits disponibles dans votre boutique. Ils sont regroupés par groupe de produits disponibles sur l'url `/store/{group}` de votre boutique.
![Vision dans un groupe de produit](/img/next_gen/settings/store/products/store_list.png)
## Administration
### Liste des produits
Vous pouvez voir la liste des produits disponibles dans votre boutique. Vous pouvez les filtrer par groupe ou rechercher un produit en particulier.

![Vision administrateur](/img/next_gen/settings/store/products/admin_list.png)

#### Actions
- **Clone** : Permet de cloner un produit

- **Afficher** : Permet de voir les détails du produit et de le modifier

- **Supprimer** : Permet de supprimer un produit

:::danger Danger!
La suppression d'un produit peut provoquer des problèmes dans le système.
:::

### Types
Chaque produit doit avoir un type associé. Les types de produits sont ajoutés par les modules approvisionnements comme Pterodactyl ou Plesk, ils permettent de pouvoir synchroniser votre offre à l'automatisation du module. Vous pouvez activer un module d'approvisionnement depuis les extensions.
### Cycle de facturation
Les cycles de facturation permettent de définir la période de facturation pour un produit. Voici les cycles de facturation disponibles :
- Mensuel
- Trimestriel
- Semestriel
- Annuel
- Biannuel
- Triennal
- Hebdomadaire
## Création
Pour ajouter un produit, cliquez sur le bouton "Créer" en haut à gauche de la page.
![img](/img/next_gen/settings/store/products/create_product.png)
**Nom du produit** : Nom de vente qui sera affiché aux clients

**Stock disponible** : Stock disponible pour le produit (-1 pour illimité)

**Statut** : Statut du produit [(Voir ici pour plus d'informations)](./products#status)

**Groupe** : Permet d'associer un produit à un groupe - Ne peut pas être dans aucun groupe [(Si vide créez en un ici)](./groupes#création)

**Ordre de tri** : Ordre d'apparition - [Gérer nativement par la réorganisation des produits facilement](./groupes#edition)

**Type** : Type de produit - [(Si vide activez un module d'approvisionnement ici)](../../extensions)

**Description** : Texte avec la description du produit qui sera affiché dans la boutique

**Epingle** : Permet de mettre en avant le produit dans la boutique
### Configuration des prix
Vous pouvez définir le prix du produit ainsi que les frais d'installation selon le cycle de facturation. Pour chaque cycle de facturation, vous pouvez définir un prix différent.
Pour définir un produit comme gratuit, vous pouvez définir le prix à 0. Si vous souhaitez désactiver un cycle de facturation, vous **DEVEZ** le laisser vide.
#### Calculatrice
![img](/img/next_gen/settings/store/products/create_pricing2.png)

Nous avons ajouté une calculatrice intégrée pour vous aider à calculer le prix du produit avec une réduction possible sur la durée. Vous pouvez définir le prix de base, la réduction en pourcentage si vous voulez faire des réductions sur la durée et le nombre de mois pour le cycle de facturation. 

![img](/img/next_gen/settings/store/products/config_pricing.png)

Cela vous fait gain de temps pour calculer le prix du produit.
### Affichages des cycles
Les cycles de facturation sont affichés sur la page de configuration du produit lors de l'ajout dans le panier.
![img](/img/next_gen/settings/store/products/config_billing.png)

#### Plus de tarifs
Vous pouvez ajouter plus de tarifs en cliquant sur le bouton "Configurer plus de tarifs" pour pouvoir utiliser le biannuel, triennal ou hebdomadaire.
## Edition
Vous pouvez éditer un produit en cliquant sur le bouton "Afficher" dans la colonne "Actions". Vous pouvez modifier les informations du produit, sensiblement à une création.

### Edition de la configuration
Vous pouvez configurer les performances de l'offre en définissant les ressources, les fonctionnalités et les limitations selon le type du produit.

![Configuration de l'offre](/img/next_gen/extensions/modules/pterodactyl/images_4.png)

Voici un exemple de configuration pour un produit Pterodactyl.

:::info
Veuillez-vous référez à la page du module pour plus d'information en termes de configuration du produit.
:::
## Suppression
:::danger
La suppression d'un produit peut provoquer des problèmes dans le système.
:::
Vous pouvez supprimer un produit en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandée puis le produit sera supprimé.

### Status
Les status permettent de définir l'état du produit.
- Disponible : Visible et disponible à l'achat
- Non référencé : Visible uniquement par les administrateurs
- Caché : Invisible pour les clients

### Lien pour ajouter un produit
Lors de l'édition d'un produit vous pouvez avoir les deux liens pour ajouter le produit
`https://demo.clientxcms.com/store/basket/add/[id]`
### Gestions du stock
Vous pouvez activer la gestion du stock pour un produit avec l'option stock disponible. Si le stock est à 0, le produit ne sera plus disponible à l'achat. et si le stock est à -1 le produit sera illimité.
### Gestion du stock automatique
Vous pouvez utiliser la gestion de stock automatique pour gérer le stock de manière automatique, lors qu'un produit est acheté le stock est décrémenté et lors qu'un service expire et suppression le stock est incrémenté.
Pour activer la gestion de stock automatique, vous devez activer l'option `auto_stock` dans les métadonnées.

### Désactivation de la gestion du stock
Vous pouvez désactiver la gestion du stock pour un produit avec l'option `disabled_stock`.
### Metadonnées

Les métadonnées permettent de définir des informations supplémentaires sur le produit. Vous pouvez définir des métadonnées pour chaque produit.

###### Metadonnées disponibles
-------------------------
| Clé                       | Valeur | Description                                                     |
|---------------------------|--------|-----------------------------------------------------------------|
| `basket_url`              | Any    | Lien pour ajouter le produit au panier                          |
| `is_personalized_product` | true   | Définis comme produit sur demande                               |
| `basket_title`            | Any    | Titre du bouton d'ajout au panier                               |
| `disabled_many_services`  | active | Désactive la possibilité de commander plusieurs services actifs |
| `disabled_many_services`  | all    | Désactive la possibilité de commander plusieurs services        |
| `auto_stock`              | true   | Permet de gérer le stock automatiquement                        |
| `disabled_stock`          | true   | Désactive la gestion du stock                                   |
| `max_renewals_in_current_month` | 1 | Nombre de renouvellements maximum par mois                     |
| `max_renewals_in_current_week`  | 1 | Nombre de renouvellements maximum par semaine                   |
--------------------------------
