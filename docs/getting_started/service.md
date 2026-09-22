---
sidebar_position: 7
translated: true
---
# Creating Your First Service

You can create a service in just a few clicks from your admin panel. To do so, go to `Admin Panel` > `Services` > `Create`.

In this step, please select the client, the product you created, and the service type. Then click next.
![img](/img/next_gen/services/create_step1.png)

In this second step, fill out the form, then click **New** and **Create** to deliver a blank service, or pick the **Import** tab to attach an existing VPS or game server that you already have.

- **Service Name**: The display name for this service
- **Expiration**: Service expiration date
- **Server**: Server where the service is hosted
- **Description**: Service description - visible to the customer, not editable by the customer
- **Notes**: Notes about the service
- **Maximum Renewals**: Maximum number of renewals (empty for unlimited)
- **Recurrence and currency**: How often the service is billed and in which currency

![img](/img/next_gen/services/create_service.png)

:::info
Creating a service does not create an invoice. You will need to place an order through your customer account to generate an invoice.
:::

## Delivery Issues

If you have a service delivery issue, go to `Admin Panel` > `Settings` > `History` and look for the file 'services-delivery.log'. You can also check the provisioning module page for more information.
![img](/img/next_gen/services/delivery_log.png)

For example, in this case, the service could not be delivered because Pterodactyl has no more available allocations. More information about configuring the Pterodactyl module is available [here](../extensions/modules/Pterodactyl.md#common-errors).

## Service Overview

Here is an overview of a service.
![img](/img/next_gen/services/show_service.png)
