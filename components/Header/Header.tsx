import Logo from '@/components/Logo/Logo';
import styles from './Header.module.scss';
import Categories from '../Categories/Categories';

export default function Header() {
    return (
        <header className={styles.header}>
          <Logo/>

          <Categories/>
        </header>
    )
}