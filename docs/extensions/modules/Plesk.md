---
sidebar_position: 2
translated: true
---

# Plesk

The Plesk module allows you to provide Plesk offers to your customers. The module supports web resellers and simple hosting. It works with Plesk plans which greatly simplifies its configuration since you just need to link a product to a Plesk plan.

:::success Good to Know
This module is compatible with Plesk versions 11, 11.5, 12, 12.5, Onyx, and Obsidian.
:::
:::info
To use the module features, the PHP **XML** extension must be enabled on your hosting. To install it:
```bash
apt install php-xml
```
:::

:::info Modules
To use the following features, the Plesk module must be enabled on your CLIENTXCMS. [click here to enable it](../)
:::
### Supported Features
- Automate account creation and provisioning
- Hosting management from the client area
- Send login credentials by email
- Automatic login to Plesk
- Automate suspensions and terminations
- Service upgrade
- Import existing Plesk accounts

## Server Creation

Create a CLIENTXCMS server in `Administration Area` > `Settings` > `Provisioning` > `Servers` > `New` by selecting the server type as "Plesk".

![img](/img/next_gen/extensions/modules/plesk/image.png)

**IP Address**: Subdomain or Plesk IP address

**Username**: Admin username

**Password**: Admin password

The following port must be open to connect CLIENTXCMS to your Plesk: 8443

You can test the server connection and verify that the server returns *"Success"* as a response.

## Offer Configuration
First, [create your product](../../settings/store/products.md#créer-un-nouveau-produit) by selecting Plesk.

![img](/img/next_gen/extensions/modules/plesk/image_2.png)

After pressing the "Create" button, it creates your product and then click on the "Configure Offer" button which will direct you to the offer configuration page. If the fields are empty, make sure your server is not hidden, otherwise it will not be taken into account in the system to retrieve Plesk plans.

![img](/img/next_gen/extensions/modules/plesk/image_3.png)

On this page, you can select the plan to deliver to your customers and then save.

### Management Panel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Hosting" label="Hosting">

![img](/img/next_gen/extensions/modules/plesk/image_4.png)

</TabItem>

<TabItem value="Revendeur" label="Reseller">

![img](/img/next_gen/extensions/modules/plesk/image_5.png)

</TabItem>

<TabItem value="AdminHosing" label="Admin Hosting">

![img](/img/next_gen/extensions/modules/plesk/image_6.png)

</TabItem>

<TabItem value="AdminRevendeur" label="Admin Reseller">

![img](/img/next_gen/extensions/modules/plesk/image_7.png)

</TabItem>

</Tabs>

## Metadata Used

| Key           | Value             | Description           |
|---------------|-------------------|-----------------------|
| `login`       | string            | Customer identifier   |
| `type`        | reseller or login | Hosting type          |
| `reseller_id` | int               | Reseller identifier   |
| `webspace_id` | int               | Webspace identifier   |
| `domain`      | string            | Webspace domain       |




## Import an Existing Plesk Account

If you already have existing Plesk accounts, you can import them into CLIENTXCMS. To do this, go to `Administration Area` > `Services` > `Create`.
More information on service creation [here](/services/). You can select the Plesk hosting you want to import from the list of available hostings.
