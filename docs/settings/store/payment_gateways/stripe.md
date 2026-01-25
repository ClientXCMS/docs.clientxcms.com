---
translated: true
---
# Stripe (Card Payments)

The **Stripe** gateway in **CLIENTXCMS** corresponds to the **integration of the world-leading American payment solution** that allows your customers to pay for their orders with their credit card via one of the most advanced platforms on the market. <br/>
The objective is clear: **offer the most sophisticated card payment experience with advanced management tools and proven reliability**. A well-configured Stripe system allows your customers to **pay with exceptional fluidity** while giving you access to the best analytics and management tools on the market.

The Stripe gateway can be fully customized: display name, minimum amount, test/live mode, API keys, webhooks, etc.

You can configure Stripe from:

`Settings` > `Store Settings` > `Stripe`

![Stripe gateway configuration](/img/next_gen/settings/store/payment_gateways/stripe/config.png)

:::tip Tip
**Stripe** is considered the **Rolls-Royce** of payment gateways with cutting-edge technology, exceptional tools, and an unmatched global reputation.
:::

## Why choose Stripe?

Stripe represents technological excellence in online payments, used by millions of businesses worldwide, from startups to the largest international corporations.

Integrating Stripe allows you to:

* Benefit from the world's most advanced payment technology
* Access the best analytics and reporting tools on the market
* Enjoy an exceptionally smooth user interface
* Use advanced features (subscriptions, deferred payments, etc.)
* Guarantee maximum security with the latest innovations
* Rely on an ultra-reliable global infrastructure

:::tip Tip
Stripe is like the **Ferrari of payments** 🏎️ — maximum performance, cutting-edge technology, and international prestige. It's the choice of businesses that want no compromise on quality.
:::

## System Operation

### Cutting-Edge Payment Process

Payment via Stripe follows an ultra-optimized process:

1. **Stripe Selection**: The customer chooses "Card Payment" (Stripe)
2. **Premium Interface**: Redirect to ultra-modern Stripe interface
3. **Optimized Entry**: Smart form with auto-completion
4. **Instant Validation**: Real-time data verification
5. **Smart 3D Secure**: Adaptive authentication based on risk
6. **Ultra-Fast Confirmation**: Instant payment processing
7. **Advanced Webhooks**: Secure and detailed notifications
8. **Seamless Return**: Perfect integration with your store

### Stripe Technical Excellence

| Advantage                    | Description                                        |
|-----------------------------|----------------------------------------------------|
| **Global Performance**      | Infrastructure distributed worldwide               |
| **AI Anti-Fraud**           | Advanced machine learning to detect fraud          |
| **Adaptive Interface**      | UX that adapts according to device and context     |
| **99.99% Reliability**      | Exceptional uptime with maximum redundancy         |

## Gateway Configuration

### Essential Parameters

**Gateway Name** | (text)<br />

Use "Secure Payment" or "Credit Card" to highlight Stripe's security.

**Minimum Amount** | (amount)<br />

Stripe imposes no minimum. Configure according to your strategy (€0 or €1 minimum).

**Status** | (dropdown menu)<br />

Keep on **"Active"** to offer the best payment experience.

**Operating Mode** | (Test/Live)<br />

- **Test Mode**: Tests with Stripe sandbox environment
- **Live Mode**: Production with real transactions

:::info Recommended Configuration
For Stripe:
- **Name**: "Secure Payment" or "Credit Card"
- **Minimum Amount**: €1
- **Status**: Active
- **Mode**: Live (after complete testing)
:::

## API Credentials Retrieval

### Stripe Dashboard Access

To configure Stripe, you need to retrieve your API keys from your account:

