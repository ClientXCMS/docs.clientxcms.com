---
sidebar_position: 5
---

# Personnels 

L'espace d'administration est sécurisé par un système d'authentification par des comptes autorisés avec un mot de passe et un email. Vous pouvez ajouter des autorisations à votre personnel en allant dans l'onglet `Paramètres` puis `Sécurité` et enfin `Personnels`.

![img](/img/next_gen/settings/security/staffs/staff_list.png)
## Création
Pour créer un compte personnel, cliquez sur le bouton `Créer` en haut à droite de la page.
![img](/img/next_gen/settings/security/staffs/staff_create.png)

**Nom d'utilisateur**(texte) : Nom d'utilisateur du compte.

**Nom de famille**(texte) : Nom de famille du compte.

**Prénom**(texte) : Prénom du compte.

**Adresse E-mail**(email) : Adresse E-mail du compte.

**Mot de passe**(texte) : Mot de passe du compte. Laissez vide pour définir le mot de passe par e-mail

**Expiration**(date) : Date d'expiration du compte. Laissé vide pour un compte illimité.

**Langue**(texte) : Langue du compte.

**Signature**(texte) : signature du compte.

**Rôle**(texte) : Rôle du compte.

Puis cliquez sur Créer. Le compte pourra s'authentifier avec l'email et le mot de passe défini sur la page /admin/login.
## Edition
![img](/img/next_gen/settings/security/staffs/staff_show.png)

**Nom d'utilisateur**(texte) : Nom d'utilisateur du compte.

**Nom de famille**(texte) : Nom de famille du compte.

**Prénom**(texte) : Prénom du compte.

**Adresse E-mail**(email) : Adresse E-mail du compte.

**Mot de passe**(texte) : Mot de passe du compte. Laissez vide pour définir le mot de passe par e-mail

**Expiration**(date) : Date d'expiration du compte. Laissé vide pour un compte illimité.

**Langue**(texte) : Langue du compte.

**Signature**(texte) : signature du compte.

**Rôle**(texte) : Rôle du compte.

Puis cliquez sur Sauvegarder
## Historique des connexions
Vous pouvez voir l'historique des connexions du personnel dans la page d'édition du personnel.
![img](/img/next_gen/settings/security/staffs/staff_log.png)
## Suppression
Vous pouvez supprimer un compte personnel en cliquant sur le bouton rouge dans la colonne "Actions". Une confirmation vous sera demandé
Le personnel ne pourra plus s'authentifier au compte personnel.

## Historique des actions
Vous pouvez voir l'historique des actions du personnel en cliquant sur le bouton "Voir l\'historique des actions du personnel"
![img](/img/next_gen/settings/security/staffs/staff_actionlog.png)

## Réinitialiser le mot de passe
### Par force
- Connectez-vous à votre base de données MySQL via l'interface phpMyAdmin.

:::info
Vous pouvez retrouver vos identifiants dans la page base de données de votre espace client.
:::
- Générez un mot de passe depuis [https://www.motdepasse.xyz](https://www.motdepasse.xyz/)

- Générez le hash du mot de passe depuis [https://www.bcrypt.fr](https://www.bcrypt.fr/)
- Executez cette requête SQL pour modifier le mot de passe `UPDATE admins SET password = 'hash'`
- Remplacez `hash` par le hash généré précédemment.
- Le mot de passe du personnel sera réinitialisé.
### Depuis l'email
- Cliquez sur le bouton "Réinitialiser le mot de passe" dans la page de connexion.
- Indiquez l'email du personnel.
- Un email sera envoyé au personnel pour réinitialiser son mot de passe.
- Le personnel pourra réinitialiser son mot de passe en cliquant sur le lien dans l'email.
- Si le personnel ne reçoit pas l'email, vérifiez le dossier spam de l'email ou faites une demande de réinitialisation de mot de passe par force.
