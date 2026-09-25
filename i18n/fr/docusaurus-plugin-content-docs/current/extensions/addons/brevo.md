# Brevo

L'addon Brevo connecte ClientXCMS à Brevo afin que les visiteurs puissent s'inscrire à votre newsletter depuis le pied de page du site.

:::info Addon requis
Activez l'addon Brevo dans ClientXCMS avant de le configurer.
:::

## Créer une clé API Brevo

1. Connectez-vous à votre compte Brevo.
2. Ouvrez le menu du compte, puis accédez à **Paramètres > SMTP & API > Clés API & MCP**.
3. Ouvrez l'onglet **Clés API**, puis cliquez sur **Générer une nouvelle clé API**.
4. Donnez-lui un nom reconnaissable, par exemple `ClientXCMS`, puis générez-la.
5. Copiez immédiatement la clé et conservez-la dans un endroit sécurisé. Brevo n'affiche sa valeur complète qu'une seule fois.

![Création d'une clé API dans Brevo](/img/next_gen/extensions/addons/brevo/create_api_key.png)

:::warning Protégez la clé
La clé API donne accès à votre compte Brevo. Ne la publiez jamais et ne l'affichez pas dans une capture d'écran. Si elle est perdue ou exposée, supprimez-la dans Brevo et créez-en une nouvelle.
:::

## Autoriser l'adresse IP de votre serveur

Vous devez autoriser l'adresse IP publique sortante du serveur qui héberge ClientXCMS avant d'utiliser l'API.

1. Dans Brevo, ouvrez **Paramètres > Sécurité > IP autorisées**.
2. Cliquez sur **Autoriser des adresses IP**.
3. Ajoutez l'adresse IP publique utilisée par votre serveur ClientXCMS pour ses requêtes sortantes.
4. Confirmez l'autorisation.

Si votre infrastructure utilise plusieurs adresses IP sortantes, autorisez-les toutes. L'activation du blocage des IP inconnues rejettera tout appel API provenant d'une adresse absente de cette liste.

## Configurer ClientXCMS

1. Dans l'administration ClientXCMS, ouvrez **Paramètres > Paramètres d'extensions > Brevo**.
2. Collez la clé API Brevo.
3. Sélectionnez la liste de contacts Brevo qui doit recevoir les inscriptions à la newsletter.
4. Activez l'intégration, puis enregistrez les paramètres.

![Paramètres Brevo dans ClientXCMS](/img/next_gen/extensions/addons/brevo/config_ctx.png)

Lorsque la connexion est valide, ClientXCMS affiche l'intégration configurée et la liste sélectionnée.

![Configuration Brevo terminée](/img/next_gen/extensions/addons/brevo/config_ctx_done.png)

Le formulaire d'inscription à la newsletter peut alors apparaître dans le pied de page du site. Envoyez une adresse de test et vérifiez que le contact apparaît bien dans la liste Brevo sélectionnée.

![Formulaire d'inscription à la newsletter dans le pied de page](/img/next_gen/extensions/addons/brevo/embed_footer.png)
