'use client'

import styles from './ArticleOut.module.scss'
import { useArticleStore } from '@/store/useArticleStore';

export default function ArticleOut() {
    // Get the articles from the store

    const articles = useArticleStore((state) => state.articles);

    return (
        <div className={styles.article_out}>
            <h2>Current</h2>
            {articles.length === 0 ? (
                <p>No articles yet.</p>
            ) : (
                <ul className={styles.article_list}>
                    {articles.map((article) => (
                        <li key={article.id} className={styles.article_item}>
                            <div className={styles.article_content}>
                                <h3>{article.title}</h3>
                                <p>{article.content}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}