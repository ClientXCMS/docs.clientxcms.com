---
sidebar_position: 1
translated: true
---

# PteroBox

PteroBox is an innovative solution, ideal for hosting providers using **Pterodactyl** or **Wisp**. This module allows your customers to easily create, modify, and delete their own game servers while ensuring precise allocation of dedicated resources. Offer a flexible and optimized experience for all types of games and needs.

:::info Modules
To use the following features, both the PteroBox and Pterodactyl/Wisp modules must be enabled on your CLIENTXCMS.
:::

## Authentication
If not already done, simply add a server to your ClientXCMS, either [Pterodactyl](/extensions/modules/Pterodactyl#authentication) or [Wisp](/extensions/modules/Wisp#authentication), depending on which game panel you use.

### Offer Configuration
![img](/img/next_gen/extensions/modules/pterobox/images_1.png)

- **Memory (GB)**: Total amount of allocated RAM memory.
- **Disk (GB)**: Total allocated disk space.
- **Allowed Servers**: Maximum number of servers the customer can create.
- **I/O**: Input/output (IO) weight allocated per server.
- **Game Eggs**: Types of eggs available for servers.
- **Location**: Location of Pterodactyl or Wisp instances.
- **Server**: Pterodactyl or Wisp server configured on ClientXCMS where Pterobox servers are hosted.
- **CPU**: Total number of allocated CPU cores (1 = 100%, 3 = 300%, etc.).
- **Swap**: Amount of virtual memory (swap) allocated per server.
- **Databases**: Total number of allocated databases.
- **Allocations**: Total number of allocated network ports.
- **Backups**: Total number of allowed backups.
- **Port Range (optional)**: Specific range of network ports allocated for each server.
- **Server Name (optional)**: Default name assigned to each server created in the Pterobox.
- **Server Description**: Default description assigned to each server created in the Pterobox.

:::success Pro Tip
You can select multiple eggs and your customers can choose the egg they want for each of their created servers from the list.
:::

**You can use variables to customize the server name.**

### Available Variables
| Variables            | Description                   |
|----------------------|-------------------------------|
| %service_expiration% | Service expiration date       |
| %service_id%         | Service ID                    |
| %product_name%       | Product name                  |
| %owner_email%        | User email                    |
| %owner_username%     | User First + Last Name        |
| %owner_firstname%    | User first name               |
| %owner_lastname%     | User last name                |


## Management Panel
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Overview" label="Server Management">
![img](/img/next_gen/extensions/modules/pterobox/pov_client_overview.png)
</TabItem>
<TabItem value="Create" label="Server Creation">
![img](/img/next_gen/extensions/modules/pterobox/pov_client_create-server.png)
</TabItem>
<TabItem value="Admin" label="Administration">
![img](/img/next_gen/extensions/modules/pterobox/pov_admin.png)
</TabItem>
</Tabs>

## Supported Options
- Additional disk space (sliders or dropdown menu)
- Additional RAM memory (sliders or dropdown menu)
- Additional swap (sliders or dropdown menu)
- Additional databases (sliders or dropdown menu)
- Additional allocations (sliders or dropdown menu)
- Additional backups (sliders or dropdown menu)
- Additional IO (sliders or dropdown menu)
- Additional CPU (sliders or dropdown menu)
- Additional servers (sliders or dropdown menu)

Dropdown menus allow you to define predefined values for resources with a price for each value, while sliders allow you to define custom values based on a unit price. More information on option configuration is available in the [additional options documentation](/settings/provisioning/configoptions).

## Metadata Used

| Key              | Value | Description                        |
|------------------|-------|------------------------------------|
| `config`         | JSON  | Box configuration                  |
| `config_used`    | JSON  | Box used performance               |
| `linked_servers` | CSV   | List of servers linked to the box  |
----

