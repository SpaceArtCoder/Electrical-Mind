import prisma from '@/lib/prisma'
import CurrentNews from '@/components/CurrentNews/CurrentNews'
import styles from './page.module.scss'
import { connect } from 'http2';


export default function Main() {

  // Define server action inside the component
  async function addArticles(formData: FormData) {
    'use server'

    // Get the value from the input field named "content"
    const contentText = formData.get("content") as string;

    await prisma.article.create({
      data: {
        title: "User Article",
        slug: `article-${Date.now()}`,
        excerpt: 'user content',
        content: contentText,
        author: {
          connect: {id : 'cmka7wrt9000452o3hawfuawr'}
        },
        category: {
          connect: {id : '1'}
        }
      }
    })

    console.log("Created article with content", contentText)
  }

  return (
    <main className={styles.main_content}>
      <CurrentNews addArticle={addArticles} />
    </main>
  )
}

































// export const dynamic = 'force-dynamic'

//   return await prisma.article.findMany({
//     where: { status: 'published' },
//     include: {
//       author: { select: { name: true, email: true } },
//       category: { select: { name: true, slug: true, icon: true } }
//     },
//     orderBy: { publishedAt: 'desc' },
//     take: 10
//   })
// }

// async function getCategories() {
//   return await prisma.category.findMany({
//     orderBy: { name: 'asc' }
//   })
// }

// export default async function Home() {
//   const [articles, categories] = await Promise.all([
//     getArticles(),
//     getCategories()
//   ])