---
sidebar_position: 25
translated: true
---

# Centre d'aide auto-réponse

Cet addon améliore considérablement l'efficacité de votre support client en automatisant les premières interactions et en fournissant des outils de réponse rapide à votre équipe technique.


## Réponses automatiques
Automatisez l'envoi de messages lors de la création d'un ticket par un client.
- **Ciblage par Département** : Définissez des réponses spécifiques pour le département "Support Technique", "Ventes", etc. ou une réponse globale.
- **Gestion des Horaires** : Activez les réponses uniquement en dehors des heures d'ouverture ou durant le week-end grâce au sélecteur de jours et d'heures.
- **Variables Dynamiques** : Personnalisez vos messages avec le prénom du client, l'ID du ticket, le nom de l'application, etc.

![Configuration des réponses automatiques](/img/next_gen/extensions/addons/helpdesk_autoreply/show_autoreply.png)

## Réponses prédéfinies
Gagnez du temps sur les demandes récurrentes grâce à une bibliothèque de réponses prêtes à l'emploi.
- **Accès rapide** : Disponibles directement dans la vue de gestion du ticket via un panel latéral dédié.
- **Fermeture automatique** : Possibilité de configurer certaines réponses pour qu'elles ferment automatiquement le ticket après envoi (idéal pour les messages de clôture).
- **Copie ou envoi direct** : Choisissez de copier le contenu dans votre champ de réponse pour le modifier, ou de l'envoyer directement en un clic.

![Vue sur le ticket](/img/next_gen/extensions/addons/helpdesk_autoreply/show_on_ticket.png)

![Gestion des réponses prédéfinies](/img/next_gen/extensions/addons/helpdesk_autoreply/show_predefined_response.png)

## Internationalisation
Support natif des traductions pour les noms et corps des messages (FR/EN par défaut). Vous pouvez ajouter vos propres traductions via l'interface d'administration.

![Internationalisation](/img/next_gen/extensions/addons/helpdesk_autoreply/translations.png)

## Variables disponibles

Vous pouvez utiliser les variables suivantes dans vos templates et réponses :
- `{firstname}` / `{lastname}` / `{name}` : Informations du client
- `{ticket_id}` / `{ticket_uuid}` : Identifiants du ticket
- `{department}` : Nom du département concerné
- `{priority}` : Priorité du ticket
- `{app_name}` / `{app_url}` : Informations de votre plateforme
- `{date}` : Date et heure actuelle
