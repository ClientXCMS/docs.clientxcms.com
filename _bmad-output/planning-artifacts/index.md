# ClientXCMS Documentation - i18n Epics

**Projet:** Internationalisation de la documentation ClientXCMS
**Branche:** feat/i18n
**Source of Truth:** [PRD](../prd/i18n-prd.md)

---

## Vue d'ensemble

| Phase | Epics | Pages | Status |
|-------|-------|-------|--------|
| **Setup** | Epic 0 | 0 (infrastructure) | COMPLETE |
| **MVD** | Epics 1-4 | ~25 pages | IN PROGRESS |
| **Post-MVD** | Epics 5-7 | ~100 pages | TODO |
| **Launch** | Epic 8 | 0 (communication) | IN PROGRESS |

---

## Epics

### Phase 0: Infrastructure

| Epic | Titre | Stories | Status | Lien |
|------|-------|---------|--------|------|
| **0** | Setup & Infrastructure i18n | 7 | COMPLETE | [epic-0-setup-infrastructure.md](epic-0-setup-infrastructure.md) |

### Phase 1: MVD (Minimum Viable Documentation)

| Epic | Titre | Stories | Status | Lien |
|------|-------|---------|--------|------|
| **1** | MVD - Introduction | 2 | IN PROGRESS | [epic-1-mvd-introduction.md](epic-1-mvd-introduction.md) |
| **2** | MVD - Installation | 8 | TODO | [epic-2-mvd-installation.md](epic-2-mvd-installation.md) |
| **3** | MVD - Getting Started | 9 | TODO | [epic-3-mvd-getting-started.md](epic-3-mvd-getting-started.md) |
| **4** | MVD - Settings Core | 6 | TODO | [epic-4-mvd-settings-core.md](epic-4-mvd-settings-core.md) |

### Phase 2: Post-MVD

| Epic | Titre | Stories | Status | Lien |
|------|-------|---------|--------|------|
| **5** | Post-MVD - Extensions | 8 | TODO | [epic-5-post-mvd-extensions.md](epic-5-post-mvd-extensions.md) |
| **6** | Post-MVD - Developers | 8 | TODO | [epic-6-post-mvd-developers.md](epic-6-post-mvd-developers.md) |
| **7** | Post-MVD - Blog | 5 | TODO | [epic-7-post-mvd-blog.md](epic-7-post-mvd-blog.md) |

### Phase 3: Lancement

| Epic | Titre | Stories | Status | Lien |
|------|-------|---------|--------|------|
| **8** | Lancement & Communication | 6 | IN PROGRESS | [epic-8-launch-communication.md](epic-8-launch-communication.md) |

---

## Progression globale

### Stories par status

| Status | Count | Pourcentage |
|--------|-------|-------------|
| DONE | 6 | ~10% |
| IN PROGRESS | 2 | ~3% |
| TODO | 51 | ~85% |
| SKIPPED | 1 | ~2% |
| **Total** | **60** | 100% |

### Effort estime

| Phase | Effort | Complexite |
|-------|--------|------------|
| Epic 0 | COMPLETE | - |
| MVD (1-4) | 8-12h | Moyenne |
| Post-MVD (5-7) | 17-27h | Moyenne-Haute |
| Launch (8) | 4-6h | Faible |
| **Total restant** | **~30-45h** | - |

---

## Dependances

```
Epic 0 (COMPLETE)
    |
    +---> Epic 1 (Introduction)
    +---> Epic 2 (Installation)
    +---> Epic 3 (Getting Started)
    +---> Epic 4 (Settings Core)
    |         |
    |         +---> Epic 5 (Extensions)
    |         +---> Epic 6 (Developers)
    |         +---> Epic 7 (Blog)
    |
    +---> Epic 8.1-8.2 (Build in public)
              |
              +---> Epic 8.3-8.6 (Post-MVD launch)
```

---

## Metriques de succes

### Court terme (MVD)

- [ ] 25 pages traduites en EN (Epics 1-4)
- [ ] Build sans erreur pour EN et FR
- [ ] Bandeau fonctionnel sur pages non traduites

### Moyen terme (Post-MVD)

- [ ] 100+ pages traduites
- [ ] Contributions communaute (PRs traduction)
- [ ] Trafic international mesurable

### Long terme

- [ ] ClientXCMS reconnu internationalement
- [ ] Template reproductible pour autres projets

---

## Ressources

- [PRD i18n](../prd/i18n-prd.md)
- [Brainstorming session](../analysis/brainstorming-session-2026-01-24.md)
- [Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)

---

**Derniere mise a jour:** 2026-01-24
