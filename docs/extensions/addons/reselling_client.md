# Revente CTX

ClientXCMS propose un système de revente de VPS et de licence CLIENTXCMS. Toute les informations sont disponible sur notre site vitrine ainsi que les prix de revente.

### VPS
Toutes les informations, y compris les prix, sont disponibles [ici](https://ctxhosting.fr/ctxreselling).  
**Prérequis** : Vous devez disposer d'une licence CLIENTXCMS valide et active.

### Licence CLIENTXCMS
Toutes les informations, y compris les prix, sont disponibles [ici](https://clientxcms.com/partners).  
**Prérequis** : Vous devez disposer d'une licence CLIENTXCMS valide et active.

Pour toute demande ou pour devenir partenaire, veuillez contacter le support.

#### Concernant les licences CLIENTXCMS :
- Aucune clé d'API n'est requise.
- Les commandes doivent être effectuées via [clientxcms.com](https://clientxcms.com) en utilisant le code promo partenaire indiqué sur la page revendeur.
- Vous pouvez également commander des licences pour vos clients et accéder à l'espace revendeur pour gérer leurs licences.

#### Concernant les VPS :
- Vous recevrez une clé d'API qui vous permettra de gérer les VPS de vos clients directement depuis votre espace client CLIENTXCMS.
- La facturation est basée sur les services commandés par vous ou vos clients.
- Pour les renouvellements ou les modifications de dates d'expiration, les frais seront calculés au prorata des jours restants jusqu'à la date d'expiration, avec un montant minimum de 0,50 €.

Ce système garantit une gestion simplifiée des licences et des services VPS pour vos clients, tout en offrant flexibilité et automatisation.
:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Plesk soit activé sur votre CLIENTXCMS. [cliquez ici pour l'activer](../)
:::

### Fonctionnalité supportées
- Automatisez la création et l'approvisionnement des VPS
- Gestion des VPS depuis l'espace client
- Envoie des identifiants de connexion par E-mail
- Réinstallation automatique des VPS
- Automatisez les suspensions et les résiliations
- Amélioration de service

## Création du serveur
Créez un serveur CLIENTXCMS dans `Espace d'administration ` > `Paramètre` > `Approvisionnement` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Reselling".

![img](/img/next_gen/extensions/addons/reselling_client/image.png)

**Adresse IP** : clients.ctxhosting.fr
**Nom d'hôte** : clients.ctxhosting.fr
**Nom d'utilisateur** : ctxreselling
**Mot de passe** : Clé d'API indiqué dans le mail de bienvenue
**Port** : 443

Le port suivant doit être ouvert pour connecter CLIENTXCMS à votre serveur de revente : 443

:::danger Attention
Ce n'est pas vos identifiants CLIENTXCMS, mais bien la clé d'API.
:::
Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.

## Configuration de l'offre
En premier lieu, [créez votre produit](../../settings/store/products.md#créer-un-nouveau-produit) en sélectionnant "Reselling".
![img](/img/next_gen/extensions/addons/reselling_client/image_2.png)
Après appuyer sur le bouton "Créer" il vous crée votre produit et puis cliquer sur le bouton "Configurer l'offre" qui vous dirigera vers la page de configuration de l'offre. Si les champs est vide, assurez-vous que votre serveur ne soit pas caché, dans ce cas il ne sera pris en compte dans le système pour récupérer les offres de revente.

![img](/img/next_gen/extensions/addons/reselling_client/image_3.png)

## Rendu du service

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Hosting" label="Gestion VPS">

![img](/img/next_gen/extensions/addons/reselling_client/image_4.png)

</TabItem>

<TabItem value="Revendeur" label="Réinstallation">

![img](/img/next_gen/extensions/addons/reselling_client/image_5.png)

</TabItem>

<TabItem value="AdminHosing" label="Donnée client">

![img](/img/next_gen/extensions/addons/reselling_client/image_6.png)

</TabItem>

</Tabs>