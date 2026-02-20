---
sidebar_position: 4
translated: true
---

# Services

Services are the products you sell to your customers. They can be game servers, voice servers, web servers, VPS, web hosting, etc. Services are linked to a customer and often connected to a **server**. They provide an advanced management panel for your customers and for you.
These services can be delivered manually or automatically, depending on your needs. They can be renewed by the customer or the administrator.

To manage them, go to the `Services` tab in the administration.

## Customer Side
The customer can view their services from their client area, they can view the details of their service, manage it, renew it, or cancel it.
A table is available on the main page of the client area to view active services, as well as a dedicated page to view all services.
![img](/img/next_gen/services/front.png)
## Administration
### Service List
The service list is available at `Administration Area` > `Services`. You can view active, suspended, expired, terminated, and cancelled services.
![img](/img/next_gen/services/admin_list.png)
#### Bulk Actions
You can perform bulk actions on services, such as suspending, cancelling, terminating, deleting, renewing, unsuspending them, adding days, or subtracting them.
### Filter
You can filter services by one or more filters or search for a specific service by customer name, identifier, service name, or product.
![img](/img/next_gen/services/admin_filter.png)
### Service Import
You can import services that already exist on your server. To do this, go to `Administration Area` > `Services` > `Create`.

![img](/img/next_gen/services/create_step1.png)

In this step, please select the customer, product, and service type. Then click next.
The product type must be the same as the product type you already created in products.

![img](/img/next_gen/services/create_import.png)

In this second step, you can fill out the form and choose, depending on the module type, existing VPS or game servers that you have on your server. Then click import.

- **Service Name**: Service name
- **Expiration**: Service expiration date
- **Price**: Service price
- **Initial Price**: Initial service price
- **Server**: Server where the service is hosted
- **Recurrence**: Billing cycle
- **Notes**: Notes about the service
- **Maximum Renewals**: Maximum number of renewals (empty for unlimited)
## Service Creation
You can create a service from CLIENTXCMS. To access it: `Administration Area` > `Services` > `Create`

In this step, please select the customer, product, and service type. Then click next.
The product type must be the same as the product type you already created in products.

You can also select no product to create a custom service by choosing only the type and customer.
![img](/img/next_gen/services/create_step1.png)

In this second step, you can fill out the form and choose, depending on the module type, existing VPS or game servers that you have on your server. Then click import.

- **Service Name**: Service name
- **Expiration**: Service expiration date
- **Description**: Service description - visible to the customer, not editable by the customer
- **Price**: Service price
- **Initial Price**: Initial service price
- **Server**: Server where the service is hosted
- **Recurrence**: Billing cycle
- **Notes**: Notes about the service
- **Maximum Renewals**: Maximum number of renewals (empty for unlimited)

![img](/img/next_gen/services/create_service.png)

:::info
Service creation and import do not create an invoice; you will need to go through an order to generate an invoice.
:::
## Service Details
You can view the details of a service by clicking the "View" button on the services page. This contains a lot of information about the service, the customer, and renewals. This provides an overview of the service.
![img](/img/next_gen/services/show_service.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Panel" label="Management Panel">
The panel is available for services that have a management panel.
You can view the service management panel, which depends on the delivery module.

![img](/img/next_gen/services/panel.png)

</TabItem>
<TabItem value="Renouvellement" label="Renewal">
Allows you to view service renewals and renew the service on a billing cycle.
You can also add the renewal to an existing invoice.
![img](/img/next_gen/services/renewal.png)
</TabItem>
<TabItem value="Options" label="Service Options">
Allows you to view the additional options of the service. You can also edit or add them.
![img](/img/next_gen/services/options.png)

When you add an option, it will be added with the same expiration date as the service.
:::warning
Added options will not be automatically added to the service; you will need to add them manually. This only allows adding additional options to the system and being able to bill the customer.
:::
</TabItem>
<TabItem value="Amélioration" label="Service Upgrade">
Allows you to launch an upgrade on the service and displays upgrades in progress.
Upgrade types:
- **Generate an invoice to be paid by the customer**: Generates an invoice to be paid by the customer
- **Upgrade without billing**: Upgrades the service without billing the customer
![img](/img/next_gen/services/upgrade.png)
</TabItem>
</Tabs>
### Editing
You can edit the service details by modifying the fields and then clicking the edit button.
![img](/img/next_gen/services/edit_service.png)

- **Service Name**: Service name
- **Expiration**: Service expiration date
- **Price**: Service price
- **Initial Price**: Initial service price
- **Server**: Server where the service is hosted
- **Recurrence**: Billing cycle
- **Notes**: Notes about the service
- **Description**: Service description - visible to the customer, not editable by the customer
- **Maximum Renewals**: Maximum number of renewals (empty for unlimited)
- **Status**: Service status
- **Service Type**: Service type
:::info
We recommend not modifying the service status via editing. It is preferable to use actions. It is only there in case of major need.
:::
### Actions
![img](/img/next_gen/services/actions.png)

<Tabs>
<TabItem value="Terminer" label="Terminate">
The service will be deleted from the server, the service status will be set to terminated.
</TabItem>
<TabItem value="Suspendre/Unsuspend" label="Suspend/Unsuspend">
You can suspend or unsuspend a service. In case of suspension, the service will be suspended from the server, the service status will be set to suspended. In case of unsuspend, the service will be reactivated on the server and the service status will be reset to online.
You can add a reason or notify the customer.

![img](/img/next_gen/services/suspend.png)
</TabItem>
<TabItem value="Fiche client" label="Customer Profile">
Redirects to the customer profile of the customer linked to the service
![img](/img/next_gen/customers/show.png)
</TabItem>
<TabItem value="Metadonnées" label="Metadata">

Metadata allows you to add additional information about the service. This can be useful for adding extra information about the service.
Metadata is additional information about the service. It is stored as key/value pairs.

#### Available Metadata
-------------
| Key                             | Value | Description                                              |
|---------------------------------|-------|----------------------------------------------------------|
| `max_renewals_in_current_month` | nbr   | Limits the number of renewals for the current month      |
| `max_renewals_in_current_week`  | 1     | Maximum number of renewals per week                      |
| `max_renewals`                  | 1     | Maximum number of renewals                               |
| `disable_notify_expiration`     | true  | Disables expiration notifications                        |
-------------
</TabItem>
<TabItem value="Annulation" label="Cancellation">
Allows you to cancel the service or view cancellation details.
There are two types of cancellation:
- End of cycle cancellation: The service will be cancelled at the end of the billing cycle
- Immediate cancellation: The service will be cancelled immediately

![img](/img/next_gen/services/cancel.png)
</TabItem>
<TabItem value="Relivrer" label="Redeliver">
Allows you to redeliver the service. It will force the deletion of the service and recreate it.
:::info
The service must be in pending status to be redelivered.
:::
</TabItem>
</Tabs>

### Sub-pages
![img](/img/next_gen/services/tab.png)

The delivery module may have multiple tabs to better organize information.
### Billing Cycles
Billing cycles define the billing period for a product. Here are the available billing cycles:
- Monthly
- Quarterly
- Semi-annually
- Annually
- Biennially
- Triennially
- Weekly
