# Epic 6: Post-MVD - Developers

**Status:** TODO
**Priority:** BASSE
**Branch:** feat/i18n
**Dependances:** Epics 1-4 (MVD)

---

## Objectif

Traduire la documentation developpeurs pour permettre aux contributeurs internationaux de creer des extensions et themes.

**Resultat attendu:**
- API reference en EN
- Guide creation extensions en EN
- Guide creation themes en EN
- Documentation technique complete

---

## Scope

**Dossier:** `docs/developpers/`

### API et Commands (2 fichiers, ~10 KB)

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| api.md | 3.3 KB | HAUTE | TODO |
| commands.md | 7.1 KB | HAUTE | TODO |

### Extensions (15 fichiers, ~65 KB)

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| extensions.md | 2.5 KB | HAUTE | TODO |
| create.md | 2.5 KB | HAUTE | TODO |
| configuration.md | 2.6 KB | HAUTE | TODO |
| routes.md | 2.9 KB | HAUTE | TODO |
| database.md | 3.5 KB | HAUTE | TODO |
| schedules.md | 3.0 KB | MOYENNE | TODO |
| definitions/definitions.md | 0.1 KB | MOYENNE | TODO |
| definitions/permissions.md | 4.3 KB | MOYENNE | TODO |
| definitions/translations.md | 4.4 KB | MOYENNE | TODO |
| definitions/events.md | 7.1 KB | MOYENNE | TODO |
| definitions/models.md | 7.2 KB | MOYENNE | TODO |
| implementation_guides/*.md | ~25 KB | BASSE | TODO |

### Themes (7 fichiers, ~20 KB)

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| themes.md | 1.3 KB | HAUTE | TODO |
| create-theme.md | 4.2 KB | HAUTE | TODO |
| config.md | 1.3 KB | MOYENNE | TODO |
| sections.md | 1.6 KB | MOYENNE | TODO |
| functions-settings.md | 4.9 KB | MOYENNE | TODO |
| forms.md | 5.8 KB | MOYENNE | TODO |
| code-snippets.md | 10.3 KB | BASSE | TODO |

### Software Guides (8 fichiers, ~25 KB)

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| software.md | 0.1 KB | BASSE | TODO |
| phpmyadmin.md | 5.2 KB | BASSE | TODO |
| migrate_cloud_to_v2.md | 5.3 KB | BASSE | TODO |
| captcha.md | 2.5 KB | BASSE | TODO |
| relier-domain-cname.md | 3.2 KB | BASSE | TODO |
| relier-domain-a.md | 2.4 KB | BASSE | TODO |
| fivem-changer-cle.md | 2.1 KB | BASSE | TODO |
| proxmox.md | 2.0 KB | BASSE | TODO |

**Total:** 38 pages (~130 KB)

---

## Stories

### Story 6.1: Traduire API reference

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la documentation API REST.

**Acceptance Criteria:**
- [ ] api.md traduit (~3.3 KB)
- [ ] Endpoints documentes
- [ ] Exemples code inchanges
- [ ] frontmatter `translated: true`

---

### Story 6.2: Traduire commands reference

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la reference des commandes artisan.

**Acceptance Criteria:**
- [ ] commands.md traduit (~7.1 KB)
- [ ] Commandes inchangees
- [ ] Descriptions traduites
- [ ] frontmatter `translated: true`

---

### Story 6.3: Traduire guide creation extensions

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire le guide de base pour creer une extension.

**Acceptance Criteria:**
- [ ] extensions.md traduit
- [ ] create.md traduit
- [ ] configuration.md traduit
- [ ] routes.md traduit
- [ ] database.md traduit
- [ ] Code samples inchanges
- [ ] frontmatter `translated: true`

---

### Story 6.4: Traduire guide creation themes

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire le guide de base pour creer un theme.

**Acceptance Criteria:**
- [ ] themes.md traduit
- [ ] create-theme.md traduit
- [ ] config.md traduit
- [ ] Code Blade/CSS inchange
- [ ] frontmatter `translated: true`

---

### Story 6.5: Traduire definitions (events, models, permissions)

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire les references techniques definitions.

**Acceptance Criteria:**
- [ ] definitions/*.md traduits (~23 KB)
- [ ] Noms d'events/models inchanges
- [ ] frontmatter `translated: true`

---

### Story 6.6: Traduire implementation guides

**Status:** TODO
**Priorite:** BASSE

**Description:**
Traduire les guides d'implementation avances.

**Acceptance Criteria:**
- [ ] implementation_guides/*.md traduits
- [ ] Exemples code inchanges
- [ ] frontmatter `translated: true`

---

### Story 6.7: Traduire themes avances (forms, functions, snippets)

**Status:** TODO
**Priorite:** BASSE

**Description:**
Traduire la documentation themes avancee.

**Acceptance Criteria:**
- [ ] forms.md traduit
- [ ] functions-settings.md traduit
- [ ] code-snippets.md traduit
- [ ] frontmatter `translated: true`

---

### Story 6.8: Traduire software guides

**Status:** TODO
**Priorite:** TRES BASSE

**Description:**
Traduire les guides software techniques.

**Acceptance Criteria:**
- [ ] software/*.md traduits
- [ ] Screenshots OK
- [ ] frontmatter `translated: true`

---

## Definition of Done

- [ ] 38 pages traduites en EN
- [ ] Tous les frontmatter `translated: true`
- [ ] Build OK pour EN et FR
- [ ] Code samples inchanges
- [ ] Documentation technique precise

---

## Dependances

**Requiert:**
- Epics 1-4: MVD (priorite)

**Parallele avec:**
- Epic 5: Extensions (meme priorite basse)

---

## Notes techniques

### Regles traduction code

**NE PAS traduire:**
- Noms de classes, fonctions, variables
- Commandes artisan
- Noms de routes
- Syntax Blade/PHP

**Traduire:**
- Commentaires de code
- Descriptions
- Messages d'erreur dans le texte

### Ordre recommande

1. API + Commands (reference essentielle)
2. Extensions base (create, config, routes, database)
3. Themes base (create-theme, config)
4. Definitions (events, models)
5. Reste par priorite

---

## Estimation

**Effort:** 6-10h
**Complexite:** Haute (documentation technique, code samples)
