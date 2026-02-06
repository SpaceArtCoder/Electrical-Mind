import {create} from 'zustand';
import type {ArticleState} from '@/lib/types/article'

export const useArticleStore = create<ArticleState>((set) => ({
    articles: [],
    setArticles: (newArticles) => set({articles: newArticles}),
})); 