---
sidebar_position: 5
---

# Publier un addon ou un module

Suivez d'abord le [guide commun de publication sur le marketplace](../publish-resource), puis revenez sur cette page.

CLIENTXCMS propose deux types d'extensions :

- un **module** livre et gère un service avec un fournisseur comme Pterodactyl, Proxmox ou Plesk ;
- un **addon** ajoute une fonctionnalité telle qu'un moyen de paiement, une logique métier ou des pages personnalisées.

Si l'extension n'existe pas encore, commencez par [Créer une extension](./create).

## Identifiant et type d'extension

Choisissez le même type dans le marketplace que dans les métadonnées de votre extension. L'UUID marketplace doit être strictement identique dans :

- la ressource marketplace ;
- le nom du dossier, `modules/<uuid>` ou `addons/<uuid>` ;
- la valeur `uuid` de `module.json` ou `addon.json`.

Utilisez un UUID en minuscules compatible avec une URL et conservez-le entre les versions. Une différence empêche CLIENTXCMS d'identifier correctement le paquet.

## Service Providers

Dans **Service providers**, déclarez chaque Service Provider Laravel que CLIENTXCMS doit charger pour l'addon ou le module. Indiquez son namespace complet, par exemple :

```text
App\Addons\AnnouncementBar\AnnouncementBarServiceProvider
```

Utilisez **Ajouter un provider** si l'extension en nécessite plusieurs. Chaque classe déclarée doit exister dans l'archive soumise et respecter l'autoloading Composer ainsi que la casse des namespaces PHP.

Le champ **Tarification** définit le prix de vente de l'extension. La tarification payante est réservée aux **développeurs certifiés**. Vous devez demander votre certification et certifier que vous pouvez émettre des factures avant que CLIENTXCMS puisse vous reverser vos gains. Vérifiez votre certification et le montant avant de soumettre la ressource pour validation.

![Service Providers et tarification d'une extension](/img/next_gen/developpers/marketplace/mettre-a-jour-extension.png)

## Préparer le dépôt GitHub

Utilisez un dépôt GitHub public pour rendre les sources vérifiables et conserver l'historique des versions. Le [module Pterodactyl officiel de CLIENTXCMS](https://github.com/ClientXCMS/module-pterodactyl) sert de référence : sa branche `master` contient `modules/pterodactyl`, un README bilingue et des releases GitHub versionnées.

Structure recommandée pour un module :

```text
module-example/
├── modules/
│   └── example/
│       ├── lang/
│       ├── database/
│       ├── routes/
│       ├── src/
│       ├── views/
│       ├── module.json
│       └── composer.json
├── README.md
├── LICENSE
└── .gitignore
```

Pour un addon, appliquez le même principe avec `addons/<uuid>` et `addon.json`.

Le README doit contenir le nom, l'objectif, les fonctionnalités, les prérequis, les instructions d'installation et de configuration, le lien de support, la documentation et des images représentatives. Indiquez clairement la compatibilité et les changements incompatibles.

:::warning Ne publiez jamais de secrets
Ne versionnez pas les fichiers `.env`, clés API, accès aux panels, données clients, journaux, caches, dépendances locales, configuration de l'IDE ou fichiers copiés depuis une installation de production. Fournissez un `.env.example` ou des valeurs fictives documentées lorsqu'un exemple est nécessaire.
:::

## Publier une version de l'extension

Les versions du marketplace sont créées depuis l'interface développeur CLIENTXCMS et non en créant une nouvelle fiche. Suivez [Créer une version](../publish-resource#créer-une-version) pour sélectionner une release GitHub existante ou demander à CLIENTXCMS de la créer dynamiquement à partir du journal des modifications.

Avant d'ouvrir le formulaire de version :

1. Actualisez la version dans `module.json` ou `addon.json` et alignez-la sur la version saisie dans CLIENTXCMS.
2. Testez l'installation, l'activation, les migrations, la configuration et la suppression sur une installation propre et compatible.
3. Envoyez les sources finales sur GitHub et vérifiez que le paquet conserve le chemin attendu `modules/<uuid>` ou `addons/<uuid>`.
4. Excluez `.git`, les caches de développement, les tests inutiles à l'exécution, les dépendances locales, les secrets et les fichiers propres à une installation.
5. Ouvrez la ressource existante dans CLIENTXCMS, ajoutez la version, associez ou créez dynamiquement sa release GitHub, complétez le journal des modifications par catégorie, puis publiez-la.

Ne modifiez pas une version déjà publiée avec un code différent. Publiez une nouvelle version depuis CLIENTXCMS afin que les utilisateurs puissent identifier clairement les versions.
