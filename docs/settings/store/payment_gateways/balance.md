# Balance (Crédit boutique)

La passerelle **Balance** dans **CLIENTXCMS** correspond au **système de crédit boutique interne** qui permet à vos clients d'utiliser un solde prépayé pour régler leurs commandes.
L'objectif est clair : **simplifier les paiements récurrents, fidéliser votre clientèle et offrir une expérience de paiement instantanée**. Un système de balance bien configuré permet à vos clients de **régler leurs achats en un clic** tout en vous garantissant un paiement sécurisé.

La passerelle Balance peut être entièrement personnalisée : nom d'affichage, montant minimum, conditions d'utilisation, etc.

Vous pouvez configurer la passerelle Balance depuis :

`Paramètres` > `Paramètres de la boutique` > `Balance`

![Configuration de la passerelle Balance](/img/next_gen/settings/store/payment_gateways/balance/config.png)

:::tip Astuce
Le système de **crédit boutique** encourage les clients à prépayer leurs services, ce qui améliore votre trésorerie et réduit les risques d'impayés.
:::

## Pourquoi utiliser le système Balance ?

La passerelle Balance est un outil puissant pour optimiser la gestion des paiements de votre boutique. Elle représente concrètement un portefeuille virtuel que vos clients peuvent alimenter et utiliser pour leurs achats.

Mettre en place un système de balance vous permet de :

* Simplifier le processus de paiement pour les clients réguliers
* Réduire les frais de transaction sur les petits montants
* Améliorer votre trésorerie avec des paiements anticipés
* Fidéliser votre clientèle avec un système de crédit pratique
* Éviter les problèmes de paiement récurrent

:::tip Astuce
C'est comme avoir un **porte-monnaie numérique dédié** à votre boutique 💳 — vos clients rechargent leur solde quand ils le souhaitent et payent instantanément leurs services.
:::

## Fonctionnement du système

### Processus de paiement

Le paiement par Balance suit un processus simplifié :

1. **Sélection du moyen de paiement** : Le client choisit "Balance" lors du checkout
2. **Vérification du solde** : Le système vérifie que le solde est suffisant
3. **Déduction automatique** : Le montant est automatiquement déduit du solde
4. **Validation instantanée** : La commande est immédiatement validée
5. **Confirmation** : Le client reçoit sa confirmation de paiement
6. **Livraison** : Les services sont provisionnés automatiquement

### Avantages pour les clients

| Avantage                       | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| **Paiement instantané** | Pas d'attente de validation bancaire                |
| **Sécurité maximale**  | Pas de saisie de données bancaires à chaque achat |
| **Contrôle du budget**  | Gestion claire des dépenses prépayées            |
| **Simplicité d'usage**  | Paiement en un clic                                 |

## Configuration de la passerelle

### Paramètres recommandés

**Nom de la passerelle** | (texte)

Nous recommandons d'utiliser un nom explicite comme "Crédit boutique" ou "Solde compte" pour que vos clients comprennent immédiatement de quoi il s'agit.

**Montant minimal** | (montant)

Il est **fortement conseillé de configurer le montant minimal à 0€** pour permettre l'utilisation du solde sur tous les montants, même les plus petits.

**Statut** | (menu déroulant)

Gardez la passerelle en statut **"Actif"** pour que tous vos clients puissent l'utiliser.

:::info Configuration optimale
La configuration idéale pour la Balance est :

- **Nom** : "Crédit boutique" ou "Solde compte"
- **Montant minimal** : 0€
- **Statut** : Actif
  :::

### Interface de configuration

![Configuration complète de la Balance](/img/next_gen/settings/store/payment_gateways/balance/config.png)

Cette interface vous permet de personnaliser entièrement l'affichage et le comportement de la passerelle Balance.

## Gestion des soldes clients

### Alimenter le solde d'un client

Pour ajouter du crédit au solde d'un client :

1. Rendez-vous dans le menu **« Clients »**
2. Sélectionnez le client concerné
3. Modifiez le champ **« Solde »** sur la page du client
4. Cliquez sur **« Enregistrer »** pour valider

### Méthodes d'alimentation

Le solde client peut être alimenté de plusieurs façons :

| Méthode                      | Description                                             |
| ----------------------------- | ------------------------------------------------------- |
| **Ajout manuel**        | L'administrateur crédite directement le compte         |
| **Addon Ajout de fond** | Les clients peuvent recharger leur solde eux-mêmes     |
| **Addon carte cadeaux**      | Permet aux clients d'utiliser des cartes cadeaux pour créditer leur solde              |

:::tip Conseil
Utilisez l'**addon "Ajout de fond"** pour permettre aux clients de recharger leur solde de manière autonome. Cela réduit votre charge administrative.
:::

:::warning Important

Assurez-vous que vos **conditions générales de vente** mentionnent clairement les règles d'utilisation du crédit boutique (durée de validité, remboursement, etc.).

:::
:::tip À retenir
La passerelle Balance est un **outil de fidélisation et d'optimisation** majeur. Elle simplifie l'expérience client tout en améliorant votre gestion financière. Encouragez son utilisation !
:::
