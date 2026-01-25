# Captcha

Cette page vous explique comment configurer les captchas reCAPTCHA, hCaptcha et Cloudflare Turnstile dans votre espace client.

## reCAPTCHA (Google)

### Étape 1 : Créer un projet reCAPTCHA
1. Rendez-vous sur le site [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
2. Connectez-vous avec votre compte Google.
3. Cliquez sur le bouton **+** pour créer un nouveau projet reCAPTCHA.

### Étape 2 : Configurer le projet
1. Donnez un **nom** à votre projet.
2. Sélectionnez le type de reCAPTCHA que vous souhaitez utiliser :
   - **reCAPTCHA v2** : cochez "Je ne suis pas un robot" ou "Invisible reCAPTCHA badge".
   - **reCAPTCHA v3** : aucune interaction directe avec l'utilisateur.
3. Entrez les **domaines** où vous utiliserez reCAPTCHA.
4. Acceptez les **Conditions d'utilisation**.

### Étape 3 : Récupérer les clés
1. Une fois le projet créé, vous recevrez deux clés :
   - **Clé site** : à intégrer sur vos pages HTML.
   - **Clé secrète** : utilisée côté serveur pour la validation des réponses reCAPTCHA.
   
## hCaptcha

### Étape 1 : Créer un compte hCaptcha
1. Allez sur [hCaptcha](https://www.hcaptcha.com/).
2. Créez un compte ou connectez-vous si vous en avez déjà un.

### Étape 2 : Ajouter un nouveau site
1. Accédez à votre **tableau de bord hCaptcha**.
2. Cliquez sur **Nouveau site**.
3. Remplissez les détails du site (nom du site, domaine, etc.).

### Étape 3 : Récupérer les clés
1. Après avoir ajouté votre site, hCaptcha vous fournira :
   - **Clé site** (Sitekey) : pour intégrer hCaptcha à vos pages web.
   - **Clé secrète** (Secret key) : pour la vérification côté serveur des réponses hCaptcha.

## Cloudflare Turnstile

### Étape 1 : Créer un compte Cloudflare
1. Rendez-vous sur [Cloudflare](https://www.cloudflare.com/) et créez un compte (ou connectez-vous à un compte existant).

### Étape 2 : Ajouter Turnstile à votre domaine
1. Allez dans le tableau de bord Cloudflare.
2. Sélectionnez votre site sous **Sites**.
3. Naviguez vers **Security** > **Bots** > **Turnstile**.
4. Cliquez sur **Créer un nouveau widget Turnstile**.

### Étape 3 : Récupérer les clés
1. Cloudflare générera deux clés pour votre widget Turnstile :
   - **Clé site** (Site key) : pour ajouter Turnstile à vos formulaires.
   - **Clé secrète** (Secret key) : pour la validation des réponses sur votre serveur.

## Conclusion

Vous pourrez désormais ajouter ces clés à votre espace client pour activer le captcha de votre choix.
