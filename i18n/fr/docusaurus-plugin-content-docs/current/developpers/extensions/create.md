---
sidebar_position: 1
---
# Création d'un addon ou d'un module

Pour créer un nouvel addon ou module, vous pouvez utiliser la commande artisan suivante :

```bash
php artisan clientxcms:create-extension
```

Lors de l'exécution de cette commande, plusieurs questions vous seront posées, notamment :

- **Nom** : Le nom de l'addon ou du module
- **UUID** : Un identifiant unique que vous devez fournir. **Attention** : cet UUID doit être unique.
- **Description** : Une courte description, "This is a new extension." par défaut si laissé vide.
- **Type** : Définir si vous créez un *addon* ou un *module*.
- **Nom / email de l'auteur** : Utilisés dans `addon.json`/`module.json` et `composer.json`.
- **Utilisation des migrations** : Crée un dossier `database/migrations`.
- **Utilisation des modèles** : Crée un dossier `src/Models`.
- **Utilisation des contrôleurs** : Crée un dossier `src/Controllers` (demandé avec oui par défaut).
- **Utilisation des fichiers de langue** : Crée des dossiers `lang/en` et `lang/fr` avec un `lang.php` vide chacun.
- **Utilisation des routes** : Si activé, demande séparément s'il faut générer `routes/web.php`, `routes/api.php` et `routes/admin.php`.
- **Utilisation des vues** : Crée des dossiers `views/default` et `views/admin` (demandé avec oui par défaut).

### Création via CLI avec options
Pour créer un addon ou un module sans passer par les questions interactives, vous pouvez utiliser la commande suivante :

```bash
php artisan clientxcms:create-extension \
  --name="Mon addon" \
  --uuid="mon-addon" \
  --description="Description de mon addon" \
  --type="addon" \
  --author-name="Votre nom" \
  --author-email="vous@example.com" \
  --migrations=1 \
  --models=1 \
  --controllers=1 \
  --lang=1 \
  --routes=1 \
  --web=1 \
  --api=0 \
  --admin=1 \
  --views=1
```
### Détail des options

* `--name` : nom affiché de l'addon/module.
* `--uuid` : identifiant unique de l'addon/module.
* `--description` : courte description stockée dans `addon.json`/`module.json`.
* `--type` : type de l'addon/module. Valeurs possibles : `addon` ou `module`. Par défaut : `addon`.
* `--author-name` / `--author-email` : métadonnées de l'auteur stockées dans `addon.json`/`module.json` et `composer.json`.
* `--migrations` : crée le dossier `database/migrations`.
* `--models` : crée le dossier `src/Models`.
* `--controllers` : crée le dossier `src/Controllers`.
* `--lang` : crée les dossiers de traduction `lang/en` et `lang/fr`.
* `--routes` : crée le dossier `routes`. Nécessite `--web`, `--api` et/ou `--admin` pour réellement générer les fichiers de route correspondants.
* `--web` / `--api` / `--admin` : génèrent respectivement `routes/web.php`, `routes/api.php`, `routes/admin.php` (pris en compte uniquement si `--routes=1`).
* `--views` : crée les dossiers `views/default` et `views/admin`.

:::info
Il n'existe pas d'option `--database` : utilisez `--migrations` et `--models` à la place.
:::

### Structure d'un addon

Voici la structure d'un addon réel et public - [`idea`](https://github.com/ClientXCMS/addon-idea) - qui correspond presque exactement à ce que la commande de création génère par défaut :

```
/addons/idea
│
├── lang/
│   ├── en/
│   └── fr/
├── database/
│   ├── migrations/
│   └── seeders/
│
├── views/
│   ├── admin/
│   └── default/
│
├── routes/
│   ├── admin.php
│   └── web.php
│
├── src/
│   ├── Controllers/
│   ├── Models/
│   └── IdeaServiceProvider.php
│
├── addon.json
└── composer.json
```

- **lang/** : Contient les fichiers de traduction, un dossier par langue.
- **database/** : Contient les migrations, et des seeders quand l'addon en enregistre un via `addSeeder()` (voir [Création d'un addon ou d'un module - Détail des options](#détail-des-options)).
- **views/admin** : Contient les vues de l'administration de l'addon/module.
- **views/default** : Contient les vues de l'addon/module.
- **routes/** : Contient les fichiers de routes spécifiques à l'addon/module. Les routes d'administration sont définies dans `admin.php`, et les routes publiques dans `web.php`.
- **src/** : Contient les fichiers principaux de l'addon/module - contrôleurs, modèles, et le service provider. `Models` et `Controllers` sont les deux sous-dossiers générés par la commande de création, et restent suffisants pour un addon simple comme `idea`.
- **addon.json|module.json** : Fichier de configuration principal de l'addon/module, contenant les métadonnées et informations nécessaires au CMS pour le reconnaître et le charger.
- **composer.json** : Fichier standard Composer pour la gestion des dépendances de l'addon/module.
- **permissions.json** (optionnel) : Fichier contenant les permissions spécifiques à l'addon/module, quand il a besoin de son propre jeu de permissions. Plus d'informations sur les permissions [ici](/developpers/extensions/definitions/permissions).

Au fil de sa croissance, un addon ajoute généralement d'autres sous-dossiers dans `src/` en plus de `Controllers`/`Models` - `Http/`, `Commands/`, `Listeners/`, `DTO/`, `Services/`... Voir le véritable addon [`fund`](https://github.com/ClientXCMS/addon-fund) pour un exemple de cette croissance, et le [guide Produits & Services](./implementation_guides/product/) pour ses classes produit/panel/config.