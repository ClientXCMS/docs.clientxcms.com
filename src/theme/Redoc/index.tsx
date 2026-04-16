/**
 * Override Redoc to prevent all hook errors during SSR/SSG
 * Only renders Redoc after client-side mounting to avoid ColorModeProvider context errors
 */
import React, { useState, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const fallbackDiv = (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '600px',
      backgroundColor: 'var(--ifm-background-color)',
      color: 'var(--ifm-font-color-base)',
      fontSize: '16px',
    }}
  >
    API documentation loading...
  </div>
);

export default function RedocWrapper(props: any) {
  return (
    <BrowserOnly fallback={fallbackDiv}>
      {() => <RedocClientOnly {...props} />}
    </BrowserOnly>
  );
}

function RedocClientOnly(props: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only import and render after mount to ensure provider context exists
    setMounted(true);
  }, []);

  if (!mounted) {
    return fallbackDiv;
  }

  // Dynamically require after mount to avoid initialization during SSR
  const Redoc = require('@theme-original/Redoc').default;
  return <Redoc {...props} />;
}
