---
sidebar_position: 6
translated: true
---
# Forms
Forms are essential elements for interacting with users and are often used to collect information. Forms are used to collect user information such as contact details, comments, reviews, etc. Forms are also used to collect user information such as registration, checkout, etc.


For forms, we have added a set of components as file `@include` for forms. You can use them in your views. This allows you to easily modify them without having to go through each form.
To use them:
### Input
```blade
@include('shared.input', ['name' => 'name', 'label' => 'Name', 'value' => '', 'type' => 'text'])
```
------------------------------------------------
| Property   | Description        | Type   | Required |
|------------|--------------------|--------|----------|
| name       | Field name         | String | Yes      |
| label      | Field label        | String | No       |
| value      | Field value        | String | No       |
| type       | Field type         | String | No       |
| attributes | Field attributes   | Array  | No       |
| step       | Field step         | String | No       |
| disabled   | Disabled field     | Bool   | No       |
| readonly   | Readonly field     | Bool   | No       |
| help       | Field help         | String | No       |
| optional   | Optional field     | Bool   | No       |

------------------------------------------------
### Password
```blade
@include('shared.password', ['name' => 'password', 'label' => 'Password', 'value' => ''])
```
------------------------------------------------
| Property   | Description        | Type   | Required |
|------------|--------------------|--------|----------|
| name       | Field name         | String | Yes      |
| label      | Field label        | String | No       |
| value      | Field value        | String | No       |
| help       | Field help         | String | No       |
| optional   | Optional field     | Bool   | No       |
------------------------------------------------
### Textarea
```blade
@include('shared.textarea', ['name' => 'description', 'label' => 'Description', 'value' => ''])
```
------------------------------------------------
| Property        | Description                           | Type    | Required |
|-----------------|---------------------------------------|---------|----------|
| name            | Field name                            | String  | Yes      |
| label           | Field label                           | String  | No       |
| value           | Field value                           | String  | No       |
| attributes      | Field attributes                      | Array   | No       |
| rows            | Number of rows                        | Integer | No       |
| disabled        | Disabled field                        | Bool    | No       |
| help            | Field help                            | String  | No       |
| Inverifiedvalue | Unverified value (unescaped HTML)     | String  | No       |
------------------------------------------------

### Select
```blade
@include('shared.select', ['name' => 'country', 'label' => 'Country', 'value' => '', 'options' => ['France', 'Belgium', 'Germany']])
```
------------------------------------------------
| Property   | Description        | Type   | Required |
|------------|--------------------|--------|----------|
| name       | Field name         | String | Yes      |
| label      | Field label        | String | No       |
| value      | Field value        | String | No       |
| options    | Field options      | Array  | Yes      |
| attributes | Field attributes   | Array  | No       |
| help       | Field help         | String | No       |
------------------------------------------------
### Checkbox
```blade
@include('shared.checkbox', ['name' => 'terms', 'label' => 'I agree to the terms and conditions', 'value' => '1'])
```
------------------------------------------------
| Property   | Description        | Type   | Required |
|------------|--------------------|--------|----------|
| name       | Field name         | String | Yes      |
| label      | Field label        | String | No       |
| value      | Field value        | String | No       |
| checked    | Checked field      | Bool   | No       |
------------------------------------------------

### Captcha
If you feel you need a captcha for your form, you can add the captcha using the following component:
```blade
@include('shared.captcha')
```
ClientXCMS will handle the creation and validation of the captcha for you.

### Flash Message
ClientXCMS supports flash messages for forms. You can display them using the following component:
```blade
@include('shared.flash')
```

### Validation
ClientXCMS supports form validation and displays the error message next to the relevant field. You can check the [Laravel documentation](https://laravel.com/docs/11.x/validation) for more information on validation.
To debug validation errors, you can use Laravel's `errors()` method or `@dump($errors);`.
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
```
