import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import styles from './CurrentNews.module.scss'

interface CurrentNewsProps {
  addArticle: (formData: FormData) => Promise<void>
}

export default function CurrentNews({addArticle} : CurrentNewsProps) {

    return (
        <section className={styles.current_news}>

          <ArticleAddForm addArticle={addArticle}/>


        </section>
    )
}