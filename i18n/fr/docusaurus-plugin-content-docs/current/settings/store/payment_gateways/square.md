---
translated: true
sidebar_position: 7
---

# Square

La passerelle **Square** vous permet d'accepter des paiements par carte bancaire via la plateforme Square.

Vous pouvez gérer les passerelles de paiement depuis :

`Paramètres` > `Paramètres de la boutique` > `Square`

![Configuration Square](/img/next_gen/settings/store/payment_gateways/square/config.png)

## Récupération de vos clés

Pour configurer Square, vous devez récupérer vos identifiants depuis le portail développeur de Square :

1. Connectez-vous au [Square Developer Portal](https://developer.squareup.com/).
2. Créez une nouvelle **Application** ou sélectionnez-en une existante.
3. Dans le menu de gauche, allez dans **Credentials**.
4. Récupérez votre **Application ID** et votre **Access Token**.

:::info Environnement
Assurez-vous d'utiliser les identifiants correspondant à votre mode de fonctionnement (**Sandbox** pour les tests ou **Production** pour les paiements réels).
:::

## Fonctionnement du système

### Processus de paiement

1. **Sélection de la méthode de paiement** : Le client choisit "Square" lors de la commande.
2. **Saisie du paiement** : Le client saisit ses informations de carte en toute sécurité.
3. **Validation de la transaction** : Square traite la transaction et renvoie une confirmation.
4. **Retour automatique** : Le client est redirigé vers votre boutique.
5. **Validation** : La commande est traitée immédiatement après le succès du paiement.

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />
Utilisez "Carte Bancaire" ou "Square" pour vos clients.

**Montant minimum** | (montant)<br />
Définissez le montant minimum requis pour cette passerelle.

**Application ID** | (texte)<br />
L'identifiant unique de votre application Square.

**Access Token** | (texte)<br />
Le jeton utilisé pour authentifier les requêtes API vers Square.

**Statut** | (menu déroulant)<br />
Réglez sur **"Actif"** pour activer la passerelle.

**Mode de fonctionnement** | (Sandbox/Live)<br />
- **Sandbox** : Pour vos tests avec des transactions fictives.
- **Live** : Pour les transactions réelles.
