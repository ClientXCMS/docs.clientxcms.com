---
sidebar_position: 3
---
# Cloud

Cette page vous guidera dans l'installation de ClientXCMS Next Gen pour les versions cloud sur les serveurs de CLIENTXCMS. Les offres Cloud sont installées automatiquement sur les serveurs de CLIENTXCMS.
## Domaine
Lors de la commande de votre licence, vous avez dû renseigner un nom de domaine. Ce nom de domaine sera utilisé pour l'installation de l'espace client. Si vous n'avez pas encore commandé de licence, rendez-vous sur [cette page](https://clientxcms.com/pricing) pour la commander.

Si vous souhaitez installer l'espace client sur un sous-domaine, vous pouvez le faire en renseignant le sous-domaine dans la section "Changer le domaine" de votre espace client.

## Installation
La première étape est de selectionner le type de licence que vous souhaitez installer, dans notre cas la première option.
![Choix de la licence](/img/next_gen/Installation/Cloud/type.png)

Après ceci, le système va vous indiquer le serveur sur lequel votre espace client sera installer vous devez simplement relier votre domaine aux serveurs de CLIENTXCMS. Pour cela, récupérez l'enregistrement CNAME fourni par le système et ajoutez-le à votre domaine.

![Enregistrement CNAME](/img/next_gen/Installation/Cloud/cname.png)

Pour vérifier que votre domaine est bien relié aux serveurs de CLIENTXCMS, vous pouvez utiliser le site [CheckHost](https://check-host.net) et renseigner votre domaine.
Il devrait vous indiquer que l'enregistrement CNAME est bien relié à l'adresse IP du serveur de CLIENTXCMS.

![CheckHost](/img/next_gen/Installation/Cloud/checkhost.png)

Notre système va ensuite installer l'espace client sur votre domaine. Le processus peut prendre quelques minutes. Une fois l'installation terminée, vous pouvez accéder à votre espace administration en vous rendant sur votre domaine avec les informations envoyées par e-mail.

![Email](/img/next_gen/Installation/Cloud/email.png)

Une fois sur votre domaine, vous serrez automatiquement redirigé vers clientxcms.com pour valider votre licence. Vous pouvez ensuite vous connecter à votre espace client avec les identifiants envoyés par e-mail.
### Cloudflare
Une fois que vous êtes connecté à votre compte Cloudflare, vous devez ajouter un enregistrement CNAME pour votre sous-domaine. 

![Ajout d'un enregistrement CNAME](/img/next_gen/Installation/Cloud/cloudflare.png)
1. Cliquez sur le bouton "Ajouter un enregistrement" et sélectionnez "CNAME" dans le menu déroulant.

2. Entrez le sous-domaine que vous avez renseigné dans la section "Changer le domaine" de votre espace client dans le champ "Nom" et l'enregistrement CNAME fourni par le système dans le champ "Cible".

3. Cliquez sur "Enregistrer" pour ajouter l'enregistrement.

:::info Cloudflare
Vous devez désactiver le proxy pour le sous-domaine que vous avez renseigné.
:::
### OVH
Pour ajouter un enregistrement CNAME à votre domaine OVH, suivez les étapes suivantes :

![Ajout d'un enregistrement CNAME](/img/next_gen/Installation/Cloud/ovh.png)

1. Connectez-vous à votre espace client OVH et cliquez sur "Domaines" dans le menu de gauche.
2. Cliquez sur le domaine que vous souhaitez modifier.
3. Cliquez sur l'onglet "Zone DNS" dans le menu horizontal.
4. Cliquez sur le bouton "Ajouter un enregistrement" et sélectionnez "CNAME" dans le menu déroulant.
5. Entrez le sous-domaine que vous avez renseigné dans la section "Changer le domaine" de votre espace client dans le champ "Nom" et l'enregistrement CNAME fourni par le système dans le champ "Cible".
6. Cliquez sur "Suivant" pour ajouter l'enregistrement.
7. Cliquez sur "Confirmer" pour valider les modifications.
8. Attendez quelques minutes pour que les modifications soient prises en compte.


## Modification du domaine
Vous pouvez modifier le domaine de votre espace client à tout moment depuis votre espace client. Pour cela, rendez-vous sur la page "Changer le domaine" et renseignez le nouveau domaine que vous souhaitez utiliser.
Il faudra au préalable ajouter un enregistrement CNAME pour le nouveau domaine.
![Changer le domaine](/img/next_gen/Installation/Cloud/change_domain.png)
:::info TIPS
La modification du domaine est possible tout les 60 jours. Pour les changements de sous-domaine, cela n'est pas considéré comme un changement de domaine.
:::
## Réinstallation de l'instance
Si vous souhaitez réinstaller votre espace client, vous pouvez le faire depuis votre espace client. Pour cela, rendez-vous sur la page "Réinitialisation" et cliquez sur le bouton "Réinstaller".
Il vous sera demandé de confirmer la réinstallation. Une fois confirmé, le système va réinstaller l'espace client sur votre domaine.
![Réinstallation](/img/next_gen/Installation/Cloud/reinstall.png)

Les identifiants de connexion vous seront envoyés par e-mail une fois l'installation terminée.

:::info TIPS
Dans le cas ou il y a un réinstallation et un changement de domaine, il faudra changer le domaine avant de réinstaller l'instance.
:::