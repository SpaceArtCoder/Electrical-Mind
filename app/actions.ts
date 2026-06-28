'use server'

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Underdog } from "next/font/google";

/**
 * 
 * Adding an article to the DB
 */
// NEEDED TO ADD IMAGES URL's HERE
export async function addArticleAction(formData: FormData) {
    const titleText = formData.get("title") as string;
    const contentText = formData.get("content") as string;
    const excerptText = formData.get("excerpt") as string || null;

    // Extract the secure Cloudinary URL string from the form
    const coverImageText = formData.get("coverImage") as string || null;

    // Generate a basic URL-safe slug from the title or fallback to timestamp
    const generatedSlug = titleText
      ? titleText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + `-${Date.now()}`
      : `article-${Date.now()}`;


    await prisma.article.create({
          data: {
            title: titleText || "User Article",
            slug: generatedSlug,
            excerpt: excerptText,
            content: contentText,
            coverImage: coverImageText,
            status: "published",
            author: {
              // Uses existing User CUID string
              connect: {id : 'cmka7wrt9000452o3hawfuawr'}
            },
            category: {
              connect: {id : 'cmkcategory_example_id'}
            }
          }
    });

    revalidatePath('/'); // Refresh the data on the page
}

/**
 * Deleting an article from the DB
 */

export async function deleteArticleAction(id: string) {

  await prisma.article.delete({
    where: {id},
  });

  revalidatePath('/'); // Refresh the UI to reflect the deletion
}

/**
 * Editing an existing article in the DB
 */

export async function editArticleAction(id: string, formData: FormData) {
  const contentText = formData.get("content") as string;
  const titleText = formData.get("title") as string;

  const excerptText = formData.get("excerpt") as string;
  const coverImageText = formData.get("coverImage") as string || underfined;

  await prisma.article.update({
    where: {id},
    data: {
      title: titleText || "Updated Title",
      content: contentText,
    },
  });

  revalidatePath('/');
}

export async function getArticlesAction() {
  // Fetch data from the DB

  const articles = await prisma.article.findMany();

  return articles;
}