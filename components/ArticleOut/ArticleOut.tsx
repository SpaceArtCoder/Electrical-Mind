'use client'

import styles from './ArticleOut.module.scss'
import { useArticleStore } from '@/store/useArticleStore';

export default function ArticleOut() {
    // Get the articles from the store

    const articles = useArticleStore((state) => state.articles);

    return (
        <div className={styles.article_out}>
            
        </div>
    )
}