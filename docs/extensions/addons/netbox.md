# Netbox
Utilisez NetBox comme source de vérité (Source of Truth) pour la gestion de vos adresses IP dans CLIENTXCMS. Cette extension remplace l'IPAM par défaut du module Proxmox pour vous permettre d'attribuer et de gérer vos adresses IP directement depuis votre instance NetBox, garantissant une meilleure organisation et évitant les conflits d'IP.

:::info Prérequis
- Avoir une instance NetBox opérationnelle.
- Avoir l'API de NetBox accessible depuis votre instance CLIENTXCMS.
:::

:::info
Cette extension nécessite que le module Proxmox soit activé sur votre CLIENTXCMS. [cliquez ici pour l'activer](../modules/Proxmox.md)
:::

## Configuration de l'extension
Pour configurer l'extension, rendez-vous dans votre fichier d'environnement `.env` et ajoutez les variables suivantes :

```env
NETBOX_URL=https://votre-instance-netbox/
NETBOX_TOKEN=votre_token_api_netbox
```
- **NETBOX_URL** : L'URL de votre instance NetBox.
- **NETBOX_TOKEN** : Le token API pour accéder à l'API de NetBox

## Panel d'administration
Une fois l'extension installée, vous pouvez configurer les paramètres de NetBox dans `Espace d'administration ` > `Paramètres` > `Paramètres des extensions` > `Netbox`.
![img](/img/next_gen/extensions/addons/netbox/netbox.png)

Vous retrouverez l'ensemble des IPs disponibles dans NetBox avec leur état. Le module Proxmox utilisera ces IPs pour l'attribution automatique lors de la création de machines virtuelles ou de conteneurs.
### Gestion des IPs

Vous pouvez visualiser une IP spécifique pour la modification de son état (Disponible, Attribuée, Réservée).
![img](/img/next_gen/extensions/addons/netbox/details.png)
- **Active** : L'IP est disponible pour l'attribution.
- **Reserved** : L'IP est actuellement attribuée à une machine virtuelle ou un conteneur.
- **Indisponible** : L'IP n'est pas disponible pour l'attribution.

:::info
Cette extension à été développée pour des utilisations spécifiques. N'hésitez pas à nous contacter pour toute demande de fonctionnalité ou d'amélioration.
:::

### Intégration

L'addon à été fait initialement pour s'intégrer avec le module Proxmox mais vous pouvez l'adapter pour d'autres modules si nécessaire. Les fonctions exposées dans `App\Addons\Netbox\NetboxIPAM` peuvent être utilisées directement dans vos modules d'approvisionnement pour récupérer, réserver ou libérer des adresses IP. La classe implémente l'`IPAMInterface` de CLIENTXCMS, vous pouvez donc vous appuyer sur cette interface pour intégrer NetBox à n'importe quel provider compatible.

Méthodes clés disponibles :
- `findByIP(string $ip): ?AddressIPAM` : retourne les informations d'une IP NetBox si elle existe.
- `findById(int $id): ?AddressIPAM` : retourne l'objet IPAM pour un ID NetBox.
- `fetchAdresses(int $nb = 1): array` : récupère un lot d'IPs actives.
- `useAddress(AddressIPAM $address, Service $service): AddressIPAM` : réserve l'IP pour un service (status `reserved` et association au tenant).
- `releaseAddress(AddressIPAM $address): AddressIPAM` : libère l'IP et la remet en `active`.

Exemple d'utilisation dans un module d'approvisionnement (provider) qui implémente déjà l'`IPAMInterface` :

```php
use App\Addons\Netbox\NetboxIPAM;

$addresses = NetboxIPAM::fetchAdresses(1);
$ip = $addresses[0] ?? null;

if ($ip) {
    NetboxIPAM::useAddress($ip, $service);
    NetboxIPAM::releaseAddress($ip);
}
```
