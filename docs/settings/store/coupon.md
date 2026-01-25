---
translated: true
sidebar_position: 4
---

# Coupons

In **CLIENTXCMS**, a **coupon** corresponds to a **discount code that you offer to your customers** in your store. <br/>
The objective is clear: **build customer loyalty, boost your sales and offer targeted promotional offers**. Good coupon management allows your customers to **benefit from exclusive advantages** while giving you full control over your marketing campaigns.

Each coupon can be fully customized: code, discount type, validity, usage conditions, applicable products, etc.

You can manage coupons from:

`Settings` > `Store Settings` > `Coupons`

![Coupon configuration access](/img/next_gen/settings/store/coupons/admin_list.png)

:::tip Tip
A well-configured coupon can significantly **improve your conversion rate** and encourage customers to complete their order.
Think about defining clear conditions to avoid abuse.
:::

## Why use coupons?

Coupons are a powerful marketing tool for your store. They concretely represent advantages you offer to your customers — whether it's a discount on a specific service, free setup fees, or an overall discount.

Creating effective coupons allows you to:

* Build loyalty with existing customers through exclusive offers
* Attract new customers with attractive discounts
* Clear stock or promote specific services
* Reward loyal customers or first-time buyers

:::tip Tip
Coupons are like **privileged entry tickets** to your services 🎫 — your customers feel valued, and you keep control over your margins and commercial strategy.
:::

## User Interfaces

### Store-side View

Coupons are applied by customers directly in the **shopping cart**.
They enter the coupon code in a dedicated field when finalizing their order.

![Adding a coupon in the cart](/img/next_gen/settings/store/coupons/add_coupon.png)

Once the coupon is validated, the discount is automatically applied and the customer can see:
- The discount amount
- The new total after discount
- The conditions of the applied coupon

![Successfully applied coupon](/img/next_gen/settings/store/coupons/applied_coupon.png)

## Administrator View

In the administration interface, you have a complete list of created coupons. You can:
- **Search** for a coupon by its code
- **Filter** by status or validity period
- **Perform actions** like edit, view usage, or delete a coupon

![Coupon list view in administration](/img/next_gen/settings/store/coupons/admin_list.png)

### Available Actions

| Action        | Description                                  |
|---------------|----------------------------------------------|
| **View**      | View and edit coupon details                 |
| **Delete**    | Permanently delete the coupon                |

:::danger Warning
Deleting a coupon can cause errors if it is linked to existing orders.
Proceed with caution; we recommend disabling the coupon rather than deleting it.
:::

### Discount Types

CLIENTXCMS offers two types of discounts for coupons:

- **Percentage**: Discount calculated as a percentage of the order amount
- **Fixed Amount**: Discount of a defined amount in currency

These types allow total flexibility in your discount strategies.

## Creating a New Coupon

To add a coupon to your store, click the **"Create"** button in the top right of the page.

![Coupon creation](/img/next_gen/settings/store/coupons/create_coupon.png)

### Essential Parameters to Define

Here are the main fields to complete when creating a coupon:

**Code** | (text)<br />

The code customers will need to enter to benefit from the discount. Choose a memorable and unique code.

**Discount Type** | (dropdown menu)<br />

Select between "Percentage" or "Fixed Amount" depending on the desired discount type.

**Start Date** | (date)<br />

Date from which the coupon becomes usable by customers.

**End Date** | (date)<br />

Deadline for coupon usage. Leave empty for a coupon without expiration.

**Maximum Number of Uses** | (numeric field)<br />

Global limit on the number of times the coupon can be used. Leave empty for unlimited use.

**Uses Per Customer** | (numeric field)<br />

Limits the number of times the same customer can use this coupon.

**Minimum Order Amount** | (amount)<br />

Minimum amount the order must reach to apply the coupon.

:::tip Tip
Define **short and memorable codes** like "WELCOME10" or "XMAS2024". Avoid overly complex codes that could discourage your customers.
:::

## Advanced Configuration

### Targeting Options

You can configure advanced options for each coupon:

**Allowed Products** | (multiple selection)<br />
Restricts coupon use to specific products.

**Allowed Groups** | (multiple selection)<br />
Limits the coupon to certain product groups only.

**Required Products** | (multiple selection)<br />
Requires the presence of certain products in the cart to use the coupon.

**Global Discount** | (checkbox)<br />
Applies the discount to the entire order instead of specific products.

**Free Setup Fees** | (checkbox)<br />
Waives setup fees in addition to the discount.

**First Order Only** | (checkbox)<br />
Limits use to new customers for their first order.

**Discount Recurrence** | (numeric field)<br />
Defines how many renewals the discount applies to. `-1` for unlimited, `0` for first payment only.

## Discount Configuration

### Using the Integrated Calculator

![Discount calculator interface](/img/next_gen/settings/store/coupons/create_pricing2.png)

CLIENTXCMS offers an **integrated discount calculator**.
It helps you:
- quickly calculate **degressive discounts**
- apply **variable percentages** based on duration

This feature is ideal for creating consistent and attractive coupons.

:::tip Tip
Use the calculator to create **degressive offers**: the longer the customer commits, the greater the discount.
This encourages long-term subscriptions.
:::

## Editing a Coupon

Editing a coupon allows you to **modify its characteristics** while preserving its usage history.

### Accessing Editing

To edit a coupon:

1. Go to the coupon list.
2. Click the **"View"** button in the **Actions** column of the relevant coupon.

### Modifying Information

Once in the editing interface, you can modify:
- The **coupon code** (be careful with ongoing uses)
- The **usage conditions**
- The **validity dates**
- The **amounts and percentages**

:::warning Important
If the coupon is already used in active orders, some modifications may not apply retroactively.
:::

## Usage Tracking

### Detailed Usage Display

You can view the complete usage history of each coupon:

![Usage history](/img/next_gen/settings/store/coupons/show_usages.png)

The table displays:
- **Customer**: Who used the coupon
- **Discount Amount**: Savings realized
- **Usage Date**: When the coupon was applied
- **Associated Order**: Order reference

### Usage Management

You can **cancel a usage** by clicking the corresponding **"Delete"** button.
This allows the customer to reuse the coupon if necessary.

## Deleting a Coupon

:::danger Warning
Deleting a coupon can cause system malfunctions, especially if the coupon is linked to existing orders. We recommend **disabling** the coupon rather than permanently deleting it.
:::

To delete a coupon:
1. Click the red **"Delete"** button in the **Actions** column.
2. Confirm the operation.

## Effective Coupon Strategies

### Recommended Coupon Types

| Coupon Type              | Recommended Use                                    |
|--------------------------|-----------------------------------------------------|
| **Welcome**              | For new customers (first order)                    |
| **Loyalty**              | To reward regular customers                        |
| **Seasonal**             | For promotional periods                            |
| **Specific Product**     | To clear stock or promote a novelty                |

### Best Practices

* **Clear codes**: Use explicit codes like "WELCOME20" or "EASTER2024"
* **Limited duration**: Create urgency with expiration dates
* **Fair conditions**: Avoid overly restrictive conditions that frustrate customers
* **Regular tracking**: Analyze usage to optimize your future campaigns

:::tip Remember
A well-designed coupon is a **powerful loyalty tool**. Use them strategically to boost your sales while maintaining your margins.
:::
