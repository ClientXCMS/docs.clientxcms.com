---
sidebar_position: 4
translated: true
---
# Invoices
Invoices are used to manage customer payments. They are automatically created when a customer purchases a product or service. You can also create invoices manually.
## Invoice Management
You can view and manage invoices in the "Invoices" section of the administration menu.
![img](/img/next_gen/invoices/admin_index.png)
### Filtering
You can filter invoices by status. Available statuses are:
- **All**: Display all invoices
- **Paid**: Display paid invoices
- **Pending**: Display invoices pending payment
- **Cancelled**: Display cancelled invoices
- **Refunded**: Display refunded invoices
- **Draft**: Display draft invoices
- **Failed**: Display failed invoices
![img](/img/next_gen/invoices/filter.png)
### Search
You can search for an invoice by its unique identifier, customer name, or external invoice ID.

### Bulk Actions
You can perform bulk actions on invoices. Available actions are:
- **Delete**: Delete selected invoices
- **Mark as Paid**: Mark selected invoices as paid
- **Mark as Cancelled**: Mark selected invoices as cancelled
- **Mark as Refunded**: Mark selected invoices as refunded
- **Mark as Failed**: Mark selected invoices as failed

### Export
This feature will be available in future versions.
## Creating and Editing Invoices
When creating an invoice, the invoice is in draft state. You can add products, discounts, and service renewals to the invoice. Once the invoice is ready, you can mark it as pending.

To edit a pending invoice, you can click the "Edit Invoice" button on the invoice page.

Once your changes are made, you can validate the invoice with the "Validate Invoice" button.
### Draft
![img](/img/next_gen/invoices/draft.png)
You can find the list of items, edit or delete them. You can also add items to the invoice.

#### Add an Item
You can add an item to the invoice by selecting a product or a service renewal for the customer.

![img](/img/next_gen/invoices/add_product.png)

You can configure the item by modifying the quantity, unit price, description, and additional data for the item.

#### Add a Discount

If you have configured discounts, you can add them when editing an item.

![img](/img/next_gen/invoices/edit_product.png)

This reduces the invoice amount according to the applied discount.

### Edit Invoice Information
![img](/img/next_gen/invoices/edit.png)

**External ID**: The external identifier of the invoice. This links the invoice to the payment gateway.

**Notes**: Invoice notes. This can be used to add additional information about the invoice. Notes are not visible to the customer.

**Status**: The invoice status. You can change the status by modifying the field.

**Payment Method**: The payment method used for the invoice. (PayPal, Stripe, etc.)

**Payment Date**: The payment date of the invoice. This shows when the invoice was paid.

**Due Date**: The due date of the invoice. This shows when the invoice must be paid.

**Transaction Fees**: The transaction fees for the invoice. This shows how much transaction fees were applied to the invoice by the payment gateway.

**VAT**: The VAT amount of the invoice. This shows how much VAT was applied to the invoice.

**Currency**: The invoice currency. This shows in which currency the invoice was paid.

## Invoice Details
You can view the details of an invoice by clicking the "View" button on the invoices page. This contains a lot of information about the invoice, the customer, and the payments. This provides an overview of the invoice.
![img](/img/next_gen/invoices/show.png)

### Notify Customer

You can notify the customer by email by clicking the "Notify Customer" button. This will send an email to the customer with the invoice details.
This will also send the invoice PDF as an attachment.

### Pay Invoice
![img](/img/next_gen/invoices/pay.png)

If the customer has defined a payment method, you can pay the invoice by clicking the "Pay" button. This will attempt to charge the invoice amount from the customer's payment method.

### Invoice Link
You can copy the invoice link by clicking the clipboard button. This will copy the invoice link to the clipboard.

### Deliver an Invoice

You can deliver the invoice products by clicking the "Deliver" button. This will deliver the invoice products to the customer. This action should be automatic but can be done manually if necessary.

## Available Statuses
Invoices can have several statuses. Available statuses are:
- **Draft**: The invoice is being created
- **Pending**: The invoice is pending payment
- **Paid**: The invoice has been paid
- **Cancelled**: The invoice has been cancelled
- **Refunded**: The invoice has been refunded
- **Failed**: The invoice has failed

## Subscription Principle

CLIENTXCMS uses a subscription system different from payment gateways. Subscriptions are managed by CLIENTXCMS and not by the payment gateway. This allows for more flexible subscription management and independence from the payment gateway, for example for subscription modifications or expiration date changes.

### Process

- The customer purchases a service
- An invoice is created and paid
- The customer adds a payment method to their account
- The customer activates the subscription on their service
- When the billing date arrives according to the expiration date, CLIENTXCMS creates an invoice for the subscription renewal
- CLIENTXCMS attempts to charge the invoice amount from the customer's payment method
- If the payment is successful, the invoice is marked as paid and the service is renewed
- If the payment fails, the customer receives an email informing them of the payment failure
- The payment is retried every day for 7 days (configurable)
- If the payment fails after 7 days, the invoice is marked as failed and the service is suspended as usual

