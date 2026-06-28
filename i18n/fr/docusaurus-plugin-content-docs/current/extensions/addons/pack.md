# Pack de service

L'add-on **Pack de service** permet de vendre plusieurs services dans une seule offre. Le client commande un produit de type pack, puis ClientXCMS crée automatiquement les services inclus dans ce pack.

Le pack est utile pour proposer des offres groupées, par exemple un hébergement web avec un serveur de jeu, un service revendeur avec des options incluses, ou toute combinaison de produits que vous souhaitez renouveler ensemble.

![Création d'un produit de type Pack of Products](/img/next_gen/extensions/addons/pack/create_product.png)

## Fonctionnement

Un pack contient plusieurs lignes de produits. Chaque ligne peut être configurée de deux façons :

* **Produit obligatoire** : le produit est défini directement dans le pack. Le client ne choisit pas ce service, il est ajouté automatiquement lors de la commande.
* **Choix client** : vous définissez plusieurs produits possibles, puis le client choisit celui qu'il veut pendant la commande.

Le client paie et renouvelle uniquement le produit principal du pack. Quand ce produit est renouvelé, les services inclus dans le pack sont renouvelés automatiquement.

:::info
Les services inclus restent liés au produit pack. Le renouvellement, la suspension ou l'expiration doivent donc être gérés depuis le service principal du pack.
:::

## Créer un produit pack

Dans l'administration, créez un nouveau produit puis sélectionnez le type **Pack Of Products**.

Configurez ensuite les informations classiques du produit :

* Le nom du pack.
* Le groupe du produit.
* Le stock disponible.
* La description.
* Le prix du pack.

Le prix affiché au client correspond au produit pack. Les produits inclus ne sont pas renouvelés séparément par le client.

![Configuration du produit pack](/img/next_gen/extensions/addons/pack/create_product.png)

## Configurer les produits inclus

Après la création du produit pack, ouvrez la configuration de l'offre. Vous pouvez ajouter un contenu affiché dans le panel global, puis définir les lignes de produits incluses.

Chaque ligne représente soit un produit imposé, soit un choix laissé au client.

![Configuration des produits inclus dans le pack](/img/next_gen/extensions/addons/pack/config_product.png)

### Produit obligatoire

Utilisez le mode **Produit obligatoire** lorsqu'un service doit toujours être inclus dans le pack. Sélectionnez le produit concerné : il sera créé automatiquement à chaque commande du pack.

Exemple : un pack "Revendeur Web" peut toujours inclure un produit d'hébergement revendeur défini d'office.

### Choix client

Utilisez le mode **Choix client** lorsque le client doit choisir entre plusieurs produits au moment de la commande.

Exemple : un pack peut inclure un service de jeu et laisser le client choisir entre plusieurs offres Minecraft. Les options de configuration du produit choisi restent disponibles pendant la commande.

## Commande côté client

Pendant la commande, le client sélectionne la période de facturation du pack, puis configure les produits inclus.

Les produits obligatoires sont affichés comme inclus. Les lignes en **Choix client** affichent une liste de produits disponibles, puis les options associées au produit choisi.

![Commande d'un pack côté client](/img/next_gen/extensions/addons/pack/product_config.png)

## Renouvellement

Le client renouvelle uniquement le service principal du pack. Lors du renouvellement, ClientXCMS renouvelle automatiquement les autres services liés au pack.

Ce fonctionnement évite d'avoir plusieurs factures ou échéances séparées pour les produits inclus. Le pack garde une seule échéance commerciale, même s'il contient plusieurs services techniques.

:::warning
Évitez de renouveler manuellement un service inclus séparément du pack, sauf cas de support précis. Le service principal du pack doit rester la référence de facturation.
:::

## Bonnes pratiques

* Créez un produit pack clair, avec une description qui liste les services inclus.
* Utilisez **Produit obligatoire** pour les services qui doivent toujours être fournis.
* Utilisez **Choix client** uniquement lorsque le client doit réellement comparer plusieurs produits.
* Vérifiez que les produits inclus sont actifs, configurés et commandables avant de publier le pack.
* Testez une commande complète avec les mêmes options que vos clients avant de mettre l'offre en production.
