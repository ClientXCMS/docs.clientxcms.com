# Epic 4: MVD - Settings Core

**Status:** TODO
**Priority:** MOYENNE-HAUTE
**Branch:** feat/i18n
**Dependances:** Epic 0 (COMPLETE)

---

## Objectif

Traduire la section Settings/Core pour documenter les parametres essentiels du systeme.

**Resultat attendu:**
- 6 pages de parametres core traduites en EN
- Documentation technique claire
- Reference pour configuration avancee

---

## Scope

**Dossier:** `docs/settings/core/`

| Fichier | Taille | Description | Status |
|---------|--------|-------------|--------|
| core.md | 1.7 KB | Index parametres | TODO |
| app.md | 3.7 KB | Config application | TODO |
| mail.md | 7.6 KB | Config email | TODO |
| maintenance.md | 6.8 KB | Mode maintenance | TODO |
| license.md | 0.7 KB | Gestion licence | TODO |
| locales.md | 6.9 KB | Config langues | TODO |

**Total:** 6 pages (~27 KB)

---

## Stories

### Story 4.1: Traduire core.md (index)

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page index des parametres core.

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Liens vers sous-pages fonctionnels
- [ ] frontmatter `translated: true`

---

### Story 4.2: Traduire app.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de configuration application (nom, URL, timezone, etc.).

**Acceptance Criteria:**
- [ ] Traduction complete (~3.7 KB)
- [ ] Variables .env documentees
- [ ] frontmatter `translated: true`

---

### Story 4.3: Traduire mail.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de configuration email (SMTP, templates, etc.).

**Acceptance Criteria:**
- [ ] Traduction complete (~7.6 KB)
- [ ] Config SMTP claire
- [ ] Variables .env documentees
- [ ] frontmatter `translated: true`

---

### Story 4.4: Traduire maintenance.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page du mode maintenance.

**Acceptance Criteria:**
- [ ] Traduction complete (~6.8 KB)
- [ ] Instructions activation/desactivation
- [ ] Screenshots OK
- [ ] frontmatter `translated: true`

---

### Story 4.5: Traduire license.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page de gestion de licence.

**Acceptance Criteria:**
- [ ] Traduction complete (~0.7 KB)
- [ ] Instructions reactivation
- [ ] frontmatter `translated: true`

---

### Story 4.6: Traduire locales.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de configuration des langues (particulierement pertinent pour i18n!).

**Acceptance Criteria:**
- [ ] Traduction complete (~6.9 KB)
- [ ] Instructions ajout langue
- [ ] Config Docusaurus mentionnee si applicable
- [ ] frontmatter `translated: true`

---

## Definition of Done

- [ ] 6 pages traduites en EN
- [ ] Tous les frontmatter `translated: true`
- [ ] Build OK pour EN et FR
- [ ] Documentation technique precise
- [ ] Aucun bandeau "Not translated"

---

## Dependances

**Requiert:**
- Epic 0: Setup & Infrastructure (COMPLETE)

**Recommande:**
- Epic 2 et 3 (pour coherence terminologique)

---

## Notes techniques

### Ordre recommande

1. core.md (index)
2. app.md (config de base)
3. mail.md (essentiel pour production)
4. locales.md (pertinent pour i18n)
5. maintenance.md
6. license.md

### Attention particuliere

- **mail.md:** Beaucoup de variables .env, garder format technique
- **locales.md:** Meta-documentation sur i18n, bien traduire
- **maintenance.md:** Screenshots interface, acceptable en FR pour MVP

### Variables .env

Ne pas traduire les noms de variables:
```
APP_NAME="ClientXCMS"  # OK
MAIL_HOST=smtp.example.com  # OK
```

---

## Estimation

**Effort:** 2-3h
**Complexite:** Moyenne (termes techniques, config serveur)
