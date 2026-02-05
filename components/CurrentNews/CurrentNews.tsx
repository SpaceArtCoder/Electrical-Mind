import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import type {CurrentNewsProps} from '@/lib/types/article'
import styles from './CurrentNews.module.scss'

export default function CurrentNews({addArticle} : CurrentNewsProps) {

    return (
        <section className={styles.current_news}>

        {/* Test component */}
          {/* <ArticleAddForm addArticle={addArticle}/> */}

        {/* Each block will contain four news items */}
            <div className={styles.first_block}>
                <div>

                </div>
            </div>

            <div className={styles.second_block}>
                <div>
                    
                </div>
            </div>

        </section>
    )
}