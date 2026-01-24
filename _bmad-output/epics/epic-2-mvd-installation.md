# Epic 2: MVD - Installation

**Status:** TODO
**Priority:** HAUTE
**Branch:** feat/i18n
**Dependances:** Epic 0 (COMPLETE)

---

## Objectif

Traduire la section Installation complete pour permettre aux utilisateurs internationaux d'installer ClientXCMS.

**Resultat attendu:**
- 8 pages d'installation traduites en EN
- Instructions claires et testees
- Screenshots adaptes si necessaire

---

## Scope

**Dossier:** `docs/installation/`

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| requis.md | 5.2 KB | CRITIQUE | DONE (POC) |
| installation.md | 1.3 KB | HAUTE | TODO |
| cloud.md | 5.4 KB | HAUTE | TODO |
| selfhosted.md | 17.5 KB | HAUTE | TODO |
| plesk.md | 5.5 KB | MOYENNE | TODO |
| docker.md | 1.9 KB | MOYENNE | TODO |
| ansible.md | 10.9 KB | BASSE | TODO |
| upgrade.md | 3.3 KB | MOYENNE | TODO |

**Total:** 8 pages (~51 KB)

---

## Stories

### Story 2.1: Relecture requis.md

**Status:** TODO
**Priorite:** CRITIQUE

**Description:**
Relire et finaliser la traduction EN de requis.md (Requirements) faite pendant le POC.

**Acceptance Criteria:**
- [ ] Relecture complete
- [ ] Terminologie coherente (SaaS, On-Premise, etc.)
- [ ] Tableaux de requirements lisibles
- [ ] frontmatter `translated: true` present
- [ ] Build OK

---

### Story 2.2: Traduire installation.md (index)

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page index de la section Installation.

**Page source FR:** `i18n/fr/.../installation/installation.md`
**Page cible EN:** `docs/installation/installation.md`

**Acceptance Criteria:**
- [ ] Traduction complete
- [ ] Liens vers sous-pages fonctionnels
- [ ] frontmatter `translated: true`
- [ ] Build OK

---

### Story 2.3: Traduire cloud.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page d'installation Cloud (SaaS).

**Acceptance Criteria:**
- [ ] Traduction complete (~5.4 KB)
- [ ] Screenshots existants OK (interface FR acceptable)
- [ ] Instructions CNAME claires
- [ ] Sections Cloudflare et OVH traduites
- [ ] frontmatter `translated: true`

---

### Story 2.4: Traduire selfhosted.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire la page d'installation self-hosted (la plus longue).

**Acceptance Criteria:**
- [ ] Traduction complete (~17.5 KB)
- [ ] Blocs de code inchanges
- [ ] Instructions serveur claires
- [ ] Sections Apache/Nginx traduites
- [ ] frontmatter `translated: true`

---

### Story 2.5: Traduire plesk.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page d'installation Plesk.

**Acceptance Criteria:**
- [ ] Traduction complete (~5.5 KB)
- [ ] Screenshots existants OK
- [ ] Instructions Plesk claires
- [ ] frontmatter `translated: true`

---

### Story 2.6: Traduire docker.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page d'installation Docker.

**Acceptance Criteria:**
- [ ] Traduction complete (~1.9 KB)
- [ ] docker-compose.yml inchange
- [ ] Instructions claires
- [ ] frontmatter `translated: true`

---

### Story 2.7: Traduire ansible.md

**Status:** TODO
**Priorite:** BASSE

**Description:**
Traduire la page de deploiement automatise avec Ansible.

**Acceptance Criteria:**
- [ ] Traduction complete (~10.9 KB)
- [ ] Playbooks YAML inchanges
- [ ] Instructions AWX/Tower traduites
- [ ] frontmatter `translated: true`

---

### Story 2.8: Traduire upgrade.md

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire la page de mise a jour.

**Acceptance Criteria:**
- [ ] Traduction complete (~3.3 KB)
- [ ] Commandes inchangees
- [ ] Warnings traduits
- [ ] frontmatter `translated: true`

---

## Definition of Done

- [ ] 8 pages traduites en EN
- [ ] Tous les frontmatter `translated: true`
- [ ] Build OK pour EN et FR
- [ ] Navigation fonctionnelle entre pages
- [ ] Aucun bandeau "Not translated" sur section Installation

---

## Dependances

**Requiert:**
- Epic 0: Setup & Infrastructure (COMPLETE)

**Bloque:**
- Rien (peut etre fait en parallele avec Epic 1, 3, 4)

---

## Notes techniques

### Ordre recommande

1. requis.md (deja fait, relecture)
2. installation.md (index court)
3. cloud.md (methode principale)
4. selfhosted.md (le plus long, a faire quand frais)
5. docker.md (court)
6. plesk.md
7. upgrade.md
8. ansible.md (specifique, peut attendre)

### Screenshots

La plupart des screenshots montrent l'interface FR. Acceptable pour MVP.
A refaire en EN dans une phase ulterieure si necessaire.

---

## Estimation

**Effort:** 4-6h
**Complexite:** Moyenne (volume important, termes techniques)
