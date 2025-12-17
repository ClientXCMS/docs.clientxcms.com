# Foire aux questions

L’addon **FAQ** pour CLIENTXCMS permet de créer et organiser facilement des **foires aux questions** adaptées à chaque contexte : FAQ globales, FAQ liées à un produit spécifique ou encore FAQ par groupes.

![img](/img/next_gen/extensions/addons/faq/image.png)
## Configuration de base
Pour configurer l’addon FAQ, allez dans les paramètres de personnalisation puis dans l’onglet **FAQ**. Vous y retrouvez l'ensemble des questions fréquemment posées.
![img](/img/next_gen/extensions/addons/faq/admin.png)

Vous pouvez définir si vous voulez activer les votes d’utilité. Cela permet aux utilisateurs de voter si une question/réponse leur a été utile ou non.

### Ajouter une question
Pour ajouter une nouvelle question, cliquez sur le bouton **Créer**. Remplissez les champs suivants :
- **Titre** : Le titre de la question.
- **Groupe** : Si la question doit être associée à un groupe spécifique.
- **Produit** : Si la question doit être liée à un produit particulier.
- **Contenu** : La réponse à la question.
- **Ordre** : Permet de définir l’ordre d’affichage des questions.

:::info
Si la question est associée à un produit, elle n’apparaîtra sur la page produit correspondante. Si elle est associée à un groupe, elle n’apparaîtra que sur la page du groupe. Sinon, elle sera affichée dans la FAQ globale.
:::

## Rendu sur le site

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="General" label="Général">

![img](/img/next_gen/extensions/addons/faq/image.png)

</TabItem>

<TabItem value="Produit" label="Produit">

![img](/img/next_gen/extensions/addons/faq/product.png)

</TabItem>

<TabItem value="Groupe" label="Groupe">

![img](/img/next_gen/extensions/addons/faq/group.png)

</TabItem>

</Tabs>

### Support des thèmes
Pour supporter l'affichage des FAQ sur votre thème, votre thème doit inclure ce code dans le fichier `views/front/store/group.blade.php` : 
```blade
@includeWhen(app('extension')->extensionIsEnabled('faq'), 'faq::widget', ['group' => $group ?? null])
```