/**
 * Type for the Server Action that adds an article.
 * It takes the native FormData from the browser and returns a Promise.
 */
export type AddArticleAction = (formData: FormData) => Promise<void>

/**
 * Props for the CurrentNews container component.
 */
export interface CurrentNewsProps {
    addArticle: AddArticleAction;
}

/**
 * Props for the ArticleAddForm client component.
 */
export interface ArticleAddFormProps {
    addArticle: AddArticleAction;
}

/**
 * Zustand store
 */
export interface ArticleState {
    articles: any[],
    setArticles: (articles: any[]) => void;
    /**
     * The action called by the form to trigger the server-side logic.
     */
    addArticle: (formData: FormData) => Promise<void>;
    deleteArticle: (id: string) => Promise<void>;
    editArticle: (id: string, formData: FormData) => Promise<void>;
}