---
sidebar_position: 9
---

# Publier un thème

Suivez d'abord le [guide commun de publication sur le marketplace](../publish-resource), puis revenez sur cette page. Si votre thème n'existe pas encore, commencez par [Créer un thème](./create-theme).

## Identifiant et informations marketplace

L'UUID marketplace doit correspondre au dossier du thème et à la valeur `uuid` de `theme.json` :

```text
resources/themes/<uuid>/theme.json
```

Conservez cet identifiant en minuscules, compatible avec une URL et identique entre les versions. Présentez dans la description marketplace les pages prises en charge, les options de personnalisation, les modes disponibles, les prérequis, la compatibilité, la documentation et les conditions de support.

Utilisez deux images complémentaires :

- importez une **miniature** claire pour la carte de la ressource sur le marketplace ;
- placez `screenshot.png` à la racine de `resources/themes/<uuid>` pour l'aperçu du thème dans CLIENTXCMS.

Les images doivent représenter la version distribuée. Le champ **Tarification** définit le prix de vente affiché pour le thème. La tarification payante est réservée aux **développeurs certifiés** : demandez votre certification et certifiez que vous pouvez émettre des factures afin que CLIENTXCMS puisse vous reverser vos gains.

## Fournir une démonstration

Une démonstration publique aide les clients à vérifier le design, le responsive, la navigation, la boutique, l'espace client et les possibilités de personnalisation avant l'achat.

Définissez une URL HTTPS stable dans `theme.json` :

```json
{
  "uuid": "example",
  "name": "Example",
  "version": "1.0.0",
  "demo": "https://demo.example.com"
}
```

La démonstration doit :

- exécuter la version soumise du thème sur une installation CLIENTXCMS compatible ;
- contenir des produits, pages, menus et sections représentatifs ;
- fonctionner sur ordinateur et mobile sans lien cassé ni ressource manquante ;
- n'exposer aucun accès administrateur, identifiant, donnée client ou réglage sensible ;
- utiliser des données de test pouvant être réinitialisées sans risque ;
- rester disponible tant que la ressource marketplace est active.

Indiquez dans la description marketplace toute fonctionnalité volontairement indisponible ou action limitée sur la démonstration.

## Préparer le dépôt GitHub

Utilisez un dépôt public avec la structure recommandée suivante :

```text
theme-example/
├── resources/
│   └── themes/
│       └── example/
│           ├── assets/
│           ├── config/
│           ├── database/
│           ├── lang/
│           ├── views/
│           ├── menus.json
│           ├── screenshot.png
│           └── theme.json
├── screenshots/
├── README.md
├── LICENSE
└── .gitignore
```

Le README doit documenter les fonctionnalités, les versions CLIENTXCMS compatibles, les prérequis, l'installation, la compilation des ressources, la configuration, l'URL de démonstration, les captures, le support et la licence. Conservez les captures de développement hors du dossier installable du thème si elles ne sont pas nécessaires à son fonctionnement.

:::warning Ne publiez jamais de secrets
Ne versionnez pas `.env`, les identifiants, clés API, données clients, journaux, caches, `.git`, `node_modules`, fichiers générés pour le développement ou réglages copiés depuis une installation en production.
:::

## Publier une version du thème

Les versions du marketplace sont créées directement depuis l'interface développeur CLIENTXCMS. Suivez [Créer une version](../publish-resource#créer-une-version) pour sélectionner une release GitHub existante ou la créer dynamiquement à partir du journal des modifications.

Avant d'ouvrir le formulaire de version :

1. Actualisez la version dans `theme.json` et alignez-la sur la version saisie dans CLIENTXCMS, par exemple `v1.2.0`.
2. Compilez les ressources de production et testez le thème sur une installation propre et compatible.
3. Vérifiez la démonstration publique et mettez-la à jour avec la version soumise.
4. Envoyez les sources finales sur GitHub et vérifiez que le paquet conserve `resources/themes/<uuid>`.
5. Excluez `.git`, les caches, les dépendances locales réservées aux sources, `.env`, les secrets et les fichiers propres à une installation.
6. Ouvrez la ressource de thème existante dans CLIENTXCMS, ajoutez la version, associez ou créez dynamiquement sa release GitHub, complétez le journal des modifications par catégorie, puis publiez-la.

Ne modifiez jamais une version déjà publiée avec des fichiers différents. Un nouveau code nécessite une nouvelle version créée et publiée depuis CLIENTXCMS.
