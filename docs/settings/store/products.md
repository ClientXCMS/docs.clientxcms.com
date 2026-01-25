---
translated: true
sidebar_position: 1
---

# Products

In **CLIENTXCMS**, a **product** corresponds to a **service you offer for rent** in your store. <br/>
The objective is clear: **precisely define each offer, customize its appearance and control its commercialization**. Good product configuration allows your customers to **quickly understand what they're buying** and place orders with confidence.

Each product can be fully customized: name, description, price, type, duration, stock management, visibility, etc.

You can manage products from:

`Settings` > `Store Settings` > `Products`

![Product configuration access](/img/next_gen/settings/store/products/settings.png)

:::tip Tip
A product **cannot exist without being attached to a group**.
Before creating a product, make sure groups are well defined to ensure a coherent and easy-to-navigate store.
:::

## Why use products?

Products are the heart of your store. They concretely represent what you sell — whether it's a hosting service like a VPS, a Plesk instance, cPanel, or any other service.

Creating well-defined products allows you to:

* Clearly present each service offered to your customers
* Precisely define the characteristics, prices, and options for each offer
* Easily manage billing, duration, and renewal of your services

:::tip Tip
It's a bit like labeling each item in a store 🏷️ — your customers know exactly what they're buying, and you keep control over every aspect of the sale.
:::

## User Interfaces
### Store-side View

Products are displayed in the store and organized by **groups**.
Each group is accessible via a structured URL as follows:

https://demo.clientxcms.com/store/groupname

For example, for a group named **pterodactyl**:
https://demo.clientxcms.com/store/pterodactyl

![Product group view](/img/next_gen/settings/store/products/store_list.png)

This allows you to **organize your offers by service type**, such as:

- Pterodactyl Hosting
- Minecraft Hosting
- KVM VPS
- LXC VPS
- ClientXCMS Licenses
- Hosting Starter Pack

## Administrator View

In the administration interface, you have a complete list of created products. You can:
- **Search** for a product by name or product group
- **Filter** by group
- **Perform actions** like edit, duplicate, or delete a product

![Product list view in administration](/img/next_gen/settings/store/products/admin_list.png)

### Available Actions

| Action        | Description                                  |
|---------------|----------------------------------------------|
| **Clone**     | Duplicates the existing product              |
| **View**      | Opens the product for editing                |
| **Delete**    | Permanently deletes the product              |

:::danger Warning
Deleting a product can cause errors if it is linked to services or orders.
Proceed with caution; we recommend never deleting anything under any circumstances at any point in your CMS lifecycle.
:::

### Product Types

Each product must be **associated with a type**.
Types are provided by **provisioning modules** (like *Pterodactyl*, *Proxmox*, or *Plesk*) that you can enable in administration settings located at `Settings` > `Extension Settings` > `Extensions`

These types allow CLIENTXCMS to automatically synchronize your products with management modules (billing, service creation, configuration, etc.).

Please refer directly to the [modules section](/extensions/) for more information on this subject.

### Available Billing Cycles

A **billing cycle** determines how often the customer will pay for the product.

Here are the available cycles:

- **Monthly**
- **Quarterly**
- **Semi-annually**
- **Annually**
- **Biennially**
- **Triennially**
- **Weekly**

Each cycle can have its own price.

## Creating a New Product

To add a product to your store, click the **"Create"** button in the top right of the page.

![Product creation](/img/next_gen/settings/store/products/create_product.png)

### Parameters to Define

Here are the fields to complete when creating a product:

**Name** | (text)<br />

The product name as it will appear in your store; this will also be its commercial reference on invoices.

**Available Stock** | (numeric field)<br />

