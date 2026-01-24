---
translated: true
---

# Upgrade

The application is regularly updated to fix bugs, add new features, or extensions.

## Cloud

Cloud updates are automatic. You don't need to do anything, the application will update automatically.

## Self-hosted

Self-hosted updates are manual. You need to replace the application files with the new ones.

:::warning
We recommend making a backup of your application and database before starting an update.
:::

To update ClientXCMS, choose one of the methods below: downloading the release (archive) or updating via Git.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="archive" label="Archive (release)">

1. Download the latest release from GitHub and save it as `clientxcms.zip`:

```bash
curl -L -o clientxcms.zip "https://github.com/ClientXCMS/ClientXCMS/releases/latest"
```

2. Put your application in maintenance mode:

```bash
php artisan down
```

3. Extract the archive and replace the files:

```bash
unzip clientxcms.zip -d /var/www/clientxcms
mv /var/www/clientxcms/ClientXCMS-*/* /var/www/clientxcms
rm -r /var/www/clientxcms/ClientXCMS-*
```

4. Install dependencies and run migrations:

```bash
composer install --optimize-autoloader --no-dev
php artisan migrate --seed && php artisan clientxcms:db-extension --all
```

5. Clear caches and rebuild assets:

```bash
php artisan cache:clear
php artisan view:clear
php artisan route:clear
npm install && npm run build
```

6. Exit maintenance mode and run post-update hooks:

```bash
php artisan up
php artisan clientxcms:on-update
```

</TabItem>
<TabItem value="git" label="Git">

1. If you installed your instance via Git, you can update by pulling the remote branch:

```bash
cd /var/www/clientxcms
git fetch --all --prune
git checkout master
git pull origin master
```

2. Put your application in maintenance mode:

```bash
php artisan down
```

3. Install dependencies and run migrations:

```bash
composer install --optimize-autoloader --no-dev
php artisan migrate --seed && php artisan clientxcms:db-extension --all
```

4. Clear caches and rebuild assets:

```bash
php artisan cache:clear
php artisan view:clear
php artisan route:clear
npm install && npm run build
```

5. Exit maintenance mode and run post-update hooks:

```bash
php artisan up
php artisan clientxcms:on-update
```

    </TabItem>
</Tabs>

### Plesk

If you use Plesk and installed the application via the Laravel Toolkit, you can follow these steps:

1. Log in to your Plesk panel.
2. Go to the Git repository manager.
3. Update the Git repository with the new version by clicking the "Deploy Now" button.
   ![Git Deployment - Plesk](/img/next_gen/Installation/Plesk/Plesk_Git_deploy.png)
4. Follow steps 4 to 13 of the self-hosted update above using the Laravel Toolkit interface.
