# Architecture de l'information et présentation

Sources : [Nielsen Norman Group - Be Succinct](https://www.nngroup.com/articles/be-succinct-writing-for-the-web/), [NN/g - Layer-Cake Pattern](https://www.nngroup.com/articles/layer-cake-pattern-scanning/), [NN/g - Formatting Long-Form Content](https://www.nngroup.com/articles/formatting-long-form-content/), [Write the Docs - Docs Principles](https://www.writethedocs.org/guide/writing/docs-principles/).

## Scannabilité avant tout

Un lecteur de doc technique ne lit pas, il scanne pour trouver sa réponse. Une page doit rester exploitable en diagonale :

- 2 à 3 niveaux de titres maximum (titre de page, sous-titres, sous-sous-titres si vraiment nécessaire), descriptifs et jamais génériques ("Configuration du webhook", pas "Configuration").
- Regrouper le contenu de même nature ensemble, le distinguer visuellement (tableau, encadré, bloc de code) plutôt que de le noyer dans un paragraphe.
- Découper : jamais de mur de texte. Une idée = un paragraphe court, une liste dès que 3 éléments ou plus s'énumèrent.
- Rédiger environ deux fois plus court que l'équivalent papier - le texte web se lit plus lentement à l'écran, la longueur pénalise directement l'utilisabilité mesurée.

## Contenu utile, pas exhaustif pour le principe

- Un exemple concret par cas d'usage courant, jamais une accumulation d'exemples qui noie le lecteur.
- Cohérence de langage et de formatage sur l'ensemble de la doc : un même concept nommé de la même façon partout (voir aussi la parité i18n).
- Une information à jour et incomplète vaut mieux qu'une information complète mais périmée. Une page qui documente un comportement qui n'existe plus est pire que l'absence de page.
- Une répétition ciblée entre deux pages est acceptable si elle sert la clarté de chacune (mieux vaut une phrase de contexte redite qu'un aller-retour permanent entre pages).

## Ce qui rend une doc consultable

- Chaque page doit être trouvable seule (lien direct, recherche) sans dépendre d'avoir lu les pages précédentes dans l'ordre.
- Chaque page reste complète sur son propre périmètre : elle répond à sa question sans renvoyer ailleurs pour l'essentiel.
- La doc dans son ensemble doit couvrir les questions que se pose réellement un utilisateur, pas uniquement ce qui est facile à documenter.
