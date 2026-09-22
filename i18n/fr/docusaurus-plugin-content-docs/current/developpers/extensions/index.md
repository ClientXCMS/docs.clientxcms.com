
# Extensions

Les extensions ClientXCMS sont de trois types : **addons**, **modules**, et **thèmes**. Les addons et les modules partagent une structure commune basée sur le framework **Laravel** et se trouvent dans les dossiers respectifs `/addons` et `/modules` ; les thèmes ont leur propre structure et sont couverts dans un [guide dédié](../themes).
Ce guide couvre les addons et modules, et explique comment en créer un, comment le structurer, et comment l'enregistrer dans le CMS.

## Prérequis
Nous recommandons d'avoir de bonnes connaissances en **PHP** et **Laravel**, ainsi que d'être à l'aise avec les concepts suivants :

- [Les controllers](https://laravel.com/docs/controllers)
- [Les vues](https://laravel.com/docs/views)
- [Les modèles Eloquent](https://laravel.com/docs/eloquent)
- [Les services providers](https://laravel.com/docs/providers)
- Et tout autre concept de Laravel

Ces sujets ne seront pas forcément abordés en détail dans cette documentation.

Vous devez également avoir accès aux sources pour l'auto-hébergement.

De plus, il est recommandé d'être à l'aise avec **TailwindCSS**, **Blade**, et **Vite.js**.

## Licence de développement
Nous pouvons vous fournir une licence de développement avec les mêmes extensions que votre licence principale et 15 clients autorisés pour votre développement. Pour plus d'informations, veuillez nous contacter.
## Activation

Les extensions chargées peuvent s'activer ou se désactiver dans la page **Paramètres > Extensions**, qui présente les éléments installés et disponibles sous forme de cartes. Selon l'état de l'extension, les actions disponibles sont **Mettre à jour**, **Activer**/**Désactiver**, **Désinstaller**, et **Détails** (ou **Acheter** pour une ressource payante non installée), et une action **Vider le cache** permet de forcer le rechargement des métadonnées des extensions après une modification manuelle de fichiers.

## Choisir entre un module et un addon

Pour faire simple, les modules sont utilisés comme livraison de service par exemple pour implémenter un panel de gestion comme Virtualizor, Plesk, ou Pterodactyl. Les addons sont utilisés pour ajouter des fonctionnalités supplémentaires comme des méthodes de paiement, logique, ou des pages personnalisées.
## Publier sur le marketplace

Vous pouvez distribuer votre addon ou votre module à la communauté CLIENTXCMS sous forme de ressource gratuite ou payante. Suivez le [guide de publication sur le marketplace](../publish-resource) pour activer votre espace développeur et préparer la fiche, puis consultez [Publier un addon ou un module](./publish-marketplace) pour les règles concernant l'UUID, les Service Providers, le dépôt GitHub, l'archive et les mises à jour.
