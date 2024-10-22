# Base de données
Vous pouvez accéder à vos accès de base de données de votre espace client. Cette page nécessite une authentification supplémentaire avec la validation du mot de passe.
![img](/img/next_gen/settings/security/database/database.png)
## Accès à la base de données
Vous avez la possibilité de consulter les accès de votre base de données. Le mot de passe de la base de données est masqué pour des raisons de sécurité. Vous pouvez le révéler en passant votre souris sur le champ du mot de passe. Un PHPMyAdmin est également disponible pour accéder à votre base de données selon le serveur sur lequel vous êtes hébergé. un bouton est disponible pour y accéder.

:::info
Le PHPMyAdmin est uniquement disponible pour les instances cloud.
:::
## Migration de la base de données
:::warning
La migration de la base de données est une opération délicate. Cette fonctionnalité est réservée aux utilisateurs avancés, souvent en offre auto-hébergée.
:::
Vous pouvez migrez votre base de données pour rajouter des tables ou des colonnes. Il suffit de selectionner l'extension à migrer ou choisir "Core" pour les migration système. Ensuite, cliquez sur le bouton "Migrer" pour lancer l'opération.
### Sortie
![img](/img/next_gen/settings/security/database/migrate.png)

## Seeder la base de données
:::warning
Le seeder de la base de données est une opération délicate. Cette fonctionnalité est réservée aux utilisateurs avancés, souvent en offre auto-hébergée.
:::
Vous pouvez seeder votre base de données pour rajouter des données. Il suffit cliquer sur le bouton "Seeder" pour lancer l'opération. Il lancera toutes les seeders disponibles.
### Sortie
![img](/img/next_gen/settings/security/database/seed.png)