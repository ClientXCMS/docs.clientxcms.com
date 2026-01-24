# Story 0.8: Fix broken internal links

Status: review

## Story

As a documentation reader,
I want all internal links to work correctly,
so that I can navigate the documentation without encountering 404 errors.

## Acceptance Criteria

1. **AC1**: All `/docs/...` links corrected
   - Links using `/docs/path` pattern replaced with `/path`
   - Applies to both EN and FR documentation files
   - Build shows no broken link warnings for these files

2. **AC2**: Typo in antidoublecompte link fixed
   - `antidoublecompt.md` corrected to `antidoublecompte.md` in settings.md

3. **AC3**: Relative links in Proxmox/Pterobox fixed
   - Links to `../../../settings/provisioning/configoptions` corrected
   - Use absolute path or correct relative path

4. **AC4**: Build verification
   - `npm run build` shows significantly fewer broken link warnings
   - All fixed files pass link validation

## Tasks / Subtasks

- [x] Task 1: Fix `/docs/...` links in EN files
  - [x] 1.1 Fix `docs/getting_started/first_login.md` (2 links)
  - [x] 1.2 Fix `docs/getting_started/personalization.md` (6 links)
  - [x] 1.3 Fix `docs/getting_started/server.md` (4 links)
  - [x] 1.4 Fix `docs/developpers/software/migrate_cloud_to_v2.md` (1 link)

- [x] Task 2: Fix typo in settings.md
  - [x] 2.1 Fix `docs/settings/settings.md` - `antidoublecompt.md` -> `antidoublecompte.md`
  - [x] 2.2 Fix `i18n/fr/.../settings/settings.md` - same typo

- [x] Task 3: Fix `/docs/...` links in FR files
  - [x] 3.1 Fix `i18n/fr/.../getting_started/first_login.md` (2 links)
  - [x] 3.2 Fix `i18n/fr/.../getting_started/personalization.md` (6 links)
  - [x] 3.3 Fix `i18n/fr/.../getting_started/server.md` (4 links)
  - [x] 3.4 Fix `i18n/fr/.../developpers/software/migrate_cloud_to_v2.md` (1 link)

- [x] Task 4: Fix relative links in extension modules
  - [x] 4.1 Fix `i18n/fr/.../extensions/modules/Proxmox.md`
  - [x] 4.2 Fix `i18n/fr/.../extensions/modules/Pterobox.md`
  - [x] 4.3 Check if EN versions have same issue and fix
  - [x] 4.4 Fix `docs/settings/store/products.md` - relative link to `/extensions/`
  - [x] 4.5 Fix `i18n/fr/.../settings/store/products.md` - same issue

- [x] Task 5: Build verification
  - [x] 5.1 Run `npm run build`
  - [x] 5.2 Verify broken link warnings reduced
  - [x] 5.3 Document remaining warnings (if any)

## Dev Notes

### Problem Analysis

The documentation uses incorrect internal link patterns:

1. **`/docs/...` pattern**: Links like `/docs/extensions/extensions.md` should be `/extensions/` because Docusaurus is configured with `routeBasePath: '/'` (docs served at root, not under /docs/).

2. **Typo**: `antidoublecompt.md` is missing the final 'e' - should be `antidoublecompte.md`.

3. **Relative path resolution**: Links like `../../../settings/provisioning/configoptions` in extension modules don't resolve correctly.

### Link Correction Pattern

| Incorrect | Correct |
|-----------|---------|
| `/docs/extensions/extensions.md` | `/extensions/` |
| `/docs/getting_started/server.md` | `/getting_started/server` |
| `/docs/settings/core/app.md` | `/settings/core/app` |
| `antidoublecompt.md` | `antidoublecompte.md` |

### Files to Modify

**EN Source Files:**
- `docs/getting_started/first_login.md`
- `docs/getting_started/personalization.md`
- `docs/getting_started/server.md`
- `docs/developpers/software/migrate_cloud_to_v2.md`
- `docs/settings/settings.md`

**FR i18n Files:**
- `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/first_login.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/personalization.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/server.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/developpers/software/migrate_cloud_to_v2.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/settings/settings.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/extensions/modules/Proxmox.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/extensions/modules/Pterobox.md`

### Priority

HIGH - These broken links affect user experience and appear in build warnings.

### Testing

After fixes, run `npm run build` and verify the specific broken link warnings are resolved.

## Dev Agent Record

### Agent Model Used
claude-opus-4-5-20251101

### Debug Log References
N/A

### Completion Notes List

1. **All `/docs/...` links corrected**: Changed pattern from `/docs/path` to `/path` in all affected files (EN and FR)
2. **Typo fixed**: `antidoublecompt.md` corrected to `antidoublecompte.md` in both EN and FR settings.md
3. **Relative links fixed**: Changed `../../../settings/provisioning/configoptions` to absolute `/settings/provisioning/configoptions` in Proxmox.md and Pterobox.md
4. **Additional fix**: Fixed relative link `../../../extensions` to `/extensions/` in products.md

### Build Verification Results

The build now passes successfully for both EN and FR locales. The remaining "broken links" warnings are expected:
- They are language switcher links pointing to `/fr/...` versions of pages not yet translated
- This is normal behavior for an i18n project in progress
- Example: `/customers` -> linking to `/fr/customers` (FR translation does not exist yet)

These are NOT content link issues - they are system navigation links that will be resolved as more FR translations are added.

### File List

**EN Files Modified (8):**
- `docs/getting_started/first_login.md`
- `docs/getting_started/personalization.md`
- `docs/getting_started/server.md`
- `docs/developpers/software/migrate_cloud_to_v2.md`
- `docs/settings/settings.md`
- `docs/extensions/modules/Proxmox.md`
- `docs/extensions/modules/Pterobox.md`
- `docs/settings/store/products.md`

**FR Files Modified (8):**
- `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/first_login.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/personalization.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/server.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/developpers/software/migrate_cloud_to_v2.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/settings/settings.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/extensions/modules/Proxmox.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/extensions/modules/Pterobox.md`
- `i18n/fr/docusaurus-plugin-content-docs/current/settings/store/products.md`

### Change Log

| File | Change |
|------|--------|
| first_login.md (EN/FR) | 2 links: `/docs/extensions/...` -> `/extensions/`, `/docs/getting_started/...` -> `/getting_started/...` |
| personalization.md (EN/FR) | 6 links: `/docs/settings/...` -> `/settings/...` |
| server.md (EN/FR) | 4 links: `/docs/extensions/modules/...` -> `/extensions/modules/...` |
| migrate_cloud_to_v2.md (EN/FR) | 1 link: `/docs/installation/...` -> `/installation/...` |
| settings.md (EN/FR) | Typo fix: `antidoublecompt.md` -> `antidoublecompte.md` |
| Proxmox.md (EN/FR) | Relative link: `../../../settings/provisioning/configoptions` -> `/settings/provisioning/configoptions` |
| Pterobox.md (EN/FR) | Relative link: `../../../settings/provisioning/configoptions` -> `/settings/provisioning/configoptions` |
| products.md (EN/FR) | Relative link: `../../../extensions` -> `/extensions/` |

