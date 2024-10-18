# Paramètres de sécurité
Les paramètres de sécurité sont des paramètres qui affectent la sécurité de votre espace client. Vous pouvez les retrouver en allant dans `Paramètres` > `Sécurité` > `Paramètres de sécurité`.

## Drivers de hashage
Les drivers de hashage sont utilisés pour hasher les mots de passe des utilisateurs. Vous pouvez choisir entre `argon` et `argon2id`. `bcrypt` est le driver de hashage par défaut. Les mots de passe administateurs sont toujours hashés avec `bcrypt`.
Pour les personnes qui migrent depuis la version 1 de CLIENTXCMS, il est recommandé de conserver `argon` pour éviter les problèmes de compatibilité sur les ancien mots de passe.
:::caution
Les anciens mots de passe ne seront pas compatibles avec le nouveau driver. Vous devez réinitialiser les mots de passe des utilisateurs.
:::
## Authentification

**Délai de vérification du mot de passe** : Vous pouvez définir le délai de vérification du mot de passe en secondes. Par défaut, il est de 10800 secondes. (3 heures)

**Email bannis** : Vous pouvez bannir des adresses email spécifiques. Les utilisateurs ne pourront pas s'inscrire avec ces adresses email. Séparez les adresses email par une virgule. Exemple : `mailinator.com, yopmail.com, exemple@example.com`

**Préfixe de l'administration** : Vous pouvez définir un préfixe pour l'administration. Par exemple, si vous définissez `backoffice`, l'URL de l'administration sera `https://votre-site.com/backoffice`.

**Autoriser l'inscription** : Vous pouvez activer ou désactiver l'inscription des utilisateurs.

**Forcer la connexion** : Vous pouvez forcer la connexion des utilisateurs pour accéder à n'importe quelle page.

**Confirmation automatique de l'inscription** : Vous pouvez activer ou désactiver la confirmation automatique de l'inscription des utilisateurs.

**Autoriser la réinitialisation du mot de passe** : Vous pouvez activer ou désactiver la réinitialisation du mot de passe des utilisateurs.

## Captcha

**Drivers de captcha** : Vous pouvez choisir entre `recaptcha`,`hcaptcha`, `Cloudflare turnstile`. `none` est le driver de captcha par défaut.

**Clé du site** : Clé du site pour le captcha.

**Clé secrète** : Clé secrète pour le captcha.

Pour plus d'informations sur la configuration des captchas, consultez la documentation [ici](/developpers/software/captcha).