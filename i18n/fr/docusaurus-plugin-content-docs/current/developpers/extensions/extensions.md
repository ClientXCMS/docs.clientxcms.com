
# Extensions

Les extensions dans le CMS ClientXCMS sont de deux types : **addons** et **modules**, et elles se trouvent dans les dossiers respectifs `/modules` et `/addons`. Chaque extension est basée sur le framework **Laravel** et suit une structure bien définie.
Nous allons voir dans ce guide comment créer une extension, comment la structurer, et comment l'enregistrer dans le CMS.

## Prérequis
Nous recommandons d'avoir de bonnes connaissances en **PHP** et **Laravel**, ainsi que d'être à l'aise avec les concepts suivants :

- [Les controllers](https://laravel.com/docs/11.x/controllers)
- [Les vues](https://laravel.com/docs/11.x/views)
- [Les modèles Eloquent](https://laravel.com/docs/11.x/eloquent)
- [Les services providers](https://laravel.com/docs/11.x/providers)
- Et tout autre concept de Laravel

Ces sujets ne seront pas forcément abordés en détail dans cette documentation.

Vous devez également avoir accès aux sources pour l'auto-hébergement.

De plus, il est recommandé d'être à l'aise avec **TailwindCSS**, **Blade**, et **Vite.js**.

## Licence de développement
Nous pouvons vous fournir une licence de développement avec les mêmes extensions que votre licence principale et 15 clients autorisés pour votre développement. Pour plus d'informations, veuillez nous contacter.
## Activation

Les extensions chargées peuvent s'activer ou se désactiver dans la page Extensions
![img](/img/next_gen/extensions/image_1.png)

## Choisir entre un module et un addon

Pour faire simple, les modules sont utilisés comme livraison de service par exemple pour implémenter un panel de gestion comme Virtualizor, Plesk, ou Pterodactyl. Les addons sont utilisés pour ajouter des fonctionnalités supplémentaires comme des méthodes de paiement, logique, ou des pages personnalisées.
## Demande d'ajout au marketplace

Vous pouvez faire la demande pour être développeur sur [https://clientxcms.com/client/resources](https://clientxcms.com/client/ressources) et ainsi proposer vos extensions à la communauté.
![Capture d’écran création d'une extension](/img/blog/lancement-opensource/marketplace2.png)

Désormais, chaque développeur peut :  
- Créer ses propres extensions  
- Publier et partager ses créations via [clientxcms.com/client/ressources](https://clientxcms.com/client/ressources)  
- Explorer et installer facilement les extensions partagées par la communauté  

Cette interface intuitive a été pensée pour simplifier la gestion et encourager l’écosystème collaboratif autour de CLIENTXCMS.
