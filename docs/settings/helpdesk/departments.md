# Départements
Les départements sont des catégories qui permettent de classer les tickets. Vous pouvez créer des départements pour organiser les tickets de votre centre d'aide.
![img](/img/next_gen/settings/helpdesk/departments/index_admin.png)

## Départements par défaut
CLIENTXCMS crée automatiquement des départements par défaut pour vous aider à démarrer. Vous pouvez les modifier ou les supprimer selon vos besoins.

Liste des départements par défaut :
- Général
- Facturation
- Technique
- Commercial
## Créer un département
Pour créer un département, cliquez sur le bouton `Créer` en haut à droite de la page. Vous serez redirigé vers la page de création de département. 
![img](/img/next_gen/settings/helpdesk/departments/create.png)

**Nom** : Nom du département

**Icône** : Icône du département

**Description** : Description du département


### Rendu sur la création de ticket

![img](/img/next_gen/settings/helpdesk/departments/departments.png)

Vous pouvez préselectionner certains valeurs lors de la création de ticket avec des paramètres dans l'URL : 

- `department` : Département préselectionné
- `priority` : Priorité préselectionnée
- `content` : Contenu prérempli
- `subject` : Sujet prérempli
- `related_id` : ID du service lié

Par exemple : 
```
https://clientxcms.app/client/support/create?department=1&priority=low&content=Bonjour&subject=Problème&related_id=1
```
## Modifier un département
Pour modifier un département, cliquez sur le bouton `Afficher` sur la liste des départements. Vous serez redirigé vers la page de modification de département.
Vous pouvez modifier le nom, l'icône et la description du département ou traduire le nom et la description du département avec l'icone à droite du champ.
![img](/img/next_gen/settings/helpdesk/departments/edit.png)
## Supprimer un département
Pour supprimer un département, cliquez sur le bouton `Supprimer` sur la liste des départements. Notez que vous ne pouvez pas supprimer un département si des tickets sont associés à ce département.