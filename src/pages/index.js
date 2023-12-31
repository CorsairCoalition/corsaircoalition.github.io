import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <main>
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <div className={styles.logo}>
              <img src="img/generals-io-card.jpg" alt="generals.io screenshot" />
            </div>

            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/introduction">
                Get Started
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="https://generals.io">
                Play Generals.io
              </Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
