---
sidebar_position: 3
---

# Virtualizor Cloud

Le module Virtualizor Cloud permet de fournir des offres VPS à vos clients. Le module supporte les hébergement VPS.

:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Virtualizor Cloud soit activé sur votre CLIENTXCMS. [cliquez ici pour l'activer](../)
:::

### Fonctionnalités supportées 
- Automatisez la création et l'approvisionnement des comptes
- Gestion des vps depuis l'espace client
- Envoie des identifiants de connexion par E-mail
- Automatisez les suspensions et les résiliations

## Création API Virtualizor Cloud 
Créez un API dans `Votre Virtualizor Cloud` > `Clef d'api` > `Menu de profil en hait à droite` > `API credentials` > `ajouter L'IP a autoriser`

![img](/img/next_gen/extensions/modules/virtualizorcloud/image2.png)

Appuyer sur "Create API Key Pair"

Ensuite vous allez avoir les clef API pour relier votre vitualizor cloud sur votre espace client

![img](/img/next_gen/extensions/modules/virtualizorcloud/image3.png)

## Création du serveur

Créez un serveur CLIENTXCMS dans `Espace d'administration ` > `Paramètre` > `Approvisionnement` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Virtualizor Cloud".

![img](/img/next_gen/extensions/modules/virtualizorcloud/image.png)

**Adresse IP** : Sous domaine ou adresse IP du Virtualizor Cloud

**Key** : API KEY

**Password** : API PASSWORD

Le port suivant doit être ouvert pour connecter CLIENTXCMS à votre Virtualizor Cloud : 4083

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.

## Configuration de l'offre
En premier lieu, [créez votre produit](../../store/produits#création) en sélectionnant Virtualizor Cloud.

![img](/img/next_gen/extensions/modules/virtualizorcloud/image5.png)

Après appuyer sur le bouton "Créer" il vous crée votre produit et puis cliquer sur le bouton "Configurer l'offre" qui vous dirigera vers la page de configuration de l'offre. Si les champs est vide, assurez-vous que votre serveur ne soit pas caché, dans ce cas il ne sera pris en compte dans le système créer vos offres vps.

![img](/img/next_gen/extensions/modules/virtualizorcloud/image4.png)

Dans cette page, vous pourrez sélectionner le plan qui faudra livrer à vos clients puis sauvegarder.

### Panel de gestion

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Interface" label="Interface">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image6.png)

</TabItem>

<TabItem value="Reinstallation" label="Réinstallation">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image7.png)

</TabItem>

<TabItem value="Nomhote" label="Nom d'hôte">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image8.png)

</TabItem>

<TabItem value="password" label="Mot de passe">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image9.png)

</TabItem>

</Tabs>
