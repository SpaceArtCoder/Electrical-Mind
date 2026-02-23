'use client'

import { useEffect } from 'react';
import ArticleAddForm from '../ArticleAddForm/ArticleAddForm'
import { useArticleStore } from '@/store/useArticleStore'
import styles from './CurrentNews.module.scss'

export default function CurrentNews() {

    const articles = useArticleStore((state) => state.articles);

    const fetchArticles = useArticleStore((state) => state.fetchArticles);

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <section className={styles.current_news}>
            <div className={styles.main_news}>
                {articles.map((article) => (
                    <div key={article.id}>{article.content}</div>
                ))}
            </div>

          { /* Test component */ }
          {/* <ArticleAddForm/> */}

        
    

        </section>
    )
}