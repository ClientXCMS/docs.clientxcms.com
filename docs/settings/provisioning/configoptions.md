# Options supplémentaires
Les options supplémentaires sont des fonctionnalités qui peuvent être ajoutées à un service lors de la commande ou après pour le personnaliser davantage. 

## Types d'options disponibles
- **Curseurs** : Les curseurs permettent de définir des valeurs personnalisées à partir d'un prix unitaire.
- **Menu déroulant** : Les menus déroulants permettent de définir des valeurs prédéfinies pour les ressources avec un prix pour chaque valeur.
- **Case à cocher** : Les cases à cocher permettent d'ajouter des fonctionnalités supplémentaires à un service sans coût supplémentaire.
- **Champ de texte** : Les champs de texte permettent aux clients de saisir des informations supplémentaires lors de la commande.
- **Radio** : Les boutons radio permettent de sélectionner une seule option parmi plusieurs.
- **Champs nombre** : Les champs nombre permettent de saisir un nombre lors de la commande.
- **Zone de texte** : Les zones de texte permettent aux clients de saisir des informations supplémentaires lors de la commande.

## Configuration des options
Pour configurer des options supplémentaires, allez dans `Paramètres` > `Approvisionnement` > `Options supplémentaires`. Vous pouvez ajouter, modifier ou supprimer des options à partir de cette page.
![img](/img/next_gen/settings/provisioning/configoptions/index_admin.png)

### Création
Pour ajouter une nouvelle option, cliquez sur le bouton "Créer" en haut à gauche de la page.
![img](/img/next_gen/settings/provisioning/configoptions/create_admin.png)

**Nom** : Nom de l'option affiché lors de la commande.

**Produit** : Produit auquel l'option sera liée.

**Clé** : Clé de l'option (pour être utilisées dans les extensions).

**Type** : Type de l'option (Curseur, Menu déroulant, Case à cocher, Champ de texte, Radio, Champs nombre, Champs texte).

### Curseur
**Valeur minimale** : Valeur minimale du curseur.

**Valeur maximale** : Valeur maximale du curseur.

**Pas** : Pas du curseur. (par exemple de 10 en 10)

**Valeur par défaut** : Valeur par défaut du curseur.

**Unité** : Unité du curseur.

**Règles de validation** : Règles de validation du curseur laravel.

**Requis** : Curseur requis ou non.

### Menu déroulant ou Radio
Vous pourrez ajouter des options lors de l'édition de l'option.
Chaque option peut avoir un prix différent avec un nom et une valeur.
Il est recommandé de rendre l'option caché lors que vous ajoutez des options.
![img](/img/next_gen/settings/provisioning/configoptions/dropdown.png)
:::info
Lors que vous ajoutez une option, les modifications en attente ne seront pas sauvegarder. Il est conseillé de sauvegarder les modifications avec le bouton `Enreigstrer` avant d'ajouter une nouvelle option.
:::

### Texte, Nombre ou Zone de texte
**Valeur par défaut** : Valeur par défaut du champ.

**Règles de validation** : Règles de validation du champ laravel.

**Valeur minimale** : Valeur minimale du champ.

**Valeur maximale** : Valeur maximale du champ.

**Requis** : Champ requis ou non.

### Localisation
Vous pouvez laisser le choix de la localisation du service. Par exemple proposer un emplacement en France ou en Allemagne.
Pour ceci sélectionnez la clé `Serveur/Localisation` avec un type `Menu déroulant` et ajoutez les valeurs `France` et `Allemagne` avec comme valeur l'id du serveur clientxcms.
Chaque localisation peut avoir un prix différent.
![img](/img/next_gen/settings/provisioning/configoptions/localization.png)

## Tarification
Vous pouvez définir un prix récurrent ou en une fois pour chaque option.
![img](/img/next_gen/settings/store/products/create_pricing2.png)
:::info
Nous conseillons de définir un prix pour chaque récurrence pour chaque option. Cela évitera les erreurs de facturation.
:::

Verifiez bien que l'option n'est pas caché pour être visible lors de la commande.