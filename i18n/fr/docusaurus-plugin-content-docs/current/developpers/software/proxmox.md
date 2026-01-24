# Modèles & Oses Proxmox

## Modèles KVM
CLIENTXCMS met à votre disposition un ensemble de modèles de serveurs virtuels préconfigurés pour Proxmox KVM. Ces modèles sont disponibles pour les distributions suivantes :
- Debian 10
- Debian 11
- Debian 12
- Ubuntu 20.04
- Ubuntu 22.04
### Installation
Pour commencer veuillez télécharger le zip contenant les modèles depuis le lien suivant : [Modèles KVM](https://clientxcms.com/ref/template-kvm-proxmox)

```bash
wget --user-agent="download" https://clientxcms.com/ref/template-kvm-proxmox -O Template-KVM.tar.gz
```
- Décompressez le fichier téléchargé :
```bash
tar -xvf Template-KVM.tar.gz
```
:::info
Il faut bien sûr au préalable avoir installé le paquet tar.
```
sudo apt install tar untar
```
:::
<br/>
- Déplacez les fichiers de configuration des modèles dans le dossier de configuration de Proxmox :
```
mv Template-KVM/Config/* /etc/pve/qemu-server/
```
- Ajoutez à votre Proxmox les disk de ces modèles : 
Pour cela, il faut connaître la localisation du dossier local avec la commande :
```
cat /etc/pve/storage.cfg
```
Généralement, le dossier est situé ici : `/var/lib/vz`

- Déplacez les disques dans le bon dossier.
```
mv Template-KVM/Disk/* /var/lib/vz/images/
```

L'installation des modèles est presque terminée maintenant.
Pour finir, il faut juste configurer l'espace de stockage pour qu'il accepte les modèles.

Pour cela, il faut aller dans `Datacenter` > `Storage` > `local` et ajouter dans `content` `Disk Image`:

![img](/img/tutorial/proxmox.png)

Voilà vous venez d'installer les modèles sur votre proxmox. Nous vous remercions pour votre confiance et restons à votre disposition pour toute question.

## Oses LXC
Nous travaillons actuellement sur la mise en place de modèles LXC pour Proxmox. Ces modèles seront disponibles prochainement.

## Windows
Nous travaillons actuellement sur la mise en place de modèles Windows pour Proxmox. Ces modèles seront disponibles prochainement.