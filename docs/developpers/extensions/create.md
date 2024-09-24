---
sidebar_position: 1
---
# Création d'une extension

Pour créer une nouvelle extension, vous pouvez utiliser la commande artisan suivante :

```bash
php artisan clientxcms:create-extension
```

Lors de l'exécution de cette commande, plusieurs questions vous seront posées, notamment :

- **Nom** : Le nom de l'extension
- **UUID** : Un identifiant unique que vous devez fournir. **Attention** : cet UUID doit être unique.
- **Type** : Définir si l'extension est un *addon* ou un *module*.
- **Utilisation des routes** : Préciser si l'extension utilise des routes.
- **Utilisation des contrôleurs** : Indiquer si des contrôleurs sont nécessaires.
- **Utilisation d'une base de données** : Préciser si l'extension nécessite l'utilisation d'une base de données.

#### Structure d'un addon

Voici un exemple de la structure d'un addon, basé sur l'extension `fund` :

```
/addons/fund
│
├── lang/
│   ├── en/
│   └── fr/
├── database/
│   ├── migrations/
│   └── seeders/
│
└── views/
│   ├── admin/
│   └── default/
│
├── routes/
│   ├── admin.php
│   └── web.php
│
├── src/
│   ├── Http/
│   └── Models/
│   └── FundServiceProvider.php
│
├── addon.json
└── composer.json
```

- **lang/** : Contient les fichiers de traduction pour différentes langues (par exemple, anglais `en`, français `fr`).
- **database/** : Contient les migrations, seeders ou factories pour l’extension.
- **views/admin** : Contient les vues de l’administration de l'extension.
- **views/default** : Contient les vues de l'extension.
- **routes/** : Contient les fichiers de routes spécifiques à l'extension. Les routes d'administration sont définies dans `admin.php`, et les routes publiques dans `web.php`.
- **src/** : Contient les fichiers principaux de l'extension, tels que les contrôleurs, les modèles, et le service provider (`FundServiceProvider.php`).
- **addon.json|module.json** : Fichier de configuration principal de l'addon/module, contenant les métadonnées et informations nécessaires au CMS pour reconnaître et charger l'extension.
- **composer.json** : Fichier standard Composer pour la gestion des dépendances de l'extension.