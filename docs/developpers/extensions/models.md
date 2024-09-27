# Modèles Laravel
ClientXCMS utilise les modèles Laravel pour gérer les données de l'espace client. Ces modèles sont répartis en plusieurs catégories, chacune correspondant à un domaine spécifique.

## Clients

| Modèle         | Namespace                           | Description                     | Exemple                                      |
|----------------|-------------------------------------|---------------------------------|----------------------------------------------|
| Customer       | `App\Models\Account\Customer`       | Représente un client du système | `App\Models\Account\Customer::find($id)`     |
| EmailMessage   | `App\Models\Account\EmailMessage`   | Gère les messages emails        | `App\Models\Account\EmailMessage::find($id)` |

## Facturations

| Modèle          | Namespace                            | Description                                  | Exemple                                         |
|-----------------|--------------------------------------|----------------------------------------------|-------------------------------------------------|
| CustomItem      | `App\Models\Billing\CustomItem`      | Traite les éléments personnalisés            | `App\Models\Billing\CustomItem::find($id)`      |
| Gateway         | `App\Models\Billing\Gateway`         | Gère les passerelles de paiement             | `App\Models\Billing\Gateway::find($id)`         |
| Invoice         | `App\Models\Billing\Invoice`         | Représente une facture                       | `App\Models\Billing\Invoice::find($id)`         |
| InvoiceItem     | `App\Models\Billing\InvoiceItem`     | Représente les éléments d'une facture        | `App\Models\Billing\InvoiceItem::find($id)`     |
| Subscription    | `App\Models\Billing\Subscription`    | Gère les abonnements                         | `App\Models\Billing\Subscription::find($id)`    |
| SubscriptionLog | `App\Models\Billing\SubscriptionLog` | Journalise les actions liées aux abonnements | `App\Models\Billing\SubscriptionLog::find($id)` |

## Centre d'aide

| Modèle            | Namespace                               | Description                              | Exemple                                            |
|-------------------|-----------------------------------------|------------------------------------------|----------------------------------------------------|
| SupportAttachment | `App\Models\Helpdesk\SupportAttachment` | Gère les pièces jointes dans le helpdesk | `App\Models\Helpdesk\SupportAttachment::find($id)` |
| SupportDepartment | `App\Models\Helpdesk\SupportDepartment` | Représente un département du support     | `App\Models\Helpdesk\SupportDepartment::find($id)` |
| SupportMessage    | `App\Models\Helpdesk\SupportMessage`    | Gère les messages du helpdesk            | `App\Models\Helpdesk\SupportMessage::find($id)`    |
| SupportTicket     | `App\Models\Helpdesk\SupportTicket`     | Gère les tickets du helpdesk             | `App\Models\Helpdesk\SupportTicket::find($id)`     |

## Approvisionnement

| Modèle             | Namespace                                    | Description                          | Exemple                                                 |
|--------------------|----------------------------------------------|--------------------------------------|---------------------------------------------------------|
| CancellationReason | `App\Models\Provisioning\CancellationReason` | Représente une raison d'annulation   | `App\Models\Provisioning\CancellationReason::find($id)` |
| Server             | `App\Models\Provisioning\Server`             | Gère un serveur                      | `App\Models\Provisioning\Server::find($id)`             |
| Service            | `App\Models\Provisioning\Service`            | Représente un service                | `App\Models\Provisioning\Service::find($id)`            |
| ServiceRenewals    | `App\Models\Provisioning\ServiceRenewals`    | Gère les renouvellements de service  | `App\Models\Provisioning\ServiceRenewals::find($id)`    |
| SubdomainHost      | `App\Models\Provisioning\SubdomainHost`      | Gère les sous-domaines d'hébergement | `App\Models\Provisioning\SubdomainHost::find($id)`      |

## Boutique

### Panier

| Modèle               | Namespace                                      | Description                                      | Exemple                                                   |
|----------------------|------------------------------------------------|--------------------------------------------------|-----------------------------------------------------------|
| Basket               | `App\Models\Store\Basket\Basket`               | Gère le panier d'achat                           | `App\Models\Store\Basket\Basket::find($id)`               |
| BasketCouponTrait    | `App\Models\Store\Basket\BasketCouponTrait`    | Trait pour la gestion des coupons dans le panier | `App\Models\Store\Basket\BasketCouponTrait::find($id)`    |
| BasketRow            | `App\Models\Store\Basket\BasketRow`            | Gère une ligne d'article dans le panier          | `App\Models\Store\Basket\BasketRow::find($id)`            |
| BasketRowCouponTrait | `App\Models\Store\Basket\BasketRowCouponTrait` | Trait pour la gestion des coupons par ligne      | `App\Models\Store\Basket\BasketRowCouponTrait::find($id)` |

| Modèle         | Namespace                         | Description                            | Exemple                                      |
|----------------|-----------------------------------|----------------------------------------|----------------------------------------------|
| Coupon         | `App\Models\Store\Coupon`         | Représente un coupon                   | `App\Models\Store\Coupon::find($id)`         |
| CouponProducts | `App\Models\Store\CouponProducts` | Gère les produits associés aux coupons | `App\Models\Store\CouponProducts::find($id)` |
| CouponUsage    | `App\Models\Store\CouponUsage`    | Journalise l'utilisation des coupons   | `App\Models\Store\CouponUsage::find($id)`    |
| Group          | `App\Models\Store\Group`          | Représente un groupe de produits       | `App\Models\Store\Group::find($id)`          |
| Product        | `App\Models\Store\Product`        | Représente un produit                  | `App\Models\Store\Product::find($id)`        |
| Pricing        | `App\Models\Store\Pricing`        | Représente un prix                     | `App\Models\Store\Pricing::find($id)`        |
