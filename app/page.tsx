import prisma from '@/lib/prisma'
import styles from './page.module.scss'

export const dynamic = 'force-dynamic'

async function getArticles() {
  return await prisma.article.findMany({
    where: { status: 'published' },
    include: {
      author: { select: { name: true, email: true } },
      category: { select: { name: true, slug: true, icon: true } }
    },
    orderBy: { publishedAt: 'desc' },
    take: 10
  })
}

async function getCategories() {
  return await prisma.category.findMany({
    orderBy: { name: 'asc' }
  })
}

export default async function Home() {
  const [articles, categories] = await Promise.all([
    getArticles(),
    getCategories()
  ])

  return (
      <main className={styles.container}>
        

        {/* Категории */}
        <section className={styles.categoriesSection}>
          
        </section>

       
      </main>
  )
}