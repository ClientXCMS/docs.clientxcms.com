---
sidebar_position: 6
---
# Configuration des paiements
Vous pouvez configurer plusieurs méthodes de paiement pour votre espace client. La liste est disponible [ici](/settings/store/payment_gateways/payment_gateways).

Vous pouvez configurer vos méthodes de paiement en allant dans le menu `Paramètres` puis dans la section `Paramètres de boutique` et enfin sélectionnez la méthode de paiement que vous souhaitez configurer.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="PayPalExpressCheckout" label="PayPal Express Checkout">
Le processus de configuration de PayPal Express Checkout est disponible [ici](/settings/store/payment_gateways/paypal_express_checkout).
</TabItem>
<TabItem value="Stripe" label="Stripe">
Le processus de configuration de Stripe est disponible [ici](/settings/store/payment_gateways/stripe).
</TabItem>
<TabItem value="Balance" label="Balance">
Vous pouvez ajouter un solde à votre compte client depuis la fiche client.
</TabItem>
<TabItem value="PayPal" label="PayPal">
Le processus de configuration de PayPal est disponible [ici](/settings/store/payment_gateways/paypal).
</TabItem>
<TabItem value="Stancer" label="Stancer">
Le processus de configuration de Stancer est disponible [ici](/settings/store/payment_gateways/stancer).
</TabItem>
</Tabs>

## Personalisation de la facture
Vous pouvez modifier l'adresse de facturation ou les termes et conditions de la facture en allant dans les paramètres de facturation dans `Paramètres` > `Facturation` > `Facturation`.

Vous pouvez également modifier le préfixe de la facture en mettant un préfixe spécifique à votre entreprise. Nous vous recommandons d'utiliser un préfixe court de 3 à 5 caractères. Le prefixe est utilisé pour générer l'identifiant unique de la facture. Par exemple : `INV-2024-01-001` pour la première facture de l'année 2024. Cela permet de garder une trace des factures plus facilement.

## Désactiver la TVA

Vous pouvez désactiver la TVA pour votre entreprise en allant dans les paramètres de facturation dans `Paramètres` > `Facturation` > `Facturation`. Vous pouvez également modifier le taux de TVA par défaut selon votre pays ou l'affichage des prix avec ou sans TVA.

:::info
Prenez en compte que tout les prix configurés dans votre boutique doivent être hors taxe. La TVA sera ajoutée au prix lors du paiement. Si vous souhaitez afficher les prix TTC, vous pouvez définir le prix d'affichage en TTC.
:::

## Conditions générales de vente

Vous pouvez définir des conditions générales de vente pour votre boutique en allant dans les paramètres de facturation dans `Paramètres` > `Facturation` > `Facturation`. Les conditions générales de vente seront affichées sur la page de paiement pour que l'utilisateur les accepte avant de valider sa commande.