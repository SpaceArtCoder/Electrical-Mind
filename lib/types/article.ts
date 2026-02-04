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