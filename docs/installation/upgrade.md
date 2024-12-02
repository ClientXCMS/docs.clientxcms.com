# Mise à jour
L'espace est régulièrement mis à jour pour corriger des bugs, ajouter de nouvelles fonctionnalités ou extensions.

## Cloud

La mise à jour de l'espace client en cloud est automatique. Vous n'avez rien à faire, l'espace client se mettra à jour automatiquement.

## Autohébergement & Plesk

La mise à jour de l'espace client en autohébergement est manuelle. Vous devez remplacer les fichiers de l'espace client par les nouveaux fichiers. Pour cela, vous devez faire une demande téléchargement.

:::info
Nous vous recommandons de faire une sauvegarde de votre espace client et de la base de données avant de commencer la mise à jour.
::: 
Pour mettre à jour l'espace client, vous devez suivre les étapes suivantes :

1. Téléchargez les fichiers de la nouvelle version de l'espace client.
2. Mettre votre espace client en maintenance.
3. Décompressez le fichier téléchargé.
4. Remplacez les fichiers de l'espace client par les nouveaux fichiers.
5. Exécutez la commande `composer install --optimize-autoloader --no-dev` pour installer les dépendances composer.
6. Exécutez la commande `php artisan migrate --seed && php artisan clientxcms:db-extension --all` pour mettre à jour la base de données.
7. Exécutez la commande `php artisan cache:clear` pour vider le cache de l'espace client.
8. Exécutez la commande `php artisan view:clear` pour vider le cache des vues.
9. Exécutez la commande `php artisan route:clear` pour vider le cache des routes.
10. Exécutez la commande `npm install && npm run build` pour installer les dépendances npm et compiler les assets.