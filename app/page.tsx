import CurrentNews from '@/components/CurrentNews/CurrentNews'
import styles from './page.module.scss'

export default function Main() {

  return (
    <main className={styles.main_content}>
      <CurrentNews />
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