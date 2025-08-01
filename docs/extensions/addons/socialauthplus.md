---
sidebar_position: 3
---

# SocialAuth+

L'extension SocialAuth+ permet de faciliter les connexions avec OAuth2 pour les plateformes suivantes : [Google](#google), [Discord](#discord), [GitHub](#github) et [Facebook](#facebook).
> Facilitez l'accès à votre plateforme pour vos clients potentiels avec SocialAuth+. Cette solution utilise la technologie OAuth+ pour une connexion rapide et sécurisée. Vos utilisateurs peuvent s'inscrire et se connecter en un clic via leurs comptes, sans craindre de perdre leur mot de passe. Simplifiez leur expérience utilisateur et augmentez votre taux de conversion grâce à cette extension d'authentification avancée.


## Configuration dans ClientXCMS

L'extension **SocialAuth+** est disponible __gratuitement__, et activable depuis l'onglet "Personnalisation" de votre espace d'administration de votre site ClientXCMS.

### Activation de l'extension

Pour activer l'extension SocialAuth+ gratuitement, procédez comme suit :
1. Connectez-vous à l'espace d'administration de ClientXCMS.
2. Cliquez sur le bouton "Paramètres" sur la barre de navigation en haut.
2. Dans la section "Personalisation", cliquez sur la page "Extensions".
3. Recherchez l'extension "Social Auth+" dans la liste des extensions disponibles.
4. Cliquez sur le bouton "Activer" en dessous de cette dernière pour la mettre en place gratuitement.

### Configuration des identifiants OAuth sur ClientXCMS

Une fois l'extension SocialAuth+ activée depuis votre espace d'administration ClientXCMS, ré-accédez à l'onglet "Paramètres".

![Image: SocialAuth+ Onglet](/img/next_gen/extensions/addons/socialauth/SA+_extension.png)

Sur cette page, vous pourrez gérer les différentes méthodes d'authentification en fonction des plateformes que vous souhaitez intégrer. Pour en configurer une, cliquez sur le bouton "Configurer" en dessous du logo de la plateforme ou sur l'écrou violet de réglage en haut.
![Image: SocialAuth+ Config](/img/next_gen/extensions/addons/socialauth/SA+_page.png)

## Exemple de configuration OAuth2

