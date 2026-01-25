---
translated: true
---
# Permissions
A permission system is available in **ClientXCMS** to manage user access to certain features. This system is based on permissions that are assigned to roles. Each role can have multiple permissions.
## Default Permissions
Here is the list of default permissions in **ClientXCMS**.
### Administrative Permissions

| Name | Description |
|------|-------------|
| admin.manage_license | Manage licenses |
| admin.manage_gateways | Manage payment gateways |
| admin.manage_roles | Manage roles |
| admin.manage_staff_profile | Manage staff profiles |
| admin.manage_staff | Manage staff |

### Billing Permissions

| Name | Description |
|------|-------------|
| admin.show_invoices | View invoices |
| admin.create_invoices | Create invoices |
| admin.manage_invoices | Manage invoices |
| admin.show_payment_methods | View payment methods |

### Customer Permissions

| Name | Description |
|------|-------------|
| admin.manage_customers | Manage customers |
| admin.show_emails | Display email messages |
| admin.autologin_customer | Automatic login as customer |
| admin.dashboard_last_login | View last logins in dashboard |
| admin.show_customers | View customers |

### Support Permissions

| Name | Description |
|------|-------------|
| admin.manage_departments | Manage departments |
| admin.manage_tickets | Manage tickets |
| admin.close_tickets | Close tickets |
| admin.reply_tickets | Reply to tickets |
| admin.create_tickets | Create tickets |

### Metadata Permissions

| Name | Description |
|------|-------------|
| admin.manage_metadata | Manage metadata |
| admin.show_metadata | View metadata |

### Service Permissions

| Name | Description |
|------|-------------|
| admin.manage_services | Manage services |
| admin.show_services | View services |
| admin.deliver_services | Deliver services |

### Store Permissions

| Name | Description |
|------|-------------|
| admin.manage_products | Manage products |
| admin.manage_groups | Manage product groups |
| admin.manage_coupons | Manage coupons |
| admin.earn_page | Access earnings page |

### Technical Permissions

| Name | Description |
|------|-------------|
| admin.manage_extensions | Manage extensions |
| admin.manage_database | Manage database |
| admin.show_logs | View logs |
| admin.manage_servers | Manage servers |
| admin.manage_personalization | Manage personalization |

### Permission Constants
You can also use permissions as constants:

`MANAGE_EXTENSIONS = 'admin.manage_extensions';`

`MANAGE_PERSONALIZATION = 'admin.manage_personalization';`

`MANAGE_SETTINGS = 'admin.manage_settings';`

`ALLOWED = 'admin.allowed';`

Example:
```php
if (staff_has_permission(Permission::MANAGE_EXTENSIONS)) {
    // Code
}
```
:::info Information
The `admin.manage_extensions` permission is conventionally used for all extension pages.
:::

## Creating a Permission
To create a permission, you must add a new entry in the `permissions.json` file of your extension. Here is an example `permissions.json` file:

```json
[
    {
        "name": "admin.fund",
        "label": "permissions.fund",
        "group": "permissions.store"
    },
],
```
Where `name` is the permission name, `label` is the permission translation in the language file, and `group` is the permission group.


You must then seed the database with the following command:
```bash
php artisan db:seed --class=PermissionsSeeder
```

Then you can use the permission in your code like this:
```php
if (staff_has_permission('admin.fund')) {
    // Code
}
```
or in Blade:
```blade
@if (staff_has_permission('admin.fund'))
    // Code
@endif
```

## Available Groups
Here is the list of available permission groups:
- permissions.store
- permissions.technical
- permissions.admin
- permissions.billing
- permissions.customers
- permissions.metadata
- permissions.services
- permissions.helpdesk
