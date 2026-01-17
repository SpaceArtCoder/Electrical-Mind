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
        <header className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>⚡</span>
            Electrical Mind
          </h1>
          <p className={styles.subtitle}>
            Портал о высоких технологиях будущего
          </p>
        </header>

        {/* Категории */}
        <section className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>Категории</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
                <div
                    key={category.id}
                    className={styles.categoryCard}
                >
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  {category.description && (
                      <p className={styles.categoryDescription}>
                        {category.description}
                      </p>
                  )}
                </div>
            ))}
          </div>
        </section>

        {/* Статьи */}
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>Последние статьи</h2>
          <div className={styles.articlesList}>
            {articles.map((article) => (
                <article
                    key={article.id}
                    className={styles.articleCard}
                >
                  <div className={styles.articleMeta}>
                    <span className={styles.metaIcon}>{article.category.icon}</span>
                    <span className={styles.metaText}>{article.category.name}</span>
                    <span className={styles.metaSeparator}>•</span>
                    <span className={styles.metaText}>{article.author.name}</span>
                    <span className={styles.metaSeparator}>•</span>
                    <span className={styles.metaText}>
                  {new Date(article.publishedAt!).toLocaleDateString('ru-RU')}
                </span>
                  </div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  {article.excerpt && (
                      <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  )}
                  <div className={styles.articleStats}>
                <span className={styles.viewCount}>
                  👁️ {article.viewCount} просмотров
                </span>
                  </div>
                </article>
            ))}
          </div>
        </section>
      </main>
  )
}