---
sidebar_position: 4
---
# Clients
Les clients sont les utilisateurs de votre espace client. Ils peuvent se connecter à leur espace client pour gérer leurs services, factures, tickets, etc. Ils peuvent se connecter via la page de connexion de l'espace client. Les clients peuvent s'inscrire via la page d'inscription de l'espace client ou manuellement via l'administration.

## Gestion des clients
Vous pouvez gérer les clients via l'administration. Vous pouvez voir la liste des clients, les éditer, les supprimer.
Les pastilles de couleur sur la première colonne de la liste des clients indiquent le statut du client. Les couleurs sont les suivantes :
- Vert : Le client est actif
- Jaune : Le client est suspendu ou en attente de confirmation
- Rouge : Le client est banni
![image](/img/next_gen/customers/customers.png)
Vous pouvez rechercher un client via la barre de recherche en haut de la page. Vous pouvez rechercher un client par son nom, prénom, email.

## Création de client via l'administration
Pour créer un client via l'administration, cliquez sur le bouton `Créer` en haut à droite de la page. Vous serez redirigé vers la page de création de client. 
![image](/img/next_gen/customers/create.png)
## Fiche client
Vous pouvez voir la fiche client en cliquant sur le bouton `Voir` sur la liste des clients. Vous pouvez voir les informations du client, ses services, ses factures, ses tickets, ses emails, ses moyens de paiement, son historique des actions sous forme de tableau.

![image](/img/next_gen/customers/show.png)

Vous pouvez éditer le client en cliquant sur le bouton `Mettre à jour les détails` en haut à droite de la page.
Vous pouvez également ajouter des notes ou avoir la dernière connexion du client avec son IP.

### Détails des informations du client

Chaque élement des tableaux sont cliquables pour voir les détails de chaque élément.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Services" label="Services">

![image](/img/next_gen/customers/services.png)

Vous pouvez voir les services du client sur la fiche client.
</TabItem>

<TabItem value="Factures" label="Factures">

![img](/img/next_gen/customers/invoices.png)

Vous pouvez voir les factures du client sur la fiche client.

</TabItem>

<TabItem value="Tickets" label="Tickets">

![img](/img/next_gen/customers/tickets.png)

Vous pouvez voir les tickets du client sur la fiche client.

</TabItem>

<TabItem value="E-mails" label="E-mails envoyés">

![img](/img/next_gen/customers/emails.png)

Vous pouvez voir les emails envoyés au client sur la fiche client.

</TabItem>
<TabItem value="Moyen de paiement" label="Moyens de paiements">

![img](/img/next_gen/customers/payment_methods.png)

Vous pouvez voir les moyens de paiement du client sur la fiche client. Ces données sont sensibles, elles sont stockées de manière sécurisée via des plateformes tierces comme Stripe.

</TabItem>
<TabItem value="Historique des actions" label="Historique des actions">

![img](/img/next_gen/customers/actions.png)

Vous pouvez voir l'historique des actions du client sur la fiche client. Cela vous permet de voir les actions effectuées sur le client.

Les actions sont les suivantes :
- Modification des informations du client
- Nouvelle connexion
- Changement de solde
- Réinitialisation du mot de passe
- Confirmation du compte
- Activation de la 2FA
- Désactivation de la 2FA

</TabItem>
</Tabs>
### Actions disponibles
Vous pouvez effectuer des actions sur le client via la fiche client. Les actions sont les suivantes :

![img](/img/next_gen/customers/actions.png)

#### Renvoyer le mail de confirmation
Vous pouvez renvoyer le mail de confirmation au client. Cela permet au client de confirmer son compte.
#### Confirmer le compte
Vous pouvez confirmer le compte automatiquement si le client a des difficultés à confirmer son compte.
#### Envoyer un email de réinitialisation de mot de passe
Vous pouvez envoyer un email de réinitialisation de mot de passe au client.
#### Envoyer un mail
Vous pouvez envoyer un mail au client via l'interface.

#### Suspendre le client
Vous pouvez suspendre le client si celui-ci ne respecte pas les conditions d'utilisation. Vous pouvez ajouter une raison ou suspendre ses services.

![img](/img/next_gen/customers/suspend.png)

#### Réactiver le client
Vous pouvez réactiver le client. Cela permet de réactiver le client après une suspension. Vous pouvez également réactiver ses services ou voir les raisons de la suspension.
#### Bannir le client
Vous pouvez bannir le client si celui-ci ne respecte pas les conditions d'utilisation. Vous pouvez ajouter une raison ou bannir ses services

![img](/img/next_gen/customers/ban.png)

#### Retirer la double authentification
Vous pouvez retirer la double authentification du client si celle-ci est activée.
#### Supprimer le client
Vous pouvez supprimer le client. Cela supprimera de manière douce le client en basculant son statut en "Supprimé".
## Sécurité
### Changement de mot de passe
Vous pouvez changer le mot de passe du client via la fiche client. Cela permet de changer le mot de passe du client en cas de perte de mot de passe.

### Automatisation de la confirmation de compte

Vous pouvez automatiser la confirmation de compte des clients. Cela permet d'automatiquement confirmer le compte des clients après leur inscription. Pour activer cette fonctionnalité, allez dans `Espace d'administration` > `Paramètres` > `Général` > `Sécurité` et activez l'option `Confirmation automatique de l'inscription`.

## Erreurs fréquentes
Erreur 500 lors de la connexion d'un client : Cette erreur vient généralement d'un problème de hashage du mot de passe. Vous pouvez réinitialiser le mot de passe du client pour résoudre ce problème.

Vous pouvez vérifier sur votre base de données si tout les mots de passe sont bien hashés de la même manière. Par exemple, si vous avez changé de méthode de hashage, il est possible que les anciens mots de passe ne soient pas reconnus. Les mots de passe doivent être hashés avec la même méthode pour être reconnus soit commançaient par `$2y$` ou `$argon2i`. Vous pouvez changer la méthode de hashage des mots de passe dans les paramètres de sécurité avec l'option `Driver de hashage`.