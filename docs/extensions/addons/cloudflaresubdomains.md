---
translated: true
---

# Cloudflare Subdomains

This extension allows managing subdomains with Cloudflare. It is useful for users who want to offer their customers the ability to create custom subdomains for their services.

## Supported Types
- cPanel
- Pterodactyl
- Plesk

:::info Modules
To use the subdomain feature with Pterodactyl, please install the `clientxcms/sso-pterodactyl` package via Composer. You can do this by running the following command in your terminal:
```bash
composer require clientxcms/sso-pterodactyl
```
:::
This will add the necessary endpoints for subdomain management in Pterodactyl

## Installation
You can enable it from the **Extensions** section, then configure it via **extension settings** available in the **Provisioning** section.

### Creating the Cloudflare API
![img](/img/next_gen/extensions/addons/cloudflaresubdomains/api.png)
To use this extension, you must create an API key in your Cloudflare account. Here's how:
1. Log in to your Cloudflare account.
2. Go to the **My Profile** section.
3. Click on **API Tokens**.
4. Click on **Create Token**.
5. Select **Edit zone DNS** in permissions.
6. Select the zones you want to manage with this key.
7. Click **Continue to summary** then **Create Token**.
8. Copy the generated API key.
9. Paste the API key in the Cloudflare Subdomains extension settings in CLIENTXCMS.
![img](/img/next_gen/extensions/addons/cloudflaresubdomains/config.png)

**API Key**: The API key you generated in your Cloudflare account.

**TTL**: The TTL (Time To Live) is the time during which DNS records are cached. By default, it is set to 1 hour (3600 seconds). You can modify it according to your needs.

**Proxied**: This option allows you to choose whether traffic to the subdomain should go through the Cloudflare network. If you enable this option, traffic will be protected by Cloudflare and benefit from its security and performance features. If you disable it, traffic will go directly to your server.

Then you can click **Save** to save your settings.

## Configuring a Subdomain
To configure a subdomain, go to Settings > Provisioning > Subdomains and select the domain you want to automate.

![img](/img/next_gen/extensions/addons/cloudflaresubdomains/config2.png)

Add a metadata **cloudflare_zone_id** with the Cloudflare zone ID you want to use for subdomains.
You can find the zone ID in your Cloudflare dashboard, in the **Overview** section of the relevant domain.

![img](/img/next_gen/extensions/addons/cloudflaresubdomains/zone_id.png)

## Subdomain List
You can view the list of created subdomains in the **Subdomains** section of the Cloudflare Subdomains extension. This list displays created subdomains, their status, and possible actions.
![img](/img/next_gen/extensions/addons/cloudflaresubdomains/domains.png)

They will be automatically deleted if the service is expired or deleted.
You can find the following columns:
- **Record ID**: The DNS record ID in Cloudflare.
- **Subdomain**: The subdomain created for the service.
- **Target**: The IP to which the subdomain is associated.
- **Service**: The service to which the subdomain is associated.
- **Delete**: A button to delete the subdomain.
