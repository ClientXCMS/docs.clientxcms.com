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

### Paramètres des factures

**Lien des conditions générales de vente**<br />
Lien public vers vos conditions générales de vente.

**Termes et conditions de la facture**<br />
Texte affiché sur les factures générées, par exemple les conditions de paiement ou l'acompte demandé avant la prestation.

**Mode de facturation**<br />
Sélectionne le type de document commercial généré par défaut.

**Préfixe des factures**<br />
Préfixe placé avant les numéros de facture, par exemple `CTX`.

**Autoriser l'ajout du solde aux factures**<br />
Permet d'utiliser le crédit disponible du client pour régler une facture.

**Le client doit être confirmé pour commander**<br />
Impose la confirmation du client avant l'envoi d'une commande.

**Action sur les factures en attente après (jours)**<br />
Définit l'action automatique appliquée aux factures qui restent en attente. Utilisez `0` pour désactiver ce délai.

## Identité fiscale du vendeur

Complétez cette section avant d'activer Factur-X ou un provider de facturation électronique :

- **Raison sociale** : nom légal enregistré du vendeur ;
- **SIREN** : identifiant à neuf chiffres de l'entité juridique française ;
- **SIRET** : identifiant facultatif à quatorze chiffres de l'établissement vendeur ;
- **Numéro de TVA** : numéro de TVA intracommunautaire facultatif ;
- **Nature habituelle des opérations** : par exemple, prestations de services ;
- **TVA exigible d'après les débits** : activez cette option uniquement si ce régime fiscal s'applique à votre entreprise ;
- **Voie**, **complément d'adresse**, **code postal**, **ville** et **pays du vendeur**.

Ces valeurs sont intégrées aux factures électroniques. Vérifiez qu'elles correspondent aux informations officielles d'immatriculation et fiscales de votre entreprise.

## Factur-X et e-reporting

Cette section contrôle la génération et la transmission des documents électroniques.

**Activer pour les nouveaux documents**<br />
Active Factur-X et l'e-reporting pour les documents créés après l'activation. Testez les connecteurs sélectionnés avant d'activer cette option.

**Provider actif**<br />
Sélectionne le provider principal des factures électroniques :

- `LOCAL` : génère et conserve le document dans ClientXCMS sans l'envoyer à un provider externe ;
- `QONTO` : transmet les documents avec [l'addon de facturation électronique Qonto](/fr/extensions/addons/qonto-einvoicing) ;
- `PENNYLANE` : transmet les documents avec [l'addon Pennylane](/fr/extensions/addons/pennylane).

Sélectionnez Qonto ou Pennylane uniquement après avoir configuré et testé le connecteur correspondant dans **Paramètres > Facturation**.

**Provider du secteur public**<br />
Sélectionne le traitement des factures destinées aux entités publiques françaises :

- `LOCAL` : conserve localement les documents du secteur public ;
- `CHORUS-PRO` : les transmet avec [l'addon Chorus Pro](/fr/extensions/addons/chorus-pro).

**Régime de TVA**<br />
Sélectionnez le régime déclaratif applicable au vendeur.

**Fuseau fiscal**<br />
Fuseau horaire utilisé pour déterminer les dates réglementaires et les périodes de déclaration, par exemple `Europe/Paris`.

**Date d'activation**<br />
Date facultative à partir de laquelle la configuration de facturation électronique devient effective.

:::warning
Changer de provider ne configure pas automatiquement ses identifiants API. Configurez et testez d'abord l'addon, puis sélectionnez-le ici.
:::

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
