---
sidebar_position: 4
---

# Personnels

Dans **CLIENTXCMS**, la gestion des **comptes personnel** constitue le cœur de la sécurité administrative de votre plateforme. <br/>
L'objectif est stratégique : **contrôler précisément qui peut accéder à l'administration**, **définir les niveaux d'autorisation appropriés** et **tracer toutes les activités administratives**. Une gestion rigoureuse des comptes administrateurs protège votre système contre les accès non autorisés et garantit une responsabilité claire des actions.

Cette section permet de créer, gérer et surveiller tous les comptes ayant accès à l'interface d'administration.

Vous pouvez gérer les personnels depuis :

`Paramètres` > `Sécurité` > `Personnels`

![Liste des comptes personnels](/img/next_gen/settings/security/staffs/staff_list.png)

:::tip Astuce
Chaque compte administrateur est une **clé d'accès** à votre système. 
Traitez-les avec le même soin que les clés de votre domicile — limitez le nombre et surveillez leur usage.
:::

## Pourquoi gérer les comptes personnels ?

La gestion des administrateurs est essentielle pour :

* **Sécuriser l'accès** à l'interface d'administration
* **Répartir les responsabilités** selon les rôles et compétences
* **Tracer les actions** pour l'audit et la responsabilité
* **Limiter les risques** liés aux comptes compromis
* **Faciliter la collaboration** en équipe avec des accès appropriés

:::tip Astuce
C'est comme gérer les accès à un coffre-fort 🔐 — chaque personne doit avoir exactement les droits dont elle a besoin, ni plus, ni moins.
:::

## Création d'un compte personnel

### Processus de création

Pour ajouter un nouveau membre à votre équipe administrative :

1. Cliquez sur le bouton **"Créer"** en haut à droite
2. Remplissez le formulaire de création
3. Définissez les permissions appropriées
4. Validez la création du compte

