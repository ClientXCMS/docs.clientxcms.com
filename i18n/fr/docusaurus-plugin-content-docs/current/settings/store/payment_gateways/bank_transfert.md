# Virement bancaire

La passerelle **Virement bancaire** dans **CLIENTXCMS** correspond au **système de paiement traditionnel par transfert bancaire** qui permet à vos clients de régler leurs commandes en transférant directement des fonds depuis leur compte bancaire vers le vôtre. <br/>
L'objectif est clair : **offrir une alternative de paiement sécurisée pour les clients préférant les virements traditionnels, particulièrement pour les montants élevés**. Un système de virement bien configuré permet à vos clients de **payer en toute confiance** tout en vous garantissant la réception des fonds.

La passerelle Virement bancaire peut être entièrement personnalisée : nom d'affichage, montant minimum, instructions détaillées, coordonnées bancaires, etc.

Vous pouvez configurer la passerelle Virement bancaire depuis :

`Paramètres` > `Paramètres de la boutique` > `Virement bancaire`

![Instructions de virement sur une facture](/img/next_gen/settings/store/payment_gateways/bank_transfert/bank_transfert.png)

:::tip Astuce
Le **virement bancaire** est particulièrement apprécié par les entreprises et pour les montants importants, car il offre une **traçabilité maximale** et évite les frais de carte bancaire.
:::

## Pourquoi proposer le virement bancaire ?

La passerelle Virement bancaire est un moyen de paiement traditionnel mais essentiel pour votre boutique. Elle représente concrètement une méthode de paiement directe et sécurisée, sans intermédiaire de paiement.

Proposer le virement bancaire vous permet de :

* Attirer les clients préférant les paiements bancaires traditionnels
* Éviter les frais de transaction des passerelles en ligne
* Sécuriser les paiements de montants élevés
* Répondre aux besoins des entreprises et administrations
* Offrir une alternative en cas de problème avec d'autres passerelles

:::tip Astuce
Le virement bancaire est comme un **chèque numérique** 🏛️ — il rassure par sa simplicité et sa sécurité, particulièrement pour les clients corporate ou les achats importants.
:::

## Fonctionnement du système

### Processus de paiement

Le paiement par virement bancaire suit un processus manuel en plusieurs étapes :

1. **Sélection du moyen de paiement** : Le client choisit "Virement bancaire" lors du checkout
2. **Génération de la facture** : Une facture avec les coordonnées bancaires est créée
3. **Affichage des instructions** : Le client reçoit toutes les informations nécessaires
4. **Exécution du virement** : Le client effectue le virement depuis sa banque
5. **Envoi de la preuve** : Le client transmet sa preuve de virement (optionnel)
6. **Validation manuelle** : Vous confirmez la réception du paiement
7. **Activation du service** : La commande est traitée et livrée

### Caractéristiques du virement

| Caractéristique        | Description                                        |
|------------------------|----------------------------------------------------|
| **Délai de traitement** | 1 à 3 jours ouvrés selon les banques            |
| **Sécurité maximale**   | Transfert direct entre comptes bancaires        |
| **Traçabilité complète** | Référence unique pour chaque transaction       |
| **Pas de limite**       | Montants élevés acceptés                         |

## Configuration de la passerelle

### Paramètres essentiels

**Nom de la passerelle** | (texte)<br />

Utilisez un nom clair comme "Virement bancaire" ou "Paiement par virement" pour une identification immédiate.

**Montant minimal** | (montant)<br />

Définissez un montant minimal approprié. Beaucoup d'hébergeurs configurent un minimum de 50€ ou 100€ pour rentabiliser cette méthode.

**Statut** | (menu déroulant)<br />

Gardez la passerelle en statut **"Actif"** si vous souhaitez proposer cette option à tous vos clients.

**Instructions de paiement** | (texte riche)<br />

Rédigez des instructions claires et complètes qui apparaîtront sur la facture. Incluez :
- Vos coordonnées bancaires complètes (IBAN, BIC)
- La référence à mentionner (numéro de facture)
- Le délai de traitement attendu
- Vos coordonnées pour questions

