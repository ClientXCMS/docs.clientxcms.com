---
slug: nouvelle-version-2.15.1
title: Nouvelle version 2.15.1
authors: [martindev]
---
# v2.15.1

Nous sommes heureux d'annoncer la sortie de la version **2.15.1** de ClientXCMS !
![version 2.15.1](/img/blog/versions/v2.15.1.png)

<!-- truncate -->

### Ajouts
- ➕ Ajout de nouveaux événements enregistrés dans l’historique des actions (nouvelle inscription, création de demande, demande fermée, demande répondue, panier complété) en vue de l’intégration d’un widget sur le tableau de bord.
- ➕ Ajout d’un champ "read_at" pour suivre la date de lecture des e-mails.
- ➕ Ajout du support de l’extension "helpdesk_autoreply" pour les réponses automatiques.
- ➕ Ajout d’une route dédiée permettant aux administrateurs de modifier leur mot de passe depuis leur profil.
- ➕ Mise en place d’une page dédiée aux statistiques des tickets du support (helpdesk).
- ➕ Ajout d’un seeder pour les questions de sécurité manquantes.

### Modifications
- 🔄 Mise en place d’un système extensible pour la gestion des types de facturation, avec introduction d’une nouvelle interface.
- 🔄 Amélioration du processus de configuration des produits pour une meilleure clarté et flexibilité.
- 🔄 Simplification de la gestion des adresses IP des proxys grâce au support des variables d’environnement.
- 🔄 Refonte de l’importation manuelle des modèles d’e-mails : désormais téléchargeables depuis la page des extensions avec prise en charge de paramètres dynamiques configurables.

### Corrections
- 🔧 Correction du support des cases à cocher dans le composant "repeater".
- 🔧 Correction du format de la date de facturation (passage de 'j/j' à 'j/m').
- 🔧 Correction de l’envoi de notification lié au statut des brouillons.
- 🔧 Correction d’un champ incorrect dans la commande "PurgeBasketCommand".
- 🔧 Correction d’une erreur liée à l’absence de "attachedUsers".
- 🔧 Correction de la langue incorrectement sélectionnée sur la page /admin/login.
- 🔧 Correction de la couleur principale appliquée côté interface client.
