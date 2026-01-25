import Link from 'next/link';
import styles from './Categories.module.scss';

export default function Categories() {
    return (
        <nav className={styles.nav} aria-label='Main navigation'>
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