![Formulaire de création d'un compte personnel](/img/next_gen/settings/security/staffs/staff_create.png)

### Informations du compte

**Nom d'utilisateur** | (texte unique)<br />
Identifiant unique pour ce compte administrateur.
Utilisez une convention claire (prénom.nom, initiales, etc.).

**Prénom** | (texte)<br />
Prénom de la personne pour identification et personnalisation.

**Nom de famille** | (texte)<br />
Nom de famille pour identification complète.

**Adresse e-mail** | (e-mail unique)<br />
Adresse e-mail professionnelle utilisée pour :
- L'authentification au système
- Les notifications importantes
- La récupération de mot de passe

### Configuration d'accès

**Mot de passe** | (optionnel)<br />
Définissez un mot de passe initial ou laissez vide pour envoyer un e-mail d'activation.

- **Mot de passe défini** : L'utilisateur peut se connecter immédiatement
- **Champ vide** : Un e-mail d'activation sera envoyé

**Date d'expiration** | (optionnel)<br />
Définit une date limite d'utilisation du compte.

- **Vide** : Compte permanent
- **Date définie** : Accès automatiquement révoqué à cette date

:::tip Bonnes pratiques
- Utilisez des **comptes temporaires** pour les prestataires externes
- Définissez des **dates d'expiration** pour les stages ou missions courtes
- **Révisez régulièrement** les dates d'expiration
:::

### Personnalisation

**Langue** | (menu déroulant)<br />
Langue d'affichage de l'interface d'administration pour cet utilisateur.

**Signature** | (texte)<br />
Signature personnalisée utilisée dans :
- Les réponses aux tickets de support
- Les communications officielles
- Les rapports générés

**Rôle** | (menu déroulant)<br />
Définit les permissions et l'accès de l'utilisateur aux différentes sections.

## Modification d'un compte

### Interface de modification

Accédez aux détails d'un compte pour le modifier :

![Interface de modification d'un compte](/img/next_gen/settings/security/staffs/staff_show.png)

### Modifications courantes

- **Changement de rôle** : Promotion ou limitation des accès
- **Mise à jour des informations** : Changement d'e-mail, nom, etc.
- **Extension d'expiration** : Prolongation d'accès temporaire
- **Réinitialisation de mot de passe** : En cas d'oubli ou de compromission

:::warning Sécurité
Toute modification d'un compte administrateur est **tracée et horodatée**. Ces actions sont visibles dans l'historique des actions.
:::

## Surveillance et audit

### Historique des connexions

Chaque compte dispose d'un historique détaillé des connexions :

![Historique des connexions](/img/next_gen/settings/security/staffs/staff_log.png)

**Informations trackées** :
- Date et heure de connexion
- Adresse IP d'origine
- Navigateur et système d'exploitation
- Durée de la session
- Tentatives d'échec

### Historique des actions

Surveillez toutes les actions effectuées par chaque administrateur :

![Historique des actions](/img/next_gen/settings/security/staffs/staff_actionlog.png)

**Actions enregistrées** :
- Modifications de configuration
- Gestion des clients et services
- Actions sur les factures
- Modifications de la boutique
- Accès aux données sensibles

### Analyse des comportements

Utilisez ces données pour :
- **Détecter les activités suspectes**
- **Auditer les modifications importantes**
- **Identifier les besoins de formation**
- **Optimiser les processus d'équipe**

## Gestion des mots de passe

### Réinitialisation par e-mail

**Méthode recommandée** pour la récupération :

1. Sur la page de connexion admin, cliquez **"Mot de passe oublié"**
2. Saisissez l'adresse e-mail du compte
3. Un lien de réinitialisation est envoyé par e-mail
4. L'utilisateur clique sur le lien et définit un nouveau mot de passe

**Avantages** :
- Processus sécurisé et automatisé
- Pas d'intervention manuelle nécessaire
- Respect des politiques de sécurité

### Réinitialisation manuelle (urgence)

En cas de problème avec la méthode e-mail :

:::warning Procédure d'urgence uniquement
Cette méthode nécessite un accès direct à la base de données et doit être utilisée uniquement en cas d'urgence absolue.
:::

**Étapes** :
1. Accédez à PHPMyAdmin (voir section [Base de données](./database))
2. Générez un mot de passe fort sur [motdepasse.xyz](https://www.motdepasse.xyz/)
3. Créez le hash bcrypt sur [bcrypt.fr](https://www.bcrypt.fr/)
4. Exécutez : `UPDATE admins SET password = 'hash_généré' WHERE email = 'email@admin.com'`
5. Informez l'administrateur du nouveau mot de passe

## Suppression de comptes

### Procédure de suppression

Pour supprimer définitivement un compte :

1. Cliquez sur le bouton rouge **"Supprimer"** dans la liste
2. Confirmez l'action dans la boîte de dialogue
3. Le compte est immédiatement désactivé

### Conséquences de la suppression

- **Accès révoqué** : Impossible de se connecter
- **Sessions fermées** : Déconnexion immédiate si connecté
- **Historique conservé** : Les actions passées restent tracées
- **Irréversible** : Le compte ne peut pas être restauré

:::tip Alternative à la suppression
Plutôt que de supprimer, considérez :
- **Désactivation temporaire** avec date d'expiration passée
- **Changement de rôle** vers un niveau sans permissions
- **Archivage** pour conserver l'historique
:::

## Bonnes pratiques de sécurité

### Principe du moindre privilège

1. **Analysez les besoins** : Quelles fonctions sont nécessaires ?
2. **Attribuez le rôle minimal** : Juste ce qu'il faut, pas plus
3. **Révisez régulièrement** : Les besoins évoluent-ils ?
4. **Auditez les accès** : Qui fait quoi, quand ?

### Gestion des comptes temporaires

- **Dates d'expiration systématiques** pour les prestataires
- **Révision mensuelle** des comptes actifs
- **Désactivation immédiate** en fin de mission
- **Documentation** des raisons d'accès

### Surveillance proactive

- **Alertes sur connexions inhabituelles** (IP, horaires)
- **Vérification des actions sensibles**
- **Formation** des équipes aux bonnes pratiques
- **Mise à jour** des mots de passe périodiquement

## Exemples de configuration

### Équipe restreinte

```
Admin principal : Tous droits, compte permanent
Support client : Tickets + facturation, compte permanent  
Stagiaire : Consultation seule, expiration 3 mois
```

### Organisation importante

```
Directeur : Tous droits, compte permanent
Chef projet : Gestion boutique + services, permanent
Support N1 : Tickets clients, permanent
Support N2 : Tickets + facturation, permanent
Prestataire : Migration données, expiration 1 mois
```

### Agence avec rotation

```
Admin agence : Tous droits sauf sécurité, permanent
Développeur 1 : Paramètres techniques, permanent
Développeur 2 : Boutique + contenu, temporaire 6 mois
Client final : Consultation seule, accès limité
```

:::tip À retenir
La gestion des comptes administrateurs est un équilibre entre sécurité et praticité. Plus vous êtes rigoureux dans la gestion des accès, plus votre plateforme est sécurisée. Surveillez, auditez et adaptez régulièrement selon l'évolution de votre équipe.
:::
