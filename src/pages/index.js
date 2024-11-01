import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import { Redirect, useLocation } from '@docusaurus/router';

const FeatureList = [
  {
    title: 'Quick Start Guides',
    link: '/category/quick-start-guides',
    Svg: require('@site/static/img/products.svg').default,
    description: <>Get started with your product</>,
  },
  {
    title: 'Troubleshooting',
    link: '/category/troubleshooting',
    Svg: require('@site/static/img/wrench.svg').default,
    description: <>Find solutions to common problems and issues</>,
  },
];

function Feature({ Svg, title, link, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a style={{ color: 'inherit' }} href={link}>
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const location = useLocation();

  // Redirect if the user is at the root URL
  if (location.pathname === '/') {
    return <Redirect to="/intro" />;
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
