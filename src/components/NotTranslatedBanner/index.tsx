import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

/**
 * Banner displayed on pages that haven't been translated yet.
 * Shows a message explaining the page is in French only with a link to the FR version.
 */
export default function NotTranslatedBanner(): JSX.Element {
  const location = useLocation();
  const frenchUrl = `/fr${location.pathname}`;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </span>
        <span className={styles.message}>
          <Translate id="notTranslated.message">
            This page is available in French only. Help us translate it or use your browser's translation feature.
          </Translate>
        </span>
        <Link to={frenchUrl} className={styles.link}>
          <Translate id="notTranslated.viewInFrench">
            View in French
          </Translate>
        </Link>
      </div>
    </div>
  );
}
