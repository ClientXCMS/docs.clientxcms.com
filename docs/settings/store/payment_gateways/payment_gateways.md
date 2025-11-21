import DocCardList from '@theme/DocCardList';

# Passerelles de paiement

Dans **CLIENTXCMS**, une **passerelle de paiement** correspond à un **système de traitement des transactions financières** que vous proposez à vos clients dans votre boutique.
L'objectif est clair : **offrir des méthodes de paiement sécurisées, diversifiées et adaptées à votre clientèle**. Une bonne configuration des passerelles de paiement permet à vos clients de **régler leurs commandes facilement** tout en vous garantissant la sécurité des transactions.

Chaque passerelle peut être entièrement personnalisée : nom d'affichage, montant minimum, statut de visibilité, paramètres de connexion, etc.

Vous pouvez gérer les passerelles de paiement depuis :

`Paramètres` > `Paramètres de la boutique` > `Passerelles de paiement`

![Configuration d'une passerelle de paiement](/img/next_gen/settings/store/payment_gateways/balance/config.png)

:::tip Astuce
Une **diversité de moyens de paiement** augmente considérablement votre taux de conversion. Plus vous offrez d'options à vos clients, plus ils ont de chances de finaliser leur achat.
:::

## Pourquoi utiliser plusieurs passerelles de paiement ?

Les passerelles de paiement sont essentielles pour le bon fonctionnement de votre boutique. Elles représentent concrètement les moyens dont disposent vos clients pour vous régler — que ce soit par carte bancaire, PayPal, virement ou crédit boutique.

Configurer plusieurs passerelles vous permet de :

* Répondre aux préférences de paiement de tous vos clients
* Réduire l'abandon de panier en offrant des alternatives
* Sécuriser vos transactions avec des systèmes fiables
* Optimiser vos coûts de transaction selon les montants

:::tip Astuce
C'est comme avoir **plusieurs caisses dans un magasin** 🏪 — certains clients préfèrent payer en espèces, d'autres par carte. Plus vous offrez de choix, plus vous fidélisez votre clientèle.
:::

## Passerelles disponibles

CLIENTXCMS supporte nativement plusieurs passerelles de paiement populaires :

<DocCardList />

### Types de passerelles

Les passerelles se répartissent en plusieurs catégories :

| Type de passerelle         | Description                                 | Exemples          |
| -------------------------- | ------------------------------------------- | ----------------- |
| **Cartes bancaires** | Paiement direct par carte de crédit/débit | Stripe, Stancer   |
| **Portefeuilles**    | Solutions de paiement en ligne              | PayPal            |
| **Virements**        | Transferts bancaires traditionnels          | Virement bancaire |
| **Crédit boutique** | Système de solde interne                   | Balance           |

## Configuration des passerelles

### Accès à la configuration

Pour configurer une passerelle de paiement :

1. Rendez-vous dans `Paramètres` > `Paramètres de la boutique`
2. Sélectionnez la section **« Passerelles de paiement »**
3. Choisissez la passerelle que vous souhaitez configurer

### Paramètres communs

Chaque passerelle dispose de paramètres de base identiques :

**Nom** | (texte)`<br />`

Le nom d'affichage de la passerelle tel qu'il apparaîtra à vos clients lors du paiement.

**Montant minimal** | (montant)`<br />`

Montant minimal requis pour que cette passerelle soit proposée aux clients.

**Statut** | (menu déroulant)`<br />`

Définit la visibilité et la disponibilité de la passerelle :

* **Actif** : Visible et utilisable par tous les clients
* **Non référencé** : Accessible uniquement aux administrateurs pour tests
* **Caché** : Totalement invisible pour tous

:::info Information
Certaines passerelles nécessitent des **paramètres de connexion spécifiques** (clés API, identifiants marchands, etc.). Consultez la documentation de chaque passerelle pour connaître les champs requis.
:::

### Exemple de configuration

Voici un exemple de configuration pour la passerelle **Balance** (crédit boutique) :

![Exemple de configuration Balance](/img/next_gen/settings/store/payment_gateways/balance/config.png)

Cette passerelle permet aux clients d'utiliser leur crédit boutique pour régler leurs commandes.

## Statut des passerelles

Le **statut** détermine la visibilité et l'accessibilité de chaque passerelle :

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

<div style={{ flex: 1 }}>

| Statut                     | Visibilité                               |
| -------------------------- | ----------------------------------------- |
| **Actif**            | Visible et utilisable par tous            |
| **Non référencé** | Accessible aux administrateurs uniquement |
| **Caché**           | Totalement invisible                      |

</div>

<div style={{ flex: 1, textAlign: 'center' }}>

:::tip Conseil
Utilisez le statut **« Non référencé »** pour tester une nouvelle passerelle avant de la rendre publique.

:::

</div>

</div>

## Gestion des factures

### Modifier la passerelle d'une facture

Vous pouvez changer la méthode de paiement d'une facture existante :

1. Rendez-vous dans la section **« Factures »**
2. Sélectionnez la facture à modifier
3. Changez la passerelle de paiement dans les détails de la facture
4. Sauvegardez les modifications

![Modification de passerelle sur une facture](/img/next_gen/settings/store/payment_gateways/invoice.png)

:::warning Attention
La modification de la passerelle d'une facture peut affecter le processus de paiement en cours. Assurez-vous que le client en soit informé.
:::

## Configuration avancée

### Montants minimums

Chaque passerelle peut avoir un **montant minimum** différent :

- Utile pour éviter les frais sur les petites transactions
- Permet d'orienter les clients vers les passerelles les plus rentables
- Améliore l'expérience utilisateur en masquant les options non pertinentes

### Gestion des devises

CLIENTXCMS gère automatiquement :

- La **conversion de devises** si nécessaire
- L'**affichage des montants** dans la devise du client
- Les **taux de change** en temps réel

## Sécurité des paiements

### Bonnes pratiques

* **Utilisez uniquement des passerelles certifiées** PCI-DSS
* **Activez la vérification 3D Secure** quand disponible
* **Surveillez régulièrement** les transactions suspectes
* **Tenez à jour** les configurations et clés API

### Conformité

Toutes les passerelles intégrées respectent :

- Les standards **PCI-DSS** pour la sécurité des cartes
- Le règlement **RGPD** pour la protection des données
- Les exigences **DSP2** pour l'authentification forte.

## Configuration par passerelle

Chaque passerelle dispose de sa propre documentation détaillée :

* **Configuration spécifique** selon le fournisseur
* **Paramètres de connexion** requis
* **Fonctionnalités avancées** disponibles
* **Résolution des problèmes** courants

Consultez la documentation de chaque passerelle pour obtenir les instructions détaillées de configuration.

:::tip À retenir
Une **configuration soignée de vos passerelles de paiement** est cruciale pour maximiser vos conversions. Testez régulièrement vos moyens de paiement et diversifiez vos options selon votre clientèle.
:::
