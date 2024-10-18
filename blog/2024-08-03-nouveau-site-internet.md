---
slug: nouvelle-site-internet
title: Nouveau site internet
authors:
  name: MartinDev
  title: ClientXCMS Team
  url: https://github.com/DarkIncognito85
  image_url: https://github.com/DarkIncognito85.png
tags: [nouveau site internet, news, mise à jour]
---
Bonjour à tous,

Près d'un an après notre dernière annonce, nous sommes fiers de vous retrouver pour vous annoncer la sortie de notre nouveau site internet et faire le point sur le développement de CLIENTXCMS ainsi que sur les nouveautés à venir au cours de l'année.
 
<!-- truncate -->

## Nouveau site internet
![img](/img/blog/nouveau-site/home.png)
Nous avons le plaisir de vous annoncer la sortie de notre nouveau site internet. Nous avons travaillé dur pour vous offrir une expérience de navigation plus fluide et agréable. Le site inclut un espace [marketplace](https://clientxcms.com/marketplace) pour afficher chaque extension facilement, ainsi qu'une page de [changelog](https://clientxcms.com/changelog) pour suivre les mises à jour (nous avons encore besoin de temps pour remettre en place les anciennes versions).


Nous avons également prévu d'autres pages qui arriveront dans les prochaines semaines, avec la possibilité de demander une version d'essai automatisée ou de consulter d'autres pages d'information sur le projet.
![img](/img/blog/nouveau-site/license.png)

Vous avez également droit à une toute nouvelle interface de gestion de licences, plus simple et plus rapide, avec trois grandes fonctionnalités...
### Changement de nom de domaine
Plus besoin de nous contacter pour changer de nom de domaine : vous pouvez maintenant le faire directement depuis votre espace client, dans la section "Licences", puis "Modifier le nom de domaine". Il vous suffira simplement de saisir le nouveau nom de domaine et de cliquer sur "Modifier", après avoir préalablement ajouté l'enregistrement CNAME de votre domaine actuel.

![Changer le domaine](/img/next_gen/Installation/Cloud/change_domain.png)
:::info TIPS
La modification du domaine est possible tous les 60 jours. Pour les changements de sous-domaine, cela n'est pas considéré comme un changement de domaine.
:::
### Réinstallation de la licence

Nous avons mis en place une fonctionnalité de réinstallation de licence. Vous pouvez désormais réinstaller votre licence sur un autre serveur sans passer par le support technique. Cette fonctionnalité est disponible dans votre espace client, dans la section "Licences", puis "Réinstaller la licence". **Disponible pour les licences de type "Cloud".**
![Réinstallation](/img/next_gen/Installation/Cloud/reinstall.png)

Les identifiants de connexion vous seront envoyés par e-mail une fois l'installation terminée.
### Modification des extensions

Nous avons également automatisé la gestion des extensions. Vous pouvez maintenant les interchanger selon vos besoins sans passer par le support technique.
Cette fonctionnalité est disponible dans votre espace client, dans la section "Licences", puis "Modifier des extensions". **Disponible pour les licences de type "Cloud".**
![img](/img/next_gen/Installation/Cloud/change_extensions.png)
### Début de l'auto-hébergement
Nous avons lancé il y a quelques jours l'auto-hébergement : vous pouvez maintenant héberger vous-même votre site internet. Pour cela, il vous suffit de faire la demande dans votre espace client, dans la section "Licences", puis "Téléchargement".

![img](/img/next_gen/Installation/formulaire_download.png)

:::info TIPS
Prenez en compte que l'accès à l'auto-hébergement est limité à un certain nombre de personnes ayant des compétences en Linux et en serveur. Nous vous conseillons de rester sur l'hébergement Cloud si vous n'avez pas les compétences nécessaires.
:::

Également, si vous avez fait une demande d'auto-hébergement pour créer des extensions ou des thèmes, nous attendons de sortir la mise à jour avec le système de thèmes et d'extensions avant de vous autoriser le téléchargement. No worries, cela arrive bientôt.
## Roadmap deuxième semestre 2024
Nous avons déjà réussi l'exploit de sortir en moins de 6 mois une version stable de NextGen, avec plus de 800 commits et une refonte complète du projet avec [Laravel](https://laravel.com). Depuis la sortie de NextGen, nous avons également traité plus de 550 tickets. Le but du deuxième semestre est de continuer sur cette lancée et de vous proposer des extensions et des thèmes pour votre espace client. Notre mot d'ordre est de vous offrir des extensions visant à améliorer et personnaliser l'espace client de chaque hébergeur avec notre système de sections et de thèmes, tout en continuant à ajouter des fonctionnalités à notre CMS pour le rendre plus complet et plus simple d'utilisation. Faisons un point sur les grands chantiers à venir.

- Système de **devis** pour vos services
- Système d'**abonnement automatisé** avec Stripe/PayPal
- Système d'**amélioration** de vos services
- Système d'**options additionnelles** récurrentes ou ponctuelles lors de la commande
- Système de **configuration totale d'un service** à partir du prix de base
- **Programme d'affiliation** pour vos clients et vos partenaires (ou nous avons prévu un système sympa :D)
- Possibilité de proposer des noms de domaine

Et plus de 170 tickets Jira d'idées d'extensions, de modifications et d'améliorations à traiter, nous avons de quoi nous occuper.

Également, nous avons déjà commencé à travailler sur la documentation développeur, avec une section dédiée au développement de thèmes. Une autre section arrivera pour les extensions.

![Thèmes](/img/next_gen/developpers/themes/themes.png)

Avec le système de thème, il sera accompagné d'un système de section pour personnaliser le contenu avec une partie inclus dans le CMS et une autre via une extensions payante comme : 

- Sections de présentation (qualité, support, etc.).
- Sections dynamiques (section FAQ dynamique avec les questions de l'extension FAQ, par exemple).
- Méga menu (menu déroulant en haut de page).
- Différents styles de hero banner (bannière d'accueil) ou de disposition de produits.
- Bannière de cookie ou d'information en haut de page.


### Téléchargement du bot discord & Modèles e-mail
Pour les plus affûtés d'entre vous, vous avez peut-être remarqué que le téléchargement et l'achat de la source du bot Discord ne sont pas encore implémentés sur le site internet. Nous travaillons actuellement sur le **module de téléchargement** pour vous permettre de télécharger la source du bot Discord directement depuis votre espace client. Nous avons également prévu de mettre en place **les nouveaux modèles d'e-mails compatibles v2** et la personnalisation du contenu des e-mails avec une section dans l'espace administration.
### Fin de support de l'ancienne version
Nous avons décidé de définir une date de fin de support pour les anciennes versions de CLIENTXCMS. À partir du 1er octobre 2024, aucune version ne pourra être téléchargée ou mise à jour, avec une fin de support prévue pour le 1er janvier 2025. Nous vous conseillons de migrer vers la V2 le plus rapidement possible. Si vous avez des questions ou des problèmes, n'hésitez pas à contacter notre support technique.

### Un peu de repos
Nous avons prévu de prendre une semaine de vacances pour nous ressourcer et revenir en pleine forme pour la suite du développement. Nous serons donc en vacances du 17 au 24 août 2024. Le support sera restreint mais toujours disponible en cas d'urgence. Également, une maintenance de nos services est prévue le week-end du 14 septembre 2024. Nous vous en reparlerons le plus rapidement possible. Nous vous remercions pour votre compréhension.

Nous vous remercions jamais assez pour votre soutien et votre confiance. Nous espérons que vous apprécierez les nouveautés et les améliorations que nous avons apportées à notre site internet et à notre CMS. Nous avons hâte de vous retrouver pour vous présenter les prochaines nouveautés.
