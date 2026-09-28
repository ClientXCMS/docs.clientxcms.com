# Facturation électronique Qonto

L'addon de facturation électronique Qonto transmet les factures Factur-X et les données d'e-reporting de ClientXCMS par l'API réglementaire de Qonto.

:::warning Accès soumis à validation
N'activez pas les transmissions avant que Qonto ait confirmé votre accès à son API réglementaire pour les factures externes déjà numérotées. Les identifiants de l'API bancaire Qonto standard peuvent ne pas être suffisants.
:::

## Récupérer les identifiants Qonto

Contactez le support ou votre interlocuteur Qonto pour demander l'accès à l'API réglementaire de facturation électronique destinée aux factures générées en dehors de Qonto. Lors de l'accompagnement technique, récupérez :

- l'URL de base de l'API réglementaire ;
- l'identifiant de votre organisation Qonto ;
- le jeton API ;
- le secret de signature du webhook.

Le secret permet de vérifier les notifications envoyées par Qonto. Conservez le jeton et le secret dans un emplacement sécurisé et renouvelez-les s'ils sont exposés.

## Configurer Qonto

Ouvrez **Paramètres > Facturation > Facturation électronique Qonto**, puis :

1. Renseignez l'URL de l'API réglementaire, l'identifiant de l'organisation, le jeton API et le secret de signature fournis par Qonto.
2. Activez les transmissions uniquement après la confirmation de Qonto.
3. Confirmez l'avertissement indiquant que le connecteur est destiné aux factures externes déjà numérotées.
4. Enregistrez les paramètres.
5. Utilisez **Transmissions électroniques** pour consulter les documents envoyés et leur statut.

![Paramètres du connecteur de facturation électronique Qonto](/img/next_gen/extensions/addons/qonto-einvoicing/config_qonto.png)

## Sélectionner Qonto comme provider actif

Commencez par compléter l'identité fiscale du vendeur dans **Paramètres > Facturation > Facturation**. Ensuite, dans **Factur-X et e-reporting** :

1. Activez la fonctionnalité pour les nouveaux documents lorsque vous êtes prêt.
2. Sélectionnez `QONTO` comme **Provider actif**.
3. Sélectionnez `LOCAL` ou `CHORUS-PRO` comme **Provider du secteur public**.
4. Configurez le régime de TVA, le fuseau fiscal et la date d'activation facultative.
5. Enregistrez les paramètres.

![Sélection de Qonto et identité fiscale du vendeur](/img/next_gen/extensions/addons/qonto-einvoicing/config_settings.png)

Le provider `LOCAL` génère et conserve les documents dans ClientXCMS sans les transmettre à Qonto.
