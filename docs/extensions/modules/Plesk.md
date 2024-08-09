---
sidebar_position: 2
---

# Plesk

Le module Plesk permet de fournir des offres Plesk à vos clients. Le module supporte les revendeurs web et hébergement simple. Il fonctionne avec les plans Plesk qui facilite grandement sa configuration puisqu'il suffit de lié un produit à un plan Plesk.

| Création 	| Suspension 	| Expiration 	| Unsuspend 	| Importation 	|
|----------	|------------	|------------	|-----------	|-------------	|
|     ✅    	|      ✅     	|      ✅     	|     ✅     	|      ✅      	|

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
Pour utiliser les fonctionnalités suivantes, il faut que le module Plesk soit activé sur votre ClientXCMS. [cliquez ici pour l'activer](../)
:::
### Fonctionnalités supportées 
- Automatisez la création et l'approvisionnement des comptes
- Gestion des hébergements depuis l'espace client
- Envoie des identifiants de connexion par E-mail
- Connexion automatique au Plesk
- Réinitialiser les mots de passe et gérer les comptes
- Automatisez les suspensions et les résiliations

## Création du serveur

Créer un serveur ClientXCMS dans `Espace d'administration` > `Paramètre` > `Serveurs` > `Nouveau` en sélectionnant le type de serveur en "Plesk". 

![img](/img/next_gen/Modules/Plesk/image.png)

**Adresse IP** : Sous domaine ou adresse IP du Plesk

**Username** : Nom d'utilisateur admin

**Password** : Mot de passe admin

Le port suivant doit être ouvert pour connecter ClientXCMS à votre Plesk : 8443

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.

## Configuration de l'offre
En premier lieu, [créez votre produit](../../store/produits#création) en sélectionnant **Plesk Hosting** pour les hébergements Web ou **Plesk Reselling** pour livrer des revendeurs Web.

![img](/img/next_gen/Modules/Plesk/image_2.png)

Après appuyez sur le bouton "Créer" il vous créer votre produit et puis cliquer sur le bouton "Configurer l'offre" qui vous dirigeras vers la page de configuration de l'offre. Si le champs est vide, assurez vous que votre serveur ne soit pas caché, dans ce cas il ne sera pris en compte dans le système pour récupérer les plans Plesk.

![img](/img/next_gen/Modules/Plesk/image_3.png)

Dans cette page, vous pourrez sélectionner le plan qui faudra livrer à vos clients puis sauvegarder.

### Panel de gestion

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Hosting" label="Hosting">

![img](/img/next_gen/Modules/Plesk/image_4.png)

</TabItem>

<TabItem value="Revendeur" label="Revendeur">

![img](/img/next_gen/Modules/Plesk/image_5.png)

</TabItem>

<TabItem value="AdminHosing" label="Admin Hosting">

![img](/img/next_gen/Modules/Plesk/image_6.png)

</TabItem>

<TabItem value="AdminRevendeur" label="Admin Revendeur">

![img](/img/next_gen/Modules/Plesk/image_7.png)

</TabItem>

</Tabs>