---
translated: true
sidebar_position: 8
---

# SumUp

The **SumUp** gateway allows you to accept credit card payments via the SumUp platform.

You can manage payment gateways from:

`Settings` > `Store Settings` > `SumUp`

![SumUp configuration](/img/next_gen/settings/store/payment_gateways/sumup/config.png)

## Retrieving Your Keys

To configure SumUp, you need to retrieve your credentials from the SumUp Dashboard:

1. Log in to your **SumUp Dashboard**.
2. Go to **For Developers** or **API Keys**.
3. Create a new **Client ID** and **Client Secret**.

:::info Security
Keep your **Client Secret** confidential. It allows your system to securely communicate with SumUp to process payments.
:::

## System Operation

### Payment Process

1. **Payment Method Selection**: The customer chooses "SumUp" during checkout.
2. **Redirect to SumUp**: The customer is directed to SumUp's secure payment interface.
3. **Payment Confirmation**: The customer enters their card details and confirms the transaction.
4. **Automatic Validation**: SumUp notifies your system, and the order is automatically validated.
5. **Return**: The customer returns to your store upon completion.

## Gateway Configuration

### Essential Parameters

**Gateway Name** | (text)<br />
Use "Credit Card" or "SumUp" for your customers.

**Minimum Amount** | (amount)<br />
Define the minimum amount required for this gateway.

**Client ID** | (text)<br />
The public identifier for your SumUp integration.

**Client Secret** | (text)<br />
The secret key used for authentication.

**Status** | (dropdown menu)<br />
Set to **"Active"** to enable the gateway.

**Operating Mode** | (Test/Live)<br />
- **Test Mode**: For testing purposes.
- **Live Mode**: For real transactions.
 Riverside
