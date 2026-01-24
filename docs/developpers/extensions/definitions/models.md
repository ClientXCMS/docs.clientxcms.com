---
translated: true
---
# Laravel Models
ClientXCMS uses Laravel models to manage client area data. These models are divided into several categories, each corresponding to a specific domain.

## Customers

| Model          | Namespace                           | Description                     | Example                                      |
|----------------|-------------------------------------|---------------------------------|----------------------------------------------|
| Customer       | `App\Models\Account\Customer`       | Represents a system customer    | `App\Models\Account\Customer::find($id)`     |
| EmailMessage   | `App\Models\Account\EmailMessage`   | Manages email messages          | `App\Models\Account\EmailMessage::find($id)` |

## Billing

| Model           | Namespace                            | Description                                  | Example                                         |
|-----------------|--------------------------------------|----------------------------------------------|-------------------------------------------------|
| CustomItem      | `App\Models\Billing\CustomItem`      | Handles custom items                         | `App\Models\Billing\CustomItem::find($id)`      |
| Gateway         | `App\Models\Billing\Gateway`         | Manages payment gateways                     | `App\Models\Billing\Gateway::find($id)`         |
| Invoice         | `App\Models\Billing\Invoice`         | Represents an invoice                        | `App\Models\Billing\Invoice::find($id)`         |
| InvoiceItem     | `App\Models\Billing\InvoiceItem`     | Represents invoice items                     | `App\Models\Billing\InvoiceItem::find($id)`     |
| InvoiceLog      | `App\Models\Billing\InvoiceLog`      | Logs invoice-related actions                 | `App\Models\Billing\InvoiceLog::find($id)`      |
| Subscription    | `App\Models\Billing\Subscription`    | Manages subscriptions                        | `App\Models\Billing\Subscription::find($id)`    |
| SubscriptionLog | `App\Models\Billing\SubscriptionLog` | Logs subscription-related actions            | `App\Models\Billing\SubscriptionLog::find($id)` |
| ConfigOption    | `App\Models\Billing\ConfigOption`    | Manages configuration options                | `App\Models\Billing\ConfigOption::find($id)`    |
| ConfigOptionOption | `App\Models\Billing\ConfigOptionOption` | Manages configuration option options    | `App\Models\Billing\ConfigOptionOption::find($id)` |
| ConfigOptionProduct | `App\Models\Billing\ConfigOptionProduct` | Manages products associated with configuration options | `App\Models\Billing\ConfigOptionProduct::find($id)` |
| Upgrade         | `App\Models\Billing\Upgrade`         | Manages service upgrades                     | `App\Models\Billing\Upgrade::find($id)`         |

## Help Center

| Model             | Namespace                               | Description                              | Example                                            |
|-------------------|-----------------------------------------|------------------------------------------|----------------------------------------------------|
| SupportAttachment | `App\Models\Helpdesk\SupportAttachment` | Manages helpdesk attachments             | `App\Models\Helpdesk\SupportAttachment::find($id)` |
| SupportDepartment | `App\Models\Helpdesk\SupportDepartment` | Represents a support department          | `App\Models\Helpdesk\SupportDepartment::find($id)` |
| SupportMessage    | `App\Models\Helpdesk\SupportMessage`    | Manages helpdesk messages                | `App\Models\Helpdesk\SupportMessage::find($id)`    |
| SupportTicket     | `App\Models\Helpdesk\SupportTicket`     | Manages helpdesk tickets                 | `App\Models\Helpdesk\SupportTicket::find($id)`     |

## Provisioning

| Model              | Namespace                                    | Description                          | Example                                                 |
|--------------------|----------------------------------------------|--------------------------------------|---------------------------------------------------------|
| CancellationReason | `App\Models\Provisioning\CancellationReason` | Represents a cancellation reason     | `App\Models\Provisioning\CancellationReason::find($id)` |
| Server             | `App\Models\Provisioning\Server`             | Manages a server                     | `App\Models\Provisioning\Server::find($id)`             |
| Service            | `App\Models\Provisioning\Service`            | Represents a service                 | `App\Models\Provisioning\Service::find($id)`            |
| ServiceRenewals    | `App\Models\Provisioning\ServiceRenewals`    | Manages service renewals             | `App\Models\Provisioning\ServiceRenewals::find($id)`    |
| SubdomainHost      | `App\Models\Provisioning\SubdomainHost`      | Manages hosting subdomains           | `App\Models\Provisioning\SubdomainHost::find($id)`      |
| ConfigOptionService | `App\Models\Provisioning\ConfigOptionService` | Manages service configuration options | `App\Models\Provisioning\ConfigOptionService::find($id)` |
## Store

### Cart

| Model                | Namespace                                      | Description                                      | Example                                                   |
|----------------------|------------------------------------------------|--------------------------------------------------|-----------------------------------------------------------|
| Basket               | `App\Models\Store\Basket\Basket`               | Manages the shopping cart                        | `App\Models\Store\Basket\Basket::find($id)`               |
| BasketRow            | `App\Models\Store\Basket\BasketRow`            | Manages a cart item row                          | `App\Models\Store\Basket\BasketRow::find($id)`            |

| Model          | Namespace                         | Description                            | Example                                      |
|----------------|-----------------------------------|----------------------------------------|----------------------------------------------|
| Coupon         | `App\Models\Store\Coupon`         | Represents a coupon                    | `App\Models\Store\Coupon::find($id)`         |
| CouponProducts | `App\Models\Store\CouponProducts` | Manages products associated with coupons | `App\Models\Store\CouponProducts::find($id)` |
| CouponUsage    | `App\Models\Store\CouponUsage`    | Logs coupon usage                      | `App\Models\Store\CouponUsage::find($id)`    |
| Group          | `App\Models\Store\Group`          | Represents a product group             | `App\Models\Store\Group::find($id)`          |
| Product        | `App\Models\Store\Product`        | Represents a product                   | `App\Models\Store\Product::find($id)`        |
| Pricing        | `App\Models\Store\Pricing`        | Represents a price                     | `App\Models\Store\Pricing::find($id)`        |
