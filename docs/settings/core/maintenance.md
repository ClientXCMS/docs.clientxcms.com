---
sidebar_position: 4
---
# Maintenance
Le système de maintenance vous permet de mettre votre **ClientXCMS** en mode maintenance. Cela signifie que votre **CLIENTXCMS** sera inaccessible pour les utilisateurs pendant la période de maintenance.
Il permet d'informer les utilisateurs de la raison de la maintenance et de la durée estimée de la maintenance. Pour ce faire, allez dans le menu `Paramètres` puis dans la section `Paramètres généraux` et enfin dans `Maintenance`.
![Maintenance](/img/next_gen/settings/core/maintenance/maintenance.png)
**Activer la maintenance** : Activez ou désactivez la maintenance.

**Message de maintenance** : Le message de maintenance qui sera affiché aux utilisateurs.

**URL de maintenance** : L'URL pour passer outre la maintenance.

**Texte du bouton de maintenance** : Le texte du bouton pour passer outre la maintenance.

**URL de l'image de maintenance** : L'URL de l'image de maintenance.

**Icone de maintenance** : L'icone de maintenance.

:::info Information
Si vous avez activé la maintenance, vous pouvez accéder à votre espace d'administration. Les utilisateurs ne pourront plus se connecter.
:::

## Personnalisation de la page de maintenance
Vous pouvez personnaliser la page de maintenance en modifiant le fichier `maintenance.blade.php` dans le dossier `resources/themes/default/views/maintenance.blade.php` de votre installation.

## Aperçu de la page de maintenance
![Maintenance](/img/next_gen/settings/core/maintenance/maintenance_home.png)