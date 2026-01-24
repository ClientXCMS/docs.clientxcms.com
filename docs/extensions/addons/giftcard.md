---
translated: true
---

# Gift Cards

> This page details the setup, management, and usage of the **Gift Cards** addon for ClientXCMS.
> Objective: enable the creation, sale, and use of gift cards (fixed or random amount) with complete tracking on both admin and client sides.

---

## 1. General Principle

1. **Global Settings**

   * You define allowed amounts, code prefix, and default validity period.
2. **Creation & Management**

   * From administration: manually generate a gift card (fixed or random amount, number of uses, optional recipient) or view global statistics.
3. **Store Sales**

   * Customers can purchase a gift card (predefined amounts) via their chosen payment gateway; the code is sent by email.
4. **Usage**

   * The recipient enters the code in their client area → the balance is credited immediately.
5. **Tracking**

   * Dashboards (admin + client) list ordered cards, used cards, usage rate, total credited, etc.

---

## 2. Prerequisites

Once the addon is activated:

* **Administration → Settings → Extension Settings → Gift Card Settings**
* Management interface: **Administration → Settings → Store Settings → Gift Cards**

| Element      | Version / Detail                                                |
| ----------- | --------------------------------------------------------------- |
| Add-on      | **Gift Cards** (Marketplace)                                    |
| Dependencies | None, works natively with active payment methods               |
| Client Role | "Use a gift card" authorization (enabled by default)            |

---

## 3. Global Settings (extension)

| Field                          | Description                                               | Example                      |
| ------------------------------ | --------------------------------------------------------- | ---------------------------- |
| **Allowed amounts**            | Values offered for purchase, comma-separated              | `10,20,50,100,200`           |
| **Expiration (days)**          | Default validity period for created or sold cards         | `365`                        |
| **Allow purchase**             | Enables/disables sales in client area                     | ✅                            |
| **Gift card prefix**           | Automatically added before each generated code            | `CC` (will give `CC-6MCP9IC8`) |

> Amounts are expressed in your store's main currency.

---

## 4. Administration Interface

### 4.1 Dashboard
![img](/img/next_gen/extensions/addons/giftcards/giftcards_admin_view.png)

* **Gift cards created**: total counter.
* **Total amount credited**: sum credited to customers.
* **Usage rate**: percentage of fully consumed cards.

### 4.2 List & Actions

| Column          | Description                                  |
| --------------- | -------------------------------------------- |
| `#`             | Internal identifier                          |
| **Code**        | Gift card code                               |
| **Usage**       | `x / y` (uses made / maximum)                |
| **Amount**      | Fixed value or random range                  |
| **Created**     | Generation date                              |
| **Actions**     | **View** (details) / **Delete**              |

### 4.3 Available Filters

* Card code
* Amount
* Type (fixed / random)
* Internal identifier
* Customer (recipient)

---

## 5. Manual Creation

![img](/img/next_gen/extensions/addons/giftcards/giftcards_creer_admin.png)

**Administration → Gift Cards → Create**

| Field                      | Type *Fixed Amount*                  | Type *Random Amount*       |
| -------------------------- | ------------------------------------ | -------------------------- |
| **Card code**              | Pre-filled (`CC-XXXXXXX`) editable   | Pre-filled editable        |
| **Amount**                 | Single value (e.g., `25.00`)         | —                          |
| **Min / Max amount**       | —                                    | Range e.g., `5.00` – `50.00` |
| **Maximum uses**           | `-1` = unlimited, otherwise 1, 2 …   | Same                       |
| **Expiration**             | Optional date/time                   | Same                       |
| **Authorized customer**    | Restrict card to one customer        | Same                       |

Click **Create**: the card appears in the list and can be sent manually or communicated to the recipient.

---

## 6. Client-Side Experience

![img](/img/next_gen/extensions/addons/giftcards/giftcards_client_view.png)

> Menu **My Account → Payment Methods → Gift Cards**

1. **Add a gift card**

   * Code field + **Add** button ⇒ credit is transferred instantly to the balance.
2. **Give a gift card**

   * Amount selection (from allowed ones) + payment gateway.
   * Option "This gift card is for a friend": sends the code by email to the recipient.
3. **Ordered cards**

   * List of purchased codes, *used / unused* status and date.
4. **Used cards**

   * History of applied codes, amounts and dates.

---

## 7. Best Practices

1. **Predefined amounts**: offer round values (€10, €20…) to simplify purchasing.
2. **Distinctive prefix**: e.g., `CC` for "ClientXCMS" to avoid confusion with coupons.
3. **Reasonable expiration**: 6 – 12 months is sufficient while respecting local legal obligations.
4. **Limit uses**: 1 by default; unlimited only for specific needs (e.g., loyalty program).
5. **Support**: keep the internal ID (#) for any traceability request.
