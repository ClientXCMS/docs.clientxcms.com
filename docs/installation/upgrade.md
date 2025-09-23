# Mise à jour
L'espace est régulièrement mis à jour pour corriger des bugs, ajouter de nouvelles fonctionnalités ou extensions.

## Cloud

La mise à jour de l'espace client en cloud est automatique. Vous n'avez rien à faire, l'espace client se mettra à jour automatiquement.

## Autohébergement & Plesk

La mise à jour de l'espace client en autohébergement est manuelle. Vous devez remplacer les fichiers de l'espace client par les nouveaux fichiers. Pour cela, vous devez faire une demande téléchargement.

:::info
Le déploiement de la mise à jour pour les clients autohébergés est disponible une ou deux semaines après la mise à jour en cloud pour s'assurer qu'il n'y a pas de bugs critiques.
:::
:::warning
Nous vous recommandons de faire une sauvegarde de votre espace client et de la base de données avant de commencer la mise à jour.
::: 
Pour mettre à jour l'espace client, vous devez suivre les étapes suivantes :
1. Téléchargez les fichiers de la nouvelle version de l'espace client.
2. Mettre votre espace client en maintenance.
3. Décompressez le fichier téléchargé.
4. Exécutez la commande `php artisan down` pour mettre l'espace client en maintenance.
5. Remplacez les fichiers de l'espace client par les nouveaux fichiers.
6. Exécutez la commande `composer install --optimize-autoloader --no-dev` pour installer les dépendances composer.
7. Exécutez la commande `php artisan migrate --seed && php artisan clientxcms:db-extension --all` pour mettre à jour la base de données.
8. Exécutez la commande `php artisan cache:clear` pour vider le cache de l'espace client.
9. Exécutez la commande `php artisan view:clear` pour vider le cache des vues.
10. Exécutez la commande `php artisan route:clear` pour vider le cache des routes.
11. Exécutez la commande `npm install && npm run build` pour installer les dépendances npm et compiler les assets.
12. Exécutez la commande `php artisan up` pour sortir l'espace client de la maintenance.
13. Exécutez la commande `php artisan clientxcms:on-update` pour exécuter les actions nécessaires après la mise à jour si besoin.

### Plesk
Si vous utilisez Plesk et que vous avez installé l'espace client via le Laravel Toolkit, vous pouvez suivre les étapes suivantes :
1. Connectez-vous à votre espace Plesk.
2. Allez dans le gestionnaire des dépôts Git.
3. Mettez à jour le dépôt Git avec la nouvelle version de l'espace client en cliquant sur le bouton "Déployer maintenant".
![Déploiement Git - Plesk](/img/next_gen/Installation/Plesk/Plesk_Git_deploy.png)
4. Suivez les étapes 4 à 13 de la mise à jour en autohébergement ci-dessus en utilisant l'interface du Laravel Toolkit.