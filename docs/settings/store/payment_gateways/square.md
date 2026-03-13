---
translated: true
sidebar_position: 7
---

# Square

The **Square** gateway allows you to accept credit card payments via the Square platform.

You can manage payment gateways from:

`Settings` > `Store Settings` > `Square`

![Square configuration](/img/next_gen/settings/store/payment_gateways/square/config.png)

## Retrieving Your Keys

To configure Square, you need to retrieve your credentials from the Square Developer Portal:

1. Log in to the [Square Developer Portal](https://developer.squareup.com/).
2. Create a new **Application** or select an existing one.
3. In the left menu, go to **Credentials**.
4. Retrieve your **Application ID** and **Access Token**.

:::info Environment
Ensure you are using the credentials that match your operating mode (**Sandbox** for testing or **Production** for real payments).
:::

## System Operation

### Payment Process

1. **Payment Method Selection**: The customer chooses "Square" during checkout.
2. **Payment Entry**: The customer enters their card details securely.
3. **Transaction Validation**: Square processes the transaction and returns a confirmation.
4. **Automatic Return**: The customer is redirected back to your store.
5. **Validation**: The order is processed immediately upon successful payment.

## Gateway Configuration

### Essential Parameters

**Gateway Name** | (text)<br />
Use "Credit Card" or "Square" for your customers.

**Minimum Amount** | (amount)<br />
Define the minimum amount required for this gateway.

**Application ID** | (text)<br />
The unique identifier for your Square application.

**Access Token** | (text)<br />
The token used to authenticate API requests to Square.

**Status** | (dropdown menu)<br />
Set to **"Active"** to enable the gateway.

**Operating Mode** | (Sandbox/Live)<br />
- **Sandbox**: For testing with fictitious transactions.
- **Live**: For real transactions.
