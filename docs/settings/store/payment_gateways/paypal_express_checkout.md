---
translated: true
---
# PayPal Express Checkout

The **PayPal Express Checkout** gateway in **CLIENTXCMS** corresponds to the **modern and optimized version of PayPal integration** using the REST API to offer a smooth and secure payment experience to your customers. <br/>
The objective is clear: **offer the most advanced PayPal solution with an optimized user interface and extended features**. A well-configured PayPal Express Checkout system allows your customers to **pay in a few clicks with a premium experience** while giving you more control and flexibility.

The PayPal Express Checkout gateway can be fully customized: display name, minimum amount, sandbox/live mode, API credentials, etc.

You can configure PayPal Express Checkout from:

`Settings` > `Store Settings` > `PayPal Express Checkout`

![PayPal Express Checkout configuration](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/config.png)

:::tip Tip
**PayPal Express Checkout** offers a **superior user experience to standard PayPal** with reduced loading times and a more modern interface that improves conversions.
:::

## Why choose PayPal Express Checkout?

PayPal Express Checkout represents the modern evolution of PayPal, using the latest REST API technologies for a more performant and flexible integration than classic PayPal.

Adopting PayPal Express Checkout allows you to:

* Offer the most modern and fast PayPal experience
* Benefit from an optimized user interface
* Access the latest PayPal features
* Enjoy a more stable and secure integration
* Reduce cart abandonment thanks to a smoother process
* Get more detailed reports and analytics

:::tip Tip
PayPal Express Checkout is like the **premium version** of PayPal 🚀 — same trust, but with cutting-edge technology that boosts your conversion performance.
:::

## System Operation

### Optimized Payment Process

Payment via PayPal Express Checkout follows a modern and fast process:

1. **Express Checkout Selection**: The customer chooses "PayPal Express Checkout"
2. **Ultra-Fast Redirect**: Optimized PayPal interface that loads instantly
3. **Smooth Authentication**: PayPal login or simplified card entry
4. **Express Validation**: One-click confirmation with detailed preview
5. **Instant Return**: Immediate redirect to your store
6. **API Notification**: Secure confirmation via REST API
7. **Automatic Processing**: Instant validation and activation
8. **Premium Confirmation**: Enhanced customer notifications

### Technical Advantages of Express Checkout

| Advantage                  | Description                                        |
|---------------------------|----------------------------------------------------|
| **Superior Performance**   | REST API faster than the old system               |
| **Modern Interface**       | PayPal design optimized for mobile and desktop    |
| **Enhanced Security**      | Latest generation security protocols              |
| **Maximum Reliability**    | Failover system and high availability             |

## Gateway Configuration

### Essential Parameters

**Gateway Name** | (text)<br />

Use "PayPal Express" or "PayPal" for clear identification of this premium version.

**Minimum Amount** | (amount)<br />

No PayPal restriction. Configure €0.50 to accept all amounts.

**Status** | (dropdown menu)<br />

Keep on **"Active"** to offer the best PayPal experience to your customers.

**Operating Mode** | (Sandbox/Live)<br />

- **Sandbox**: Tests with development credentials
- **Live**: Production with real credentials

:::info Recommended Configuration
For PayPal Express Checkout:
- **Name**: "PayPal Express" or "PayPal"
- **Minimum Amount**: €0.50
- **Status**: Active
- **Mode**: Live (after complete testing)
:::

## API Credentials Retrieval

### Access to PayPal Developer Space

To configure PayPal Express Checkout, you need to retrieve your REST API credentials:

1. **Log in** to your PayPal Business account
2. Go to the PayPal **developer space**
3. Select **"My applications and credentials"**
4. Choose **Live** or **Sandbox** according to your needs

![Access to REST applications](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/app_rest.png)

### Creating a REST Application

5. Click **"Create an application"**
6. Configure your application:
   - **Name**: Your store name
   - **Type**: Merchant
   - **Features**: Express Checkout

![REST application creation](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/create_app.png)

### Retrieving Keys

7. Once created, retrieve your credentials:
   - **Client ID**: Public identifier of your application
   - **Client Secret**: Secret key (keep confidential)

![Credentials retrieval](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/keys.png)

### Configuration in CLIENTXCMS

8. Copy these credentials into the corresponding fields:

![Key configuration in CLIENTXCMS](/img/next_gen/settings/store/payment_gateways/paypal_express_checkout/keys2.png)

9. **Select the mode** (Sandbox/Live) accordingly
10. **Save** the configuration

:::warning Security
Keep your **Client Secret** confidential. Never share it and store it securely. Renew it regularly to maintain security.
:::

## Operating Modes

### Sandbox Mode (Test)

Sandbox mode allows you to:
- **Test the integration** without real transactions
- **Validate the complete process** of payment
- **Simulate different scenarios** (success, failure, refunds)
- **Train your team** without financial risk

**Required Configuration**:
- PayPal developer account
- Sandbox credentials (test Client ID and Secret)

### Live Mode (Production)

Live mode activates:
- **Real payments** with real transactions
- **Full access** to PayPal tools
- **Detailed reports** and analytics
- **PayPal seller protection**

**Required Configuration**:
- Verified PayPal Business account
- Live credentials (production Client ID and Secret)

:::tip Advice
Test **exhaustively in Sandbox mode** before going Live. Check all scenarios: successful payments, failed, refunds.
:::

## Advanced Management

### REST API Advantages

Express Checkout integration via REST API offers:

| Feature                   | Advantage                                           |
|---------------------------|-----------------------------------------------------|
| **Advanced Webhooks**     | More reliable real-time notifications               |
| **Error Management**      | Detailed and exploitable error messages             |
| **Enhanced Reports**      | Advanced analytics and metrics                      |
| **Customization**         | More experience customization options               |

### Monitoring and Analytics

With PayPal Express Checkout, you benefit from:
- **Enhanced dashboards** in your PayPal account
- **Detailed conversion reports**
- **Cart abandonment analysis**
- **Real-time performance metrics**

## Differences with Standard PayPal

### Technical Comparison

| Aspect                    | PayPal Standard | PayPal Express Checkout |
|---------------------------|----------------|-------------------------|
| **Technology**            | Classic IPN    | Modern REST API         |
| **Performance**           | Standard       | Optimized               |
| **User Interface**        | Basic          | Premium                 |
| **Features**              | Limited        | Extended                |
| **Maintenance**           | Manual         | Automated               |

### When to Choose Express Checkout?

Prefer Express Checkout if:
- You want the **best user experience**
- You're looking for **optimal performance**
- You want access to the **latest features**
- You want **detailed reports**

## Troubleshooting

### Common Problems

| Problem                        | Solution                                    |
|---------------------------------|---------------------------------------------|
| **Invalid credentials**        | Verify Client ID and Secret                |
| **Incorrect mode**             | Verify Sandbox/Live correspondence         |
| **Webhooks not received**      | Check notification configuration           |
| **Unvalidated payments**       | Check API logs                             |

### Diagnosis

To diagnose a problem:
1. **Check logs** CLIENTXCMS
2. **Consult PayPal reports**
3. **Test in Sandbox mode** if necessary
4. **Contact PayPal developer support**

## Security and Best Practices

### Integration Security

* **Secure storage** of API credentials
* **Systematic validation** of webhooks
* **Monitoring** of suspicious transactions
* **Regular update** of credentials

### Performance Optimization

* **Smart caching** of authentication tokens
* **Proactive error management**
* **Response time monitoring**
* **Regular integration testing**

:::tip Remember
PayPal Express Checkout represents the **future of PayPal integration** with superior performance and a premium user experience. It's the recommended option to maximize your PayPal conversions.
:::
