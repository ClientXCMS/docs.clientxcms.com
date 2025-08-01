# Fonds

> Cette page présente la configuration et l’usage de l'addon **Funds** pour ClientXCMS.
> Objectif : permettre aux clients de créditer leur solde (pré-paiement) et, si vous l’autorisez, de **transférer** des fonds vers d’autres comptes.

---

## 1. Principe général

1. **Crédit de compte**

   * Le client choisit un montant (dans la fourchette autorisée) et règle via la passerelle de paiement de son choix.
   * Le solde **ClientXCMS Balance** est immédiatement mis à jour après validation du paiement.
2. **Transfert de fonds** (optionnel)

   * Si activé, un client peut envoyer tout ou partie de son solde vers un autre compte.
   * Des règles (délai, minimum, maximum, dépôt préalable) évitent les abus.
3. **Suivi & historique**

   * Tableau d’administration pour tracer tous les transferts.
   * Page « Moyens de paiement » côté client avec historique détaillé.

---

## 2. Prérequis

Une fois l’extension activée :

* **Administration → Paramètres → Paramètres des extensions → Fonds**
* Gestion des transferts : **Administration → Paramètres → Paramètres des extensions → Fonds » (onglet *Transferts*)**

| Élément     | Détail / Version                                                     |
| ----------- | -------------------------------------------------------------------- |
| Add-on      | **Funds** (gratuit, core)                                            |
| Passerelle  | Au moins une passerelle active (Stripe, PayPal, etc.)                |
| Rôle client | Autorisation « Ajouter / transférer des fonds » (activée par défaut) |

---

## 3. Paramètres globaux

![img](/img/next_gen/extensions/addons/fund/fonds1.png)

| Section                  | Champ                                 | Fonction                                       | Exemple                 |
| ------------------------ | ------------------------------------- | ---------------------------------------------- | ----------------------- |
| **Créditer des fonds**   | Montant minimum / maximum             | Limites pour un dépôt unique                   | `5` · `1000`            |
| **Transférer des fonds** | *Case* « Autoriser les transferts »   | Active ou non la fonctionnalité                | ✅ / ❌                   |
|                          | Montant minimum / maximum (transfert) | Plage autorisée pour un transfert              | `5` · `1000`            |
|                          | Délai de transfert (minutes)          | Anti-spam entre deux transferts du même client | `5`                     |
|                          | Dépôt minimum requis                  | Solde à créditer avant de pouvoir transférer   | `5` (0 pour désactiver) |

> Les montants suivent la devise principale de votre boutique.

Cliquez **Enregistrer** pour appliquer.

---

## 4. Tableau des transferts (administration)

![img](/img/next_gen/extensions/addons/fund/fonds2.png)

* **#** : identifiant interne
* **Client / Destinataire**
* **Montant**
* **Statut** : *Terminé* / *En attente* / *Annulé*
* **Date de transfert**
* **Créé** : date de la demande

Utilisez les filtres standards (date, client, statut) pour vos audits ou litiges.

---

## 5. Crédits et transferts côté client

![img](/img/next_gen/extensions/addons/fund/fonds3.png)

> **Mon compte → Moyens de paiement**

### 5.1 Créditer mon compte

1. Saisir un montant (entre mini & maxi).
2. Sélectionner la passerelle de paiement.
3. Valider : le solde est mis à jour après succès du paiement.

### 5.2 Transférer des fonds (si activé)

1. Indiquer le montant et l’e-mail du destinataire.
2. Vérifier le résumé : limites, solde, délai restant.
3. Cliquer **Transférer**.
4. Le destinataire reçoit instantanément le crédit et un e-mail de notification (si activé).

Un tableau récapitule **Historique des transferts** (statut + actions possibles, ex. annulation tant que *En attente*).

---

## 6. Bonnes pratiques

1. **Limites équilibrées** : fixez un min/max cohérents avec vos tarifs pour éviter micro-paiements coûteux ou dépôts trop élevés.
2. **Anti-fraude** : maintenez un délai de quelques minutes entre deux transferts et imposez un dépôt minimum avant tout transfert.
3. **Support** : gardez l’ID du transfert pour toute réclamation.
4. **Communication** : précisez dans vos CGU que le solde n’est pas remboursable (si tel est votre choix légal).
5. **Logs** : vérifiez régulièrement la liste des transferts pour détecter d’éventuelles anomalies.

