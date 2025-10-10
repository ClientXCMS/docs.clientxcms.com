---
sidebar_position: 2
---
import ThemedImage from '@theme/ThemedImage';

# Messagerie

Dans **CLIENTXCMS**, la configuration de la **messagerie** est essentielle pour maintenir une **communication fluide avec vos clients**.
L'objectif est simple : **configurer correctement l'envoi des e-mails pour garantir leur délivrabilité** et offrir une **expérience professionnelle** à vos utilisateurs. Une bonne configuration améliore la fiabilité de vos communications, renforce la confiance et assure que vos messages importants arrivent bien à destination.

La messagerie est utilisée pour toutes les communications automatiques : inscriptions, réinitialisations de mot de passe, notifications de commandes, factures, etc.

Vous pouvez gérer la messagerie depuis :

`Paramètres` > `Paramètres généraux` > `Paramètres de messagerie`

<ThemedImage
  alt="Interface de configuration de la messagerie"
  sources={{
    light: '/img/next_gen/settings/mailing_settings/mailing_settings.png',
    dark: '/img/next_gen/settings/mailing_settings/mailing_settings_dark.png'
  }}
/>

:::tip Astuce
Une configuration SMTP correcte est **cruciale** pour éviter que vos e-mails finissent dans les spams.
Prenez le temps de bien paramétrer ces options et de tester régulièrement votre configuration.
:::

## Pourquoi configurer la messagerie ?

La messagerie automatique est au cœur de l'expérience client dans CLIENTXCMS. Elle permet de :

* Confirmer les inscriptions et les commandes de vos clients
* Envoyer les factures et les rappels de paiement
* Notifier les clients des changements sur leurs services
* Gérer les réinitialisations de mot de passe en toute sécurité

:::tip Astuce
C'est un peu comme avoir un assistant personnel qui envoie automatiquement tous vos courriers importants 📬 — fiable, rapide et professionnel.
:::

## Configuration de base

### Paramètres d'identité

Ces paramètres définissent comment vos e-mails apparaîtront dans la boîte de réception de vos clients :

**Adresse d'envoi** | (adresse e-mail)
L'adresse e-mail qui apparaîtra comme expéditeur de tous vos messages automatiques.
Utilisez une adresse professionnelle du type `noreply@votredomaine.com` ou `support@votredomaine.com`.

**Nom d'envoi** | (texte)
Le nom qui s'affichera à côté de l'adresse d'envoi dans les clients mail.
Généralement le nom de votre entreprise ou de votre service.

**Domaine de l'espace client** | (URL)
L'URL complète de votre installation CLIENTXCMS (ex: `https://demo.clientxcms.com`).
Utilisé pour générer les liens dans les e-mails.

### Personnalisation des messages

**Salutation de début** | (texte)
Le message d'accueil qui apparaîtra au début de chaque e-mail.
Par exemple : "Bonjour" ou "Cher client".

**Salutation de fin** | (texte)
La signature qui apparaîtra à la fin de chaque e-mail.
Par exemple : "Cordialement, L'équipe ClientXCMS" ou "Merci de votre confiance".

### Options avancées

**Désactiver les e-mails** | (case à cocher)
Empêche l'envoi de tous les e-mails depuis le système.
⚠️ À utiliser uniquement en développement ou en maintenance.

## Configuration SMTP

SMTP (Simple Mail Transfer Protocol) est le protocole standard pour l'envoi d'e-mails. Une configuration SMTP correcte garantit la délivrabilité de vos messages.

### CTXMailer - service mail professionnel

CLIENTXCMS propose également **CTXMailer**, une offre d'hébergement de boîtes mail entièrement intégrée :

- **Inclus** dans les plans **Premium** et **Enterprise** (support + hébergement cloud)
- **Caractéristiques** : jusqu'à 20 boîtes mail incluses, 15 Go de stockage, interface sécurisée
- **Option** : disponible pour les autres licences à **3 € / mois**

En savoir plus : https://clientxcms.com/ctxmailer

:::tip
Si vous utilisez CTXMailer, les paramètres SMTP sont fournis automatiquement et la configuration de délivrabilité (SPF/DKIM) est facilitée depuis l'espace client.
:::

