/**
 * Swizzled DocItem/Layout to add NotTranslatedBanner for untranslated pages.
 * Based on @docusaurus/theme-classic DocItem/Layout
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NotTranslatedBanner from '@site/src/components/NotTranslatedBanner';
import type {Props} from '@theme/DocItem/Layout';

import styles from './styles.module.css';

type OptionalDocData = {
  frontMatter: Record<string, unknown>;
  toc: unknown[];
  metadata: unknown;
};

function useOptionalDoc(): OptionalDocData | null {
  try {
    const doc = useDoc();
    return {
      frontMatter: (doc.frontMatter as Record<string, unknown>) ?? {},
      toc: doc.toc ?? [],
      metadata: doc.metadata,
    };
  } catch {
    return null;
  }
}

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC(doc: OptionalDocData | null) {
  const windowSize = useWindowSize();

  if (!doc) {
    return {
      hidden: true,
      mobile: undefined,
      desktop: undefined,
    };
  }

  const {frontMatter, toc} = doc;

  const hidden = frontMatter.hide_table_of_contents === true;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

/**
 * Check if the current page should show the "not translated" banner.
 * Shows banner when:
 * - Current locale is EN (default)
 * - Page doesn't have translated: true in frontmatter
 */
function useShowNotTranslatedBanner(): boolean {
  const {i18n} = useDocusaurusContext();
  const doc = useOptionalDoc();

  if (!doc) {
    return false;
  }

  const {frontMatter} = doc;

  const isDefaultLocale = i18n.currentLocale === i18n.defaultLocale;
  const isTranslated = (frontMatter as {translated?: boolean}).translated === true;

  return isDefaultLocale && !isTranslated;
}

export default function DocItemLayout({children}: Props): ReactNode {
  const doc = useOptionalDoc();
  const docTOC = useDocTOC(doc);
  const showNotTranslatedBanner = useShowNotTranslatedBanner();

  if (!doc) {
    return (
      <div className="row">
        <div className="col">
          <div className={styles.docItemContainer}>
            <article>
              <DocItemContent>{children}</DocItemContent>
            </article>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={doc.metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {showNotTranslatedBanner && <NotTranslatedBanner />}
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
