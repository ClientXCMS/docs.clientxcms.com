# Paramètres des services
Les paramètres des services sont des paramètres qui affectent les services de votre espace client. Vous pouvez les retrouver en allant dans `Paramètres` > `Approvisionnement` > `Paramètres des services`.

## Services
**Jours avant la création de la facture de renouvellement** : Vous pouvez définir le nombre de jours avant la création de la facture de renouvellement. Par défaut, il est de 7 jours.

**Jours avant l'expiration** : Vous pouvez définir le nombre de jours avant l'expiration du service. Par défaut, il est de 7 jours.
Cela veut dire que le service restera suspendu pendant 7 jours après la date d'expiration pour que le client puisse encore le renouveller.

**Jours de notification avant expiration** : Vous pouvez définir les jours de notification avant l'expiration du service. Par défaut, il est de 7, 5, 3, 1 jours avant le date d'expiration.

## Abonnements

**Jours avant le renouvellement des abonnements** : Il définit le nombre de jours avant la date d'expiration pour executer le paiement de la facture. Il doit être inférieur au nombre de jour avant la création de facture de renouvellement.

**Nombre maximum de tentatives de renouvellement automatique** : Vous pouvez définir le nombre maximum de tentatives de renouvellement automatique. Par défaut, il est de 7 tentatives (jours).

## Webhook au renouvellement
**URL du webhook** : Vous pouvez définir l'URL du webhook pour les renouvellements des services ou l'amélioration des services (POST, JSON).

Si l'URL fournie est un webhook Discord (ex. https://discord.com/api/webhooks/xxxxx), les notifications apparaîtront automatiquement sous forme d'embed (capture ci‑dessous).

![img](https://cdn.clientxcms.com/ressources/docs/service.png)

Si vous utilisez un webhook personnalisé, CLIENTXCMS enverra une requête HTTP POST avec un payload JSON structuré.
Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="service_upgrade" label="Amélioration d'un service">

```json
{
    "payload": {
		"action": "service_upgraded",
		"customername": "Martin Dev",
		"customeremail": "test@clientxcms.com",
		"customer_url": "https://example.com/admin/customers/1",
		"old_product": "Starter",
		"new_product": "Pro",
		"service_name": "Mon VPS",
		"service_url": "https://example.com/admin/services/1",
		"invoice_url": "https://example.com/admin/invoices/123"
	}
}
```
	</TabItem>

	<TabItem value="service_renewal" label="Renouvellement d'un service">

```json
{
    "payload": {
		"action": "service_renewed",
		"__url": "https://example.com/admin/services/1",
		"servicename": "Mon VPS",
		"serviceid": "1",
		"customer_url": "https://example.com/admin/customers/1",
		"expiresat": "01/01/26",
		"last_expires_at": "01/01/25",
		"customername": "Martin Dev",
		"currency": "€",
		"customeremail": "test@clientxcms.com",
		"invoiceurl": "https://example.com/admin/invoices/123",
		"price": "10.00€"
	}
}
```

	</TabItem>

</Tabs>


