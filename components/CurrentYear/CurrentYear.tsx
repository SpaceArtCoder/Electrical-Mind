import styles from './CurrentYear.module.scss'

export default function CurrentYear() {

    const year = new Date().getFullYear();

    return (
        <p className={styles.current_year}>© {year}</p>
    )
}