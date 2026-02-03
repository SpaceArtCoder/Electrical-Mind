

import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import styles from './CurrentNews.module.scss'

export default function CurrentNews({addArticle}) {

    return (
        <section className={styles.current_news}>

          <ArticleAddForm addArticle={addArticle}/>


        </section>
    )
}