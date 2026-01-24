---
sidebar_position: 6
translated: true
---
# Payment Configuration

You can configure multiple payment methods for your client area. The list is available [here](../settings/store/payment_gateways/).

You can configure your payment methods by going to the `Settings` menu, then the `Store Settings` section, and selecting the payment method you want to configure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="PayPalExpressCheckout" label="PayPal Express Checkout">
The configuration process for PayPal Express Checkout is available [here](/settings/store/payment_gateways/paypal_express_checkout).
</TabItem>
<TabItem value="Stripe" label="Stripe">
The configuration process for Stripe is available [here](/settings/store/payment_gateways/stripe).
</TabItem>
<TabItem value="Balance" label="Balance">
You can add balance to your customer account from the customer profile.
</TabItem>
<TabItem value="PayPal" label="PayPal">
The configuration process for PayPal is available [here](/settings/store/payment_gateways/paypal).
</TabItem>
<TabItem value="Stancer" label="Stancer">
The configuration process for Stancer is available [here](/settings/store/payment_gateways/stancer).
</TabItem>
</Tabs>

## Invoice Customization

You can modify the billing address or invoice terms and conditions by going to the billing settings in `Settings` > `Billing` > `Billing`.

You can also change the invoice prefix by setting a prefix specific to your business. We recommend using a short prefix of 3 to 5 characters. The prefix is used to generate the unique invoice identifier. For example: `INV-2024-01-001` for the first invoice of 2024. This makes it easier to keep track of invoices.

## Disable VAT

You can disable VAT for your business by going to the billing settings in `Settings` > `Billing` > `Billing`. You can also change the default VAT rate according to your country or toggle price display with or without VAT.

:::info
Please note that all prices configured in your store must be tax-exclusive. VAT will be added to the price at checkout. If you want to display prices including VAT, you can set the display price as tax-inclusive.
:::

## Terms and Conditions

You can set terms and conditions for your store by going to the billing settings in `Settings` > `Billing` > `Billing`. The terms and conditions will be displayed on the payment page for users to accept before confirming their order.
