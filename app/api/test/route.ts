// app/api/test/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // Проверка подключения к БД
    await prisma.$queryRaw`SELECT 1`
    
    // Получение статистики
    const userCount = await prisma.user.count()
    const articleCount = await prisma.article.count()
    const categoryCount = await prisma.category.count()
    
    return NextResponse.json({
      status: 'OK',
      database: 'Connected to PostgreSQL',
      stats: {
        users: userCount,
        articles: articleCount,
        categories: categoryCount
      },
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database connection failed:', error)
    return NextResponse.json(
      { 
        status: 'Error', 
        database: 'Connection failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
