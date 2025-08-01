# Menu de haut de la page
Vous pouvez modifier les éléments du menu de haut de la page en allant dans les `Paramètres` puis dans `Personnalisation` puis `Menu du haut de la page`.

Ici, vous pouvez ajouter, déplacer ou supprimer des éléments du menu du haut de la page.
![image](/img/next_gen/settings/personalization/front_menu/admin.png)

:::info tips
Vous pouvez mettre des URL au lieu d'icone dans vos menus pour afficher des images. (Limité à 255 caractères)
:::
## Gestion des élements
![image](/img/next_gen/settings/personalization/front_menu/element.png)

Vous pouvez choisir le type d'élément que vous souhaitez ajouter. Les types d'éléments disponibles sont :
- **Type de lien** : Lien, Nouveau onglet, Menu déroulant
- **Nom** : Le nom de l'élément tel qu'il sera affiché dans le menu.
- **URL** : L'URL vers laquelle l'élément doit pointer (peut être vide si le type est un menu déroulant).
- **Icone** : L'icône à afficher pour l'élément. Vous pouvez choisir parmi les icônes disponibles ou laisser vide pour ne pas en afficher.
- **Badge** : Un badge à afficher à côté de l'icône. Vous pouvez laisser vide si vous ne souhaitez pas en afficher.
- **Parent** : Si l'élément est un sous-menu, vous pouvez choisir son parent dans la liste des éléments du menu. Si l'élément n'est pas un sous-menu, laissez cette option vide.
- **Role autorisé** : Vous pouvez choisir un contexte d'affichage pour l'élément. (Tous, Connecté, Client)

## Gestion des menus déroulants

Les thèmes peuvent supporter des menus déroulants. Pour que votre thème supporte les menus déroulants vous devez l'indiquer dans votre fichier `theme.json` dans la section `menus` :

```json
"supported_options": {
  "menu_dropdown": true,
},
```

Pour en configurer, veuillez ajouter un élement avec le type menu déroulant. Vous pourrez par la suite définir le parent de vos élements sur le menu déroulant.
