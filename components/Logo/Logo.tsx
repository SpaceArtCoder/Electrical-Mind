'use client'

import Image from 'next/image';
import styles from './Logo.module.scss';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image
                src='/logo.svg'
                alt='Site Logo'
                width={120}
                height={40}
                priority
                className={styles.logoImage}
            />
        </div>

    )
}
