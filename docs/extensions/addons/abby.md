# Abby
Abby automatise l’enregistrement des recettes dans votre livre comptable. Chaque vente, paiement ou facture réglée dans CLIENTXCMS est synchronisée automatiquement dans le bon compte de recettes, sans saisie manuelle. Configurez vos produits, laissez Abby générer les écritures et gardez un historique complet : date, montant, client, facture et lien direct.


:::info
Pour utiliser les fonctionnalités suivantes, il faut que l'addon Abby soit activé sur votre CLIENTXCMS . [cliquez ici pour l'activer](../)
:::

:::info Comptabilité
L'addon Abby importe uniquement les factures une fois qu'elles sont payées. Les factures impayées, annulées ou autres ne seront pas importées dans Abby. Cela n'importe pas les paiements manuels effectués par les crédits clients considérant qu'ils sont déjà comptabilisés en tant que recettes lors de l'ajout du crédit.
:::
## Configuration
Vous pouvez configurer votre environement Abby dans votre fichier `.env` en ajoutant les lignes suivantes :

```env
ABBY_API_KEY=your_api_key
```
Remplacez `your_api_key` par votre clé API Abby.
Vous pouvez retrouver votre clé API dans votre compte Abby sous `Paramètres` > `Intégration` > `Clé d'API` > `Ajouter une clé`.

## Migration des données existantes
Si vous avez déjà des factures payées dans CLIENTXCMS avant l'installation d'Abby, vous pouvez migrer ces données vers Abby en utilisant la commande artisan suivante :
```bash
php artisan abby:process-invoices --start-date=YYYY-MM-DD --end-date=YYYY-MM-DD
```
Remplacez `YYYY-MM-DD` par les dates de début et de fin de la période que vous souhaitez migrer. Cette commande va traiter toutes les factures payées entre ces deux dates et les enregistrer dans Abby.

Cela importera uniquement les factures payées. Les factures impayées, annulées ou autres ne seront pas migrées.