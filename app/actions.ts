'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * 
 * Adding an article to the DB
 */

export async function addArticleAction(formData: FormData) {
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
    });

    revalidatePath('/'); // Refresh the data on the page
    
}

/**
 * Deleting an article from the DB
 */

export default function deleteArticleAction(id: string) {

  await prisma.article.delete({
    where: {id},
  });

  revalidateParh('/'); // Refresh the UI to reflect the deletion
  
}



/**
 * Editing an existing article in the DB
 */