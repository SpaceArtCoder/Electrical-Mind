'use client'

import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import styles from './CurrentNews.module.scss'
import { useArticleStore } from '@/store/useArticleStore'

export default function CurrentNews() {

    const articles = useArticleStore((state) => state.articles);

    return (
        <section className={styles.current_news}>
            <div className={styles.main_news}>

            </div>

          { /* Test component */ }
          {/* <ArticleAddForm/> */}

        
    

        </section>
    )
}