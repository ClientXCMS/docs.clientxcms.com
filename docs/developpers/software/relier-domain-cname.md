# Relier son domaine en CNAME

## Qu'est-ce qu'un enregistrement CNAME ?
Un enregistrement CNAME (Canonical Name) est un type d'enregistrement DNS qui permet de faire pointer un sous-domaine vers un autre domaine ou sous-domaine. Dans cet exemple, nous allons ajouter un CNAME tel que `ctx-03.clientxcms.com`. Mais il est possible d'être sur un autre serveur, dans ce cas, vous devrez utiliser le sous-domaine fourni.

## OVH

1. Rendez-vous sur [OVH](https://www.ovh.com/) et connectez-vous à votre compte.
2. Cliquez sur **Web Cloud** dans le menu principal, puis sélectionnez **Domaines**.
3. Sélectionnez votre domaine dans la liste (par exemple, `mondomaine.com`).
4. Allez dans l'onglet **Zone DNS**.
5. Cliquez sur **Ajouter une entrée**.
6. Choisissez le type d'enregistrement **CNAME**.
7. Remplissez les champs comme suit :
   - **Sous-domaine** : Entrez le sous-domaine que vous voulez utiliser, par exemple `client` ou `manager`.
     - Exemple : pour un client utilisant `client.mondomaine.com`, entrez `client`.
   - **Cible** : `ctx-03.clientxcms.com` (c'est l'URL vers laquelle le sous-domaine doit pointer).
8. Cliquez sur **Suivant**, puis validez.

L'enregistrement CNAME prendra effet après la propagation DNS, qui peut prendre de quelques minutes à 24 heures.

## LWS

1. Rendez-vous sur [LWS](https://www.lws.fr/) et connectez-vous à votre espace client.
2. Dans votre tableau de bord, allez dans **Gestion DNS** sous l'onglet **Mes Services**.
3. Sélectionnez le domaine concerné (par exemple, `mondomaine.com`).
4. Cliquez sur **Ajouter un enregistrement**.
5. Sélectionnez **CNAME** dans la liste déroulante.
6. Remplissez les champs comme suit :
   - **Nom** : Entrez votre propre sous-domaine, par exemple `client` ou `manager`.
     - Exemple : pour `client.mondomaine.com`, entrez `client`.
   - **Cible** : `ctx-03.clientxcms.com` (c'est l'URL vers laquelle le sous-domaine doit pointer).
7. Cliquez sur **Valider**.

Une fois l'ajout confirmé, la propagation DNS peut prendre jusqu'à 24 heures pour être pleinement effective.

## Cloudflare
1. Rendez-vous sur [Cloudflare](https://www.cloudflare.com/) et connectez-vous à votre compte.
2. Sélectionnez le domaine pour lequel vous souhaitez ajouter un CNAME dans votre tableau de bord.
3. Allez dans l'onglet **DNS**.
4. Cliquez sur **Ajouter un enregistrement**.
5. Sélectionnez **CNAME** dans le menu déroulant.
6. Remplissez les champs comme suit :
   - **Nom** : Entrez votre sous-domaine, par exemple `client` ou `manager`.
     - Exemple : pour `client.mondomaine.com`, entrez `client`.
   - **Cible** : `ctx-03.clientxcms.com` (c'est l'URL vers laquelle le sous-domaine doit pointer).
   - **Proxy status** : Activez ou désactivez le proxy selon vos besoins (si activé, le trafic passera par Cloudflare).
7. Cliquez sur **Sauvegarder**.

La modification prendra effet après la propagation DNS, qui est souvent rapide avec Cloudflare, mais peut prendre jusqu'à 24 heures.

## Conclusion
Vous êtes désormais relier à nos serveurs. Vous pouvez vérifier en utilisant le site internet [check-host.net](https://www.check-host.net/). L'installation de votre instance sera fait quelques minutes après.
