import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Header.css';

const header = (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <FormattedMessage id="title" />
    </h1>

    <nav className={styles.navigation}>
      <Link to="/" className={styles.link}>
        <FormattedMessage id="header.nav.home" />
      </Link>
      <a
        className={styles.link}
        href="https://platzi.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FormattedMessage id="header.nav.platzi" />
      </a>
    </nav>
  </header>
);

export default header;
