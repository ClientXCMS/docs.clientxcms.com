---
translated: true
---
# Bank Transfer

The **Bank Transfer** gateway in **CLIENTXCMS** corresponds to the **traditional bank transfer payment system** that allows your customers to pay for their orders by directly transferring funds from their bank account to yours. <br/>
The objective is clear: **offer a secure payment alternative for customers who prefer traditional transfers, particularly for large amounts**. A well-configured transfer system allows your customers to **pay with confidence** while guaranteeing you receipt of funds.

The Bank Transfer gateway can be fully customized: display name, minimum amount, detailed instructions, bank details, etc.

You can configure the Bank Transfer gateway from:

`Settings` > `Store Settings` > `Bank Transfer`

![Transfer instructions on an invoice](/img/next_gen/settings/store/payment_gateways/bank_transfert/bank_transfert.png)

:::tip Tip
**Bank transfer** is particularly appreciated by businesses and for large amounts, as it offers **maximum traceability** and avoids credit card fees.
:::

## Why offer bank transfer?

The Bank Transfer gateway is a traditional but essential payment method for your store. It concretely represents a direct and secure payment method, without a payment intermediary.

Offering bank transfer allows you to:

* Attract customers who prefer traditional bank payments
* Avoid transaction fees from online gateways
* Secure payments for large amounts
* Meet the needs of businesses and administrations
* Offer an alternative in case of problems with other gateways

:::tip Tip
Bank transfer is like a **digital check** 🏛️ — it reassures by its simplicity and security, particularly for corporate clients or large purchases.
:::

## System Operation

### Payment Process

Payment by bank transfer follows a manual multi-step process:

1. **Payment Method Selection**: The customer chooses "Bank Transfer" during checkout
2. **Invoice Generation**: An invoice with bank details is created
3. **Instructions Display**: The customer receives all necessary information
4. **Transfer Execution**: The customer makes the transfer from their bank
5. **Proof Sending**: The customer sends their transfer proof (optional)
6. **Manual Validation**: You confirm receipt of payment
7. **Service Activation**: The order is processed and delivered

### Transfer Characteristics

| Characteristic        | Description                                        |
|-----------------------|----------------------------------------------------|
| **Processing Time**   | 1 to 3 business days depending on banks            |
| **Maximum Security**  | Direct transfer between bank accounts              |
| **Complete Traceability** | Unique reference for each transaction         |
| **No Limit**          | Large amounts accepted                             |

## Gateway Configuration

### Essential Parameters

**Gateway Name** | (text)<br />

Use a clear name like "Bank Transfer" or "Wire Transfer" for immediate identification.

**Minimum Amount** | (amount)<br />

Set an appropriate minimum amount. Many hosts configure a minimum of €50 or €100 to make this method cost-effective.

**Status** | (dropdown menu)<br />

Keep the gateway on **"Active"** status if you wish to offer this option to all your customers.

**Payment Instructions** | (rich text)<br />

Write clear and complete instructions that will appear on the invoice. Include:
- Your complete bank details (IBAN, BIC)
- The reference to mention (invoice number)
- Expected processing time
- Your contact details for questions

:::info Recommended Configuration
To optimize bank transfer use:
- **Name**: "Bank Transfer"
- **Minimum Amount**: €50 or more depending on your activity
- **Status**: Active
- **Instructions**: Complete and detailed
:::

### Payment Instructions Example

```
Bank Details:
IBAN: FR76 1234 5678 9012 3456 7890 123
BIC: ABCDFRPP
Account Holder: Your Company

Instructions:
1. Make the transfer for the exact invoice amount
2. Imperatively mention the reference: [INVOICE_NUMBER]
3. Processing takes 1-3 business days
4. Your service will be activated upon payment receipt

Questions? Contact us at accounting@your-domain.com
```

## Customer Interface

### Display on Invoice

When a customer chooses bank transfer, all necessary information is clearly displayed on their invoice:

![Transfer instructions display](/img/next_gen/settings/store/payment_gateways/bank_transfert/bank_transfert.png)

This clear presentation guides the customer through their payment process.

### Displayed Information

The invoice automatically contains:
- **Complete bank details**
- **Exact amount to transfer**
- **Unique reference to mention**
- **Detailed instructions**
- **Processing times**

## Administrative Management

### Payment Tracking

As an administrator, you must:

1. **Regularly monitor** your bank accounts
2. **Match** received transfers with pending invoices
3. **Manually validate** each payment in the system
4. **Activate** corresponding services

### Validation Process

To validate a transfer payment:

1. Identify the transfer received in your account
2. Find the corresponding invoice using the reference
3. Mark the invoice as **"Paid"** in administration
4. The system automatically activates services

:::tip Advice
Implement a **daily routine** for checking received transfers to minimize service activation delays.
:::

## Advantages and Disadvantages

### Advantages

| Advantage                | Description                                        |
|-------------------------|----------------------------------------------------|
| **No Transaction Fees** | Savings on commissions                             |
| **Maximum Security**    | Direct transfer between banks                      |
| **Large Amounts**       | No payment limit                                   |
| **Traceability**        | Official bank proof                                |

### Disadvantages

| Disadvantage            | Description                                        |
|-------------------------|----------------------------------------------------|
| **Processing Time**     | 1 to 3 business days                               |
| **Manual Management**   | Requires administrative monitoring                 |
| **No Automation**       | Manual validation required                         |
| **Abandonment Risk**    | Longer process than instant payments               |

## Best Practices

### Optimal Configuration

* **Complete Instructions**: Leave no ambiguity
* **Up-to-date Details**: Regularly check your bank information
* **Unique Reference**: Use the invoice number as reference
* **Clear Deadlines**: Inform about processing times

### Daily Management

* **Regular verification** of received transfers
* **Quick processing** of payment validations
* **Proactive communication** with customers in case of delay
* **Archiving** of received transfer proofs

### Customer Communication

* **Confirmation email** upon transfer receipt
* **Notifications** of service activation
* **Responsive support** for any questions about the process
* **Dedicated FAQ** for transfer payments

:::warning Important
Make sure your **bank details are always accurate** in the configuration. An error can cause significant delays or lost transfers.
:::

:::tip Remember
Bank transfer is an **essential complementary payment method**, particularly for large amounts and professional clientele. Its manual management is offset by the absence of fees and maximum security.
:::
