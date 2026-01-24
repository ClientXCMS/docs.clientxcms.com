---
sidebar_position: 3
translated: true
---

# Virtualizor for Resellers

The Virtualizor Cloud module allows you to provide VPS offers to your customers. The module supports VPS hosting. This module is made for resellers who want to offer VPS plans to their customers.

:::info Modules
To use the following features, the Virtualizor Cloud module must be enabled on your CLIENTXCMS. [click here to enable it](../)
:::

### Supported Features
- Automate account creation and provisioning
- VPS management from the client area
- Send login credentials by email
- Automate suspensions and terminations

## Virtualizor Cloud API Creation
Create an API in `Your Virtualizor Cloud` > `API Key` > `Profile menu at the top right` > `API credentials` > `add the IP to authorize`

![img](/img/next_gen/extensions/modules/virtualizorcloud/image2.png)

Click on "Create API Key Pair"

Then, you will have the API key to link your Virtualizor Cloud to your client area

![img](/img/next_gen/extensions/modules/virtualizorcloud/image3.png)

## Server Creation

Create a CLIENTXCMS server in `Administration Area` > `Settings` > `Provisioning` > `Servers` > `New` by selecting the server type as "Virtualizor Cloud".

![img](/img/next_gen/extensions/modules/virtualizorcloud/image.png)

**IP Address**: Subdomain or Virtualizor Cloud IP address

**Key**: API KEY

**Password**: API PASSWORD

The following port must be open to connect CLIENTXCMS to your Virtualizor Cloud: 4083

You can test the server connection and verify that the server returns *"Success"* as a response.

## Offer Configuration
First, [create your product](../../settings/store/products.md#creating-a-new-product) by selecting Virtualizor Cloud.

![img](/img/next_gen/extensions/modules/virtualizorcloud/image5.png)

After pressing the "Create" button, it creates your product and then click on the "Configure Offer" button which will direct you to the offer configuration page. If the fields are empty, make sure your server is not hidden, otherwise it will not be taken into account in the system to create your VPS offers.

![img](/img/next_gen/extensions/modules/virtualizorcloud/image4.png)

On this page, you can select the plan to deliver to your customers and then save.

### Management Panel

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Interface" label="Interface">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image6.png)

</TabItem>

<TabItem value="Reinstallation" label="Reinstallation">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image7.png)

</TabItem>

<TabItem value="Nomhote" label="Hostname">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image8.png)

</TabItem>

<TabItem value="password" label="Password">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image9.png)

</TabItem>

</Tabs>

## Metadata Used

| Key     | Value | Description    |
|---------|-------|----------------|
| `vpsid` | int   | VPS identifier |
