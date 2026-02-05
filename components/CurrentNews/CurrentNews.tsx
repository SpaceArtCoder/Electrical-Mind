import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import type {CurrentNewsProps} from '@/lib/types/article'
import styles from './CurrentNews.module.scss'

export default function CurrentNews({addArticle} : CurrentNewsProps) {

    return (
        <section className={styles.current_news}>

        {/* Test component */}
          {/* <ArticleAddForm addArticle={addArticle}/> */}

            <div className={styles.first_block}>

            </div>

            <div className={styles.second_block}>
                
            </div>

        </section>
    )
}