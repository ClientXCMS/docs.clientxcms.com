---
translated: true
---
# Extensions

ClientXCMS extensions come in three types: **addons**, **modules**, and **themes**. Addons and modules share a common structure based on the **Laravel** framework and are located in the respective `/addons` and `/modules` folders; themes have their own structure and are covered in a [dedicated guide](../themes).
This guide covers addons and modules: how to create one, how to structure it, and how to register it in the CMS.

## Prerequisites
We recommend having good knowledge of **PHP** and **Laravel**, as well as being comfortable with the following concepts:

- [Controllers](https://laravel.com/docs/controllers)
- [Views](https://laravel.com/docs/views)
- [Eloquent Models](https://laravel.com/docs/eloquent)
- [Service Providers](https://laravel.com/docs/providers)
- And any other Laravel concept

These topics will not necessarily be covered in detail in this documentation.

You must also have access to the source code for self-hosting.

Additionally, it is recommended to be comfortable with **TailwindCSS**, **Blade**, and **Vite.js**.

## Development License
We can provide you with a development license with the same extensions as your main license and 15 authorized clients for your development. For more information, please contact us.
## Activation

Loaded extensions can be activated or deactivated on the **Settings > Extensions** page. It lists three tabs - **My Extensions**, **Discover**, and **Themes** - each showing installed and available items as cards (name, version, price, status). Depending on the extension's state, the available actions are **Update**, **Activate**/**Deactivate**, **Uninstall**, and **Details** (or **Buy** for a paid, uninstalled resource). A **Clear Cache** button in the page header lets you force a reload of extension metadata after a manual file change.

## Choosing between a module and an addon

Simply put, modules are used for service delivery, for example to implement a management panel like Virtualizor, Plesk, or Pterodactyl. Addons are used to add additional features such as payment methods, logic, or custom pages.
## Publishing on the Marketplace

You can distribute your addon or module to the CLIENTXCMS community as a free or paid resource. Follow the [marketplace publication guide](../publish-resource) to activate your developer area and prepare the listing, then read [Publishing an Addon or Module](./publish-marketplace) for UUID, Service Provider, GitHub repository, packaging, and update requirements.
