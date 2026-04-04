import styles from './CurrentYear.module.scss'

export default CurrentYear() {

    const year = new Date().getFullYear();

    return (
        <p>© {year}</p>
    )
}