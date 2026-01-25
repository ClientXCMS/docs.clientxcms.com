---
translated: true
---
import DocCardList from '@theme/DocCardList';

# Payment Gateways

In **CLIENTXCMS**, a **payment gateway** corresponds to a **financial transaction processing system** that you offer to your customers in your store.
The objective is clear: **offer secure, diverse payment methods adapted to your clientele**. Good payment gateway configuration allows your customers to **easily pay for their orders** while guaranteeing transaction security.

Each gateway can be fully customized: display name, minimum amount, visibility status, connection parameters, etc.

You can manage payment gateways from:

`Settings` > `Store Settings` > `Payment Gateways`

![Payment gateway configuration](/img/next_gen/settings/store/payment_gateways/balance/config.png)

:::tip Tip
A **diversity of payment methods** significantly increases your conversion rate. The more options you offer your customers, the more likely they are to complete their purchase.
:::

## Why use multiple payment gateways?

Payment gateways are essential for your store's proper functioning. They concretely represent the means your customers have to pay you — whether by credit card, PayPal, bank transfer, or store credit.

Configuring multiple gateways allows you to:

* Meet the payment preferences of all your customers
* Reduce cart abandonment by offering alternatives
* Secure your transactions with reliable systems
* Optimize your transaction costs based on amounts

:::tip Tip
It's like having **multiple checkouts in a store** 🏪 — some customers prefer to pay cash, others by card. The more choices you offer, the more you retain your clientele.
:::

## Available Gateways

CLIENTXCMS natively supports several popular payment gateways:

<DocCardList />

### Gateway Types

Gateways fall into several categories:

| Gateway Type         | Description                                 | Examples          |
| -------------------- | ------------------------------------------- | ----------------- |
| **Credit Cards**     | Direct payment by credit/debit card         | Stripe, Stancer   |
| **Wallets**          | Online payment solutions                    | PayPal            |
| **Transfers**        | Traditional bank transfers                  | Bank Transfer     |
| **Store Credit**     | Internal balance system                     | Balance           |

## Gateway Configuration

### Accessing Configuration

To configure a payment gateway:

1. Go to `Settings` > `Store Settings`
2. Select the **"Payment Gateways"** section
3. Choose the gateway you want to configure

### Common Parameters

Each gateway has identical basic settings:

**Name** | (text)<br />

The gateway display name as it will appear to your customers during payment.

**Minimum Amount** | (amount)<br />

Minimum amount required for this gateway to be offered to customers.

**Status** | (dropdown menu)<br />

Defines the gateway's visibility and availability:

* **Active**: Visible and usable by all customers
* **Unlisted**: Accessible only to administrators for testing
* **Hidden**: Completely invisible to everyone

:::info Information
Some gateways require **specific connection parameters** (API keys, merchant IDs, etc.). Consult each gateway's documentation for required fields.
:::

### Configuration Example

Here's a configuration example for the **Balance** (store credit) gateway:

![Balance configuration example](/img/next_gen/settings/store/payment_gateways/balance/config.png)

This gateway allows customers to use their store credit to pay for their orders.

## Gateway Status

The **status** determines each gateway's visibility and accessibility:

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

<div style={{ flex: 1 }}>

| Status           | Visibility                               |
| ---------------- | ---------------------------------------- |
| **Active**       | Visible and usable by everyone           |
| **Unlisted**     | Accessible to administrators only        |
| **Hidden**       | Completely invisible                     |

</div>

<div style={{ flex: 1, textAlign: 'center' }}>

:::tip Advice
Use the **"Unlisted"** status to test a new gateway before making it public.

:::

</div>

</div>

## Invoice Management

### Changing an Invoice's Gateway

You can change the payment method for an existing invoice:

1. Go to the **"Invoices"** section
2. Select the invoice to modify
3. Change the payment gateway in the invoice details
4. Save the modifications

![Gateway modification on an invoice](/img/next_gen/settings/store/payment_gateways/invoice.png)

:::warning Warning
Modifying an invoice's gateway may affect the ongoing payment process. Make sure the customer is informed.
:::

## Advanced Configuration

### Minimum Amounts

Each gateway can have a different **minimum amount**:

- Useful to avoid fees on small transactions
- Helps direct customers to the most cost-effective gateways
- Improves user experience by hiding irrelevant options

### Currency Management

CLIENTXCMS automatically handles:

- **Currency conversion** if necessary
- **Amount display** in the customer's currency
- **Exchange rates** in real-time

## Payment Security

### Best Practices

* **Use only PCI-DSS certified gateways**
* **Enable 3D Secure verification** when available
* **Regularly monitor** suspicious transactions
* **Keep** configurations and API keys up to date

### Compliance

All integrated gateways comply with:

- **PCI-DSS** standards for card security
- **GDPR** regulation for data protection
- **PSD2** requirements for strong authentication.

## Configuration by Gateway

Each gateway has its own detailed documentation:

* **Specific configuration** according to the provider
* **Required connection parameters**
* **Available advanced features**
* **Common troubleshooting**

Consult each gateway's documentation for detailed configuration instructions.

:::tip Remember
A **careful configuration of your payment gateways** is crucial to maximize your conversions. Regularly test your payment methods and diversify your options according to your clientele.
:::
