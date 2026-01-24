---
translated: true
sidebar_position: 5
---

# Mollie (Card Payment)

The Mollie payment gateway allows you to accept payments via credit cards.

You can manage payment gateways from:

`Settings` > `Store Settings` > `Mollie`

![Payment gateway configuration](/img/next_gen/settings/store/payment_gateways/mollie/config.png)

## Live Mode vs Test Mode
Mollie's live mode allows you to accept real payments (used in production).
Test mode allows you to issue test payments without spending real money (used in development or for testing).

## Retrieving Your Keys
1. Log in to your **Mollie dashboard**.
2. Go to **Developers > API Keys**.
3. Click Copy to use the API keys.

Then retrieve your live key and test key
![img](/img/next_gen/settings/store/payment_gateways/mollie/keys.png)

## System Operation

### Payment Process

Payment via Mollie follows a multi-step process:
1. **Payment Method Selection**: The customer chooses "Mollie" during checkout
2. **Redirect to Mollie**: The customer is directed to Mollie payment servers
3. **Payment Validation**: The customer confirms the transaction on Mollie
4. **Automatic Return**: Redirect to your store
5. **Notification**: Mollie confirms the payment to your system
6. **Automatic Validation**: The order is immediately processed
7. **Customer Confirmation**: Confirmation email and service activation

## Gateway Configuration
### Essential Parameters
**Gateway Name** | (text)<br />
Simply use "Mollie" for immediate recognition by your customers.

**Minimum Amount** | (amount)<br />
Mollie imposes no minimum amount. You can configure €0.50 to accept all amounts.


**Mollie API Key** | (text)<br />
The secret API key that Mollie provides to authenticate transactions.

**Status** | (dropdown menu)<br />
Keep the gateway on **"Active"** status to maximize conversions.

**Operating Mode** | (test/live)<br />
- **Test mode**: For your tests with fictitious transactions
- **Live mode**: For real transactions with your customers
