---
translated: true
sidebar_position: 8
---

# SumUp

La passerelle **SumUp** vous permet d'accepter des paiements par carte bancaire via la plateforme SumUp.

Vous pouvez gérer les passerelles de paiement depuis :

`Paramètres` > `Paramètres de la boutique` > `SumUp`

![Configuration SumUp](/img/next_gen/settings/store/payment_gateways/sumup/config.png)

## Récupération de vos clés

Pour configurer SumUp, vous devez récupérer vos identifiants depuis le tableau de bord SumUp :

1. Connectez-vous à votre **Tableau de bord SumUp**.
2. Allez dans la section **Pour les développeurs** ou **Clés API**.
3. Créez un nouveau **Client ID** et **Client Secret**.

:::info Sécurité
Gardez votre **Client Secret** confidentiel. Il permet à votre système de communiquer en toute sécurité avec SumUp pour traiter les paiements.
:::

## Fonctionnement du système

### Processus de paiement

1. **Sélection de la méthode de paiement** : Le client choisit "SumUp" lors de la commande.
2. **Redirection vers SumUp** : Le client est dirigé vers l'interface de paiement sécurisée de SumUp.
3. **Confirmation du paiement** : Le client saisit ses informations de carte et confirme la transaction.
4. **Validation automatique** : SumUp notifie votre système, et la commande est validée automatiquement.
5. **Retour** : Le client retourne sur votre boutique après la finalisation.

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />
Utilisez "Carte Bancaire" ou "SumUp" pour vos clients.

**Montant minimum** | (montant)<br />
Définissez le montant minimum requis pour cette passerelle.

**Client ID** | (texte)<br />
L'identifiant public de votre intégration SumUp.

**Client Secret** | (texte)<br />
La clé secrète utilisée pour l'authentification.

**Statut** | (menu déroulant)<br />
Réglez sur **"Actif"** pour activer la passerelle.

**Mode de fonctionnement** | (Test/Live)<br />
- **Mode Test** : Pour vos tests.
- **Mode Live** : Pour les transactions réelles.
