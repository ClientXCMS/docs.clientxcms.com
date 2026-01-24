---
translated: true
---
# Translations
A translation system is available in **ClientXCMS** to manage translations for different parts of the application. This system is based on language files that contain translations for each supported language. Each language file is a PHP file that returns an associative array containing translation keys and their translated values.
## Language Files
Language files are located in the `addons/<your_extension_name>/lang/` directory of the extension.
Each language is represented by a subdirectory named with the language code (for example, `en` for English, `fr` for French, etc.). In each subdirectory, you will find PHP files containing translations for that language.
For example, for an extension named `my_extension`, the language files could be organized as follows:
```
addons/my_extension/lang/
├── en
│   ├── messages.php
│   └── errors.php
├── fr
│   ├── messages.php
│   └── errors.php
└── es
    ├── messages.php
    └── errors.php
```
Each PHP file returns an associative array containing translation keys and their translated values.
For example, the `messages.php` file for the English language might look like this:
```php
<?php
return [
    'test' => 'This is a test message.',
];
```

To register the language folder in your extension, you need to add the following code in your extension's `ServiceProvider` file:
```php
public function boot(): void
{
    $this->loadTranslations();
}
```
Where `my_extension` is the name of your extension.
### Using Translations
To use translations in your PHP code, you can use the `trans()` function or the `__()` function. For example:
```
$message = trans('my_extension::messages.test');
```
or
```
$message = __('my_extension::messages.test');
```
Where `my_extension` is your extension name, `messages` is the language file name (without the `.php` extension), and `test` is the translation key.
## Translations in Laravel Models
CLIENTXCMS also supports using translations in Laravel models. To do this, you need to add the trait to the model and define the translatable keys in a `$translatableKeys` property. Here is an example:
```php
use App\Models\Traits\Translatable;
class YourModel extends Model
{
    use Translatable;

    private array $translatableKeys = [
        'name' => 'text',
        'description' => 'editor',
    ];
}
```

Where `name` and `description` are the database column names to translate and `text` or `editor` are the field types (simple text field or WYSIWYG editor field).
You can then use the `trans` methods to get the translation of a key for a specific language. For example:
```php
$model = YourModel::find(1);
$nameInFrench = $model->trans('name', 'default', 'fr');
$nameInEnglish = $model->trans('name', 'default', 'en');
```

Where `name` is the column name to translate, `default` is the default value if the translation doesn't exist, and `fr` or `en` are the language codes.


You can also use the `translations` methods to retrieve the translations relationship. For example:
```php
$model = YourModel::find(1);
$allTranslations = $model->translations; // Gets all translations
$frenchTranslation = $model->translations()->where('locale', 'fr')->first();
$englishTranslation = $model->translations()->where('locale', 'en')->first();
```

## Translation Administration
To manage translations in the CLIENTXCMS administration, it's very simple. Just add this include at the bottom of your edit view:
```php
        @include('admin/translations/overlay', ['item' => $item])
```
And add the `translatable` key set to true in your input @include:
```php
    @include('admin/shared/input', ['name' => 'name', 'label' => __('global.name'), 'value' => old('name', $item->name), 'translatable' => true])

```
:::warning
`$item` must be an instance of the model you are editing. Translations are only available when editing an existing item.
:::
