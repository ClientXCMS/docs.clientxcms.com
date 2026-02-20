---
sidebar_position: 6
translated: true
---
# Scheduled Tasks
Scheduled tasks allow you to define recurring actions such as service delivery, expiration, or customer notifications.

## Existing Tasks
Here is a description of the default scheduled tasks in CLIENTXCMS.
### Services delivery
The command `php artisan services:delivery` delivers services and renews services awaiting renewal.

Frequency: Every minute
### Services expire
The command `php artisan services:expire` checks services that have expired or need to be suspended and disables them.

Frequency: Every minute
### Services renewals
The command `php artisan services:renewals` generates renewal invoices for services.

Frequency: Every 3 hours
### Services notifications
The command `php artisan services:notify-expiration` notifies customers by email of services that will expire soon.

Frequency: Every day at 9am
### Helpdesk close
The command `php artisan clientxcms:helpdesk-close` closes tickets that have been awaiting a response for X days.

Frequency: Every day at 12pm
### Invoice delete
The command `php artisan clientxcms:invoice-delete` deletes or cancels invoices that have been awaiting payment for X days.

Frequency: Every day at midnight
### Purge metadata
The command `php artisan clientxcms:purge-metadata` deletes metadata that is no longer used.

Frequency: Every Monday at midnight

## Creating a Scheduled Task
To create a scheduled task, you need to create an artisan command and add the command in the `ServiceProvider` file. To create the artisan command, please create a class that extends `Command` in your extension folder.
For example:

```php
<?php
// addons/fund/src/Console/Commands/MyCommand.php
use Illuminate\Console\Command;

class MyCommand extends Command
{
    protected $signature = 'my:command';
    protected $description = 'My command description';

    public function handle()
    {
        // Your code here
    }
}
```
Then add the command in your extension's `ServiceProvider` file.

```php
<?php
// addons/fund/src/Providers/FundServiceProvider.php
use \App\Extensions\BaseAddonServiceProvider;
use Illuminate\Support\ServiceProvider;

class FundServiceProvider extends BaseAddonServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                \Addons\Fund\Console\Commands\MyCommand::class,
            ]);
        }
        $this->registerSchedule();
    }

    public function schedule(Schedule $schedule)
    {
        if ($this->app->runningInConsole()) {
            $schedule->command('my:command')->everyMinute()
            ->name('my_command')
            ->sendOutputTo(storage_path('logs/my_command.log'));
        }
    }
}
```
