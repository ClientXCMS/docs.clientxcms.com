---
sidebar_position: 3
---

# Facturation

Dans **CLIENTXCMS**, la configuration de la **facturation** est le pilier de votre activité commerciale. <br/>
L'objectif est essentiel : **maîtriser tous les aspects financiers de votre boutique** pour garantir une **conformité légale parfaite** et une **gestion optimale de vos revenus**. Une configuration de facturation bien pensée simplifie la comptabilité, améliore la relation client et vous protège juridiquement.

La facturation gère automatiquement tous les aspects financiers : génération des factures, calcul des taxes, gestion des devises, et respect des réglementations.

Vous pouvez gérer la facturation depuis :

`Paramètres` > `Facturation` > `Facturation`

:::tip Astuce
Une facturation bien configurée est **la base de la confiance** avec vos clients et de votre conformité légale.
Prenez le temps de bien paramétrer chaque option selon votre contexte juridique et commercial.
:::

## Pourquoi bien configurer la facturation ?

La facturation automatisée est cruciale pour :

* **Respecter les obligations légales** en matière de TVA et de facturation
* **Automatiser la génération** des factures et la gestion comptable
* **Améliorer l'expérience client** avec des factures claires et professionnelles
* **Simplifier votre comptabilité** et faciliter les déclarations fiscales

:::tip Astuce
C'est comme avoir un comptable intégré qui travaille 24h/24 📊 — précis, fiable et toujours conforme aux réglementations.
:::

## Configuration de base

### Devise principale

**Devise** | (menu déroulant)<br />
La devise principale de votre boutique, utilisée par défaut pour tous les prix et factures.
Choisissez parmi une liste de devises internationales (EUR, USD, GBP, etc.).

:::info Note
Vous pourrez définir des devises spécifiques par produit ultérieurement pour une boutique internationale.
:::

### Adresse commerciale

**Adresse de l'espace client** | (zone de texte)<br />
L'adresse légale de votre entreprise qui apparaîtra sur toutes les factures.
Cette information est obligatoire pour la conformité légale.

![Affichage de l'adresse sur les factures](/img/next_gen/settings/store/billing/address.png)

Incluez :
- Nom de l'entreprise
- Adresse complète
- Code postal et ville
- Pays
- Numéro SIRET/TVA si applicable

## Configuration des taxes

### Mode de taxe

CLIENTXCMS propose deux modes de gestion des prix :

**Exclusif** | Mode hors taxes<br />
Les prix affichés dans la boutique **n'incluent pas** la TVA.
La taxe est ajoutée lors du calcul final au panier.

**Inclusif** | Mode toutes taxes comprises<br />
Les prix affichés incluent déjà la TVA.
Le prix affiché est le prix final payé par le client.

:::tip Conseil
Le mode **inclusif** est généralement préféré pour le B2C car il évite les surprises au client, tandis que le mode **exclusif** est courant en B2B.
:::

### Gestion de la TVA

**Activation de la TVA** | (interrupteur)<br />
Active ou désactive la gestion de la TVA sur votre boutique.

**URL du webhook** : URL de votre endpoint pour recevoir les notifications de paiement (POST JSON). Utilisez une URL en HTTPS si possible.

- Si l'URL fournie est un webhook Discord (ex. https://discord.com/api/webhooks/xxxxx), les notifications apparaîtront automatiquement sous forme d'embed (capture ci‑dessus).
- Si vous utilisez un webhook personnalisé, CLIENTXCMS enverra une requête HTTP POST avec un payload JSON structuré. Exemple :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="checkout_completed" label="Commande payée">

    
```json
{
    "payload": {
        "action": "checkout_completed",
        "_url": "https://example.com/admin/invoices/42",
        "invoiceurl": "https://example.com/admin/invoices/42",
        "customer_url": "https://example.com/admin/customers/1",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "basketid": "BASK-123",
        "total": "199.99",
        "currency": "€",
        "gatewayname": "Stripe",
        "productnames": "VPS Pro, Sauvegarde avancée"
    }
}
```
	</TabItem>


</Tabs>

Notes utiles :

- `action` : identifie l'événement envoyé (`checkout_completed`, `service_upgraded`, etc.).
- `_url`, `invoiceurl` ou `service_url` : liens internes vers la facture ou le service concerné.
- Les valeurs sont envoyées en tant que chaînes. Adaptez la conversion (montant, devise…) selon votre intégration.

**Taux de TVA par défaut** | (pourcentage)<br />
Le taux appliqué par défaut si aucun taux spécifique n'est défini.

**Délais minimum en jours pour forcer le renouvellement avec une amélioration** : Cela permet de forcer le renouvellement d'un service avec une amélioration si le nombre de jours restant est inférieur à ce nombre de jours.
