# Epic 8: Lancement & Communication

**Status:** IN PROGRESS
**Priority:** HAUTE
**Branch:** feat/i18n
**Dependances:** Epic 0 (COMPLETE), Epics 1-4 (pour lancement complet)

---

## Objectif

Maximiser la visibilite du projet i18n et attirer des contributeurs/utilisateurs internationaux.

**Resultat attendu:**
- Visibilite organique via "build in public"
- Communaute internationale engagee
- Contributions traduction de la communaute

---

## Strategie

### Phase 1: Build in Public (pendant MVD)
- Commits visibles et bien documentes
- PRD et Epics publics
- Progress updates reguliers

### Phase 2: Lancement (apres MVD)
- Annonces sur plateformes ciblees
- Appel a contributions
- Template reproductible

---

## Stories

### Story 8.1: Setup build in public

**Status:** DONE
**Priorite:** HAUTE

**Description:**
Mettre en place la structure pour le build in public.

**Acceptance Criteria:**
- [x] Branche feat/i18n creee
- [x] Brainstorming session documentee
- [x] PRD cree comme source of truth
- [x] Epics documentes
- [x] Commits clairs et descriptifs

---

### Story 8.2: Premier post LinkedIn

**Status:** TODO
**Priorite:** HAUTE
**Timing:** Apres Epic 0 complete

**Description:**
Publier un premier post LinkedIn sur le projet i18n.

**Contenu suggere:**
- Contexte: doc FR -> EN pour open source international
- Approche: Claude Code MAX + BMAD workflow
- Apprentissages Epic 0
- Teaser MVD a venir

**Acceptance Criteria:**
- [ ] Post redige
- [ ] Screenshots/visuals prepares
- [ ] Publie sur LinkedIn
- [ ] Lien vers repo GitHub

---

### Story 8.3: Post Reddit r/selfhosted

**Status:** TODO
**Priorite:** HAUTE
**Timing:** Apres MVD (Epics 1-4)

**Description:**
Poster sur r/selfhosted pour toucher la communaute self-hosting.

**Contenu suggere:**
- Presentation ClientXCMS
- Annonce doc EN disponible
- Appel a feedback/contributions

**Acceptance Criteria:**
- [ ] Post conforme aux regles du sub
- [ ] Pas de spam/promotion excessive
- [ ] Reponses aux commentaires

---

### Story 8.4: Show HN

**Status:** TODO
**Priorite:** MOYENNE
**Timing:** Apres MVD

**Description:**
Soumettre sur Hacker News (Show HN).

**Angle suggere:**
- "Show HN: ClientXCMS - Open source client management for hosting providers"
- Ou angle meta: "How we translated 130+ docs with Claude Code"

**Acceptance Criteria:**
- [ ] Titre accrocheur
- [ ] Description concise
- [ ] Pret a repondre aux questions techniques

---

### Story 8.5: Soumission Awesome lists

**Status:** TODO
**Priorite:** MOYENNE
**Timing:** Apres MVD

**Description:**
Soumettre ClientXCMS aux awesome lists pertinentes.

**Cibles:**
- awesome-selfhosted
- awesome-laravel
- awesome-billing (si existe)

**Acceptance Criteria:**
- [ ] PRs soumises aux repos awesome
- [ ] Format conforme aux guidelines
- [ ] Description en anglais

---

### Story 8.6: Article Dev.to/Hashnode

**Status:** TODO
**Priorite:** BASSE
**Timing:** Apres MVD

**Description:**
Ecrire un article technique sur le processus i18n.

**Angle suggere:**
- "How to internationalize a Docusaurus site with Claude Code"
- Workflow BMAD + Claude
- Lessons learned

**Acceptance Criteria:**
- [ ] Article redige (~1500 mots)
- [ ] Screenshots/code examples
- [ ] Publie sur Dev.to et/ou Hashnode
- [ ] Cross-post LinkedIn

---

## Definition of Done

- [ ] Build in public actif
- [ ] Au moins 2 posts publies (LinkedIn + Reddit)
- [ ] Awesome list soumise
- [ ] Feedback communaute recu

---

## Dependances

**Requiert:**
- Epic 0: Setup (pour story 8.1-8.2)
- Epics 1-4: MVD (pour stories 8.3-8.6)

**Parallele avec:**
- Toutes les stories de traduction

---

## Metriques

### A suivre

- Stars GitHub
- Traffic docs (si analytics)
- Issues/PRs en anglais
- Mentions sur reseaux sociaux

### Objectifs (6 mois)

- +50 stars GitHub
- 5+ contributions traduction communaute
- 1+ mention dans newsletter/blog externe

---

## Templates

### Post LinkedIn (Story 8.2)

```
[FR->EN] Internationaliser 130+ pages de doc avec Claude Code

Contexte: ClientXCMS est un CMS open source pour hebergeurs.
Probleme: Documentation uniquement en francais = barriere internationale.

Solution:
- Claude Code MAX pour generation
- Workflow BMAD pour structure
- Build in public sur GitHub

Epic 0 complete: infrastructure i18n prete.
Next: MVD 20-30 pages prioritaires.

Repo: [lien]
PRD: [lien]

#OpenSource #i18n #ClaudeCode #Docusaurus
```

### Post Reddit (Story 8.3)

```
Title: ClientXCMS - Open source client/billing management, now with English docs!

Hey r/selfhosted,

We've been working on ClientXCMS, an open source client management system
for game/server hosting providers (think WHMCS alternative).

The docs were French-only until now. We just completed translating the
core documentation to English:
- Installation (cloud, self-hosted, Docker)
- Getting Started guide
- Core settings

Looking for feedback and contributors!

GitHub: [lien]
Docs: [lien]
```

---

## Estimation

**Effort total:** 4-6h (reparti sur plusieurs semaines)
**Complexite:** Faible (communication, pas technique)
