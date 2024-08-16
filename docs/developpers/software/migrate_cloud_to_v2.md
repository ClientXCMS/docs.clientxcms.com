# Migrer cloud vers v2
Avant de commencer, assurez-vous d'avoir accès au téléchargement de la version self-hosted de CLIENTXCMS v2. Si vous n'avez pas encore accès à la version self-hosted, veuillez remplir le formulaire de demande d'accès.
![Formulaire demande de téléchargement](/img/next_gen/Installation/formulaire_download.png)

Plus d'information sur la demande et l'installation [ici](/docs/installation/selfhosted.md).

Vous pouvez migrer votre instance CLIENTXCMS Cloud vers une instance CLIENTXCMS v2 auto-hébergée. Pour ce faire, suivez les étapes suivantes.
- Récupérez une sauvegarde de votre instance CLIENTXCMS Cloud via les accès base de données fournis dans la page base de données.
- Demander la clé de l'application Laravel de votre instance CLIENTXCMS Cloud à notre support.
- Installez CLIENTXCMS v2 en suivant les étapes d'installation [ici](/docs/installation/selfhosted.md) sans la migration de la base de données.
- Importez votre sauvegarde dans votre base de données vers votre serveur.
- Remplacez la clé de l'application Laravel de votre instance CLIENTXCMS Cloud par celle fournie par notre support.
- Vous pouvez maintenant accéder à votre instance CLIENTXCMS self hosted avec vos identifiants CLIENTXCMS Cloud.
