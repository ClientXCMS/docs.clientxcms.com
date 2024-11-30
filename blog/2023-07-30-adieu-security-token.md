---
slug: a-dieu-security  
title: Adieu au token de sécurité  
authors:  
  - name: MartinDev  
    title: ClientXCMS Team  
    url: https://github.com/DarkIncognito85  
    image_url: https://github.com/DarkIncognito85.png  
tags: [nouvelle documentation, news, mise à jour]  
---

Chers utilisateurs de CLIENTXCMS,

Nous avons le plaisir de vous annoncer que le problème récurrent lié à l'erreur **"Security token is invalid"** a été résolu. Cette erreur, qui a pu affecter certains d'entre vous, n'est désormais plus un obstacle. Notre équipe technique a travaillé avec diligence pour identifier et corriger la cause, afin de garantir une expérience plus stable et sécurisée sur notre plateforme.

<!-- truncate -->

### La fin d'un problème gênant : "Security Token is Invalid"

Nous savons à quel point il était frustrant de rencontrer l'erreur **"Security token is invalid"** lors de l'utilisation de CLIENTXCMS. Cette erreur pouvait survenir pour diverses raisons, mais grâce à une refonte complète du système, nous avons pu résoudre définitivement ce problème.

### Nouvelle fonctionnalité : Synchronisation via OAuth2

En plus de résoudre cette erreur, nous avons le plaisir de vous présenter une nouvelle fonctionnalité qui simplifiera et sécurisera encore davantage votre expérience avec CLIENTXCMS. Nous avons intégré un système de synchronisation basé sur **OAuth2** pour la gestion des modules et des thèmes.

**Qu'est-ce que cela change pour vous ?**  
Grâce à OAuth2, la synchronisation des modules et des thèmes entre vos différents sites se fait désormais de manière plus fluide et sécurisée.

**Comment profiter de la synchronisation via OAuth2 ?**

![Etape 1](https://media.discordapp.net/attachments/475073153509490689/1135136801137377330/image.png?width=1766&height=1008)

1. Connectez-vous à votre compte CLIENTXCMS.
2. Allez dans votre "Espace Licence" et cherchez la section dédiée à OAuth2.
3. Vous y trouverez vos identifiants OAuth2, tels que :  
   - **Client ID :** 6267874835637  
   - **Client Secret :** [Votre Secret]  
![Etape 1](/img/tutorial/step3.png)

4. Copiez ces informations et collez-les dans votre fichier `.env` en respectant le format suivant :  
   ```
   APP_CLIENTID=6267874835637  
   APP_SECRET=v1ejuvj1ruhupstkdlguersbfqaul7yc4kfemk4ysl1rmmz0ha51vo42osf9pl0a8xbkiisbewbsfsaonskhagkmsu1jlrb6pggnsrts8lkvfp8z6bypbgvfpmylcdk3  
   ```

Si vous avez des questions ou des difficultés lors de l'intégration de cette fonctionnalité, notre équipe d'assistance est à votre disposition pour vous guider.

### Nouveautés de la mise à jour v2.8.10

#### Module SEO : Optimisez votre visibilité en ligne

Le module **SEO** a été conçu pour vous aider à améliorer le référencement de vos sites. Grâce à lui, vous pouvez facilement gérer vos métadonnées, balises, descriptions et bien plus encore. Cette fonctionnalité vous permet d’augmenter la visibilité de vos sites sur les moteurs de recherche et d'attirer davantage de visiteurs qualifiés.

#### Module SocialAuth+ : Connexion simplifiée avec des services tiers

Le module **SocialAuth+** vous permet désormais de proposer à vos utilisateurs la possibilité de se connecter rapidement via des services populaires tels que **Facebook**, **Google**, **Twitter**, et bien d'autres. Cela simplifie l'inscription et améliore l'interaction avec vos utilisateurs.

![Etape 1](/img/tutorial/step5.png)

#### Ajout d'options pour les services existants

Nous avons pris en compte vos retours et, grâce à cette mise à jour, vous pouvez maintenant personnaliser les services déjà en place. Cette nouvelle fonctionnalité vous permet de mieux adapter les services à vos besoins spécifiques, en garantissant une parfaite intégration à vos projets.

![Etape 1](/img/tutorial/step4.png)

### Merci pour votre confiance

Nous tenons à vous remercier chaleureusement pour la confiance que vous accordez à CLIENTXCMS. Vos retours, suggestions et idées sont essentiels pour nous aider à améliorer continuellement notre plateforme. Notre équipe est à votre disposition pour vous offrir un support de qualité et vous accompagner dans vos projets.

N'hésitez pas à vous connecter dès aujourd'hui pour découvrir toutes les nouvelles fonctionnalités et modules. Si vous avez des questions ou des préoccupations concernant leur intégration, notre équipe d'assistance est là pour vous aider.

Restez à l'écoute, car d'autres améliorations passionnantes arrivent bientôt !

Cordialement,  
L'équipe CLIENTXCMS
