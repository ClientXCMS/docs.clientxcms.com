# Epic 5: Post-MVD - Extensions

**Status:** TODO
**Priority:** BASSE
**Branch:** feat/i18n
**Dependances:** Epics 1-4 (MVD)

---

## Objectif

Traduire la documentation des extensions (modules et addons) pour permettre aux utilisateurs internationaux de configurer les integrations.

**Resultat attendu:**
- Documentation modules populaires en EN
- Documentation addons essentiels en EN
- Reference technique pour extensions tierces

---

## Scope

**Dossiers:** `docs/extensions/`

### Modules (8 fichiers, ~55 KB)

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| modules.md | 0.1 KB | HAUTE | TODO |
| Proxmox.md | 15.2 KB | HAUTE | TODO |
| Pterodactyl.md | 6.4 KB | HAUTE | TODO |
| Pelican.md | 7.1 KB | HAUTE | TODO |
| Wisp.md | 4.4 KB | MOYENNE | TODO |
| Pterobox.md | 4.9 KB | MOYENNE | TODO |
| cPanel.md | 3.9 KB | MOYENNE | TODO |
| Plesk.md | 3.9 KB | MOYENNE | TODO |
| VirtualizorCloud.md | 3.3 KB | BASSE | TODO |

### Addons (20 fichiers, ~77 KB)

| Fichier | Taille | Priorite | Status |
|---------|--------|----------|--------|
| addons.md | 0.1 KB | HAUTE | TODO |
| socialauthplus.md | 16.8 KB | HAUTE | TODO |
| announcement_bar.md | 10.0 KB | MOYENNE | TODO |
| customers_reviews.md | 9.4 KB | MOYENNE | TODO |
| backup.md | 8.2 KB | MOYENNE | TODO |
| discordgift.md | 7.1 KB | MOYENNE | TODO |
| discordlink.md | 6.3 KB | MOYENNE | TODO |
| giftcard.md | 6.2 KB | MOYENNE | TODO |
| fund.md | 4.6 KB | MOYENNE | TODO |
| reselling_client.md | 4.0 KB | BASSE | TODO |
| cloudflaresubdomains.md | 3.7 KB | BASSE | TODO |
| netbox.md | 3.4 KB | BASSE | TODO |
| supportid.md | 2.6 KB | BASSE | TODO |
| free_trial.md | 2.4 KB | BASSE | TODO |
| faq.md | 2.1 KB | BASSE | TODO |
| importation.md | 2.1 KB | BASSE | TODO |
| pennylane.md | 1.9 KB | BASSE | TODO |
| abby.md | 1.9 KB | BASSE | TODO |
| sitemap.md | 1.2 KB | BASSE | TODO |
| purchasealert.md | 1.1 KB | BASSE | TODO |
| antidoublecompte.md | 0.8 KB | BASSE | TODO |
| page.md | 0.8 KB | BASSE | TODO |

**Total:** 30 pages (~130 KB)

---

## Stories

### Story 5.1: Traduire index extensions

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire les pages index (extensions.md, modules.md, addons.md).

**Acceptance Criteria:**
- [ ] extensions.md traduit
- [ ] modules.md traduit
- [ ] addons.md traduit
- [ ] Navigation fonctionnelle
- [ ] frontmatter `translated: true`

---

### Story 5.2: Traduire modules game hosting (Pterodactyl, Pelican, Wisp, Pterobox)

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire les modules de game panel les plus populaires.

**Acceptance Criteria:**
- [ ] Pterodactyl.md traduit (~6.4 KB)
- [ ] Pelican.md traduit (~7.1 KB)
- [ ] Wisp.md traduit (~4.4 KB)
- [ ] Pterobox.md traduit (~4.9 KB)
- [ ] Terminologie game hosting coherente
- [ ] frontmatter `translated: true` sur tous

---

### Story 5.3: Traduire module Proxmox

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire le module Proxmox (le plus gros fichier).

**Acceptance Criteria:**
- [ ] Proxmox.md traduit (~15.2 KB)
- [ ] Termes virtualisation corrects
- [ ] Screenshots OK
- [ ] frontmatter `translated: true`

---

### Story 5.4: Traduire modules web hosting (cPanel, Plesk)

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire les modules web hosting.

**Acceptance Criteria:**
- [ ] cPanel.md traduit (~3.9 KB)
- [ ] Plesk.md traduit (~3.9 KB)
- [ ] frontmatter `translated: true`

---

### Story 5.5: Traduire addon SocialAuthPlus

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire l'addon authentification sociale (le plus gros addon).

**Acceptance Criteria:**
- [ ] socialauthplus.md traduit (~16.8 KB)
- [ ] OAuth providers (Google, Discord, etc.) documentes
- [ ] frontmatter `translated: true`

---

### Story 5.6: Traduire addons Discord (discordlink, discordgift)

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire les addons integration Discord.

**Acceptance Criteria:**
- [ ] discordlink.md traduit (~6.3 KB)
- [ ] discordgift.md traduit (~7.1 KB)
- [ ] Terminologie Discord API coherente
- [ ] frontmatter `translated: true`

---

### Story 5.7: Traduire addons business (giftcard, fund, backup)

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire les addons fonctionnalites business.

**Acceptance Criteria:**
- [ ] giftcard.md traduit (~6.2 KB)
- [ ] fund.md traduit (~4.6 KB)
- [ ] backup.md traduit (~8.2 KB)
- [ ] frontmatter `translated: true`

---

### Story 5.8: Traduire addons restants

**Status:** TODO
**Priorite:** BASSE

**Description:**
Traduire les addons secondaires restants.

**Acceptance Criteria:**
- [ ] Tous les addons restants traduits
- [ ] frontmatter `translated: true` sur tous
- [ ] Build OK

---

## Definition of Done

- [ ] 30 pages traduites en EN
- [ ] Tous les frontmatter `translated: true`
- [ ] Build OK pour EN et FR
- [ ] Documentation technique precise
- [ ] Aucun bandeau "Not translated" sur section Extensions

---

## Dependances

**Requiert:**
- Epics 1-4: MVD (priorite)

**Parallele avec:**
- Epic 6: Developers (meme priorite basse)

---

## Notes techniques

### Ordre recommande

1. Index (extensions, modules, addons)
2. Modules game hosting (Pterodactyl, Pelican) - populaires
3. Proxmox - complexe mais demande
4. Addons business (giftcard, fund)
5. Reste par ordre de taille

### Terminologie a maintenir

- "panel" (panneau)
- "server" (serveur)
- "product" (produit)
- "provisioning" (provisionnement)

---

## Estimation

**Effort:** 8-12h
**Complexite:** Moyenne-Haute (termes techniques specifiques)
