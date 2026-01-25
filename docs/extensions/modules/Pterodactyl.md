---
sidebar_position: 1
translated: true
---

# Pterodactyl
Pterodactyl is a widely used panel for managing game servers quickly and easily. This module allows you to create services for your customers with their chosen performance settings.
It allows you to offer all types of Pterodactyl eggs for sale.

:::info Modules
To use the following features, the Pterodactyl module must be enabled on your CLIENTXCMS. [click here to enable it](../)
:::

## Authentication
Create a CLIENTXCMS server in `Administration Area` > `Settings` > `Provisioning` > `Servers` > `New` by selecting the server type as "Pterodactyl".

![img](/img/next_gen/extensions/modules/pterodactyl/images_1.png)

**IP Address**: Pterodactyl IP address.

**Hostname**: Pterodactyl hostname.

**Port**: 443 with a domain or 80 with an IP.

**Client API**: Client key.

**Application API**: Application key.

### Client Key

Client API key available on your Pterodactyl at `/account/api`
![img](/img/next_gen/extensions/modules/pterodactyl/images_2.png)

**Description**: CLIENTXCMS API

**Allowed IPs**: Leave empty or enter your CLIENTXCMS IP for more security.

Your client API key will only be given once, after that it will be truncated.
### Application Key
Application API key available on your Pterodactyl at `/admin/api/new`

![img](/img/next_gen/extensions/modules/pterodactyl/images_3.png)
**Permissions**: As shown in the screenshot

**Description**: CLIENTXCMS API

## Offer Configuration
![img](/img/next_gen/extensions/modules/pterodactyl/images_4.png)
- **Memory (MB)**: Server memory
- **Disk Space (MB)**: Server disk space
- **Block IO**: Server IO weight
- **Swap**: Server swap
- **Pterodactyl Egg ID**: Available eggs
- **Pterodactyl Location ID**: Pterodactyl location
- **Server**: Pterodactyl server where the service will be delivered
- **Ports to assign to server**: Specific ports (Example: FiveM)
- **Server name**: Server name**
- **Databases to assign to server**: Number of databases
- **Backups to assign to server**: Number of backups
- **Allocations to assign to server**: Number of allocations (ports to give)

:::success Pro Tip
You can select multiple eggs and your customers can choose the Pterodactyl egg they want from the list
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
![img](/img/next_gen/extensions/modules/pterodactyl/images_5.png)

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
You can also add additional options with server environment variables. To do this, go to `Settings` > `Provisioning` > `Additional Options` and select the text type with a custom key having the name of the server environment variable prefixed by `pterodactyl_custom_`, for example `pterodactyl_custom_fivem_license` to request a FiveM license from your customer.

Here is an example configuration of an additional option to request a FiveM license from your customer.

![img](/img/next_gen/extensions/modules/pterodactyl/image.png)

When ordering, the customer can enter the value of this environment variable.

![img](/img/next_gen/extensions/modules/pterodactyl/image_fivem.png)



## Automatic Login (SSO) Pterodactyl

Allow your customers to access their Pterodactyl panel in one click from CLIENTXCMS, without having to re-enter their password.

### Quick Setup
1. On your VPS, navigate to the panel folder:
   ```bash
   cd /var/www/pterodactyl
   composer require "clientxcms/sso-pterodactyl"
   ```
2. Clear the cache:
   ```bash
   php artisan cache:clear
   ```
3. Generate the SSO key:
   ```bash
   php artisan clientxcms:generate
   ```
   > An SSO token is generated and added to your `.env`. Keep it secret!
![img](/img/next_gen/extensions/modules/pterodactyl/image_sso_generate.png)

4. In CLIENTXCMS, on your Pterodactyl server configuration page (`/admin/servers`), add a metadata:
   - **Key**: `sso_key`
   - **Value**: the generated SSO token

**Advanced Alternative**:
You can also place the token in the CLIENTXCMS `.env` with the variable `SSO_CLIENTXCMS_KEY{SERVER_ID}` (replace `{SERVER_ID}` with the server ID). In this case, the metadata is not necessary.

![img](/img/next_gen/extensions/modules/pterodactyl/image_sso_metadata.png)

Your customers will then enjoy direct connection to their Pterodactyl panel from CLIENTXCMS.

:::info
Auto-login does not work if two-factor authentication is enabled on Pterodactyl or for administrator accounts.
:::

## Common Errors

Egg not found in offer configuration: You need to clear the CLIENTXCMS cache in `Settings` > `Extensions`.

**No allocations satisfying the requirements for automatic deployment were found.**: Check that you have available allocations on your Pterodactyl node or that automatic allocation creation is enabled in your pterodactyl's advanced settings.
