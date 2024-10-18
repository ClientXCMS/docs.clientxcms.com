# Permissions
Un système de permissions est disponible dans **ClientXCMS** pour gérer les accès des utilisateurs à certaines fonctionnalités. Ce système est basé sur des permissions qui sont attribuées à des rôles. Chaque rôle peut avoir plusieurs permissions.
## Permissions par défaut
Voici la liste des permissions par défaut de **ClientXCMS**.
### Permissions Administratives

| Nom | Description |
|------|-------------|
| admin.manage_license | Gérer les licences |
| admin.manage_gateways | Gérer les passerelles de paiement |
| admin.manage_roles | Gérer les rôles |
| admin.manage_staff_profile | Gérer les profils du personnel |
| admin.manage_staff | Gérer le personnel |

### Permissions de Facturation

| Nom | Description |
|------|-------------|
| admin.show_invoices | Voir les factures |
| admin.create_invoices | Créer des factures |
| admin.manage_invoices | Gérer les factures |
| admin.show_payment_methods | Voir les méthodes de paiement |

### Permissions des Clients

| Nom | Description |
|------|-------------|
| admin.manage_customers | Gérer les clients |
| admin.show_emails | Afficher les messages électroniques |
| admin.autologin_customer | Connexion automatique en tant que client |
| admin.dashboard_last_login | Voir les dernières connexions dans le tableau de bord |
| admin.show_customers | Voir les clients |

### Permissions du Support

| Nom | Description |
|------|-------------|
| admin.manage_departments | Gérer les départements |
| admin.manage_tickets | Gérer les tickets |
| admin.close_tickets | Fermer les tickets |
| admin.reply_tickets | Répondre aux tickets |
| admin.create_tickets | Créer des tickets |

### Permissions des Métadonnées

| Nom | Description |
|------|-------------|
| admin.manage_metadata | Gérer les métadonnées |
| admin.show_metadata | Voir les métadonnées |

### Permissions des Services

| Nom | Description |
|------|-------------|
| admin.manage_services | Gérer les services |
| admin.show_services | Voir les services |
| admin.deliver_services | Fournir des services |

### Permissions de la Boutique

| Nom | Description |
|------|-------------|
| admin.manage_products | Gérer les produits |
| admin.manage_groups | Gérer les groupes de produits |
| admin.manage_coupons | Gérer les coupons |
| admin.earn_page | Accéder à la page de gains |

### Permissions Techniques

| Nom | Description |
|------|-------------|
| admin.manage_extensions | Gérer les extensions |
| admin.manage_database | Gérer la base de données |
| admin.show_logs | Voir les journaux |
| admin.manage_servers | Gérer les serveurs |
| admin.manage_personalization | Gérer la personnalisation |

### Constantes de Permissions
Vous pouvez également utiliser les permissions sous formes de constantes  :

`MANAGE_EXTENSIONS = 'admin.manage_extensions';`

`MANAGE_PERSONALIZATION = 'admin.manage_personalization';`

`MANAGE_SETTINGS = 'admin.manage_settings';`

`ALLOWED = 'admin.allowed';`

Exemple : 
```php
if (staff_has_permission(Permission::MANAGE_EXTENSIONS)) {
    // Code
}
```
:::info Information
La permission `admin.manage_extensions` est conventionnellement utilisée pour toutes les pages extensions.
:::

## Créer une permission
Pour créer une permission, vous devez ajouter une nouvelle entrée dans le fichier `permissions.json` de votre extension. Voici un exemple de fichier `permissions.json` :

```json
{
[
    {
        "name": "admin.fund",
        "label": "permissions.fund",
        "group": "permissions.store"
    },
],
}
```
Avec `name` qui est le nom de la permission, `label` qui est la traduction de la permission dans le fichier de langue et `group` qui est le groupe de la permission.

Puis vous pouvez utiliser la permission dans votre code comme ceci :
```php
if (staff_has_permission('admin.fund')) {
    // Code
}
```
ou en blade :
```blade
@if (staff_has_permission('admin.fund'))
    // Code
@endif
```

## Groupes disponibles
Voici la liste des groupes de permissions disponibles :
- permissions.store
- permissions.technical
- permissions.admin
- permissions.billing
- permissions.customers
- permissions.metadata
- permissions.services
- permissions.helpdesk