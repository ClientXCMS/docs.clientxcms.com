---
sidebar_position: 2
---
# Paramètres de messagerie
Les paramètres de messagerie vous permettent de configurer les paramètres de messagerie de votre **CLIENTXCMS**. Vous pouvez configurer les paramètres de messagerie pour envoyer des e-mails à vos clients.
Ces paramètres sont utilisés pour envoyer des e-mails à vos clients lorsqu'ils s'inscrivent, lorsqu'ils demandent un mot de passe oublié, etc. Pour ce faire, allez dans le menu `Paramètres` puis dans la section `Paramètres généraux` et enfin dans `Paramètres de mail`.

![Paramètres de messagerie](/img/next_gen/settings/core/mail/mail.png)
## Configuration de l'envoi d'e-mails
**Adresse d'envoi** : L'adresse e-mail à partir de laquelle les e-mails seront envoyés.

**Nom d'envoi** : Le nom à partir duquel les e-mails seront envoyés.

**Salutation de début** : La salutation de début des e-mails.

**Salutation de fin** : La signature de fin des e-mails.

**Domaine de l'espace client** : Le domaine de l'espace client.

**Désactiver les e-mails** : Désactive l'envoi d'e-mails. (utile pour le développement)

### SMTP
**Hôte SMTP** : L'hôte SMTP à utiliser pour envoyer des e-mails.

**Port SMTP** : Le port SMTP à utiliser pour envoyer des e-mails.

**Nom d'utilisateur SMTP** : Le nom d'utilisateur SMTP à utiliser pour envoyer des e-mails.

**Mot de passe SMTP** : Le mot de passe SMTP à utiliser pour envoyer des e-mails.

**Chiffrement SMTP** : Le chiffrement SMTP à utiliser pour envoyer des e-mails.

### Test de connexion
Vous pouvez tester la connexion SMTP en cliquant sur le bouton "Tester la connexion SMTP".
Vous devriez voir un message de succès si la connexion a réussi.
Si la connexion a échoué, vérifiez les paramètres SMTP que vous avez entrés.
![Test de connexion SMTP](/img/next_gen/settings/core/mail/mail_success.png)

:::info
Vérifiez l'addresse e-mail de l'expéditeur pour éviter que les e-mails soient marqués comme spam.
:::