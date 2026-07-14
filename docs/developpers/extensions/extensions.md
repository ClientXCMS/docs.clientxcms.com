---
translated: true
---
# Extensions

Extensions in the ClientXCMS CMS are of two types: **addons** and **modules**, and they are located in the respective `/modules` and `/addons` folders. Each extension is based on the **Laravel** framework and follows a well-defined structure.
In this guide, we will see how to create an extension, how to structure it, and how to register it in the CMS.

## Prerequisites
We recommend having good knowledge of **PHP** and **Laravel**, as well as being comfortable with the following concepts:

- [Controllers](https://laravel.com/docs/11.x/controllers)
- [Views](https://laravel.com/docs/11.x/views)
- [Eloquent Models](https://laravel.com/docs/11.x/eloquent)
- [Service Providers](https://laravel.com/docs/11.x/providers)
- And any other Laravel concept

These topics will not necessarily be covered in detail in this documentation.

You must also have access to the source code for self-hosting.

Additionally, it is recommended to be comfortable with **TailwindCSS**, **Blade**, and **Vite.js**.

## Development License
We can provide you with a development license with the same extensions as your main license and 15 authorized clients for your development. For more information, please contact us.
## Activation

Loaded extensions can be activated or deactivated on the Extensions page
![img](/img/next_gen/extensions/image_1.png)

## Choosing between a module and an addon

Simply put, modules are used for service delivery, for example to implement a management panel like Virtualizor, Plesk, or Pterodactyl. Addons are used to add additional features such as payment methods, logic, or custom pages.
## Publishing on the Marketplace

You can distribute your addon or module to the CLIENTXCMS community as a free or paid resource. Follow the [marketplace publication guide](../publish-resource) to activate your developer area and prepare the listing, then read [Publishing an Addon or Module](./publish-marketplace) for UUID, Service Provider, GitHub repository, packaging, and update requirements.
