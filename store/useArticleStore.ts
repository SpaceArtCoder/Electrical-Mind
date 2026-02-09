import {create} from 'zustand';
import type {ArticleState} from '@/lib/types/article'
import { addArticleAction, deleteArticleAction, editArticleAction } from '@/app/actions'; // Import the server action

export const useArticleStore = create<ArticleState>((set) => ({
    articles: [],
    setArticles: (newArticles) => set({articles: newArticles}),

    addArticle: async (formData: FormData) => {
        await addArticleAction(formData); // Call the server-side prisma logic
    },

    deleteArticle: async (id: string) => {
        await deleteArticleAction(id);
    },

    editArticle: async (id: string, formData: FormData) => {
        await editArticleAction(id, formData);
    },
})); 