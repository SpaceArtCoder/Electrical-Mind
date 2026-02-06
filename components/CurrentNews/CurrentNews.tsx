'use client'

import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import type {CurrentNewsProps} from '@/lib/types/article'
import styles from './CurrentNews.module.scss'
import { useArticleStore } from '@/store/useArticleStore'

export default function CurrentNews({addArticle} : CurrentNewsProps) {

    const articles = useArticleStore((state) => state.articles);

    return (
        <section className={styles.current_news}>

        {/* Test component */}

        {articles.map(article => <div key={article.id}>{article.title}</div>)}
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