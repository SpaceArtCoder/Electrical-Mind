import {create} from 'zustand';
import type {ArticleState} from '@/lib/types/article'
import { addArticleAction } from '@/app/actions'; // Import the server action

export const useArticleStore = create<ArticleState>((set) => ({
    articles: [],
    setArticles: (newArticles) => set({articles: newArticles}),
    addArticle: async (formData: FormData) => {
        await addArticleAction(formData); // Call the server-side prisma logic
    }
})); 