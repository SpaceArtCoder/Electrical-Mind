import Link from 'next/link';
import styles from './Categories.module.scss';

export default function Categories() {
    return (
        <nav className={styles.nav} aria-label='Main navigation'>
            <ul>
                <li>
                    <Link href='/news'>Новости</Link>
                </li>
                <li>
                    <Link href='/about'>О проекте</Link>
                </li>
            </ul>
        </nav>
    )
}