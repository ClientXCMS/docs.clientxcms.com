---
sidebar_position: 2
translated: true
---
# Configuring Your First Server

To connect your Pterodactyl or other service delivery system, you need to configure your first server. To do this, go to `Settings` then `Provisioning` then `Servers` and `Create`.

![img](/img/next_gen/settings/provisioning/servers/create_server.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Pterodactyl" label="Pterodactyl">

![img](/img/next_gen/extensions/modules/pterodactyl/images_1.png)

**IP Address**: IP address of the Pterodactyl server.

**Hostname**: Hostname of the Pterodactyl server.

**Port**: 443 with a domain or 80 with an IP.

**Client API**: Client key.

**Application API**: Application key.

:::info Additional Information

More information about API keys is available [here](/extensions/modules/Pterodactyl).
:::
</TabItem>
<TabItem value="Plesk" label="Plesk">

![img](/img/next_gen/extensions/modules/plesk/image.png)

**IP Address**: Subdomain or IP address of the Plesk server.

**Username**: Admin username.

**Password**: Admin password.

The following port must be open to connect CLIENTXCMS to your Plesk: 8443

You can test the connection to the server and verify that it returns *"Success"* in response.

:::info Additional Information

More information about Plesk configuration is available [here](/extensions/modules/Plesk).
:::
</TabItem>
<TabItem value="Proxmox" label="Proxmox">

![img](/img/next_gen/extensions/modules/proxmox/image_1.png)

- **Name:** The name you want to assign to the Proxmox server.
- **Server Type:** Proxmox.
- **Hostname:** The hostname of the Proxmox VE.
- **IP Address:** The IP address of the Proxmox VE.
- **Port:** The default port is `8006`. If you have configured a proxy with SSL, you can use `443` or `80`.
- **Token ID:** The Proxmox API token ID.
- **Secret:** The secret associated with the Proxmox API token.

:::info Additional Information
More information about Proxmox configuration is available [here](/extensions/modules/Proxmox).
:::
</TabItem>
<TabItem value="Wisp" label="Wisp">

![img](/img/next_gen/extensions/modules/wisp/images_1.png)

**IP Address**: IP address of the Wisp server.

**Hostname**: Hostname of the Wisp server.

**Port**: 443 with a domain or 80 with an IP.

**Client API**: Client key.

**Application API**: Application key.

:::info Additional Information
More information about API keys is available [here](/extensions/modules/Wisp).
:::
</TabItem>
<TabItem value="VirtualizorCloud" label="Virtualizor for Resellers">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image.png)

**IP Address**: Subdomain or IP address of the Virtualizor Cloud server.

**Key**: API KEY

**Password**: API PASSWORD

The following port must be open to connect CLIENTXCMS to your Virtualizor Cloud: 4083

You can test the connection to the server and verify that it returns *"Success"* in response.
</TabItem>
</Tabs>