Quantity available for this product. Refer to the [Managing Product Stock](./products#managing-product-stock) section to learn more.

**Product Type** | (dropdown menu)<br />

Select the type of service you want to deliver to your customer. For more information, see the dedicated [product types](./products#product-types) section.

**Status** | (dropdown menu)<br />

Defines the product's visibility in the store:

* **Active**: Available for purchase in the store
* **Unlisted**: Accessible only via direct link
* **Hidden**: Unavailable for purchase

Please refer to the dedicated [product status](./products#product-status) section for more information on this subject. <br />

**Product Group** | (dropdown menu)<br />

Associate your product with a group so it appears correctly in the store.<br />
Please refer to the dedicated [groups](./groupes) page for more information on this subject.<br />

**Sort Order** | (numeric field)<br />

Determines the product's position in its group. A lower number places it higher in the list.

**Pinned** | (checkbox)<br />

Allows you to highlight this product. It will be displayed at the top of the list in its group.

**Description** | (text area with HTML editor)<br />

Write a short description here that will be displayed in the product description. This field supports HTML and CSS via the integrated editor (compatible with TailwindCSS).

> ⚠️ Be rigorous: poorly structured code or an unclosed tag can affect the CMS display.

HTML description example

```html
<p class="ql-align-center">A solution designed to combine accessibility and reliability, supported by your commitment.</p>
<p class="ql-align-center"><em>(Offer reserved for association members)</em></p>
<ol>
    <li class="ql-align-center"><strong>Processor</strong>: 8 vCPU Ryzen 9 7950x3D @ 4.2 GHz up to 5.7 GHz</li>
    <li class="ql-align-center"><strong>Memory</strong>: 32 GB DDR5 RAM</li>
    <li class="ql-align-center"><strong>Storage</strong>: 200 GB SSD</li>
    <li class="ql-align-center"><strong>Connectivity</strong>: IPv4 included, 1 Gbps burst</li>
</ol>
<p class="ql-align-center">🛡️ | Anti-DDoS Protection (L3/L4 & L7) via <a href="https://demo.clientxcms.com" target="_blank" rel="noopener noreferrer">ClientXCMS</a></p>
<p class="ql-align-center">🚚 | Delivery in <strong>just a few minutes</strong></p>
```

:::tip Tip
Take the time to write a **clear name** and an **engaging description**. This is often the first contact a customer has with your service. A good presentation can make all the difference — and improve your SEO.
:::

:::tip Tip
Some themes support custom descriptions in product metadata. More information in your theme's documentation. You can generate descriptions with this [online tool](https://cdn.clientxcms.com/ressources/simulator).
:::

## Pricing Configuration

Each billing cycle can have:
- a distinct **price**
- optional **setup fees**

🟢 A product with a price of `0` is **considered free**.
🔴 If you leave the price field empty for a cycle, **it will be disabled**.

### Using the Integrated Calculator

![Price calculator interface](/img/next_gen/settings/store/products/create_pricing2.png)

CLIENTXCMS offers an **integrated price calculator**.
It helps you:
- apply a **percentage discount**

This feature is ideal for offering consistent degressive offers.

The calculated prices will appear in the product card on the cart side.

This simplifies customer choice while maintaining commercial consistency in your offers.

:::tip Tip
If you want to configure additional billing cycles before opening the calculator, click the "Configure more prices" button.
This will display all available cycles.
Without this step, the calculator will apply your discount only to the cycles visible on the screen.
:::

### Billing Cycle Display

The billing cycles configured for a product are automatically displayed on the configuration page, just before adding to cart.

![Cycle display](/img/next_gen/settings/store/products/config_billing.png)

This allows the customer to easily choose their desired subscription duration.

### Pre-selecting a Cycle via URL

It's possible to **pre-select a billing cycle** by default, directly from the URL, using the `billing` parameter.
This is particularly useful for directing visitors to a cycle associated with a specific offer from your showcase site.

For example, to pre-select an **annual** cycle, add this parameter to your URL:

This gives a complete URL like:
https://demo.clientxcms.com/store/basket/add/4?billing=annually

#### Available Parameters for Pre-selecting the Billing Cycle

Here are the possible values for the `billing` parameter:

| Parameter Value      | Billing Cycle        | Description                           |
|----------------------|----------------------|---------------------------------------|
| `monthly`            | Monthly              | Monthly billing                       |
| `quarterly`          | Quarterly            | Billing every 3 months                |
| `semiannually`       | Semi-annually        | Billing every 6 months                |
| `annually`           | Annually             | Billing every 12 months               |
| `biennially`         | Biennially           | Billing every 24 months               |
| `triennially`        | Triennially          | Billing every 36 months               |
| `weekly`             | Weekly               | Weekly billing                        |

:::tip Tip
Make sure the selected cycle is properly **priced** in the product configuration. If the price field is empty, the cycle cannot be displayed or selected.
:::

### Enabling Additional Billing Cycles

By default, some cycles like **biennial**, **triennial**, or **weekly** may not be visible in the product configuration interface.

To make them available, click the **"Configure more prices"** button in the pricing section of the product page.

![Configure other billing cycles](/img/next_gen/settings/store/products/config_more_princing.png)

You can then add and customize the prices for these cycles according to your needs.

:::info
Make sure to **enter a price for each billing cycle you enable**, otherwise it won't be displayed to customers in the store. <br/>
Regarding **setup fees**, even if you empty the field, they will automatically be set to zero — this is normal system behavior.
:::

## Product Editing

Product editing allows you to **modify its characteristics**, as if you were recreating it, while preserving its link to existing orders or sales history.

### Accessing Editing

To edit a product:

1. Go to the product list.
2. Click the **"View"** button in the **Actions** column of the relevant product.

![Product editing access](/img/next_gen/settings/store/products/edit_product.png)

### Modifying General Information

Once in the editing interface, you can modify:
- The **product name**
- Its **description**
- Its **type**, **group**, **stock**, **display order**, etc.

![Service display](/img/next_gen/settings/store/products/view_product.png)

This works exactly like when **creating** the product. Changes take effect immediately after saving.

## Product Technical Configuration

Each product can have a **specific configuration** based on its type (e.g.: pterodactyl hosting, VPS delivered on proxmox, ClientXCMS license, etc.). This configuration determines **the resources and limitations** of the offer — this is the product configuration.

### Example with a Module: Pterodactyl

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>

<div style={{ flex: '1 1 400px' }}>

If your product uses the **Pterodactyl** module, you can configure:

| Feature                            | Description                                                                 |
|-----------------------------------|------------------------------------------------------------------------------|
| Server Name / Description         | Customize the name and description displayed upon delivery.                 |
| Delivery Location                 | Defines the physical server on which the service will be deployed.          |
| Egg                               | Selects the Pterodactyl egg to use for the service.                         |
| Startup Command                   | Determines how the instance starts on the Pterodactyl server.               |
| Docker Image                      | Defines the system image used for deployment.                               |
| CPU                               | Specifies the number of cores allocated to the instance.                    |
| RAM                               | Amount of memory allocated.                                                 |
| Storage                           | Disk space allocated to the instance.                                       |
| Allocations (ports)               | Number of ports assigned to the service.                                    |
| Backups / Databases               | Number of backups or databases allowed.                                     |

</div>

<div style={{ flex: '1 1 200px', textAlign: 'center' }}>
  <img src="/img/next_gen/extensions/modules/pterodactyl/images_4.png" alt="Pterodactyl configuration example" style={{ maxWidth: '100%', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
</div>

</div>

:::info
The displayed fields depend on the **product type** and the **provisioning module** enabled.
Consult the specific module documentation to learn about available parameters.
:::

## Deleting a Product

:::danger Warning
Deleting a product can cause system malfunctions, especially if the product is linked to existing services or orders. The team's recommendation is to never delete any element at any point in the CMS lifecycle.
:::

To delete a product:
1. Click the red **"Delete"** button in the **Actions** column.
2. Confirm the operation.

![Product deletion](/img/next_gen/settings/store/products/edit_product.png)

## Product Status

The **status** determines the product's visibility and accessibility:

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

<div style={{ flex: 1 }}>

| Status           | Visibility                               |
|------------------|------------------------------------------|
| **Active**       | Available for purchase                   |
| **Unlisted**     | Accessible only via direct link          |
| **Hidden**       | Unavailable for purchase                 |

</div>

<div style={{ flex: 1 }}>
  <img src="/img/next_gen/settings/store/products/statut_product.png" alt="Product status" style={{ maxWidth: '100%' }} />
</div>

</div>

## Direct Link to Add a Product to Cart

When you edit a product, a link is automatically generated.
This allows you to add the product to the cart from your showcase site:

https://demo.clientxcms.com/store/basket/add/[id]

Replace `[id]` with the actual product ID or retrieve the link directly from your product page.

![Basket Link](/img/next_gen/settings/store/products/view_link_basket.png)

## Managing Product Stock

### Manual Stock

- Set a value in the **Available Stock** field:
  - `0` → The product is **unavailable for purchase**.
  - `-1` → Stock is **unlimited**.

### Automatic Stock

CLIENTXCMS allows you to automate stock management using metadata:

| Key          | Value  | Effect                              |
|--------------|--------|-------------------------------------|
| `auto_stock` | `true` | Stock is automatically adjusted     |

- When a **service is ordered**, stock is decremented.
- When a **service expires or is deleted**, stock is incremented.

### Disabling Stock Management

To force the interface to ignore all stock management, use the metadata:

| Key               | Value  | Effect                              |
|-------------------|--------|-------------------------------------|
| `disabled_stock`  | `true` | Stock management is disabled        |

## Available Metadata

**Metadata** allows you to add custom options to a product.

Here are the available keys:

| Key                             | Value               | Description                              |
|---------------------------------|---------------------|------------------------------------------|
| `basket_url`                    | Text                | Link to add the product to cart          |
| `is_personalized_product`       | `true`              | Product made on demand                   |
| `basket_title`                  | Text                | Add to cart button title                 |
| `allow_only_as_much_services`   | `active:3` / `all:5`| Limits the number of allowed services    |
| `auto_stock`                    | `true`              | Enables automatic stock management       |
| `disabled_stock`                | `true`              | Disables all stock management            |
| `pinned_label`                  | Text                | Special label visible in store           |
| `max_renewals`                  | Number              | Total number of possible renewals        |

:::tip Remember
Use metadata to refine product behavior without modifying its code or source module.
:::
