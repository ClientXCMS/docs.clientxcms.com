---
translated: true
---

# Netbox
Use NetBox as a Source of Truth for managing your IP addresses in CLIENTXCMS. This extension replaces the default IPAM from the Proxmox module to allow you to assign and manage your IP addresses directly from your NetBox instance, ensuring better organization and avoiding IP conflicts.

:::info Prerequisites
- Have an operational NetBox instance.
- Have the NetBox API accessible from your CLIENTXCMS instance.
:::

:::info
This extension requires the Proxmox module to be enabled on your CLIENTXCMS. [click here to enable it](../modules/Proxmox.md)
:::

## Extension Configuration
To configure the extension, go to your `.env` environment file and add the following variables:

```env
NETBOX_URL=https://your-netbox-instance/
NETBOX_TOKEN=your_netbox_api_token
```
- **NETBOX_URL**: The URL of your NetBox instance.
- **NETBOX_TOKEN**: The API token to access the NetBox API

## Admin Panel
Once the extension is installed, you can configure NetBox settings in `Admin Panel` > `Settings` > `Extension Settings` > `Netbox`.
![img](/img/next_gen/extensions/addons/netbox/netbox.png)

You will find all available IPs in NetBox with their status. The Proxmox module will use these IPs for automatic assignment when creating virtual machines or containers.
### IP Management

You can view a specific IP to modify its status (Available, Assigned, Reserved).
![img](/img/next_gen/extensions/addons/netbox/details.png)
- **Active**: The IP is available for assignment.
- **Reserved**: The IP is currently assigned to a virtual machine or container.
- **Unavailable**: The IP is not available for assignment.

:::info
This extension was developed for specific uses. Feel free to contact us for any feature request or improvement.
:::

### Integration

The addon was initially made to integrate with the Proxmox module but you can adapt it for other modules if needed. The functions exposed in `App\Addons\Netbox\NetboxIPAM` can be used directly in your provisioning modules to retrieve, reserve, or release IP addresses. The class implements the `IPAMInterface` from CLIENTXCMS, so you can rely on this interface to integrate NetBox with any compatible provider.

Key methods available:
- `findByIP(string $ip): ?AddressIPAM`: returns information for a NetBox IP if it exists.
- `findById(int $id): ?AddressIPAM`: returns the IPAM object for a NetBox ID.
- `fetchAdresses(int $nb = 1): array`: retrieves a batch of active IPs.
- `useAddress(AddressIPAM $address, Service $service): AddressIPAM`: reserves the IP for a service (`reserved` status and tenant association).
- `releaseAddress(AddressIPAM $address): AddressIPAM`: releases the IP and sets it back to `active`.

Example usage in a provisioning module (provider) that already implements `IPAMInterface`:

```php
use App\Addons\Netbox\NetboxIPAM;

$addresses = NetboxIPAM::fetchAdresses(1);
$ip = $addresses[0] ?? null;

if ($ip) {
    NetboxIPAM::useAddress($ip, $service);
    NetboxIPAM::releaseAddress($ip);
}
```