1. **Log in** to your [Stripe dashboard](https://dashboard.stripe.com/)
2. Go to the **"Developers"** section
3. Click on **"API Keys"**

![API Keys section in Stripe](/img/next_gen/settings/store/payment_gateways/stripe/apikeys.png)

### Creating API Keys

4. **Create a new key** if needed:

![Creating a Stripe API key](/img/next_gen/settings/store/payment_gateways/stripe/apikey.png)

### Stripe Key Types

Stripe uses two types of keys to secure integrations:

**Public Key** | (pk_...)<br />
- Used client-side to initiate payments
- Can be safely exposed publicly
- Starts with `pk_test_` (test) or `pk_live_` (live)

**Secret Key** | (sk_...)<br />
- Used server-side for critical operations
- Must remain absolutely confidential
- Starts with `sk_test_` (test) or `sk_live_` (live)

5. **Copy your keys** (public and secret)
6. **Paste them** in the corresponding CLIENTXCMS fields

:::warning Critical Security
The **Stripe secret key** must never be publicly exposed. It gives full access to your account and payments. Store it ultra-securely.
:::

## Webhook Configuration

### Webhook Importance

Stripe webhooks are **essential** to receive real-time payment notifications and guarantee perfect synchronization between Stripe and your store.

### Step-by-Step Configuration

1. In your Stripe dashboard, go to **"Webhooks"**
2. Click **"Add an endpoint"**

![Stripe webhook configuration](/img/next_gen/settings/store/payment_gateways/stripe/webhooks.png)

3. **Configure the endpoint** with the following parameters:

| Parameter           | Value                                    |
|---------------------|-------------------------------------------|
| **Endpoint URL**    | `https://your-domain.com/gateways/stripe/notification` |
| **Description**     | CLIENTXCMS payment notifications         |
| **Listen**          | Payment events                           |
| **API Version**     | 2023-10-16 (or recommended version)      |
| **Events**          | `checkout.session.completed`             |

4. **Retrieve the webhook secret key**:

![Stripe webhook secret](/img/next_gen/settings/store/payment_gateways/stripe/secret.png)

5. **Copy this secret key** into the CLIENTXCMS webhook field

:::info Recommended Events
For a complete integration, also add:
- `payment_intent.succeeded`
- `payment_intent.payment_failed`
- `invoice.payment_succeeded` (for subscriptions)
:::

## Operating Modes

### Test Mode (Sandbox)

Stripe test mode offers a complete environment to:
- **Test all features** without real money
- **Simulate different scenarios** with specialized test cards
- **Validate webhooks** and integrations
- **Train your teams** safely

**Stripe Test Cards**:
- `4242424242424242`: Successful Visa
- `4000000000000002`: Declined card
- `4000002500003155`: 3D Secure authentication required

### Live Mode (Production)

Live mode activates all of Stripe's power:
- **Real payments** with real money
- **Advanced analytics** and detailed reports
- **Professional management tools**
- **Premium Stripe support**

:::tip Advice
Test **exhaustively** all your journeys in test mode before going to production. Stripe offers very advanced simulation tools.
:::

## Advanced Features

### Stripe Dashboard

The Stripe dashboard gives you access to:

| Feature                     | Description                                        |
|-----------------------------|----------------------------------------------------|
| **Real-time Analytics**     | Detailed metrics on your payments                  |
| **Customer Management**     | Integrated customer database                       |
| **Fraud Detection**         | Advanced AI with risk scoring                      |
| **Automatic Reports**       | Accounting and tax exports                         |

### Growth Tools

Stripe offers unique tools:
- **Stripe Radar**: AI-powered anti-fraud protection
- **Stripe Sigma**: Advanced analytics with SQL
- **Stripe Atlas**: International company creation
- **Stripe Capital**: Revenue-based financing

## Security and Compliance

### Security Standards

Stripe meets all the most demanding standards:
- **PCI-DSS Level 1**: Maximum certification
- **SOC 1 and SOC 2**: Compliance audits
- **GDPR Compliant**: European compliance
- **ISO 27001**: IT security

### Protection Technologies

* **AES-256 encryption** for all data
* **TLS 1.2+** for all communications
* **Advanced tokenization** of cards
* **Machine Learning** for fraud detection

## Stripe Pricing

### Pricing Structure

Stripe offers clear pricing:
- **European cards**: 1.4% + €0.25
- **Non-European cards**: 2.9% + €0.25
- **American Express**: Special rates
- **Failed payments**: No fees

### Pricing Advantages

| Advantage                | Description                                        |
|-------------------------|----------------------------------------------------|
| **No fixed fees**       | Only commissions on transactions                   |
| **Volume discounts**    | Reductions based on volume                         |
| **No hidden fees**      | Total pricing transparency                         |
| **Clear billing**       | Detailed fee reports                               |


:::tip Remember
Stripe represents **absolute excellence** in card payments with unmatched technology, exceptional tools, and legendary reliability. It's the premium choice for demanding businesses.
:::
