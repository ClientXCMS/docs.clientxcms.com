---
sidebar_position: 2
---
# Configuration votre premier serveur
Pour connecter votre Pterodactyl ou autre système de livraison de service, vous devez configurer le premier serveur. Pour cela, rendez-vous dans les `Paramètres` puis dans `Approvisonnement` puis `Serveurs` et `Créer`.

![img](/img/next_gen/settings/provisioning/servers/create_server.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Pterodactyl" label="Pterodactyl">

![img](/img/next_gen/extensions/modules/pterodactyl/images_1.png)

**Adresse IP** : Adresse IP du Pterodactyl.

**Nom d'hôte** : Nom d'hôte du Pterodactyl.

**Port** : 443 avec un domaine ou 80 avec une IP.

**Client API** : Clé client.

**Application API** : Clé application.
:::info Complément d'information

Plus d'informations sur les clés API sont disponibles [ici](/docs/extensions/modules/Pterodactyl.md).
:::
</TabItem>
<TabItem value="Plesk" label="Plesk">

![img](/img/next_gen/extensions/modules/plesk/image.png)

**Adresse IP** : Sous domaine ou adresse IP du Plesk

**Username** : Nom d'utilisateur admin

**Password** : Mot de passe admin

Le port suivant doit être ouvert pour connecter CLIENTXCMS à votre Plesk : 8443

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.
:::info Complément d'information

Plus d'informations sur la configuration de Plesk sont disponibles [ici](/docs/extensions/modules/Plesk.md).
:::
</TabItem>
<TabItem value="Proxmox" label="Proxmox">
![img](/img/next_gen/extensions/modules/proxmox/image_1.png)

- **Nom :** Le nom que vous souhaitez attribuer au serveur Proxmox.
- **Type de serveur :** Proxmox.
- **Nom d'hôte :** Le nom d'hôte du Proxmox VE.
- **Adresse IP :** L'adresse IP du Proxmox VE.
- **Port :** Le port par défaut est `8006`. Si vous avez configuré un proxy avec SSL, vous pouvez utiliser `443` ou `80`.
- **Token ID :** L'ID du jeton Proxmox pour l'API.
- **Secret :** Le secret associé au jeton Proxmox pour l'API.

:::info Complément d'information
Plus d'informations sur la configuration de Proxmox sont disponibles [ici](/docs/extensions/modules/Proxmox.md).
:::
</TabItem>
<TabItem value="Wisp" label="Wisp">

![img](/img/next_gen/extensions/modules/wisp/images_1.png)

**Adresse IP** : Adresse IP du Pterodactyl.

**Nom d'hôte** : Nom d'hôte du Pterodactyl.

**Port** : 443 avec un domaine ou 80 avec une IP.

**Client API** : Clé client.

**Application API** : Clé application.

:::info Complément d'information
Plus d'informations sur les clés API sont disponibles [ici](/docs/extensions/modules/Wisp.md).
:::
</TabItem>
<TabItem value="VirtualizorCloud" label="Virtualizor pour revendeurs">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image.png)

**Adresse IP** : Sous domaine ou adresse IP du Virtualizor Cloud

**Key** : API KEY

**Password** : API PASSWORD

Le port suivant doit être ouvert pour connecter CLIENTXCMS à votre Virtualizor Cloud : 4083

Vous pouvez tester la connexion au serveur et vérifier que le serveur renvoie *"Success"* en réponse.
</TabItem>
</Tabs>
