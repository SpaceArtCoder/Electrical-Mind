import CurrentYear from '@/components/CurrentYear/CurrentYear'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <CurrentYear />
        </footer>
    )
}