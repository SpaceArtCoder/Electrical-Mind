import Logo from '@/components/Logo/Logo';
import styles from './Header.module.scss';
import Categories from '../Categories/Categories';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link className={styles.logo_link} href='/'>
                <Logo/>
            </Link>
          
          <Categories/>
        </header>
    )
}