'use client'

import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import styles from './CurrentNews.module.scss'
import { useArticleStore } from '@/store/useArticleStore'

export default function CurrentNews() {

    const articles = useArticleStore((state) => state.articles);

    return (
        <section className={styles.current_news}>

        {/* Test component */}

          <ArticleAddForm/>

        {/* Each block will contain four news items */}
            {/* <div className={styles.first_block}>
                <div>

                </div>
            </div>

            <div className={styles.second_block}>
                <div>
                    
                </div>
            </div> */}

        </section>
    )
}