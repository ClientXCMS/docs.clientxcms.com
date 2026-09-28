# Chorus Pro

L'addon Chorus Pro transmet, via l'API PISTE, les factures destinées aux entités du secteur public français. Il constitue le provider du secteur public, utilisé en complément du provider principal Factur-X et e-reporting.

:::info Addon requis
Activez l'addon Chorus Pro avant de configurer le connecteur.
:::

## Récupérer les identifiants PISTE

Chorus Pro utilise OAuth 2.0 via PISTE ainsi qu'un compte technique Chorus Pro.

1. Créez un compte ou connectez-vous au [portail PISTE](https://piste.gouv.fr/).
2. Créez une application et abonnez-la à l'API Chorus Pro, d'abord dans la sandbox si vous souhaitez tester l'intégration.
3. Dans l'application, générez une clé API et copiez l'**identifiant client** et le **secret client**.
4. Dans Chorus Pro, déclarez un raccordement API PISTE pour la structure et l'application concernées.
5. Créez un compte technique Chorus Pro rattaché à cette structure. Conservez son identifiant et son mot de passe dans le format demandé par ClientXCMS.

La qualification et la production sont deux environnements séparés. Créez et faites valider l'application PISTE et le raccordement Chorus Pro correspondant à chaque environnement.

:::warning Identifiants sensibles
Conservez le secret client et les identifiants du compte technique dans un emplacement sécurisé. Ne les placez jamais dans une capture, un message de support ou un dépôt Git.
:::

## Configurer Chorus Pro

Ouvrez **Paramètres > Facturation > Facturation électronique Chorus Pro**, puis renseignez :

- **Environnement** : qualification pour les tests ou production pour les véritables factures ;
- **Identifiant client PISTE** et **Secret client PISTE** ;
- **Compte technique Chorus Pro** ;
- **URL de l'API Chorus Pro** et **URL OAuth PISTE** : conservez les valeurs correspondant à l'environnement sélectionné ;
- **Délai HTTP** : durée maximale d'un appel API.

Activez Chorus Pro, enregistrez, puis cliquez sur **Tester la connexion**.

![Paramètres du connecteur Chorus Pro](/img/next_gen/extensions/addons/chorus-pro/config_addon.png)

## Sélectionner le provider du secteur public

Ouvrez **Paramètres > Facturation > Facturation > Factur-X et e-reporting** :

1. Activez la fonctionnalité pour les nouveaux documents lorsque vous êtes prêt.
2. Sélectionnez séparément le **Provider actif** principal : `LOCAL`, `QONTO` ou `PENNYLANE`.
3. Dans **Provider du secteur public**, sélectionnez `CHORUS-PRO`. Sélectionnez `LOCAL` si ClientXCMS ne doit pas transmettre les factures publiques par Chorus Pro.
4. Enregistrez les paramètres.

![Sélection de Chorus Pro comme provider du secteur public](/img/next_gen/extensions/addons/chorus-pro/config_driver.png)

:::tip
Validez tout le parcours en qualification avant d'activer la production : authentification, identification du destinataire, dépôt de facture et statut retourné.
:::
