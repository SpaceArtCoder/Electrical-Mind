'use client'


import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>⚡</span>
            Electrical Mind
          </h1>
          <p className={styles.subtitle}>
            Портал о технологиях
          </p>
        </header>
    )
}