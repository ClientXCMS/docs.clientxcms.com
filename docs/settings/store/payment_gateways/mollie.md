---
sidebar_position: 5
---

# Mollie (Paiement par carte)

La passerelle de paiement Mollie permet d'accepter les paiements via Cartes bleues.

Vous pouvez gérer les passerelles de paiement depuis :

`Paramètres` > `Paramètres de la boutique` > `Mollie`
    
![Configuration d'une passerelle de paiement](/img/next_gen/settings/store/payment_gateways/mollie/config.png)

## Mode live vs Mode Test
Le mode live de mollie permet d'accepter de vrais paiements (Utilisé en production).
Le mode test permet d'émettre des paiements de tests sans dépenser de l'argent réel (Utilisé en développement ou pour tester)
## Récupérer ses clés
1. Connectez-vous à votre **tableau de bord Mollie**.
2. Rendez-vous dans **Développeurs > Clés API**.
3. Cliquez sur Copier pour utiliser les clés API.

Puis récupérez votre clé live et clé test
![img](/img/next_gen/settings/store/payment_gateways/mollie/keys.png)

## Fonctionnement du système

### Processus de paiement

Le paiement via Mollie suit un processus en plusieurs étapes :
1. **Sélection du moyen de paiement** : Le client choisit "Mollie" lors du checkout
2. **Redirection vers Mollie** : Le client est dirigé vers les serveurs de paiement Mollie
3. **Validation du paiement** : Le client confirme la transaction sur Mollie
4. **Retour automatique** : Redirection vers votre boutique
5. **Notification** : Mollie confirme le paiement à votre système
6. **Validation automatique** : La commande est immédiatement traitée
7. **Confirmation client** : Email de confirmation et activation du service

## Configuration de la passerelle
### Paramètres essentiels
**Nom de la passerelle** | (texte)<br />
Utilisez simplement "Mollie" pour une reconnaissance immédiate par vos clients.

**Montant minimal** | (montant)<br />
Mollie n'impose pas de montant minimal. Vous pouvez configurer 0.50€ pour accepter tous les montants.


**Clé API Mollie** | (texte)<br />
La clé API secrète que Mollie fournit pour authentifier les transactions.

**Statut** | (menu déroulant)<br />
Maintenez la passerelle en statut **"Actif"** pour maximiser les conversions.

**Mode de fonctionnement** | (test/live)<br />
- **Mode test** : Pour vos tests avec des transactions fictives
- **Mode live** : Pour les vraies transactions avec vos clients

