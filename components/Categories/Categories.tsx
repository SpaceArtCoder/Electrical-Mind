import Link from 'next/link';
import Navicon from '@/components/Navicon/Navicon'
import styles from './Categories.module.scss';
import { useState } from 'react';

export default function Categories() {

    const [openNav, setOpenNav] = useState(false);
    
    return (
        <nav className={styles.nav} aria-label='Main navigation'>

            <Navicon/>

            <ul>
                <li>
                    <Link className={styles.nav_link} href='/news'>Новости</Link>
                </li>
                <li>
                    <Link className={styles.nav_link} href='/about'>О проекте</Link>
                </li>
                <li>
                    <Link className={styles.nav_link} href='/contacts'>Контакты</Link>
                </li>
            </ul>
        </nav>
    )
}