# Epic 3: MVD - Getting Started

**Status:** TODO
**Priority:** HAUTE
**Branch:** feat/i18n
**Dependances:** Epic 0 (COMPLETE)

---

## Objectif

Traduire la section "Getting Started" pour guider les nouveaux utilisateurs internationaux dans leur premiere configuration.

**Resultat attendu:**
- 9 pages de demarrage traduites en EN
- Parcours utilisateur fluide en anglais
- Guide complet "premier jour avec ClientXCMS"

---

## Scope

**Dossier:** `docs/getting_started/`

| Fichier | Taille | Description | Status |
|---------|--------|-------------|--------|
| getting_started.md | 0.4 KB | Index | TODO |
| first_login.md | 1.5 KB | Premiere connexion | TODO |
| personalization.md | 3.4 KB | Personnalisation | TODO |
| server.md | 3.1 KB | Config serveur | TODO |
| products.md | 1.0 KB | Creation produits | TODO |
| payments.md | 2.8 KB | Config paiements | TODO |
| accounts.md | 1.2 KB | Comptes staff | TODO |
| service.md | 2.0 KB | Premier service | TODO |
| finish.md | 0.4 KB | Conclusion | TODO |

**Total:** 9 pages (~16 KB)

---

## Stories

### Story 3.1: Traduire getting_started.md (index)

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page index du Getting Started.

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Liens vers sous-pages fonctionnels
- [ ] frontmatter `translated: true`

---

### Story 3.2: Traduire first_login.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de premiere connexion admin.

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Instructions connexion claires
- [ ] Screenshots OK (interface FR acceptable)
- [ ] frontmatter `translated: true`

---

### Story 3.3: Traduire personalization.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de personnalisation (logo, couleurs, etc.).

**Acceptance Criteria:**
- [ ] Traduction complete (~3.4 KB)
- [ ] Termes UI traduits correctement
- [ ] frontmatter `translated: true`

---

### Story 3.4: Traduire server.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de configuration serveur.

**Acceptance Criteria:**
- [ ] Traduction complete (~3.1 KB)
- [ ] Terminologie hosting claire
- [ ] frontmatter `translated: true`

---

### Story 3.5: Traduire products.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de creation de produits.

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Termes e-commerce corrects
- [ ] frontmatter `translated: true`

---

### Story 3.6: Traduire payments.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de configuration des paiements.

**Acceptance Criteria:**
- [ ] Traduction complete (~2.8 KB)
- [ ] Noms passerelles inchanges (Stripe, PayPal)
- [ ] frontmatter `translated: true`

---

### Story 3.7: Traduire accounts.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page de gestion des comptes staff.

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Terminologie permissions claire
- [ ] frontmatter `translated: true`

---

### Story 3.8: Traduire service.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page de creation du premier service.

**Acceptance Criteria:**
- [ ] Traduction complete (~2 KB)
- [ ] Workflow service clair
- [ ] frontmatter `translated: true`

---

### Story 3.9: Traduire finish.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page de conclusion/felicitations.

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Liens "next steps" fonctionnels
- [ ] frontmatter `translated: true`

---

## Definition of Done

- [ ] 9 pages traduites en EN
- [ ] Tous les frontmatter `translated: true`
- [ ] Build OK pour EN et FR
- [ ] Parcours utilisateur coherent
- [ ] Aucun bandeau "Not translated"

---

## Dependances

**Requiert:**
- Epic 0: Setup & Infrastructure (COMPLETE)

**Recommande:**
- Epic 2: Installation (pour coherence parcours)

---

## Notes techniques

### Ordre recommande (parcours utilisateur)

1. getting_started.md (index)
2. first_login.md
3. personalization.md
4. server.md
5. products.md
6. payments.md
7. accounts.md
8. service.md
9. finish.md

### Coherence terminologique

Maintenir les memes termes que Epic 2:
- "client area" (espace client)
- "admin panel" (panneau admin)
- "service" (service)
- "product" (produit)

---

## Estimation

**Effort:** 2-3h
**Complexite:** Moyenne (parcours logique a maintenir)