:::info Configuration recommandée
Pour optimiser l'usage du virement bancaire :
- **Nom** : "Virement bancaire"
- **Montant minimal** : 50€ ou plus selon votre activité
- **Statut** : Actif
- **Instructions** : Complètes et détaillées
:::

### Exemple d'instructions de paiement

```
Coordonnées bancaires :
IBAN : FR76 1234 5678 9012 3456 7890 123
BIC : ABCDFRPP
Titulaire : Votre Société

Instructions :
1. Effectuez le virement pour le montant exact de la facture
2. Mentionnez impérativement la référence : [NUMERO_FACTURE]
3. Le traitement prend 1-3 jours ouvrés
4. Votre service sera activé dès réception du paiement

Questions ? Contactez-nous à comptabilite@votre-domaine.com
```

## Interface client

### Affichage sur la facture

Lorsqu'un client choisit le virement bancaire, toutes les informations nécessaires s'affichent clairement sur sa facture :

![Affichage des instructions de virement](/img/next_gen/settings/store/payment_gateways/bank_transfert/bank_transfert.png)

Cette présentation claire guide le client dans sa démarche de paiement.

### Informations affichées

La facture contient automatiquement :
- **Coordonnées bancaires complètes**
- **Montant exact à virer**
- **Référence unique à mentionner**
- **Instructions détaillées**
- **Délais de traitement**

## Gestion administrative

### Suivi des paiements

En tant qu'administrateur, vous devez :

1. **Surveiller régulièrement** vos comptes bancaires
2. **Rapprocher** les virements reçus avec les factures en attente
3. **Valider manuellement** chaque paiement dans le système
4. **Activer** les services correspondants

### Processus de validation

Pour valider un paiement par virement :

1. Identifiez le virement reçu sur votre compte
2. Retrouvez la facture correspondante grâce à la référence
3. Marquez la facture comme **"Payée"** dans l'administration
4. Le système active automatiquement les services

:::tip Conseil
Mettez en place une **routine quotidienne** de vérification des virements reçus pour minimiser les délais d'activation des services.
:::

## Avantages et inconvénients

### Avantages

| Avantage                | Description                                        |
|-------------------------|----------------------------------------------------|
| **Pas de frais de transaction** | Économies sur les commissions           |
| **Sécurité maximale**   | Transfert direct entre banques                   |
| **Montants élevés**     | Pas de limite de paiement                        |
| **Traçabilité**         | Preuve bancaire officielle                       |

### Inconvénients

| Inconvénient            | Description                                        |
|-------------------------|----------------------------------------------------|
| **Délai de traitement** | 1 à 3 jours ouvrés                               |
| **Gestion manuelle**    | Nécessite un suivi administratif                 |
| **Pas d'automatisation** | Validation manuelle requise                     |
| **Risque d'abandon**    | Processus plus long que les paiements instantanés |

## Bonnes pratiques

### Configuration optimale

* **Instructions complètes** : Ne laissez aucune ambiguïté
* **Coordonnées à jour** : Vérifiez régulièrement vos informations bancaires
* **Référence unique** : Utilisez le numéro de facture comme référence
* **Délais clairs** : Informez sur les temps de traitement

### Gestion quotidienne

* **Vérification régulière** des virements reçus
* **Traitement rapide** des validations de paiement
* **Communication proactive** avec les clients en cas de retard
* **Archivage** des preuves de virement reçues

### Communication client

* **Email de confirmation** lors de la réception du virement
* **Notifications** d'activation du service
* **Support réactif** pour toute question sur le processus
* **FAQ dédiée** aux paiements par virement

:::warning Important
Assurez-vous que vos **coordonnées bancaires sont toujours exactes** dans la configuration. Une erreur peut causer des retards importants ou des virements perdus.
:::

:::tip À retenir
Le virement bancaire est un **moyen de paiement complémentaire essentiel**, particulièrement pour les montants élevés et la clientèle professionnelle. Sa gestion manuelle est compensée par l'absence de frais et la sécurité maximale.
:::
