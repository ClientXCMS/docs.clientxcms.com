---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Importation
L'importation sert à importer vos données de ClientXCMS V1 ou bien même WHMCS.

## Configuration
Vous pouvez gérer la configuration de l'anti double compte dans `Espace d'administration ` > `Paramètres` > `Paramètre des extensions ` > `Importation`

![img](/img/next_gen/extensions/addons/importation/importation.png)

Ici vous pouvez choisir si vous voulez transfèrer vos donnée d'un WHMCS ou de ClientXCMS.

<Tabs>

<TabItem value="ClientXCMS" label="ClientXCMS">

![img](/img/next_gen/extensions/addons/importation/clientxcms.png)

Vous pouvez selection les données que vous voulez transfèrer vers votre instance. 

Ensuite nous allons configurer les accès à la basse de donnée ou ce trouve vos données : 

**Hôte** : L'adresse ip

**Port** : Le port de votre serveur mysql (3306 par default)

**Base de données** : Nom de la base de données 

**Nom d'utilisateur** : Nom d'utilisateur de la base de données

**Mot de passe** : Mot de passe de la base de donnée

Vous pouvez choisir si vous voulez qu'il vide la base de données avant de l'importer.

Vous pouvez cliquer sur Importer et l'importation vas ce lancer.

</TabItem>

<TabItem value="WHMCS" label="WHMCS">

![img](/img/next_gen/extensions/addons/importation/whmcs.png)

Vous pouvez selection les données que vous voulez transfèrer vers votre instance. 

Ensuite nous allons configurer les accès à la basse de donnée ou ce trouve vos données : 

**Hôte** : L'adresse ip 

**Port** : Le port de votre serveur mysql (3306 par default)

**Base de données** : Nom de la base de données 

**Nom d'utilisateur** : Nom d'utilisateur de la base de données

**Mot de passe** : Mot de passe de la base de donnée

**Clé d'encodeur** : Vous la trouvez dans configuration.php de WHMCS

Vous pouvez choisir si vous voulez qu'il vide la base de données avant de l'importer.

Vous pouvez cliquer sur Importer et l'importation vas ce lancer.

</TabItem>

</Tabs>