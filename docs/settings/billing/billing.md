---
sidebar_position: 3
translated: true
---

# Billing

In **CLIENTXCMS**, **billing** configuration is the pillar of your commercial activity. <br/>
The goal is essential: **master all financial aspects of your store** to ensure **perfect legal compliance** and **optimal revenue management**. A well-thought-out billing configuration simplifies accounting, improves customer relationships, and protects you legally.

Billing automatically manages all financial aspects: invoice generation, tax calculation, currency management, and regulatory compliance.

You can manage billing from:

`Settings` > `Billing` > `Billing`

:::tip Tip
Well-configured billing is **the foundation of trust** with your clients and your legal compliance.
Take the time to properly configure each option according to your legal and commercial context.
:::

## Why Properly Configure Billing?

Automated billing is crucial for:

* **Meeting legal obligations** regarding VAT and invoicing
* **Automating generation** of invoices and accounting management
* **Improving customer experience** with clear and professional invoices
* **Simplifying your accounting** and facilitating tax declarations

:::tip Tip
It's like having a built-in accountant working 24/7 📊 — precise, reliable, and always compliant with regulations.
:::

## Basic Configuration

### Primary Currency

**Currency** | (dropdown menu)<br />
The primary currency of your store, used by default for all prices and invoices.
Choose from a list of international currencies (EUR, USD, GBP, etc.).

:::info Note
You can define specific currencies per product later for an international store.
:::

### Business Address

**Client area address** | (text area)<br />
Your company's legal address that will appear on all invoices.
This information is mandatory for legal compliance.

![Address display on invoices](/img/next_gen/settings/store/billing/address.png)

Include:
- Company name
- Full address
- Postal code and city
- Country
- SIRET/VAT number if applicable

## Tax Configuration

### Tax Mode

CLIENTXCMS offers two price management modes:

**Exclusive** | Tax-exclusive mode<br />
Prices displayed in the store **do not include** VAT.
Tax is added during final cart calculation.

**Inclusive** | Tax-inclusive mode<br />
Displayed prices already include VAT.
The displayed price is the final price paid by the customer.

:::tip Advice
**Inclusive** mode is generally preferred for B2C as it avoids surprises for customers, while **exclusive** mode is common in B2B.
:::

### VAT Management

**Enable VAT** | (switch)<br />
Enables or disables VAT management on your store.

**Webhook URL**: URL of your endpoint to receive payment notifications (POST JSON). Use an HTTPS URL if possible.

- If the provided URL is a Discord webhook (e.g., https://discord.com/api/webhooks/xxxxx), notifications will automatically appear as embeds (screenshot above).
- If you use a custom webhook, CLIENTXCMS will send an HTTP POST request with a structured JSON payload. Example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="checkout_completed" label="Order paid">


```json
{
    "payload": {
        "action": "checkout_completed",
        "_url": "https://example.com/admin/invoices/42",
        "invoiceurl": "https://example.com/admin/invoices/42",
        "customer_url": "https://example.com/admin/customers/1",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "basketid": "BASK-123",
        "total": "199.99",
        "currency": "€",
        "gatewayname": "Stripe",
        "productnames": "VPS Pro, Advanced Backup"
    }
}
```
	</TabItem>


</Tabs>

Useful notes:

- `action`: identifies the event sent (`checkout_completed`, `service_upgraded`, etc.).
- `_url`, `invoiceurl` or `service_url`: internal links to the relevant invoice or service.
- Values are sent as strings. Adapt conversion (amount, currency...) according to your integration.

**Default VAT rate** | (percentage)<br />
The rate applied by default if no specific rate is defined.

**Minimum days to force renewal with an upgrade**: This forces service renewal with an upgrade if the remaining days are less than this number of days.
