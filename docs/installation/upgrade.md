# Mise à jour

L'espace est régulièrement mis à jour pour corriger des bugs, ajouter de nouvelles fonctionnalités ou extensions.

## Cloud

La mise à jour de l'espace client en cloud est automatique. Vous n'avez rien à faire, l'espace client se mettra à jour automatiquement.

## Autohébergement

La mise à jour de l'espace client en autohébergement est manuelle. Vous devez remplacer les fichiers de l'espace client par les nouveaux fichiers.

:::warning
Nous vous recommandons de faire une sauvegarde de votre espace client et de la base de données avant de commencer une mise à jour.
:::

Pour mettre à jour ClientXCMS, choisissez l'une des méthodes ci‑dessous : téléchargement de la release (archive) ou mise à jour via Git.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="archive" label="Archive (release)">

1. Téléchargez la release la plus récente depuis GitHub et enregistrez‑la en `clientxcms.zip` :

```bash
curl -L -o clientxcms.zip "https://github.com/ClientXCMS/ClientXCMS/releases/latest"
```

2. Mettez votre espace client en maintenance :

```bash
php artisan down
```

3. Décompressez l'archive et remplacez les fichiers :

```bash
unzip clientxcms.zip -d /var/www/clientxcms
mv /var/www/clientxcms/ClientXCMS-*/* /var/www/clientxcms
rm -r /var/www/clientxcms/ClientXCMS-*
```

4. Installez les dépendances et exécutez les migrations :

```bash
composer install --optimize-autoloader --no-dev
php artisan migrate --seed && php artisan clientxcms:db-extension --all
```

5. Nettoyez les caches et reconstruisez les assets :

```bash
php artisan cache:clear
php artisan view:clear
php artisan route:clear
npm install && npm run build
```

6. Sortez de la maintenance et exécutez les hooks post‑update :

```bash
php artisan up
php artisan clientxcms:on-update
```

</TabItem>
<TabItem value="git" label="Git">

1. Si vous avez installé votre instance via Git, vous pouvez mettre à jour en tirant la branche distante :

```bash
cd /var/www/clientxcms
git fetch --all --prune
git checkout master
git pull origin master
```

2. Mettez votre espace client en maintenance :

```bash
php artisan down
```

3. Installez les dépendances et exécutez les migrations :

```bash
composer install --optimize-autoloader --no-dev
php artisan migrate --seed && php artisan clientxcms:db-extension --all
```

4. Nettoyez les caches et reconstruisez les assets :

```bash
php artisan cache:clear
php artisan view:clear
php artisan route:clear
npm install && npm run build
```

5. Sortez de la maintenance et exécutez les hooks post‑update :

```bash
php artisan up
php artisan clientxcms:on-update
```

    </TabItem>
</Tabs>

### Plesk

Si vous utilisez Plesk et que vous avez installé l'espace client via le Laravel Toolkit, vous pouvez suivre les étapes suivantes :

1. Connectez-vous à votre espace Plesk.
2. Allez dans le gestionnaire des dépôts Git.
3. Mettez à jour le dépôt Git avec la nouvelle version de l'espace client en cliquant sur le bouton "Déployer maintenant".
   ![Déploiement Git - Plesk](/img/next_gen/Installation/Plesk/Plesk_Git_deploy.png)
4. Suivez les étapes 4 à 13 de la mise à jour en autohébergement ci-dessus en utilisant l'interface du Laravel Toolkit.
