---
sidebar_position: 2
---

# Plesk

Le module Plesk permet de fournir des offres Plesk à vos clients. Le module supporte les revendeurs web et hébergement simple. Il fonctionne avec les plans Plesk qui facilite grandement sa configuration puisqu'il suffit de lié un produit à un plan Plesk.

:::success À savoir
Ce module est compatible avec les versions 11, 11.5, 12, 12.5, Onyx, et Obsidian de Plesk.
:::
:::info
Pour utiliser les fonctionnalités du module, il faut que l'extension PHP **XML** soit activée sur votre hébergement. Pour l'installer : 
```bash
apt install php-xml
```
:::

:::info Modules
Pour utiliser les fonctionnalités suivantes, il faut que le module Plesk soit activé sur votre CLIENTXCMS. [cliquez ici pour l'activer](../)
:::
### Fonctionnalités supportées 
- Automatisez la création et l'approvisionnement des comptes
- Gestion des hébergements depuis l'espace client
- Envoie des identifiants de connexion par E-mail
- Connexion automatique au Plesk
- Réinitialiser les mots de passe et gérer les comptes
- Automatisez les suspensions et les résiliations

## Création du serveur

Créez un serveur CLIENTXCMS dans `Espace d'administration ` > `Paramètre` > `Paramètres généraux` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Plesk".

![img](/img/next_gen/extensions/modules/plesk/image.png)

**Adresse IP** : Sous domaine ou adresse IP du Plesk

**Username** : Nom d'utilisateur admin

**Password** : Mot de passe admin

Le port suivant doit être ouvert pour connecter CLIENTXCMS à votre Plesk : 8443

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.

## Configuration de l'offre
En premier lieu, [créez votre produit](../../store/produits#création) en sélectionnant Plesk.

![img](/img/next_gen/extensions/modules/plesk/image_2.png)

Après appuyer sur le bouton "Créer" il vous crée votre produit et puis cliquer sur le bouton "Configurer l'offre" qui vous dirigera vers la page de configuration de l'offre. Si les champs est vide, assurez-vous que votre serveur ne soit pas caché, dans ce cas il ne sera pris en compte dans le système pour récupérer les plans Plesk.

![img](/img/next_gen/extensions/modules/plesk/image_3.png)

Dans cette page, vous pourrez sélectionner le plan qui faudra livrer à vos clients puis sauvegarder.

### Panel de gestion

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Hosting" label="Hosting">

![img](/img/next_gen/extensions/modules/plesk/image_4.png)

</TabItem>

<TabItem value="Revendeur" label="Revendeur">

![img](/img/next_gen/extensions/modules/plesk/image_5.png)

</TabItem>

<TabItem value="AdminHosing" label="Admin Hosting">

![img](/img/next_gen/extensions/modules/plesk/image_6.png)

</TabItem>

<TabItem value="AdminRevendeur" label="Admin Revendeur">

![img](/img/next_gen/extensions/modules/plesk/image_7.png)

</TabItem>

</Tabs>
