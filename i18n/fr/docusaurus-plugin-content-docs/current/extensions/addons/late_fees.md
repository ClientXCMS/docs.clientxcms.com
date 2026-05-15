# Pénalités de retard

L'extension **Pénalités de retard** vous permet d'automatiser l'application de frais supplémentaires sur les factures impayées après leur date d'échéance. Elle offre une grande flexibilité pour configurer des montants fixes ou en pourcentage, gérer des périodes de grâce et même excepter certains clients.

:::info
Le traitement des pénalités s'effectue automatiquement chaque jour à **06:00** via une tâche planifiée.
:::

## Configuration globale

Pour configurer les pénalités de retard, rendez-vous dans **Paramètres > Facturation > Paramètres des pénalités**.

![Paramètres des pénalités de retard](/img/next_gen/extensions/addons/late_fees/admin_settings.png)

### Paramètres disponibles :

| Paramètre | Description |
| :--- | :--- |
| **Activer les pénalités de retard** | Active ou désactive globalement le traitement automatique. |
| **Type de pénalité** | Choisissez entre un montant fixe ou un pourcentage du montant de la facture. |
| **Montant de la pénalité** | La valeur à appliquer (ex: 10 pour 10% ou 5.00 pour 5€). |
| **Plafond maximal** | (Optionnel) Définit le montant maximum qu'une pénalité peut atteindre. |
| **Délai de grâce (jours)** | Nombre de jours après la date d'échéance avant que la pénalité ne soit appliquée. |
| **Jours d'avertissement avant** | Nombre de jours avant l'échéance pour envoyer un email d'avertissement. |
| **Pénalités récurrentes** | Si activé, la pénalité sera réappliquée périodiquement si la facture reste impayée. |
| **Intervalle de récurrence (jours)** | Fréquence à laquelle la pénalité récurrente est appliquée. |
| **Texte légal** | Texte affiché sur la facture pour justifier la pénalité (disponible en plusieurs langues). |
| **Notifications** | Possibilité d'envoyer un email d'avertissement avant application et un email une fois la pénalité appliquée. |

## Exemptions clients

Il est possible d'exclure certains clients de l'application automatique des pénalités (par exemple pour des clients VIP ou des comptes institutionnels).

Accédez à la section **Exemptions clients** en bas de la page des paramètres.

![Exemptions clients](/img/next_gen/extensions/addons/late_fees/exceptions_client.png)

1. Recherchez le client à excepter dans le champ **Client**.
2. Indiquez une **Raison** (optionnel) pour conserver une trace.
3. Cliquez sur **Ajouter une exemption**.

## Gestion des pénalités

Vous pouvez suivre l'ensemble des pénalités appliquées dans la page **Pénalité de retard** accessible via le menu d'administration.

![Toutes les pénalités](/img/next_gen/extensions/addons/late_fees/admin_show_late_fees.png)

Cette page affiche des statistiques globales :
- **Total appliquées** : Nombre de pénalités générées.
- **Montant total** : Valeur cumulée des pénalités.
- **Total encaissé** : Montant des pénalités payées par les clients.
- **En attente** : Montant restant à percevoir.

Vous pouvez filtrer la liste par statut (En attente, Appliquée, Payée, Annulée), par client ou par date.

## Application manuelle

Si vous avez besoin d'ajouter une pénalité ponctuelle à une facture spécifique, vous pouvez le faire manuellement en utilisant le bouton **Appliquer une pénalité manuelle**.

![Appliquer une pénalité manuelle](/img/next_gen/extensions/addons/late_fees/add_manual_late_fees.png)

Il suffit de sélectionner la facture concernée et d'indiquer le montant de la pénalité à appliquer immédiatement. La pénalité sera alors ajoutée à la facture (ou créée séparément selon votre configuration).

## Détail et annulation

En cliquant sur **Afficher** pour une pénalité spécifique, vous accédez à ses détails et pouvez l'annuler si nécessaire.

![Annuler la pénalité](/img/next_gen/extensions/addons/late_fees/cancel_fees.png)

Pour annuler une pénalité :
1. Indiquez une raison dans le champ **Notes**.
2. Cliquez sur **Annuler la pénalité**.

Une fois annulée, le statut passera à **Annulée** et le montant ne sera plus dû.
