---
sidebar_position: 1
translated: true
---

# Wisp
Wisp.gg is a widely used panel for managing game servers quickly and easily. This module allows you to create services for your customers with their chosen performance settings. It allows you to offer all types of Wisp eggs for sale.

:::info Modules
To use the following features, the Wisp module must be enabled on your ClientXCMS. [click here to enable it](../)
:::

## Authentication
Create a CLIENTXCMS server in `Administration Area` > `Settings` > `Provisioning` > `Servers` > `New` by selecting the server type as "Wisp".
![img](/img/next_gen/extensions/modules/wisp/images_1.png)

**IP Address**: Wisp IP address.

**Hostname**: Wisp hostname.

**Port**: 443 with a domain or 80 with an IP.

**Client API**: Client key.

**Application API**: Application key.

### Client Key

Client API key available on your Wisp at `/account/api`
![img](/img/next_gen/extensions/modules/wisp/images_2.png)

**Description**: CLIENTXCMSAPI

**Allowed IPs**: Leave empty or enter your ClientXCMS IP for more security.

Your client API key will only be given once, after that it will be truncated.
### Application Key

Application API key available on your Wisp at `/admin/api/new`

![img](/img/next_gen/extensions/modules/wisp/images_3.png)

**Permissions**: As shown in the screenshot

**Description**: CLIENTXCMSAPI

## Offer Configuration
![img](/img/next_gen/extensions/modules/wisp/images_4.png)
- **Memory (MB)**: Server memory
- **Disk Space (MB)**: Server disk space
- **Block IO**: Server IO weight
- **Swap**: Server swap
- **Wisp Egg ID**: Available eggs
- **Wisp Location ID**: Wisp location
- **Server**: Wisp server where the service will be delivered
- **Ports to assign to server**: Specific ports (Example: FiveM)
- **Server name**: Server name**
- **Databases to assign to server**: Number of databases
- **Backups to assign to server**: Number of backups
- **Allocations to assign to server**: Number of allocations (ports to give)

:::success Pro Tip
You can select multiple eggs and your customers can choose the Wisp egg they want from the list
:::

** You can use variables to customize the server name.

### Available Variables

| Variables         | Description                   |
|-------------------|-------------------------------|
| %owner_email%     | User email                    |
| %owner_username%  | User First + Last Name        |
| %owner_firstname% | User first name               |
| %owner_lastname%  | User last name                |
| %product_name%    | Product name                  |
| %order_id%        | Order ID                      |
| %service_id%      | Service ID                    |

## Management Panel
![img](/img/next_gen/extensions/modules/wisp/images_5.png)

## Supported Options
- Additional disk space (sliders or dropdown menu)
- Additional RAM memory (sliders or dropdown menu)
- Additional swap (sliders or dropdown menu)
- Additional IO (sliders or dropdown menu)
- Additional CPU (sliders or dropdown menu)
- Additional databases (sliders or dropdown menu)
- Additional allocations (sliders or dropdown menu)
- Additional backups (sliders or dropdown menu)
- Location (location_id) (dropdown menu)
- Dedicated IP (checkbox)

### Custom Environment
You can also add additional options with server environment variables. To do this, go to `Settings` > `Provisioning` > `Additional Options` and select the text type with a custom key having the name of the server environment variable prefixed by `wisp_custom_`, for example `wisp_custom_fivem_license` to request a FiveM license from your customer.

Here is an example configuration of an additional option to request a FiveM license from your customer.

![img](/img/next_gen/extensions/modules/pterodactyl/image.png)

When ordering, the customer can enter the value of this environment variable.

![img](/img/next_gen/extensions/modules/pterodactyl/image_fivem.png)
