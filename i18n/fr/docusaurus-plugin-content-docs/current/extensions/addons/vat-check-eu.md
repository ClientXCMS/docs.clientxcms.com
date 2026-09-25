# EU VAT Check

L'addon EU VAT Check vérifie les numéros de TVA européens avec le service VIES de la Commission européenne. Il permet de valider les informations fiscales du client avant la facturation.

:::info
VIES ne nécessite pas de clé API. La disponibilité du service et les informations retournées dépendent de l'administration fiscale de l'État membre concerné.
:::

## Configuration

Ouvrez **Paramètres > Facturation > EU VAT Check**, puis configurez :

- **Activer la validation VIES** : active la vérification des numéros de TVA ;
- **Délai HTTP** : durée maximale d'une requête VIES ;
- **Validité d'un contrôle positif** : nombre de jours pendant lesquels une validation réussie reste en cache ;
- **Numéro de TVA du demandeur** : numéro facultatif transmis avec la demande de validation.

Enregistrez, puis cliquez sur **Tester VIES**.

![Paramètres EU VAT Check](/img/next_gen/extensions/addons/vat-check-eu/config.png)

Un délai court évite de bloquer trop longtemps la commande si VIES est indisponible. La mise en cache limite les appels répétés, mais sa durée doit rester compatible avec vos procédures de conformité.

:::warning
Une réponse VIES positive confirme uniquement le statut retourné au moment du contrôle. Conservez les justificatifs exigés par vos procédures comptables ou fiscales.
:::
