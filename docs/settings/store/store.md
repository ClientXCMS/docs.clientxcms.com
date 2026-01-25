---
translated: true
sidebar_position: 0
---
# Store

The **store** is the commercial heart of **CLIENTXCMS**. This is where your customers discover your services, compare your offers, and place orders.
The objective is clear: **create a smooth and professional purchasing experience** that transforms your visitors into satisfied customers.

The store is a complete ecosystem that brings together several essential elements: products, groups, coupons, payment methods, and billing.

You can manage your store from:

`Settings` > `Store Settings`

![Store settings access](/img/next_gen/settings/store/products/settings.png)

:::tip Tip
A well-organized store is a store that converts. Take the time to structure your offers, write clear descriptions, and configure payment methods adapted to your clientele.
:::

## Store Overview

### Store Architecture

The ClientXCMS store is built around several key components:

* **[Products](./products)**: The services you offer for sale (hosting, VPS, licenses, etc.)
* **[Groups](./groupes)**: The categories that organize your products logically
* **[Coupons](./coupon)**: Promotional codes to boost your sales
* **[Payment Methods](./payment_gateways/payment_gateways.md)**: Gateways to receive payments
* **[Billing](../billing/billing.md)**: Invoice management and accounting settings

### Typical Customer Journey

1. **Discovery**: The customer visits your store at `/store`
2. **Navigation**: They explore the different product groups
3. **Selection**: They choose a product and configure its options
4. **Cart**: They add the product to the cart and possibly apply a coupon
5. **Payment**: They pay for their order via their chosen payment method
6. **Delivery**: The service is automatically provisioned after payment validation

## User Interface

### Customer-Side View

The store is publicly accessible at:

`https://your-site.com/store`

The interface presents:
- An overview of available product groups
- An intuitive category navigation system
- Detailed product pages with prices and options
- A persistent cart during the session
- A simplified ordering process

![Customer-side store view](/img/next_gen/settings/store/groups/view_group.png)

### Administrator View

The administration interface allows you to:
- Manage all products and groups
- Track orders and payments
- Configure promotions and discounts
- Analyze commercial performance
- Customize the store appearance

## Initial Configuration

### Setup Steps

To configure your store, follow these steps in order:

1. **Configure billing**

   - Define legal information
   - Set up the invoice prefix
   - Configure terms and conditions
2. **Create product groups**

   - Organize your catalog structure
   - Define main categories
   - Add descriptions and images
3. **Add products**

   - Create your service offers
   - Define prices and billing cycles
   - Configure technical options
4. **Activate payment methods**

   - Configure at least one gateway
   - Test transactions
   - Verify webhooks
5. **Create promotions (optional)**

   - Define discount coupons
   - Plan marketing campaigns

:::warning Important
Make sure you have configured at least one active payment method before opening your store to the public. Without this, your customers will not be able to complete their orders.
:::

## Order Management

### Order Lifecycle

An order goes through several states:

| State              | Description                                     |
| ------------------ | ----------------------------------------------- |
| **Pending**        | Order created, payment not received             |
| **Paid**           | Payment validated, service being delivered      |
| **Active**         | Service delivered and operational               |
| **Suspended**      | Service temporarily disabled                    |
| **Expired**        | Service reached end of term                     |
| **Cancelled**      | Order cancelled before payment                  |

### Automation

ClientXCMS automates several processes:
- Service creation after payment
- Sending confirmation emails
- Invoice generation
- Renewal reminders
- Suspension in case of non-payment

## Integrations and Extensions

### Provisioning Modules

The store integrates with many modules:
- **Pterodactyl**: Game server hosting
- **Proxmox**: VPS creation
- **Plesk**: Managed web hosting
- **ProxmoxVE**: Advanced virtualization
- And many more...

### Payment Gateways

Several options are available:
- **PayPal**: Standard and Express Checkout
- **Stripe**: Credit cards and wallets
- **Bank Transfer**: Manual payments
- **Customer Balance**: Prepaid credit
- **Stancer**: European solution

:::info Remember

The ClientXCMS store is designed to grow with your business. Start simple, then gradually enrich your catalog and features according to your customers' needs.
:::

## Additional Resources

To learn more about configuring your store, see:

import DocCardList from '@theme/DocCardList';

<DocCardList />
