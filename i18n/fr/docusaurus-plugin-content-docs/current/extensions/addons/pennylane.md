# Pennylane

Pennylane peut importer les factures Factur-X de ClientXCMS et assurer leur transmission légale par sa plateforme agréée. L'addon peut également synchroniser les factures payées à des fins comptables.

:::info Prérequis
Activez l'addon Pennylane. L'API Entreprise nécessite une offre Pennylane compatible ainsi qu'un rôle administrateur ou dirigeant sur l'espace de l'entreprise.
:::

## Créer un token API Entreprise

1. Connectez-vous à l'espace de l'entreprise concernée dans Pennylane.
2. Ouvrez **Paramètres > Connectivité > Développeurs**.
3. Cliquez sur **Générer un token API**.
4. Nommez-le `ClientXCMS`.
5. Dans API V2, accordez les droits de lecture et d'écriture nécessaires à l'importation des factures Factur-X.
6. Choisissez une date d'expiration, puis générez le token.
7. Copiez-le immédiatement : Pennylane ne l'affiche qu'une seule fois.

Pour les tests, créez un environnement de test Pennylane depuis votre compte, ouvrez cet espace sandbox, puis générez un token séparé depuis **Paramètres entreprise > Connectivité > Développeurs**.

:::warning
Un token appartient à une seule entreprise et à un seul environnement. N'utilisez jamais le token de production dans la sandbox et ne le publiez pas dans une capture. Révoquez et remplacez tout token exposé.
:::

## Configurer Pennylane

Ouvrez **Paramètres > Facturation > Facturation électronique Pennylane**, puis renseignez :

- **Date d'activation** : date facultative de début des transmissions ;
- **Company API token** : token créé dans l'espace Pennylane correspondant ;
- **Environnement** : production ou sandbox ;
- **Délai HTTP** : durée maximale d'un appel API.

Activez Pennylane, enregistrez, puis cliquez sur **Tester la connexion**.

![Paramètres de facturation électronique Pennylane](/img/next_gen/extensions/addons/pennylane/config.png)

## Sélectionner Pennylane comme provider actif

Ouvrez **Paramètres > Facturation > Facturation > Factur-X et e-reporting** :

1. Complétez l'identité fiscale du vendeur.
2. Activez la fonctionnalité pour les nouveaux documents lorsque vous êtes prêt.
3. Sélectionnez `PENNYLANE` comme **Provider actif**.
4. Sélectionnez `LOCAL` ou `CHORUS-PRO` comme **Provider du secteur public**.
5. Configurez le régime de TVA, le fuseau fiscal et la date d'activation facultative.
6. Enregistrez les paramètres.

![Sélection de Pennylane comme provider actif](/img/next_gen/extensions/addons/pennylane/config_driver.png)

Le provider `LOCAL` génère et conserve les documents dans ClientXCMS sans les transmettre à Pennylane.

## Import comptable existant

Pour traiter les anciennes factures payées avec l'intégration comptable historique, exécutez :

```bash
php artisan pennylane:process-invoices --start-date=YYYY-MM-DD --end-date=YYYY-MM-DD
```

Seules les factures payées pendant la période sont traitées. Les factures impayées ou annulées et les paiements manuels effectués avec le crédit client ne sont pas importés.
