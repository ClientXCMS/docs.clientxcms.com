# Traductions
Un système de traduction est disponible dans **ClientXCMS** pour gérer les traductions des différentes parties de l'application. Ce système est basé sur des fichiers de langue qui contiennent les traductions pour chaque langue supportée. Chaque fichier de langue est un fichier PHP qui retourne un tableau associatif contenant les clés de traduction et
leur valeur traduite.
## Fichiers de langue
Les fichiers de langue sont situés dans le répertoire `addons/<nom_de_votre_extension>/lang/` de l'extension.
Chaque langue est représentée par un sous-répertoire nommé avec le code de la langue (par exemple, `en` pour l'anglais, `fr` pour le français, etc.). Dans chaque sous-répertoire, vous trouverez des fichiers PHP qui contiennent les traductions pour cette langue.
Par exemple, pour une extension nommée `my_extension`, les fichiers de langue pourraient être organisés comme suit :
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
Chaque fichier PHP retourne un tableau associatif contenant les clés de traduction et leur valeur traduite.
Par exemple, le fichier `messages.php` pour la langue anglaise pourrait ressembler à ceci
```php
<?php
return [
    'test' => 'This is a test message.',
];

Pour enregister le dossier de langue dans votre extension, vous devez ajouter le code suivant dans le fichier `ServiceProvider` de votre extension :
```php
public function boot(): void
{
    $this->loadTranslations();
}
```
Avec `my_extension` qui est le nom de votre extension.
### Utilisation des traductions
Pour utiliser les traductions dans votre code PHP, vous pouvez utiliser la fonction `trans()` ou
la fonction `__()`. Par exemple :
```
$message = trans('my_extension::messages.test');
```
ou
```
$message = __('my_extension::messages.test');
```
Avec `my_extension` qui est le nom de votre extension, `messages` qui est le nom du fichier de langue (sans l'extension `.php`) et `test` qui est la clé de traduction.
## Traductions dans des modèles Laravel
CLIENTXCMS supporte également l'utilisation des traductions dans des modèles Laravel. Pour cela, vous devez rajouter sur le modèle le trait et définir les clés traduisibles dans une propriété `$translatableKeys`. Voici un exemple :
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

Avec `name` et `description` qui sont les noms des colonnes de la base de données à traduire et `text` ou `editor` qui sont le type de champ (champ texte simple ou champ éditeur WYSIWYG).
Vous pouvez ensuite utiliser les méthodes `trans` pour obtenir la traduction d'une clé pour une langue spécifique. Par exemple :
```php
$model = YourModel::find(1);
$nameInFrench = $model->trans('name', 'default', 'fr');
$nameInEnglish = $model->trans('name', 'default', 'en');
```

Avec `name` qui est le nom de la colonne à traduire, `default` qui est la valeur par défaut si la traduction n'existe pas et `fr` ou `en` qui sont les codes des langues.


Vous pouvez également utiliser les méthodes `translations` pour récupérer la relation des traductions. Par exemple :
```php
$model = YourModel::find(1);
$allTranslations = $model->translations; // Récupère toutes les traductions
$frenchTranslation = $model->translations()->where('locale', 'fr')->first(); //
$englishTranslation = $model->translations()->where('locale', 'en')->first(); //
```

## Administration des traductions
Pour gérer les traductions dans l'administration de CLIENTXCMS rien de plus simple. rajoutez simplement ce include en bas de votre vue d'édition: 
```php
        @include('admin/translations/overlay', ['item' => $item])
```
Et rajouter dans votre @include de votre input la clé `translatable` à true:
```php
    @include('admin/shared/input', ['name' => 'name', 'label' => __('global.name'), 'value' => old('name', $item->name), 'translatable' => true])

```
:::warning
`$item` doit être une instance du modèle que vous éditez. Les traductions sont disponibles uniquement lors de l'édition d'un élément existant.
:::