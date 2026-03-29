---
translated: true
sidebar_position: 6
---

# Binance Pay

The **Binance Pay** gateway allows you to accept cryptocurrency payments from Binance users.

You can manage payment gateways from:

`Settings` > `Store Settings` > `Binance Pay`

![Binance Pay configuration](/img/next_gen/settings/store/payment_gateways/binance/config.png)

## Retrieving Your Keys

To configure Binance Pay, you need to retrieve your credentials from the Binance Merchant Portal:

1. Log in to your **Binance Merchant account**.
2. Go to **Developers > API Management**.
3. Create a new API key for your store.
4. Securely copy your **API Key**, **Secret Key**, and **Merchant ID**.

:::warning Important
The **Secret Key** is only displayed once when created. Make sure to save it in a secure location.
:::

## System Operation

### Payment Process

1. **Payment Method Selection**: The customer chooses "Binance Pay" during checkout.
2. **Redirect to Binance**: The customer is directed to Binance's secure payment page.
3. **Payment Validation**: The customer completes the transaction using their Binance account or QR code.
4. **Notification**: Binance sends a notification to your system via webhook.
5. **Automatic Validation**: The order is automatically processed upon confirmation.

## Gateway Configuration

### Essential Parameters

**Gateway Name** | (text)<br />
Use "Binance Pay" or "Crypto Payment" for your customers.

**Minimum Amount** | (amount)<br />
Define the minimum amount required for this payment method.

**Merchant ID** | (text)<br />
Your unique Binance Merchant identifier.

**API Key** | (text)<br />
The public API key provided by Binance.

**Secret Key** | (text)<br />
The secret key used to sign requests and secure transactions.

**Status** | (dropdown menu)<br />
Set to **"Active"** to enable the gateway for your customers.
