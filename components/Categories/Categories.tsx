'use client'

import { motion } from 'framer-motion'
import Link from 'next/link';
import Navicon from '@/components/Navicon/Navicon'
import styles from './Categories.module.scss';
import { useState } from 'react';

export default function Categories() {

    function show_categories() {
        setOpenNav(true);
    }

    const [openNav, setOpenNav] = useState(false);                              // The nav menu is hidden by default
                                                                                // for mobile
    return (
        <nav className={styles.nav} aria-label='Main navigation'>

            <Navicon show_nav={show_categories} display={openNav}/>

            <motion.ul className={openNav ? styles.navigation : `${styles.navigation} ${styles.hide_navigation}`} 
            animate={{height : openNav ? 200 : 60}} transition={{type: "spring",
                stiffness: 300,
                damping: 20
            }}>
                <li>
                    <Link className={styles.nav_link} href='/news'>Новости</Link>
                </li>
                <li>
                    <Link className={styles.nav_link} href='/about'>О проекте</Link>
                </li>
                <li>
                    <Link className={styles.nav_link} href='/contacts'>Контакты</Link>
                </li>
            </motion.ul>
        </nav>
    )
}