Voici à quoi ressemble la configuration OAuth d'une plateforme d'authentification sur ClientXCMS, il suffit d'avoir **ID Client** et **Secret Client** générés et fournis par la plateforme. Suivez la suite de cette documentation afin de savoir comment procéder en fonction des plateformes pour [obtenir ces fameuses clés d'authentification OAuth2](#obtenir-les-clés-dauthentification-oauth2) :
![Image : Exemple page configuration OAuth](/img/next_gen/extensions/addons/socialauth/SA+_exemple_config.png)

## Redirect URI
Copiez bien l'**URL de redirection** (unique) donnée par ClientXCMS. **Pour CHAQUE plateforme, la redirection URL sera différente**. Elle est importante car elle permet de rediriger l'utilisateur sur votre site après l'authentification du compte sur la plateforme cible, afin de finaliser l'authentification. Elle fait en sorte que l'utilisateur puisse se connecter s'il a déjà un compte sur votre site, ou qu'il s'inscrive s'il n'a pas encore de compte.
Elle est généralement formatée comme celle-là : ``https://votre.domaine.com/auth/<nom_plateforme>/callback`` où ``<nom_plateforme>`` correspond à l'une de ces valeurs :
- google
- discord
- facebook
- github

## Obtenir les clés d'authentification OAuth2

Pour pouvoir utiliser cette extension, vous devez obtenir les clés d'authentification OAuth2 pour chaque plateforme que vous souhaitez prendre en charge.

## Voici comment procéder pour chaque plateforme :

### Google 

**1.** Rendez-vous sur la [console développeur Google](https://console.cloud.google.com/) et connectez-vous à votre compte Google.

**2.** Créez un nouveau projet en cliquant sur le bouton "**Sélectionner un projet**".
![Image: Google Config - Bouton "Sélectionner le projet"](/img/next_gen/extensions/addons/socialauth/SA+_Google1.png)

**3.** Donnez un nom à votre projet et suivez les étapes de configuration.

**4.** Une fois votre projet créé, cliquez sur le raccourci d'accès rapide "**API et services**"
![Image: Google Config - Raccourci accès rapide "API et services"](/img/next_gen/extensions/addons/socialauth/SA+_Google2.png)

**5.** Accédez à la section "**Ecran de consentement OAuth**" dans la colonne de gauche.

![Image: Google Config - Section "Ecran de consentement OAuth"](/img/next_gen/extensions/addons/socialauth/SA+_Google3.png)

**6.** Sélectionnez l'option "**Externes**", cliquez ensuite sur le bouton "**Créer**".
![Image: Google Config - Bouton "Externes" consentement](/img/next_gen/extensions/addons/socialauth/SA+_Google4.png)

**7.** Gérez les niveaux d'accès du consentement OAuth de l'application. Cliquez sur le bouton "**Ajouter ou Supprimer des champs d'application**"

![Image : Google Config - Niveaux d'accès consentement](/img/next_gen/extensions/addons/socialauth/SA+_Google5.png)


Sélectionnez tous les champs et cliquez sur le bouton bleu "**Mettre à jour**" en dessous.
![Image : Google Config - Champs de niveaux d'accès consentement](/img/next_gen/extensions/addons/socialauth/SA+_Google6.png)
![](/img/next_gen/extensions/addons/socialauth/SA+_Google7.png)

**8.** Remplissez les informations requises pour le consentement OAuth, veillez à bien définir le domaine autorisé par le domaine de votre site ClientXCMS (domaine de premier niveau, pas de sous-domaine requis, le domaine suffira)
![Image : Google Config - "Domaines autorisés"](/img/next_gen/extensions/addons/socialauth/SA+_Google8.png)

**9.** Accédez à la section "**Identifiants**" dans la colonne de gauche.

![Image: Google Config - Section "Identifiants"](/img/next_gen/extensions/addons/socialauth/SA+_Google9.png)

**10.** Cliquez sur "**Créer des identifiants**" et choisissez "ID client OAuth".
![Image: Google Config - Bouton "ID client OAuth"](/img/next_gen/extensions/addons/socialauth/SA+_Google10.png)

**11.** Sélectionnez le type d'application approprié (ici : **Application Web**) et définissez le nom de votre application
![Image : Google Config - Type d'applications](/img/next_gen/extensions/addons/socialauth/SA+_Google11.png)

**12.** En dessous, dans "URI de redirection autorisés", cliquez sur le bouton "**Ajouter un URI**" et définissez l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri) dans le champ "__URI 1__", cliquez ensuite sur le bouton bleu "**Créer**".
![Image : Google Config - Redirect URI Google](/img/next_gen/extensions/addons/socialauth/SA+_Google12.png)

**13.** Une fois que vous avez créé l'application OAuth, vous obtiendrez les clés d'authentification OAuth2 nécessaires.
![Google Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Google13.png)

**14.** Insérez-les dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.

### Discord

**1.** Rendez-vous sur le [portail développeur Discord](https://discord.com/developers/applications) et connectez-vous à votre compte Discord.

**2.** Cliquez sur le bouton bleu "New Application" en haut à droite pour créer une nouvelle application.
![Image : Discord Config - Nouvelle Application](/img/next_gen/extensions/addons/socialauth/SA+_Discord1.png)

**3.** Donnez un nom à votre application, cochez pour approuver les conditions générales d'utilisation et les politiques pour les développeurs de Discord. Cliquez ensuite sur le bouton "Create" en bas à droite pour enregistrer la nouvelle application.
![Image : Discord Config - Créer l'Application](/img/next_gen/extensions/addons/socialauth/SA+_Discord2.png)

**4.** Rendez-vous dans la section "**OAuth2**" dans le menu de navigation à gauche.

![Image : Discord Config - Menu Navigation "OAuth2"](/img/next_gen/extensions/addons/socialauth/SA+_Discord3.png)
![Image : Discord Config - Interface OAuth2"](/img/next_gen/extensions/addons/socialauth/SA+_Discord4.png)

**5.** Révélez le "**Client Secret**" en cliquant sur le bouton bleu "**Reset Secret**", si vous avez activé l'A2F (Authentification A 2 Facteurs) sur votre compte Discord, utilisez votre application de génération de codes à 6 chiffres pour confirmer l'action.
![Image : Discord Config - Révéler le Client Secret"](/img/next_gen/extensions/addons/socialauth/SA+_Discord5.png)

**6.** En dessous, dans "**Redirects**", cliquez sur le bouton "**Add Redirect**" pour ajouter l'URI de redirection et définissez l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri) dans le champ "__URI 1__", cliquez ensuite sur le bouton bleu "**Créer**".
![Image : Discord Config - Redirect URI Discord](/img/next_gen/extensions/addons/socialauth/SA+_Discord6.png)

**7.** Cliquez sur le bouton "**Save Changes**" en bas pour sauvegarder les changements. Copiez les clés "Client ID" et "Client Secret". 
![Discord Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Discord7.png)

**8.** Insérez-les dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.

### GitHub

**1.** Connectez-vous à votre compte [GitHub](https://github.com/login).

**2.** Accédez à la page "[**Paramètres**](https://github.com/settings/profile)" de votre profil.

**3.** Dans le menu de gauche, cliquez sur "[**Developer settings**](

https://github.com/settings/apps)".

![Image : GitHub Config - "Developer Settings"](/img/next_gen/extensions/addons/socialauth/SA+_Github1.png)

**4.** Cliquez sur le bouton "[**New GitHub App**](https://github.com/settings/apps/new)" pour enregistrer une nouvelle application.
![Image : GitHub Config - "New GitHub App"](/img/next_gen/extensions/addons/socialauth/SA+_Github2.png)

**5.** Remplissez les informations de base de votre application.
![Image : GitHub Config - Informations de base](/img/next_gen/extensions/addons/socialauth/SA+_Github3.png)

**6.** En dessous, dans le champ "**Callback URL**", définissez l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri) et cochez l'option "**Request user authorization (OAuth) during installation**" pour demander l'utilisation d'OAuth2 lors de l'installation.
![Image : GitHub Config - Redirect URI GitHub](/img/next_gen/extensions/addons/socialauth/SA+_Github4.png)

**7.** Encore en dessous, décochez la case "Active" de la section "**Webhook**", car pour notre utilisation, nous n'en aurons pas besoin. En décochant cette case, le champ "**Webhook URL**" deviendra optionnel et non obligatoire. Également pour la section "**Permissions**", il sera inutile d'accorder des permissions. GitHub met déjà à disposition toutes les informations que ClientXCMS a besoin afin de créer le compte ou de se connecter. Ajouter des privilèges requis pour votre application peut repousser certains utilisateurs à s'inscrire sur votre site.

![Image : GitHub Config - Désactiver Webhook et autres paramètres](/img/next_gen/extensions/addons/socialauth/SA+_Github5.png)
![Image : GitHub Config - Permissions](/img/next_gen/extensions/addons/socialauth/SA+_Github6.png)

**8.** À la toute fin du formulaire de création de l'application GitHub, sélectionnez bien "**Any account**" pour autoriser tous les comptes à installer votre application, qui permettra à vos utilisateurs de s'authentifier avec GitHub. Enregistrez ensuite l'application avec le bouton vert en dessous "**Create GitHub App**".
![Image : GitHub Config - Qui peut installer cette application](/img/next_gen/extensions/addons/socialauth/SA+_Github7.png)

**9.** Retrouvez Client ID et Secret ID

Voici la page de gestion de votre application OAuth2 dans laquelle vous avez été automatiquement redirigé après avoir créé l'application GitHub.

![Image : GitHub Config - Page de gestion de l'application](/img/next_gen/extensions/addons/socialauth/SA+_Github8.png)
-  **Client Secret :** Vous pouvez trouver le **Client Secret** dans la section "**Client secrets**" de la page de gestion de l'application GitHub. Cliquez sur le bouton "Generate a client secret" pour générer une clé **Secret ID**.
![Image : GitHub Config - Section "Client secrets"](/img/next_gen/extensions/addons/socialauth/SA+_Github9.png)
- **Client ID :** Vous pouvez facilement trouver le **Client ID** en haut de la page de gestion de l'application, dans la section "**About**".
![Image : GitHub Config - Section "About" Client ID](/img/next_gen/extensions/addons/socialauth/SA+_Github10.png)

**10.** Vous disposerez ensuite des clés "Client ID" et "Client Secret" pour votre application que vous devrez spécifier dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.
![Image : GitHub Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Github11.png)

### Facebook

**1.** Rendez-vous sur le [portail développeur Facebook](https://developers.facebook.com/async/registration/) et connectez-vous ou inscrivez-vous afin de créer un compte développeur Meta. Entrez vos informations personnelles.

**2.** Créez une nouvelle application en cliquant sur le bouton vert en haut à droite "[**Créer une app**](https://developers.facebook.com/apps/creation/)".
![Image : Facebook Config - Bouton "Créer une app"](/img/next_gen/extensions/addons/socialauth/SA+_Facebook1.png)

**3.** Sélectionnez l'option "**Autoriser les utilisateurs à se connecter avec leur compte Facebook**", cliquez ensuite sur le bouton bleu ci-dessous "**Suivant**".
![Image : Facebook Config - Option "Autoriser les utilisateurs à se connecter avec leur compte Facebook"](/img/next_gen/extensions/addons/socialauth/SA+_Facebook2.png)

**4.** Spécifiez les informations relatives à l'application, tel que son nom et l'email de contact. Cliquez sur le bouton vert ci-dessous "**Créer une application**" afin d'enregistrer l'application.
![Image : Facebook Config - Informations relatives à l'application](/img/next_gen/extensions/addons/socialauth/SA+_Facebook3.png)

**5.** Une fois l'application créée, vous serez automatiquement redirigé vers le panneau de gestion de l'application.
![Image : Facebook Config - Panneau de gestion de l'application](/img/next_gen/extensions/addons/socialauth/SA+_Facebook4.png)

**6.** Dans la section "**Produits**" du tableau de bord de votre application, sélectionnez "Facebook Login" et configurez les paramètres requis à l'aide du bouton "**Configurer**".
![Image : Facebook Config - Page "Produits"](/img/next_gen/extensions/addons/socialauth/SA+_Facebook5.png)
Dans le petit menu déroulant du bouton "**Configurer**", sélectionnez "**Paramètres**".
![Image : Facebook Config - Menu déroulant Paramètres Facebook Login "](/img/next_gen/extensions/addons/socialauth/SA+_Facebook6.png)

**7.** Dans la section "**URI de redirection OAuth valides**", spécifiez la valeur de l'[URI de redirection donné par ClientXCMS dans la page de configuration](#redirect-uri), cliquez ensuite sur le bouton bleu, en bas à droite, "**Enregistrer les modifications**".

![Image : Facebook Config - Redirect URI Facebook](/img/next_gen/extensions/addons/socialauth/SA+_Facebook7.png)

**9.** Dans le menu de navigation du panneau de l'application, allez dans "**Paramètres**" puis dans la sous-catégorie "**Général**". Sur la première ligne, vous trouverez l'identifiant de l'application (**Client ID**) et la clé secrète (**Secret ID**), cliquez sur le bouton "**Afficher**" afin de copier la clé générée.
![Image : Facebook Config - API Send](/img/next_gen/extensions/addons/socialauth/SA+_Facebook8.png)
Vous disposerez ensuite des clés "Client ID" et "Client Secret" pour votre application que vous devrez spécifier dans la [configuration OAuth de la plateforme](#exemple-de-configuration-oauth2) sur ClientXCMS.

**10.** Publiez l'application afin de la rendre publique : Dans le menu du panneau de gestion de l'application Facebook, dans la catégorie "**Publier**", cliquez sur le bouton "**Lancer en direct**" pour lancer l'application OAuth2 en mode production afin qu'elle puisse être utilisée par vos utilisateurs.

![Image : Facebook Config - Publier l'application](/img/next_gen/extensions/addons/socialauth/SA+_Facebook9.png)

## Problème Erreur 403

Pour régler ce problème, rendez-vous sur votre panel de gestion Plesk, puis Web Application Firewall. Dans le mode du pare-feu changez en "Detection only". Il devrait être initialement à "On".
![Image : ModSecurity Apache - "Detection only"](/img/next_gen/extensions/addons/socialauth/SA+_error403.png)

Re-testez la connexion via Google.


## Félicitations 👏
Vous avez maintenant configuré l'extension SocialAuth+ avec les clés d'authentification OAuth2. Vos clients pourront désormais se connecter et s'inscrire plus facilement, plus rapidement et en toute sécurité sur votre espace client !