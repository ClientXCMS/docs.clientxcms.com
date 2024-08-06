---
sidebar_position: 6
---
# Formulaire
Les formulaires sont des éléments essentiels pour interagir avec les utilisateurs et sont souvent utilisés pour collecter des informations. Les formulaires sont utilisés pour collecter des informations de l'utilisateur, telles que les coordonnées, les commentaires, les avis, etc. Les formulaires sont également utilisés pour collecter des informations de l'utilisateur, telles que l'inscription, le checkout etc.


Pour les formulaires, nous avons rajouté un ensemble de composants sous forme d'`@include` de fichier pour les formulaires. Vous pouvez les utiliser dans vos vues. Cela permet de pouvoir les modifier facilement sans devoir repasser sur chaque formulaire.
Pour les utiliser :
### Input
```blade
@include('shared.input', ['name' => 'name', 'label' => 'Name', 'value' => '', 'type' => 'text'])
```
------------------------------------------------
| Propriété  | Description        | Type   | Obligatoire |
|------------|--------------------|--------|-------------|
| name       | Nom du champ       | String | Oui         |
| label      | Label du champ     | String | Non         |
| value      | Valeur du champ    | String | Non         |
| type       | Type du champ      | String | Non         |
| attributes | Attributs du champ | Array  | Non         |
| step       | Step du champ      | String | Non         |
| disabled   | Champ désactiver   | Bool   | Non         |
| readonly   | Champ regardable   | Bool   | Non         |
| help       | Aide du champ      | String | Non         |
| optional   | Champ optionnel    | Bool   | Non         |

------------------------------------------------
### Password
```blade
@include('shared.password', ['name' => 'password', 'label' => 'Password', 'value' => ''])
```
------------------------------------------------
| Propriété  | Description        | Type   | Obligatoire |
|------------|--------------------|--------|-------------|
| name       | Nom du champ       | String | Oui         |
| label      | Label du champ     | String | Non         |
| value      | Valeur du champ    | String | Non         |
| help       | Aide du champ      | String | Non         |
| optional   | Champ optionnel    | Bool   | Non         |
------------------------------------------------
### Textarea
```blade
@include('shared.textarea', ['name' => 'description', 'label' => 'Description', 'value' => ''])
```
------------------------------------------------
| Propriété       | Description                           | Type    | Obligatoire |
|-----------------|---------------------------------------|---------|-------------|
| name            | Nom du champ                          | String  | Oui         |
| label           | Label du champ                        | String  | Non         |
| value           | Valeur du champ                       | String  | Non         |
| attributes      | Attributs du champ                    | Array   | Non         |
| rows            | nombre de ligne                       | Integer | Non         |
| disabled        | Champ désactiver                      | Bool    | Non         |
| help            | Aide du champ                         | String  | Non         |
| Inverifiedvalue | Valeur non vérifié (HTML non échappé) | String  | Non         |
------------------------------------------------

### Select
```blade
@include('shared.select', ['name' => 'country', 'label' => 'Country', 'value' => '', 'options' => ['France', 'Belgium', 'Germany']])
```
------------------------------------------------
| Propriété  | Description        | Type   | Obligatoire |
|------------|--------------------|--------|-------------|
| name       | Nom du champ       | String | Oui         |
| label      | Label du champ     | String | Non         |
| value      | Valeur du champ    | String | Non         |
| options    | Options du champ   | Array  | Oui         |
| attributes | Attributs du champ | Array  | Non         |
| help       | Aide du champ      | String | Non         |
------------------------------------------------
### Checkbox
```blade
@include('shared.checkbox', ['name' => 'terms', 'label' => 'I agree to the terms and conditions', 'value' => '1'])
```
------------------------------------------------
| Propriété  | Description        | Type   | Obligatoire |
|------------|--------------------|--------|-------------|
| name       | Nom du champ       | String | Oui         |
| label      | Label du champ     | String | Non         |
| value      | Valeur du champ    | String | Non         |
| checked    | Champ coché       | Bool   | Non         |
------------------------------------------------

### Captcha
Si vous estimez que vous avez besoin d'un captcha pour votre formulaire, vous pouvez rajouter le captcha en utilisant le composant suivant :
```blade
@include('shared.captcha')
```
ClientXCMS prendra en charge la création et la validation du captcha pour vous.

### Message flash
ClientXCMS prend en charge les messages flash pour les formulaires. Vous pouvez les afficher en utilisant le composant suivant :
```blade
@include('shared.flash')
```

### Validation
Pour la validation des formulaires, nous utilisons la validation de Laravel. Vous pouvez consulter la [documentation de Laravel](https://laravel.com/docs/11.x/validation) pour plus d'informations sur la validation.
Pour debuguer les erreurs de validation, vous pouvez utiliser la méthode `errors()` de Laravel.
```blade
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
