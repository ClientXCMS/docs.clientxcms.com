---
sidebar_position: 2
translated: true
---

# cPanel

The cPanel module allows you to provide cPanel offers to your customers. The module supports simple hosting. It works with cPanel plans which greatly simplifies its configuration since you just need to link a product to a cPanel plan.

:::info Modules
To use the following features, the cPanel module must be enabled on your CLIENTXCMS. [click here to enable it](../)
:::
### Supported Features
- Automate account creation and provisioning
- Hosting management from the client area
- Send login credentials by email
- Automatic login to cPanel
- Automate suspensions and terminations
- Service upgrade
- Import existing cPanel accounts![img.png](img.png)

## API Key Creation

To use the cPanel module, you must first create an API key in your cPanel. To do this, log in to your cPanel and go to `API Tokens` or `API Keys` (depending on your cPanel language). Click `Create` to generate a new API key.
![img](/img/next_gen/extensions/modules/cpanel/img.png)

Give your API key a name, for example `CLIENTXCMS`, and select the necessary permissions. For the cPanel module, you will need the following permissions:
- Initial privileges
- Account Management
- Account Information
![img](/img/next_gen/extensions/modules/cpanel/img_1.png)

Save the generated API key, as you will need it to configure the module in CLIENTXCMS.
## Server Creation

Create a CLIENTXCMS server in `Administration Area` > `Settings` > `Provisioning` > `Servers` > `New` by selecting the server type as "cPanel".

![img](/img/next_gen/extensions/modules/cpanel/img_3.png)

**IP Address**: Subdomain or cPanel IP address

**Port**: 2087 (default for cPanel)


**Username**: Username you used to log in to your cPanel

**Password**: API key you generated earlier

The following port must be open to connect CLIENTXCMS to your WHM: 2087

You can test the server connection and verify that the server returns *"Success"* as a response.

## Offer Configuration
First, [create your product](../../settings/store/products.md#créer-un-nouveau-produit) by selecting cPanel.

![img](/img/next_gen/extensions/modules/cpanel/img_3.png)

After pressing the "Create" button, it creates your product and then click on the "Configure Offer" button which will direct you to the offer configuration page. If the fields are empty, make sure your server is not hidden, otherwise it will not be taken into account in the system to retrieve Plesk plans.

![img](/img/next_gen/extensions/modules/cpanel/img_4.png)

On this page, you can select the plan to deliver to your customers and then save.

### Management Panel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Hosting" label="Hosting">

![img](/img/next_gen/extensions/modules/cpanel/img_5.png)

</TabItem>

</Tabs>

## Metadata Used

| Key        | Value             | Description          |
|------------|-------------------|----------------------|
| `username` | string            | Customer identifier  |
| `domain`   | string            | Webspace domain      |


## Import an Existing cPanel Account

If you already have existing cPanel accounts, you can import them into CLIENTXCMS. To do this, go to `Administration Area` > `Services` > `Create`.
More information on service creation [here](/services/). You can select the cPanel hosting you want to import from the list of available hostings.
