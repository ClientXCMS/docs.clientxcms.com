# Support ID
L’addon Support ID pour CLIENTXCMS introduit un système d’identification simple, fiable et universel permettant d’associer à chaque client un code unique de support.
Ce code devient la référence centrale pour reconnaître instantanément un utilisateur, qu’il contacte votre support via ticket, Discord, e-mail, téléphone ou tout autre canal.

:::info
L'addon Support ID demande la version 2.14.9 ou supérieure de CLIENTXCMS.
:::

## Configuration de l'extension
Vous pouvez configurer l'extension en accédant à `Espace d'administration ` > `Paramètres` > `Paramètres des extensions` > `Support ID`.
![img](/img/next_gen/extensions/addons/supportid/config.png)
- **Préfixe du Support ID** : Définit le préfixe utilisé pour générer les Support IDs (par défaut : CTX-).
- **Format du code** : Choisissez entre un code alphanumérique ou uniquement numérique pour le Support ID.

## API
![img](/img/next_gen/extensions/addons/supportid/api.png)
Vous pouvez accéder aux informations de Support ID via l'API REST de CLIENTXCMS. Voici le point de terminaison disponible :
- `GET /api/v1/addons/supportid/{client_id}` : Récupère le Support ID pour un client spécifique en utilisant son ID client.
### Exemple de requête
```bash
curl -X GET "https://clientxcms.app/api/v1/addons/supportid/CTX-RJ347X" -H "Authorization: Bearer VOTRE_TOKEN_API"
```
### Exemple de réponse
```json
{
  data: {
    "id": 1,
    "support_id": "CTX-RJ347X",
    "firstname": "XX",
    "lastname": "XX",
    "email": "test@clientxcms.com",
    "company_name": null,
    "billing_details": null,
    "locale": "fr_FR",
    "phone": "XXX",
    "address": "XX",
    "address2": null,
    "city": "XX",
    "country": "FR",
    "region": "XXX",
    "zipcode": "XXX",
    "email_verified_at": "2025-10-25T15:52:03.000000Z",
    "balance": "15.00",
    "last_login": null,
    "is_confirmed": 1,
    "confirmation_token": null,
    "is_deleted": 0,
    "deleted_at": null,
    "totp_secret": null,
    "dark_mode": 1,
    "notes": null,
    "created_at": "2025-09-07T16:33:58.000000Z",
    "gdpr_compliment": 0
  }
}
```
  
Vous pouvez réinitialiser la clé d'API en appuyant sur le bouton "Réinitialiser la clé" dans la section de configuration de l'extension.

## Rendu sur le site
![img](/img/next_gen/extensions/addons/supportid/image.png)
## Support des thèmes
Pour afficher le Support ID sur votre thème, ajoutez ce code dans le fichier `/views/front/client/index.blade.php` : 
```blade
@includeWhen(app('extension')->extensionIsEnabled('supportid'), 'supportid::card')
```