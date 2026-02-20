import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            Svg={require('@site/static/img/payment.svg').default}
            title={
              <Translate id="homepage.features.revenue.title">
                Revenue Management
              </Translate>
            }
            description={
              <Translate
                id="homepage.features.revenue.description"
                values={{
                  quotes: <b><Translate id="homepage.features.revenue.quotes">Quotes</Translate></b>,
                  taxes: <b><Translate id="homepage.features.revenue.taxes">Taxes</Translate></b>,
                  delivery: <b><Translate id="homepage.features.revenue.delivery">Service delivery/management</Translate></b>,
                  invoices: <b><Translate id="homepage.features.revenue.invoices">Invoices</Translate></b>,
                }}>
                {'Accept payments from your customers via pre-installed payment gateways. Manage {quotes}, {taxes}, {delivery}, and {invoices} for your clients.'}
              </Translate>
            }
          />
          <Feature
            Svg={require('@site/static/img/fast.svg').default}
            title={
              <Translate id="homepage.features.installation.title">
                Installation & Configuration
              </Translate>
            }
            description={
              <Translate
                id="homepage.features.installation.description"
                values={{
                  clientxcms: <b>CLIENTXCMS</b>,
                  offers: <b><Translate id="homepage.features.installation.offers">offers</Translate></b>,
                  group: <b><Translate id="homepage.features.installation.group">group</Translate></b>,
                  sell: <b><Translate id="homepage.features.installation.sell">sell them</Translate></b>,
                }}>
                {'Install and configure your client area as quickly as possible. Connect your external Panel to {clientxcms}, then create {offers} by adding them to a {group} and {sell}.'}
              </Translate>
            }
          />
          <Feature
            Svg={require('@site/static/img/custom.svg').default}
            title={
              <Translate id="homepage.features.customization.title">
                Client Area Customization
              </Translate>
            }
            description={
              <Translate
                id="homepage.features.customization.description"
                values={{
                  clientArea: <b><Translate id="homepage.features.customization.clientArea">client area</Translate></b>,
                  privilegedSpace: <b><Translate id="homepage.features.customization.privilegedSpace">privileged space</Translate></b>,
                  logo: <b><Translate id="homepage.features.customization.logo">Logo</Translate></b>,
                  favicon: <b><Translate id="homepage.features.customization.favicon">Favicon</Translate></b>,
                  theme: <b><Translate id="homepage.features.customization.theme">Theme</Translate></b>,
                  primaryColor: <b><Translate id="homepage.features.customization.primaryColor">Primary Color</Translate></b>,
                }}>
                {'Make your {clientArea} a {privilegedSpace} for your customers. It is important that your clients recognize your brand through your {logo}, {favicon}, {theme}, or {primaryColor}.'}
              </Translate>
            }
          />
        </div>
      </div>
    </section>
  );
}
