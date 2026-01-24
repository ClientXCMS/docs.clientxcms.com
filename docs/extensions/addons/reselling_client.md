---
translated: true
---

# CTX Reselling

ClientXCMS offers a VPS and CLIENTXCMS license reselling system. All information is available on our showcase website along with reselling prices.

### VPS
All information, including prices, is available [here](https://ctxhosting.fr/ctxreselling).
**Prerequisite**: You must have a valid and active CLIENTXCMS license.

### CLIENTXCMS License
All information, including prices, is available [here](https://clientxcms.com/partners).
**Prerequisite**: You must have a valid and active CLIENTXCMS license.

For any request or to become a partner, please contact support.

#### Regarding CLIENTXCMS licenses:
- No API key is required.
- Orders must be placed via [clientxcms.com](https://clientxcms.com) using the partner promo code indicated on the reseller page.
- You can also order licenses for your customers and access the reseller area to manage their licenses.

#### Regarding VPS:
- You will receive an API key that will allow you to manage your customers' VPS directly from your CLIENTXCMS client area.
- Billing is based on services ordered by you or your customers.
- For renewals or expiration date changes, fees will be calculated pro-rata based on remaining days until expiration, with a minimum amount of €0.50.

This system ensures simplified management of licenses and VPS services for your customers, while offering flexibility and automation.
:::info Modules
To use the following features, the Plesk module must be enabled on your CLIENTXCMS. [click here to enable it](../)
:::

### Supported Features
- Automate VPS creation and provisioning
- VPS management from client area
- Send login credentials by email
- Automatic VPS reinstallation
- Automate suspensions and terminations
- Service upgrades

## Server Creation
Create a CLIENTXCMS server in `Admin Panel` > `Settings` > `Provisioning` > `Servers` > `New` by selecting the server type as "Reselling".

![img](/img/next_gen/extensions/addons/reselling_client/image.png)

**IP Address**: clients.ctxhosting.fr
**Hostname**: clients.ctxhosting.fr
**Username**: ctxreselling
**Password**: API key indicated in the welcome email
**Port**: 443

The following port must be open to connect CLIENTXCMS to your reselling server: 443

:::danger Warning
These are not your CLIENTXCMS credentials, but the API key.
:::
You can test the server connection and verify that the server returns *"Success"* in response.

## Offer Configuration
First, [create your product](../../settings/store/products.md#creating-a-new-product) by selecting "Reselling".
![img](/img/next_gen/extensions/addons/reselling_client/image_2.png)
After pressing the "Create" button, it creates your product, then click the "Configure Offer" button which will direct you to the offer configuration page. If the fields are empty, make sure your server is not hidden, in which case it will not be considered by the system to retrieve reselling offers.

![img](/img/next_gen/extensions/addons/reselling_client/image_3.png)

## Service Display

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Hosting" label="VPS Management">

![img](/img/next_gen/extensions/addons/reselling_client/image_4.png)

</TabItem>

<TabItem value="Revendeur" label="Reinstallation">

![img](/img/next_gen/extensions/addons/reselling_client/image_5.png)

</TabItem>

<TabItem value="AdminHosing" label="Customer Data">

![img](/img/next_gen/extensions/addons/reselling_client/image_6.png)

</TabItem>

</Tabs>
