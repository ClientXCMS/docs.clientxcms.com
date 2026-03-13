---
translated: true
sidebar_position: 6
---

# Binance Pay

La passerelle **Binance Pay** vous permet d'accepter des paiements en cryptomonnaies de la part des utilisateurs de Binance.

Vous pouvez gérer les passerelles de paiement depuis :

`Paramètres` > `Paramètres de la boutique` > `Binance Pay`

![Configuration Binance Pay](/img/next_gen/settings/store/payment_gateways/binance/config.png)

## Récupération de vos clés

Pour configurer Binance Pay, vous devez récupérer vos identifiants depuis le portail marchand de Binance :

1. Connectez-vous à votre **compte Marchand Binance**.
2. Allez dans **Développeurs > Gestion de l'API**.
3. Créez une nouvelle clé API pour votre boutique.
4. Copiez en toute sécurité votre **Clé API**, votre **Clé Secrète** et votre **ID Marchand**.

:::warning Important
La **Clé Secrète** n'est affichée qu'une seule fois lors de sa création. Assurez-vous de la sauvegarder dans un endroit sûr.
:::

## Fonctionnement du système

### Processus de paiement

1. **Sélection de la méthode de paiement** : Le client choisit "Binance Pay" lors de la commande.
2. **Redirection vers Binance** : Le client est dirigé vers la page de paiement sécurisée de Binance.
3. **Validation du paiement** : Le client finalise la transaction via son compte Binance ou par QR code.
4. **Notification** : Binance envoie une notification à votre système via webhook.
5. **Validation automatique** : La commande est traitée automatiquement dès confirmation.

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />
Utilisez "Binance Pay" ou "Paiement Crypto" pour vos clients.

**Montant minimum** | (montant)<br />
Définissez le montant minimum requis pour ce moyen de paiement.

**ID Marchand** | (texte)<br />
Votre identifiant unique de marchand Binance.

**Clé API** | (texte)<br />
La clé API publique fournie par Binance.

**Clé Secrète** | (texte)<br />
La clé secrète utilisée pour signer les requêtes et sécuriser les transactions.

**Statut** | (menu déroulant)<br />
Réglez sur **"Actif"** pour activer la passerelle pour vos clients.