### Paramètres de connexion

**Hôte SMTP** | (adresse serveur)
L'adresse du serveur SMTP de votre fournisseur de messagerie.

**Port SMTP** | (numéro)
Le port utilisé pour la connexion SMTP. Les ports standards sont :

- `587` : Pour TLS/STARTTLS (recommandé)
- `465` : Pour SSL
- `25` : Port standard (souvent bloqué par les FAI)

**Chiffrement SMTP** | (menu déroulant)
Le type de sécurisation de la connexion :

- **TLS** : Recommandé, utilise le port 587
- **SSL** : Alternative sécurisée, utilise le port 465
- **Aucun** : Non recommandé sauf en environnement local

### Authentification

**Nom d'utilisateur SMTP** | (texte)
Généralement votre adresse e-mail complète ou un identifiant fourni par votre hébergeur.

**Mot de passe SMTP** | (mot de passe)
Le mot de passe associé à votre compte SMTP.
Pour certains services (Gmail, Office 365), vous devrez utiliser un mot de passe d'application spécifique.

:::warning Important
Pour des raisons de sécurité, utilisez toujours un **mot de passe d'application** dédié plutôt que le mot de passe principal de votre compte e-mail.
:::

## Test et validation

### Tester la configuration

Après avoir configuré vos paramètres SMTP, il est **essentiel** de tester la connexion :

1. Cliquez sur le bouton **"Tester la connexion SMTP"**
2. Un e-mail de test sera envoyé à l'adresse configurée
3. Vérifiez la réception et l'apparence du message

<ThemedImage
  alt="Test réussi de la connexion SMTP"
  sources={{
    light: '/img/next_gen/settings/core/mail/mail_success.png',
    dark: '/img/next_gen/settings/core/mail/mail_success.png'
  }}
/>

### Indicateurs de succès

- ✅ **Connexion réussie** : Message de confirmation affiché
- ✅ **E-mail reçu** : Vérifiez votre boîte de réception
- ✅ **Bon formatage** : L'e-mail s'affiche correctement


## Résolution des problèmes

### Erreurs fréquentes

**"scheme is not supported"**
Le protocole de chiffrement sélectionné n'est pas compatible avec votre serveur.
→ **Solution** : Essayez de basculer entre TLS et SSL.

**"Authentication failed"**
Les identifiants fournis sont incorrects.
→ **Solution** : Vérifiez votre nom d'utilisateur et mot de passe. Pour Gmail/Office 365, utilisez un mot de passe d'application.

**"Connection timeout"**
Le serveur SMTP ne répond pas.
→ **Solution** : Vérifiez l'hôte et le port. Assurez-vous que votre firewall autorise les connexions sortantes.

### Bonnes pratiques

Pour optimiser la délivrabilité de vos e-mails :

1. **Utilisez un domaine vérifié** : L'adresse d'envoi doit correspondre à votre domaine
2. **Configurez SPF/DKIM/DMARC** : Ces protocoles authentifient vos e-mails
3. **Évitez les mots spam** : Dans vos salutations et contenus
4. **Testez régulièrement** : La configuration peut changer avec le temps

## Exemples de configuration

### Configuration avec Gmail

```
Hôte SMTP : smtp.gmail.com
Port : 587
Chiffrement : TLS
Nom d'utilisateur : votre-email@gmail.com
Mot de passe : [Mot de passe d'application]
```

### Configuration avec Office 365

```
Hôte SMTP : smtp.office365.com
Port : 587
Chiffrement : TLS
Nom d'utilisateur : votre-email@votredomaine.com
Mot de passe : [Mot de passe du compte]
```

### Configuration avec OVH

```
Hôte SMTP : ssl0.ovh.net
Port : 465
Chiffrement : SSL
Nom d'utilisateur : votre-email@votredomaine.com
Mot de passe : [Mot de passe e-mail]
```

:::tip À retenir
Une messagerie bien configurée est la base d'une relation client professionnelle. Prenez le temps de tester et d'optimiser vos paramètres pour garantir que chaque message arrive à destination.
:::